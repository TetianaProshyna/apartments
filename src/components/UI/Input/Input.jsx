import styles from "./Input.module.css";
const Input = ({ type = "text", value, className, placeHolder }) => {
  const classList = [styles.input, className].join(" ");

  return (
    <input
      type={type}
      value={value}
      className={classList}
      placeholder={placeHolder}
    />
  );
};
export default Input;
