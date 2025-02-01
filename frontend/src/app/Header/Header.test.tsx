import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header.tsx";

describe("Header", () => {
  it("renders heading", () => {
    render(<Header />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
