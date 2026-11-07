import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, test, expect, vi } from "vitest";
import App from "./App";

beforeEach(() => {
  window.history.pushState({}, "", "/coach");
});

test("renders the editorial coaching page with real photography and recorded results", () => {
  render(<App />);
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(
    screen.getByRole("heading", { name: /strength. for real life/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("img", { name: /tom training the deadlift/i }),
  ).toHaveAttribute("fetchpriority", "high");
  expect(
    screen.getByRole("heading", { name: /serious about training/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /your goals. our work/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /the work shows up/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /a lifter. not a fitness persona/i }),
  ).toBeInTheDocument();
  expect(screen.getByText("9/9")).toBeInTheDocument();
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
  await user.click(within(nav).getByRole("link", { name: "Coaching" }));
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  await user.click(toggle);
  const about = within(nav).getByRole("link", { name: "About" });
  about.focus();
  await user.keyboard("{Escape}");
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(toggle).toHaveFocus();
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
