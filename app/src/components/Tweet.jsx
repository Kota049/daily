import { memo } from "react";
import Button from "./Button";
const Tweet = () => {
  return (
    <>
      <Button message="ツイート" />
    </>
  );
};
export default memo(Tweet);
