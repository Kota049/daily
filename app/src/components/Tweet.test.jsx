import { render, screen, within } from "@testing-library/react";
import Tweet from "./Tweet";
import getButton from "../tests/utils/getButton";
import userEvent from "@testing-library/user-event";
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
    // todo:なんかact周りでエラーが出ているっぽい
    await userEvent.click(reportButton);
    expect(tweetButton.getAttribute("disabled")).toBeNull();
    expect(reportButton.getAttribute("disabled")).not.toBeNull();
  });
  describe("form", () => {
    it("has form", () => {
      render(<Tweet />);
      expect(screen.getByRole("form")).not.toBeNull();
    });
    it("has textarea", () => {
      render(<Tweet />);
      expect(
        within(screen.getByRole("form")).getByRole("textbox")
      ).not.toBeNull();
    });
    it("has button", () => {
      render(<Tweet />);
      const button = within(screen.getByRole("form")).getByRole("button");
      expect(button).not.toBeNull();
      expect(button.textContent).toBe("投稿");
    });
    it("button ha submit attribute", () => {
      render(<Tweet />);
      const button = within(screen.getByRole("form")).getByRole("button");
      expect(button.getAttribute("type").toLowerCase()).toBe("submit");
    });
  });
});
