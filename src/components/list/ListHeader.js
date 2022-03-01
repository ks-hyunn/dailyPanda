import styles from "./ListHeader.module.css";

const ListHeader = (props) => {
  return (
    <div className={styles.listCard}>
      <div className={styles.head}>
        <div className={styles.roxhddlf}>개통일</div>
        <div className={styles.xhdtlstk}>통신사</div>
        <div className={styles.rhroraud}>고객명</div>
        <div className={styles.roxhdqjsgh}>개통번호</div>
        <div className={styles.roxhdwhdfb}>개통종류</div>
        <div className={styles.ahepfaud}>모델명</div>
        <div className={styles.vksaoakwlsHead}>판매마진</div>
        <div className={styles.vksaowlrdnjs}>판매직원</div>
        <div className={styles.btn}>수정/삭제</div>
      </div>
      {props.children}
    </div>
  );
};

export default ListHeader;
