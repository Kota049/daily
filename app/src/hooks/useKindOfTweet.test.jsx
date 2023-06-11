import useKindOfTweet from "./useKindOfTweet";
import { act, renderHook } from "@testing-library/react";

it("suit", () => {
  expect(1).toBe(1);
});
describe("useKindOfTweet", () => {
  it("return string and function", () => {
    const { result } = renderHook(useKindOfTweet);
    expect(typeof result.current[0]).toBe("string");
    expect(typeof result.current[1]).toBe("function");
  });
  it("return tweet as state", () => {
    const { result } = renderHook(useKindOfTweet);
    expect(result.current[0]).toBe("tweet");
  });
  it("return function updating state", () => {
    const { result } = renderHook(useKindOfTweet);
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe("report");
  });
});
