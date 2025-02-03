import { MainContent } from "./MainContent.tsx";
import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { participant1 } from "../../mocks/participantsMockData";

describe("MainContent", () => {
  it("should render participant section", async () => {
    render(<MainContent />);

    const loadingTexts = screen.getAllByText("Loading...");
    await waitForElementToBeRemoved(loadingTexts[0]);

    const name = participant1.name;
    const participantButton = screen.getByRole("button", { name });
    expect(participantButton).toBeInTheDocument();
  });
});
