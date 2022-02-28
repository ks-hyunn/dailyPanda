import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.inputBox}>
      <div className={props.className}>
        <label>
          <span className={styles.redStar}>{props.redStar}</span>
          {props.label}
        </label>
        <input
          onChange={props.onChange}
          onBlur={props.onBlur}
          name={props.label}
          className={props.inputClass}
          disabled={props.disabled}
          {...props.input}
        />
      </div>
    </div>
  );
};

export default Input;
