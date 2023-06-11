const Button = ({ message = "button", hoge = () => {} }) => {
  return (
    <>
      <button onClick={hoge}>{message}</button>
    </>
  );
};
export default Button;
