import useKindOfTweet from "./useKindOfTweet";

it("suit", () => {
  expect(1).toBe(1);
});
describe("useKindOfTweet", () => {
  it("return tweet and function", () => {
    const [state, updater] = useKindOfTweet();
    expect(typeof state).toBe("string");
    expect(typeof updater).toBe("function");
  });
});
