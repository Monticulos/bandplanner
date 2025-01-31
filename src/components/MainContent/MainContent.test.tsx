import { MainContent } from "./MainContent.tsx";
import React from "react";
import { render, screen } from "@testing-library/react";

it("should render", () => {
  render(<MainContent />);
  const memberName = screen.getByText("John Doe");
  expect(memberName).toBeInTheDocument();
});
