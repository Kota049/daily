import { memo } from "react";

const Button = ({
  message = "button",
  clickEvent = () => {},
  isDisabled = false,
}) => {
  return (
    <>
      <button onClick={clickEvent} disabled={isDisabled}>
        {message}
      </button>
    </>
  );
};
export default memo(Button);
