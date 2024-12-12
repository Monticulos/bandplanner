import "@testing-library/jest-dom";
import { Main } from "./Main.tsx";
import { render, screen } from "@testing-library/react";
import { it, expect, test } from "vitest";

it("should render", () => {
  render(<Main />);
});
