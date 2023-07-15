import { renderHook } from "@testing-library/react";
import useRegisterArticle from "./useRegisterArticle";

describe("useRegisterArticle", () => {
  it("return ok", () => {
    const { result } = renderHook(useRegisterArticle);
    expect(result.current).toBe("ok");
  });
});
