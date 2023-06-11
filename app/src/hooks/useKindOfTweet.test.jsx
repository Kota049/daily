import useKindOfTweet from "./useKindOfTweet";
import { act, renderHook } from "@testing-library/react";

describe("useKindOfTweet", () => {
  it("return string and function", () => {
    const { result } = renderHook(useKindOfTweet);
    expect(typeof result.current.kindOfTweet).toBe("string");
    expect(typeof result.current.changeKind).toBe("function");
  });
  it("return tweet as state", () => {
    const { result } = renderHook(useKindOfTweet);
    expect(result.current.kindOfTweet).toBe("tweet");
  });
  it("return function updating state", () => {
    const { result } = renderHook(useKindOfTweet);
    act(() => {
      result.current.changeKind();
    });
    expect(result.current.kindOfTweet).toBe("report");
  });
  it("return updater toggling state", () => {
    const { result } = renderHook(useKindOfTweet);
    act(() => {
      result.current.changeKind();
    });
    expect(result.current.kindOfTweet).toBe("report");
    act(() => {
      result.current.changeKind();
    });
    expect(result.current.kindOfTweet).toBe("tweet");
  });
});
