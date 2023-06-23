import { renderHook } from "@testing-library/react";

describe("suit", () => {
  it("suit", () => {
    expect(1).toBe(1);
  });
  it("return some string", () => {
    const { result } = renderHook(useInput());
    expect(typeof result.current.input).toBe("string");
    expect(typeof result.current.setInput).toBe("function");
  });
});
