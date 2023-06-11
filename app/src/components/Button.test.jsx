import { render } from "@testing-library/react";
import Button from "./Button";
import getButton from "../tests/utils/getButton";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  const message = "message";
  it("has button element", () => {
    render(<Button />);
    expect(getButton("button")).not.toBeNull();
  });
  it("show arg text in button", () => {
    render(<Button message={message} />);
    expect(getButton(message)).not.toBeNull();
  });
  it("set arg function to onclick", async () => {
    const fn = jest.fn();
    render(<Button message={message} clickEvent={fn} />);
    await userEvent.click(getButton(message));
    expect(fn).toBeCalled();
  });
  it("set arg to disabled", () => {
    render(<Button isDisabled={true} />);
    expect(getButton("button").getAttribute("disabled")).not.toBeNull();
  });
});
