import styles from "./Input.module.css";
const Input = ({
  name,
  type = "text",
  value,
  className,
  placeholder,
  min,
  max,
  onChange,
  required,
}) => {
  const classList = [styles.input, className].join(" ");

  return (
    <input
      name={name}
      onChange={onChange}
      type={type}
      value={value}
      className={classList}
      placeholder={placeholder}
      min={min}
      max={max}
      required={required}
    />
  );
};
export default Input;
