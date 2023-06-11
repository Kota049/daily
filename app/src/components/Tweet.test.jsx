import { render, screen } from "@testing-library/react";
import Tweet from "./Tweet";
import getButton from "../tests/utils/getButton";
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
    expect(getButton("ツイート").getAttribute("disabled")).toBeNull();
    expect(getButton("釣果投稿").getAttribute("disabled")).not.toBeNull();
  });
});
