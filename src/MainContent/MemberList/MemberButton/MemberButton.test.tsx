import React from "react";
import { MemberButton } from "./MemberButton.tsx";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

const defaultProps = { name: "Ola Nordstoga", onClick: vi.fn() };

describe("MemberButton", () => {
  it("should display name of band member", () => {
    render(<MemberButton {...defaultProps} />);
    const button = screen.getByRole("button", { name: defaultProps.name });
    expect(button).toBeInTheDocument();
  });

  it("should call click handler when clicked", async () => {
    const user = userEvent.setup();
    const handleClickMock = vi.fn();
    render(<MemberButton {...defaultProps} onClick={handleClickMock} />);

    const button = screen.getByRole("button", { name: defaultProps.name });
    await user.click(button);

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
