import styles from "./SalesLayout.module.css";
import { VscRadioTower } from "react-icons/vsc";

const SalesLayout = (props) => {
  return (
    <div className={styles.titleBox}>
      <VscRadioTower className={styles.icon} />
      <div className={styles.title}>
        <h1 className={styles.h1}>{props.title}</h1>
        <span>{props.subTitle}</span>
        <span className={styles.redStar}>{props.star}</span>
        <span>{props.sub}</span>
      </div>
    </div>
  );
};

export default SalesLayout;
