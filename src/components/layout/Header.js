import styles from "./Header.module.css";
import { SiFoodpanda } from "react-icons/si";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.logoBox}>
          <SiFoodpanda className={styles.logo} />
          <div className={styles.logoTitle}>dailyPanda</div>
        </div>
      </Link>
      <div className={styles.navList}>
        <Link to="/sales-list">
          <button className={styles.navBtn}>판매목록</button>
        </Link>
        <Link to="/sales-write">
          <button className={styles.navBtn}>판매작성</button>
        </Link>
      </div>
      <div className={styles.userUi}>
        <div>스마일통신</div>
        <div>로그아웃</div>
      </div>
    </div>
  );
};

export default Header;
