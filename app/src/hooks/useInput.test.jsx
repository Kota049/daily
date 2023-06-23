import { renderHook } from "@testing-library/react";
import useInput from "./useInput";
import { act } from "react-dom/test-utils";

describe("suit", () => {
  it("return some string", () => {
    const { result } = renderHook(useInput);
    expect(typeof result.current.input).toBe("string");
    expect(typeof result.current.setInput).toBe("function");
  });
  it("setInput update input", () => {
    const { result } = renderHook(useInput);
    act(() => {
      result.current.setInput("a");
    });
    expect(result.current.input).toBe("a");
  });
});
