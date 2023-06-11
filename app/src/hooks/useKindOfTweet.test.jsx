import useKindOfTweet from "./useKindOfTweet";

it("suit", () => {
  expect(1).toBe(1);
});
describe("useKindOfTweet", () => {
  it("return string and function", () => {
    const [state, updater] = useKindOfTweet();
    expect(typeof state).toBe("string");
    expect(typeof updater).toBe("function");
  });
  it("return tweet as state", () => {
    const [state] = useKindOfTweet();
    expect(state).toBe("tweet");
  });
});
