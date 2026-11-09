import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StrictMode } from "react";
import { beforeEach, test, expect, vi } from "vitest";
import App from "./App";

beforeEach(() => {
  window.history.pushState({}, "", "/coach");
});

test("renders the editorial coaching page with real photography and recorded results", () => {
  render(<App />);
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(
    screen.getByRole("heading", { name: /get stronger. train with purpose/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("img", { name: /tom vo training the deadlift/i }),
  ).toHaveAttribute("fetchpriority", "high");
  expect(
    screen.getByRole("heading", { name: /strength starts where you are/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /exercise science informs the plan. your training tells us how to refine\sit/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /recorded on the platform/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /a coach who cares about the person, too/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getByText(/9 of 9 attempts made/i)).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: /verified meet result/i }),
  ).toHaveLength(3);
  expect(
    screen.getByRole("link", { name: /alvin pov: verified meet result/i }),
  ).toHaveAttribute(
    "href",
    "https://www.openpowerlifting.org/m/uspa/2957#alvinpov",
  );
  expect(document.querySelector("video[autoplay]")).toBeNull();
});

test("missing photos show placeholders in development only", () => {
  const { unmount } = render(<App />);
  expect(document.querySelectorAll("[data-photo-placeholder]")).toHaveLength(2);
  unmount();

  vi.stubEnv("DEV", false);
  try {
    render(<App />);
    expect(document.querySelector("[data-photo-placeholder]")).toBeNull();
    expect(
      screen.getByRole("img", { name: /tom vo smiling outside a café/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /exercise science informs/i }),
    ).not.toHaveClass("has-photo");
  } finally {
    vi.unstubAllEnvs();
  }
});

test("uses one plain wordmark in the header and footer", () => {
  render(<App />);
  const header = screen.getByRole("link", { name: "Tom Vo Strength home" });
  expect(header).toHaveTextContent(/^Tom Vo Strength$/);
  expect(
    document.querySelector(".strength-footer .strength-wordmark"),
  ).toHaveTextContent(/^Tom Vo Strength$/);
});

test("all local navigation links resolve to page sections", () => {
  render(<App />);
  const localLinks = screen
    .getAllByRole("link")
    .filter((link) => link.getAttribute("href")?.startsWith("#"));
  expect(localLinks.length).toBeGreaterThan(5);
  localLinks.forEach((link) => {
    expect(
      document.getElementById(link.getAttribute("href")!.slice(1)),
    ).not.toBeNull();
  });
  expect(
    screen.getByRole("link", { name: /apply for coaching/i }),
  ).toHaveAttribute("href", "#apply");
});

test("mobile navigation can open, close on selection, and dismiss with Escape", async () => {
  const user = userEvent.setup();
  render(<App />);
  const toggle = screen.getByRole("button", { name: "Open navigation" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  await user.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  const nav = screen.getByRole("navigation", { name: "Main navigation" });
  expect(within(nav).getByRole("link", { name: "Coaching" })).toHaveFocus();
  await user.click(within(nav).getByRole("link", { name: "Coaching" }));
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  await user.click(toggle);
  const about = within(nav).getByRole("link", { name: "About" });
  about.focus();
  await user.keyboard("{Escape}");
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(toggle).toHaveFocus();
  await user.click(toggle);
  toggle.focus();
  await user.keyboard("{Escape}");
  expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("presents coaching formats before the approach and retains pricing context", () => {
  render(<App />);
  const services = screen.getByRole("region", {
    name: /strength starts where you are/i,
  });
  expect(within(services).getAllByRole("listitem")).toHaveLength(3);
  expect(
    within(services).getByText(/rates depend on the format/i),
  ).toBeInTheDocument();
  const approach = screen.getByRole("region", {
    name: /exercise science informs the plan/i,
  });
  expect(
    services.compareDocumentPosition(approach) &
      Node.DOCUMENT_POSITION_FOLLOWING,
  ).toBeTruthy();
  expect(
    within(approach).getByText(/reviewed every week/i),
  ).toBeInTheDocument();
  expect(screen.getByRole("main")).toHaveAttribute("tabindex", "-1");
});

test("folds former FAQ answers into the page without numbered section labels", () => {
  render(<App />);
  expect(document.querySelector("details")).toBeNull();
  expect(screen.queryByText(/^0\d \/$/)).toBeNull();
  expect(
    screen.getByText(/not a substitute for medical care/i),
  ).toBeInTheDocument();
  const application = screen.getByRole("region", {
    name: /let’s talk about your training/i,
  });
  expect(
    within(application).getByText(/suggest the simplest next step/i),
  ).toBeInTheDocument();
  expect(
    within(
      screen.getByRole("navigation", { name: "Main navigation" }),
    ).getByRole("link", { name: "Approach" }),
  ).toHaveAttribute("href", "#approach");
});

test("keeps labeled, required application fields and the existing Kwes endpoint", () => {
  render(<App />);
  for (const label of [
    "Name",
    "Email",
    "Phone",
    "What are you working toward?",
    "Tell me where you’re starting",
  ]) {
    expect(screen.getByLabelText(label)).toBeRequired();
  }
  expect(screen.getByLabelText("Email")).toHaveAttribute("type", "email");
  const form = screen
    .getByRole("button", { name: /send coaching request/i })
    .closest("form");
  expect(form).toHaveAttribute(
    "action",
    "https://kwesforms.com/api/foreign/forms/aSVFVwmIio7ugCj6l1gO",
  );
  expect(form).toHaveAttribute("method", "post");
  expect(form?.checkValidity()).toBe(false);
  expect(document.querySelectorAll("#kwesforms-script")).toHaveLength(1);
});

test("initializes the contact integration when its script loads", () => {
  const init = vi.fn();
  const kwesWindow = window as typeof window & {
    kwesforms?: { init: () => void };
  };
  const { unmount } = render(<App />);
  kwesWindow.kwesforms = { init };
  fireEvent.load(document.getElementById("kwesforms-script")!);
  expect(init).toHaveBeenCalledOnce();
  unmount();
  fireEvent.load(document.getElementById("kwesforms-script")!);
  expect(init).toHaveBeenCalledOnce();
  delete kwesWindow.kwesforms;
});

test("reinitializes the current Kwes SDK once per mounted form, including StrictMode", () => {
  const initialize = vi.fn();
  const kwesWindow = window as typeof window & {
    kwesFormsInitialize?: () => void;
  };
  kwesWindow.kwesFormsInitialize = initialize;
  const first = render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  expect(initialize).toHaveBeenCalledOnce();
  first.unmount();
  const second = render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  expect(initialize).toHaveBeenCalledTimes(2);
  second.unmount();
  delete kwesWindow.kwesFormsInitialize;
});

test("does not double-initialize the current SDK when the CDN script auto-starts", () => {
  const initialize = vi.fn();
  const kwesWindow = window as typeof window & {
    kwesFormsInitialize?: () => void;
    kwesforms?: Record<string, unknown>;
  };
  const { unmount } = render(<App />);
  kwesWindow.kwesforms = {};
  kwesWindow.kwesFormsInitialize = initialize;
  fireEvent.load(document.getElementById("kwesforms-script")!);
  expect(initialize).not.toHaveBeenCalled();
  unmount();
  delete kwesWindow.kwesFormsInitialize;
  delete kwesWindow.kwesforms;
});
