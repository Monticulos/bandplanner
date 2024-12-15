import { MainContent } from "./MainContent.tsx";
import React from "react";
import { render, screen } from "@testing-library/react";

it("should render", () => {
  render(<MainContent />);
  const headings = screen.getAllByRole("heading");
  expect(headings[0]).toBeInTheDocument();
});
