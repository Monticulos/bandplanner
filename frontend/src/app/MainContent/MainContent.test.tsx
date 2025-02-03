import { MainContent } from "./MainContent.tsx";
import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { participant1 } from "../../mocks/participantsMockData";

describe("MainContent", () => {
  it("should render loading for week and participant sections", () => {
    render(<MainContent />);

    const loadingTexts = screen.getAllByText("Loading...");
    expect(loadingTexts[0]).toBeInTheDocument();
    expect(loadingTexts[1]).toBeInTheDocument();
  });
});
