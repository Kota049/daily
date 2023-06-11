import { useState } from "react";

const useKindOfTweet = () => {
  const [kindOfTweet, setKindOfTweet] = useState(true);
  const updating = () => {
    setKindOfTweet(!kindOfTweet);
  };
  return {
    kindOfTweet: kindOfTweet ? "tweet" : "report",
    setKindOfTweet: updating,
  };
};
export default useKindOfTweet;
