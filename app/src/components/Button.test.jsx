import { render } from "@testing-library/react";
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
  it("set arg function to onclick", async () => {
    const fn = jest.fn();
    render(<Button message="message" hoge={fn} />);
    const button = getButton("message");
    await userEvent.click(button);
    expect(fn).toBeCalled();
  });
});
