const Button = ({
  message = "button",
  hoge = () => {},
  isDisabled = false,
}) => {
  return (
    <>
      <button onClick={hoge} disabled={isDisabled}>
        {message}
      </button>
    </>
  );
};
export default Button;
