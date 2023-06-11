import { memo } from "react";
import Button from "./Button";
const Tweet = () => {
  const isDisable = true;
  return (
    <>
      <Button message="ツイート" isDisabled={isDisable} />
      <Button message="釣果投稿" isDisabled={!isDisable} />
    </>
  );
};
export default memo(Tweet);
