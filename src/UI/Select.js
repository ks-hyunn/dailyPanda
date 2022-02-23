import styles from "./Input.module.css";

const Select = (props) => {
  return (
    <div className={styles.inputBox}>
      <div className={props.className}>
        <label>
          <span className={styles.redStar}>{props.redStar}</span>
          {props.label}
        </label>
        <select {...props.input}>{props.children}</select>
      </div>
    </div>
  );
};

export default Select;
