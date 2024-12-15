import { Main } from "./Main.tsx";
import React from "react";
import { render, screen } from "@testing-library/react";

it("should render", () => {
  render(<Main />);
  const headings = screen.getAllByRole("heading");
  expect(headings[0]).toBeInTheDocument();
});
