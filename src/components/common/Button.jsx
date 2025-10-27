import styles from "./Button.module.css";
import buttonDecoImg from "../../asset/button-deco.svg";

function Button({
  className = "",
  variant = "primary",
  buttonDeco = false,
  children,
  ...props
}) {
  const classNames = `${styles.button} ${styles[variant]} ${className}`;

  return (
    <button className={classNames} {...props}>
      <div className={styles.buttonLayout}>
        {buttonDeco && (
          <img className={styles.buttonDeco} src={buttonDecoImg}></img>
        )}
        {children}
      </div>
    </button>
  );
}

export default Button;
