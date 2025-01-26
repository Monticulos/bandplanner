import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer.tsx";

describe("Footer", () => {
  it("renders footer text", () => {
    render(<Footer />);
    const footerText = screen.getByText("Band practice planner");
    expect(footerText).toBeInTheDocument();
  });
});
