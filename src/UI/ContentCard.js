import styles from "./ContentCard.module.css";

const ContentCard = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default ContentCard;
