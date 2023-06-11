import { memo } from "react";
import Button from "./Button";
const Tweet = () => {
  return (
    <>
      <Button message="ツイート" isDisabled={false} />
      <Button message="釣果投稿" isDisabled={true} />
    </>
  );
};
export default memo(Tweet);
