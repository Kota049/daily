import { screen, render } from "@testing-library/react";
import Button from "./Button";
import { findRenderedComponentWithType } from "react-dom/test-utils";

describe("Button", () => {
  it("has button element", () => {
    render(<Button />);
    expect(screen.getByText("button", { selector: "button" })).not.toBeNull();
  });
  it("show arg text in button", () => {
    render(<Button message="message" />);
    expect(screen.getByText("message", { selector: "button" })).not.toBeNull();
  });
});
