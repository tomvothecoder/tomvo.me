// Optional browser tooling is installed outside the app; see homepage-redesign.md.
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { chromium } = require(path.join(process.env.QA_TOOLS, "playwright"));
const { default: AxeBuilder } = require(
  path.join(process.env.QA_TOOLS, "@axe-core/playwright"),
);

const baseURL = process.env.QA_URL || "http://127.0.0.1:5173";
const output = process.env.QA_OUTPUT || "design/qa";

function getDesignStyles() {
  return Object.fromEntries(
    [
      "h1",
      ".strength-wordmark",
      ".strength-nav-links a",
      ".strength-nav-apply",
      ".strength-hero .strength-button",
      ".strength-result-total strong",
    ].map((selector) => {
      const style = getComputedStyle(document.querySelector(selector));
      return [
        selector,
        Object.fromEntries(
          [
            "fontFamily",
            "fontSize",
            "fontWeight",
            "lineHeight",
            "color",
            "backgroundColor",
            "boxShadow",
            "marginLeft",
          ].map((property) => [property, style[property]]),
        ),
      ];
    }),
  );
}

async function run() {
  await fs.mkdir(output, { recursive: true });
  const browser = await chromium.launch();
  const report = [];
  try {
    for (const width of [1440, 768, 375, 320, 1024]) {
      const context = await browser.newContext({
        viewport: { width, height: 1000 },
      });
      const page = await context.newPage();
      const errors = [];
      const blockedKwesRequests = [];
      page.on("pageerror", (error) =>
        errors.push(error.stack || error.message),
      );
      // The SDK also POSTs configuration to /favicon. Block all API writes,
      // including domain registration/config sync, not just actual submissions.
      await page.route("https://kwesforms.com/api/**", (route) => {
        if (route.request().method() === "GET") return route.continue();
        blockedKwesRequests.push(route.request().url());
        return route.abort();
      });
      await page.goto(baseURL, { waitUntil: "networkidle" });
      assert.equal(new URL(page.url()).pathname, "/coach");
      await page.evaluate(() => document.fonts.ready);
      for (const image of await page.locator("main img").all()) {
        await image.scrollIntoViewIfNeeded();
        await image.evaluate((node) => node.decode());
      }
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
      const layout = await page.evaluate(() => ({
        width: innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        h1Count: document.querySelectorAll("h1").length,
        headingFont: getComputedStyle(document.querySelector("h1")).fontFamily,
        bodyFont: getComputedStyle(document.querySelector("main")).fontFamily,
        localFontsLoaded:
          document.fonts.check('700 40px "Manrope"') &&
          document.fonts.check('400 16px "Inter"'),
        brokenImages: [...document.querySelectorAll("main img")].filter(
          (img) => !img.naturalWidth,
        ).length,
        brokenAnchors: [...document.querySelectorAll('a[href^="#"]')].filter(
          (a) => !document.getElementById(a.hash.slice(1)),
        ).length,
      }));
      assert.equal(
        layout.scrollWidth,
        width,
        `Horizontal overflow at ${width}px`,
      );
      assert.equal(layout.h1Count, 1);
      assert.equal(layout.brokenImages, 0);
      assert.equal(layout.brokenAnchors, 0);
      assert.ok(layout.localFontsLoaded);
      const designStyles = await page.evaluate(getDesignStyles);
      if ([1440, 768, 375].includes(width)) {
        await page.screenshot({
          path: `${output}/homepage-${width}.png`,
          fullPage: true,
        });
        await page.screenshot({ path: `${output}/hero-${width}.png` });
        await page.locator("#apply").screenshot({
          path: `${output}/application-${width}.png`,
          // Prevent the sticky header being composited across a tall element capture.
          style: ".strength-header { visibility: hidden !important; }",
        });
      }
      await page.emulateMedia({ reducedMotion: "reduce" });
      assert.equal(
        await page.evaluate(
          () => getComputedStyle(document.documentElement).scrollBehavior,
        ),
        "auto",
      );
      const accessibility = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze();
      assert.deepEqual(
        accessibility.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
        [],
      );
      await page.goto(`${baseURL}/coach`, { waitUntil: "networkidle" });
      await page.keyboard.press("Tab");
      assert.equal(await page.locator(":focus").innerText(), "Skip to content");
      await page.keyboard.press("Enter");
      assert.equal(
        await page.locator(":focus").getAttribute("id"),
        "main-content",
      );
      if (width < 1024) {
        const toggle = page.locator("#coach-menu-toggle");
        await toggle.focus();
        await page.keyboard.press("Enter");
        assert.equal(await toggle.getAttribute("aria-expanded"), "true");
        assert.equal(await page.locator(":focus").innerText(), "Coaching");
        const menuAccessibility = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze();
        assert.deepEqual(menuAccessibility.violations, []);
        if (width === 375)
          await page.screenshot({ path: `${output}/navigation-375.png` });
        await page.keyboard.press("Escape");
        assert.equal(await toggle.getAttribute("aria-expanded"), "false");
        assert.equal(
          await page.locator(":focus").getAttribute("id"),
          "coach-menu-toggle",
        );
        await toggle.click();
        await page
          .getByRole("navigation", { name: "Main navigation" })
          .getByRole("link", { name: "Coaching", exact: true })
          .click();
        assert.equal(await toggle.getAttribute("aria-expanded"), "false");
        assert.equal(new URL(page.url()).hash, "#coaching");
      }
      await page
        .getByRole("link", { name: "Apply for coaching", exact: true })
        .click();
      assert.equal(new URL(page.url()).hash, "#apply");
      assert.ok(
        await page
          .locator("#apply")
          .evaluate((node) => node.getBoundingClientRect().top >= 80),
      );
      const form = page.locator("form");
      assert.equal(
        await form.getAttribute("action"),
        "https://kwesforms.com/api/foreign/forms/aSVFVwmIio7ugCj6l1gO",
      );
      assert.equal(await form.evaluate((node) => node.checkValidity()), false);
      await page.getByLabel("Name", { exact: true }).fill("QA example");
      await page.getByLabel("Email", { exact: true }).fill("invalid-email");
      await page.getByLabel("Phone", { exact: true }).fill("5555555555");
      await page
        .getByLabel("What are you working toward?")
        .fill("Build strength");
      await page
        .getByLabel("Tell me where you’re starting")
        .fill("A local QA example, not submitted.");
      assert.equal(await form.evaluate((node) => node.checkValidity()), false);
      await page.getByLabel("Email", { exact: true }).fill("qa@example.com");
      assert.equal(await form.evaluate((node) => node.checkValidity()), true);
      await page
        .getByRole("navigation", { name: "Footer navigation" })
        .getByRole("link", { name: "Career" })
        .click();
      await page.waitForURL("**/career");
      await page.locator("#career").waitFor();
      await page.getByRole("link", { name: "Coaching", exact: true }).click();
      await page.waitForURL("**/coach");
      await page.locator("main.strength-site").waitFor();
      await page.evaluate(() => document.fonts.ready);
      assert.deepEqual(
        await page.evaluate(getDesignStyles),
        designStyles,
        "Career styles must not leak into coaching after a route round-trip",
      );
      await page.waitForFunction(() =>
        Object.values(window.kwesApp?.forms || {}).some(
          (form) => form.el === document.querySelector(".kwes-form"),
        ),
      );
      assert.equal(await page.locator("h1").count(), 1);
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth),
        width,
      );
      const returnedAccessibility = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze();
      assert.deepEqual(returnedAccessibility.violations, []);
      if (width === 1440) {
        await page.evaluate(() =>
          window.scrollTo({ top: 0, behavior: "instant" }),
        );
        await page.screenshot({ path: `${output}/hero-after-career-1440.png` });
      }
      // Its config error handler assumes response.data even on an intentionally
      // aborted request. Preserve that evidence separately from application errors.
      const blockedSync = blockedKwesRequests.some((url) =>
        url.endsWith("/favicon"),
      );
      const expectedSdkErrors = errors.filter(
        (error) =>
          blockedSync &&
          error.includes("https://kwesforms.com/") &&
          error.includes(
            "Cannot read properties of undefined (reading 'data')",
          ),
      );
      const unexpectedErrors = errors.filter(
        (error) => !expectedSdkErrors.includes(error),
      );
      assert.deepEqual(unexpectedErrors, []);
      assert.ok(
        blockedKwesRequests.every((url) => url.endsWith("/favicon")),
        "No application submission should be attempted",
      );
      report.push({
        width,
        layout,
        axeViolations: 0,
        keyboardNavigation: "passed",
        formValidation: "passed (not submitted)",
        routes: "passed",
        applicationErrors: unexpectedErrors,
        blockedKwesRequests,
        expectedSdkErrors,
      });
      console.log(
        `PASS ${width}px: layout, accessibility, keyboard, form validation, routes`,
      );
      await context.close();
    }
    await fs.writeFile(
      `${output}/report.json`,
      JSON.stringify(report, null, 2),
    );
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
