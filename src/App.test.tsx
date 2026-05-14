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
    screen.getByRole("heading", {
      name: /tom vo strength coaching/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /coaching for gym clients who want better training/i,
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
      name: /stronger lifting comes from better decisions repeated/i,
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
    screen.getAllByRole("link", { name: "Profile" }).length,
  ).toBeGreaterThan(0);
  expect(screen.getAllByRole("link", { name: "Meet" }).length).toBeGreaterThan(0);
  expect(screen.queryByText(/sustainable weight-loss/i)).not.toBeInTheDocument();
});
