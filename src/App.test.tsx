import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import App from "./App";

vi.mock("react-player", () => ({
  default: () => <div data-testid="react-player" />,
}));

test("renders the strength coaching landing page", () => {
  window.history.pushState({}, "", "/coach");

  render(<App />);

  expect(document.querySelector(".App")).toBeInTheDocument();
  expect(
    screen.getAllByRole("img", { name: /tom vo strength/i }).length,
  ).toBeGreaterThan(0);
  expect(
    screen.getByText(/nasm cpt \| fremont, newark, online/i),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /build the body that performs/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /coaching for lifters who want a better next training decision/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /clear options\. same standard: measurable strength progress/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /performance outcomes need context/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /assess\. build\. execute/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /choose the coaching scope after fit is clear/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /questions serious lifters ask before starting/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /apply for coaching/i,
    }),
  ).toBeInTheDocument();

  expect(screen.getByLabelText("Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Email")).toBeInTheDocument();
  expect(screen.getByLabelText("Phone")).toBeInTheDocument();
  expect(screen.getByLabelText("Primary training goal")).toBeInTheDocument();
  expect(screen.getByLabelText("Training context")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /apply for coaching/i }),
  ).toBeInTheDocument();

  const applicationLinks = screen.getAllByRole("link", {
    name: /apply/i,
  });
  expect(applicationLinks.length).toBeGreaterThan(0);
  applicationLinks.forEach((link) => {
    expect(link).toHaveAttribute("href", "#apply");
  });

  expect(
    screen
      .getAllByRole("link", { name: "Coaching" })
      .some((link) => link.getAttribute("href") === "#coaching"),
  ).toBe(true);
  expect(
    screen
      .getAllByRole("link", { name: "Method" })
      .some((link) => link.getAttribute("href") === "#method"),
  ).toBe(true);

  expect(
    screen.getAllByRole("link", { name: "Profile" }).length,
  ).toBeGreaterThan(0);
  expect(screen.getAllByRole("link", { name: "Meet" }).length).toBeGreaterThan(0);
  expect(screen.queryByText(/sustainable weight-loss/i)).not.toBeInTheDocument();
});
