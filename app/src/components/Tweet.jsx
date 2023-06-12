import { memo } from "react";
import Button from "./Button";
import useKindOfTweet from "../hooks/useKindOfTweet";
const Tweet = () => {
  const { kindOfTweet, changeKind } = useKindOfTweet();
  return (
    <>
      <Button
        message="ツイート"
        isDisabled={"tweet" === kindOfTweet}
        clickEvent={changeKind}
      />
      <Button
        message="釣果投稿"
        isDisabled={"report" === kindOfTweet}
        clickEvent={changeKind}
      />
      <form role="form">
        <textarea></textarea>
      </form>
    </>
  );
};
export default memo(Tweet);
