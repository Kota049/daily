import { memo } from "react";
import Button from "./Button";
import useKindOfTweet from "../hooks/useKindOfTweet";
import useInput from "../hooks/useInput";
const Tweet = () => {
  const { kindOfTweet, changeKind } = useKindOfTweet();
  const { input, setInput } = useInput();
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
      <form
        role="form"
        onSubmit={() => {
          // TODO:あとで書き換える
          alert(input);
        }}
      >
        <textarea
          onChange={(event) => {
            event.preventDefault();
            setInput(event.target.value);
          }}
        ></textarea>
        <button type="submit">投稿</button>
      </form>
    </>
  );
};
export default memo(Tweet);
