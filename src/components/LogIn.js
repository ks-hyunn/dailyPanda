import styles from "./LogIn.module.css";

const LogIn = () => {
  return (
    <div className={styles.logInBox}>
      <h3>로그인</h3>
      <form>
        <label>아이디</label>
        <input />
        <label>비밀번호</label>
        <input />
        <div className={styles.button}>
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
