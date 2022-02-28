import styles from "./Header.module.css";
import { SiFoodpanda } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { authGet } from "../../firebase";

const Header = (props) => {
  const navigate = useNavigate();

  const auth = authGet();

  const onClick = async () => {
    await auth.signOut();
    await props.setIsLogIn(false);
    navigate("/");
  };

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
        {props.isLogIn ? (
          <>
            <div>{props.userData.displayName}</div>
            <button onClick={onClick} className={styles.navBtn}>
              로그아웃
            </button>
          </>
        ) : (
          <Link to="/log-in">
            <button className={styles.navBtn}>로그인</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
