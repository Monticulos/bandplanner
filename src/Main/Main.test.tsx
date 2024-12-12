import "@testing-library/jest-dom";
import { Main } from "./Main.tsx";
import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import React from "react";

it("should render", () => {
  render(<Main />);
  const headings = screen.getAllByRole("heading");
  expect(headings[0]).toBeInTheDocument;
});
