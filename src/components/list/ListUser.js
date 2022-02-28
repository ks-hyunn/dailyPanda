import styles from "./ListUser.module.css";
import ListSearch from "./ListSearch";
import ListHeader from "./ListHeader";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";

const ListUser = () => {
  return (
    <>
      <ListSearch />
      <ListHeader>
        <div className={styles.customerList}>
          <div className={styles.roxhddlf}>개통일자</div>
          <div className={styles.xhdtlstk}>통신사</div>
          <div className={styles.rhroraud}>고객명</div>
          <div className={styles.roxhdqjsgh}>개통번호</div>
          <div className={styles.roxhdwhdfb}>개통종류</div>
          <div className={styles.ahepfaud}>모델명</div>
          <div className={styles.vksaoakwls}>판매마진</div>
          <div className={styles.vksaowlrdnjs}>
            판매직원
            <Link to="/SalesWrite">
              <MdOpenInNew className={styles.changeGreen} />
            </Link>
          </div>
        </div>
        <div className={styles.customerList}>
          <div className={styles.roxhddlf}>개통일자</div>
          <div className={styles.xhdtlstk}>통신사</div>
          <div className={styles.rhroraud}>고객명</div>
          <div className={styles.roxhdqjsgh}>개통번호</div>
          <div className={styles.roxhdwhdfb}>개통종류</div>
          <div className={styles.ahepfaud}>모델명</div>
          <div className={styles.vksaoakwls}>판매마진</div>
          <div className={styles.vksaowlrdnjs}>
            판매직원
            <Link to="/SalesWrite">
              <MdOpenInNew className={styles.changeGreen} />
            </Link>
          </div>
        </div>
      </ListHeader>
    </>
  );
};

export default ListUser;
