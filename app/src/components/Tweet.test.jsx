import { render, screen } from "@testing-library/react";
import Tweet from "./Tweet";
import getButton from "../tests/utils/getButton";
it("suit", () => {
  expect(1).toBe(1);
});
describe("tweet button", () => {
  it("has ツイートbutton", () => {
    render(<Tweet />);
    expect(getButton("ツイート")).not.toBeNull();
  });
});
