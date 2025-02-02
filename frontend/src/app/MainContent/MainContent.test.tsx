import { MainContent } from "./MainContent.tsx";
import React from "react";
import { render, screen } from "@testing-library/react";
import { participant1 } from "./ParticipantList/testData/participantsMockData";

describe("MainContent", () => {
  it("should render participant section", () => {
    render(<MainContent />);
    const name = participant1.name;
    const participantButton = screen.getByRole("button", { name });
    expect(participantButton).toBeInTheDocument();
  });
});
