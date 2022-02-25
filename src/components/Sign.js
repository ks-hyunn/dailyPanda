import { Link } from "react-router-dom";
import styles from "./Sign.module.css";

const Sign = () => {
  return (
    <div className={styles.signBox}>
      <h3>회원가입</h3>
      <form className={styles.inputBox}>
        <div className={styles.signId}>
          <label>아이디</label>
          <input />
        </div>
        <div className={styles.signPassword}>
          <label>비밀번호</label>
          <input />
        </div>
        <div className={styles.signStore}>
          <label>매장명</label>
          <input />
        </div>
        <div>
          <Link to="/">
            <button className={styles.redBtn}>취소</button>
          </Link>
          <button className={styles.btn}>회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default Sign;
