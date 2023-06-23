import { useState } from "react";

const useInput = () => {
  const [input, setInput] = useState("");
  return { input: input, setInput: setInput };
};
export default useInput;
