import { screen, render } from "@testing-library/react";
import Button from "./Button";
it("suit", () => {
  expect(1).toBe(1);
});

describe("Button", () => {
  it("has button element", () => {
    render(<Button />);
    expect(screen.getByText("button", { selector: "button" })).not.toBeNull();
  });
});
