import styles from "./Input.module.css";
const Input = ({ type = "text", value, className, placeHolder, onChange }) => {
  const classList = [styles.input, className].join(" ");

  return (
    <input
      onChange={onChange}
      type={type}
      value={value}
      className={classList}
      placeholder={placeHolder}
    />
  );
};
export default Input;
