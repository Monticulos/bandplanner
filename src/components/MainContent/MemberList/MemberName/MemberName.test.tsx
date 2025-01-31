import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { MemberName, MemberNameProps } from "./MemberName.tsx";

const defaultProps: MemberNameProps = {
  name: "Ola Nordstoga",
  onClick: vi.fn(),
  disabled: false,
};

describe("MemberName", () => {
  it("should display name of band member", () => {
    render(<MemberName {...defaultProps} />);
    const button = screen.getByRole("button", { name: defaultProps.name });
    expect(button).toBeInTheDocument();
  });

  it("should call click handler when clicked", async () => {
    const user = userEvent.setup();
    const handleClickMock = vi.fn();
    render(<MemberName {...defaultProps} onClick={handleClickMock} />);

    const button = screen.getByRole("button", { name: defaultProps.name });
    await user.click(button);

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
