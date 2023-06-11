import { screen, render } from "@testing-library/react";
import Button from "./Button";
import getButton from "../tests/utils/getButton";

describe("Button", () => {
  it("has button element", () => {
    render(<Button />);
    expect(getButton("button")).not.toBeNull();
  });
  it("show arg text in button", () => {
    render(<Button message="message" />);
    expect(getButton("message")).not.toBeNull();
  });
});
