import { MainContent } from "./MainContent.tsx";
import React from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { memberMockData } from "./MemberList/testData/members";

describe("MainContent", () => {
  it("should render member section", () => {
    render(<MainContent />);
    const name = memberMockData[0].name;
    const memberNameButton = screen.getByRole("button", { name });
    expect(memberNameButton).toBeInTheDocument();
  });
});
