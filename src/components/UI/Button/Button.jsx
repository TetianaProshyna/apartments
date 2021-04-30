import styles from "./Button.module.css";
const Button = ({
  onClick,
  type = "button",
  className,
  children,
  ...restProps
}) => {
  const classes = [styles.button, className].join(" ");
  return (
    <button {...restProps} onClick={onClick} type={type} className={classes}>
      {children}
    </button>
  );
};
export default Button;
