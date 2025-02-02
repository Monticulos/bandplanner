import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { Button, ButtonProps } from "./Button.tsx";

const defaultProps: ButtonProps = {
  label: "Ola Nordstoga",
  onClick: vi.fn(),
};

describe("Button", () => {
  it("should display name of band member", () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole("button", { name: defaultProps.label });
    expect(button).toBeInTheDocument();
  });

  it("should call click handler when clicked", async () => {
    const user = userEvent.setup();
    const handleClickMock = vi.fn();
    render(<Button {...defaultProps} onClick={handleClickMock} />);

    const button = screen.getByRole("button", { name: defaultProps.label });
    await user.click(button);

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
