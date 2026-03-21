import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import App from "./App";

vi.mock("react-player", () => ({
  default: () => <div data-testid="react-player" />,
}));

test("renders the refined coach page", () => {
  window.history.pushState({}, "", "/coach");

  render(<App />);

  expect(document.querySelector(".App")).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /build measurable strength with coaching that fits real life/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /simple coaching packages with clear progression/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /questions clients ask before starting/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /book your free consultation/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getByLabelText("Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Email")).toBeInTheDocument();
  expect(screen.getByLabelText("Phone")).toBeInTheDocument();
  expect(screen.getByLabelText("Training Goal")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /book free consultation/i }),
  ).toBeInTheDocument();

  const consultationLinks = screen.getAllByRole("link", {
    name: /book free consultation/i,
  });
  expect(consultationLinks.length).toBeGreaterThan(0);
  consultationLinks.forEach((link) => {
    expect(link).toHaveAttribute("href", "#consultation");
  });

  expect(
    screen.getAllByRole("link", { name: "Profile" }).length,
  ).toBeGreaterThan(0);
  expect(screen.getAllByRole("link", { name: "Meet" }).length).toBeGreaterThan(0);
  expect(
    screen.queryByText(/ready to train with a structured plan and measurable progress/i),
  ).not.toBeInTheDocument();
});
