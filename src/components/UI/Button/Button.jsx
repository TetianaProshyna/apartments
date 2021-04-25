import styles from "./Button.module.css";
const Button = ({ type = "button", className, children }) => {
  const classes = [styles.button, className].join(" ");
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};
export default Button;
