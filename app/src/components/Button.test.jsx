import { screen, render, act } from "@testing-library/react";
import Button from "./Button";
import getButton from "../tests/utils/getButton";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("has button element", () => {
    render(<Button />);
    expect(getButton("button")).not.toBeNull();
  });
  it("show arg text in button", () => {
    render(<Button message="message" />);
    expect(getButton("message")).not.toBeNull();
  });
  it("set arg function to onclick", () => {
    const action = jest.fn();
    render(<Button message="message" action={action} />);
    const button = getButton("message");
    act(() => {
      userEvent.click(button);
    });
    expect(action).toHaveBeenCalled();
  });
});
