import { memo } from "react";
import Button from "./Button";
const Tweet = () => {
  return (
    <>
      <Button message="ツイート" />
      <Button message="釣果投稿" />
    </>
  );
};
export default memo(Tweet);
