import { render, screen } from "@testing-library/react";
import Tweet from "./Tweet";
import getButton from "../tests/utils/getButton";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
it("suit", () => {
  expect(1).toBe(1);
});
describe("tweet and report buttons", () => {
  it("has ツイートbutton", () => {
    render(<Tweet />);
    expect(getButton("ツイート")).not.toBeNull();
  });
  it("has 釣果投稿 button", () => {
    render(<Tweet />);
    expect(getButton("釣果投稿")).not.toBeNull();
  });
  it("report button is disabled and tweet button is enabled", () => {
    render(<Tweet />);
    expect(getButton("ツイート").getAttribute("disabled")).not.toBeNull();
    expect(getButton("釣果投稿").getAttribute("disabled")).toBeNull();
  });
  it("if report button clicked ,enable button is changed", async () => {
    render(<Tweet />);
    const reportButton = getButton("釣果投稿");
    const tweetButton = getButton("ツイート");
    await userEvent.click(reportButton);
    expect(tweetButton.getAttribute("disabled")).toBeNull();
    expect(reportButton.getAttribute("disabled")).not.toBeNull();
  });
  describe("form", () => {
    it("has form", () => {
      render(<Tweet />);
      expect(screen.getByRole("form")).not.toBeNull();
    });
  });
});
