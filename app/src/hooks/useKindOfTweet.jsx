import { useState } from "react";

const useKindOfTweet = () => {
  const [kindOfTweet, setKindOfTweet] = useState("tweet");
  const updating = () => {
    setKindOfTweet("report");
  };
  return { kindOfTweet: kindOfTweet, setKindOfTweet: updating };
};
export default useKindOfTweet;
