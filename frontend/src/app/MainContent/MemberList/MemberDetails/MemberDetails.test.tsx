import React from "react";
import { MemberDetails } from "./MemberDetails.tsx";
import { render, screen } from "@testing-library/react";
import { member1 } from "../testData/members.tsx";
import { vi } from "vitest";
import { weekdays } from "../../../../constants/constants.ts";
import userEvent from "@testing-library/user-event";
import { StringUtils } from "../../../../utils/StringUtils.ts";

const defaultProps = {
  member: member1,
  onSubmit: vi.fn(),
  onCancel: vi.fn(),
};

describe("MemberDetails", () => {
  it("should render label for every day of the week", () => {
    render(<MemberDetails {...defaultProps} />);

    weekdays.forEach((weekday) => {
      const weekdayLabelText = StringUtils.toFirstUpper(weekday);
      const weekdayLabel = screen.getByLabelText(weekdayLabelText);
      expect(weekdayLabel).toBeInTheDocument();
    });
  });

  it("should call onSubmit when pressing submit button", async () => {
    const user = userEvent.setup();
    const handleSubmitMock = vi.fn((e) => e.preventDefault());
    render(<MemberDetails {...defaultProps} onSubmit={handleSubmitMock} />);

    const submitButton = screen.getByRole("button", { name: "Submit" });
    await user.click(submitButton);

    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  });

  it("should call onCancel when pressing cancel button", async () => {
    const user = userEvent.setup();
    const handleCancelMock = vi.fn();
    render(<MemberDetails {...defaultProps} onCancel={handleCancelMock} />);

    const submitButton = screen.getByRole("button", { name: "Cancel" });
    await user.click(submitButton);

    expect(handleCancelMock).toHaveBeenCalledTimes(1);
  });
});
