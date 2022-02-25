import { Link } from "react-router-dom";
import styles from "./LogIn.module.css";

const LogIn = () => {
  return (
    <div className={styles.logInBox}>
      <h3>로그인</h3>
      <form className={styles.inputBox}>
        <div className={styles.loginId}>
          <label>아이디</label>
          <input required minLength="7" />
        </div>
        <div className={styles.loginPassword}>
          <label>비밀번호</label>
          <input required type="password" minLength="7" />
        </div>
        <div className={styles.button}>
          <button>로그인</button>
          <Link to="/sign-up">
            <button>회원가입</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
