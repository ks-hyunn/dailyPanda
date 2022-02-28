import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LogIn.module.css";
import { authGet, logInService } from "../../firebase";
import { browserSessionPersistence, setPersistence } from "firebase/auth";

const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const auth = authGet();
    try {
      await setPersistence(auth, browserSessionPersistence);
      await logInService(auth, email, password);
      props.setIsLogIn(true);
      navigate("/sales-list");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.logInBox}>
      <h3>로그인</h3>
      <form onSubmit={onSubmit} className={styles.inputBox}>
        <div className={styles.loginId}>
          <label>이메일</label>
          <input
            onChange={onChange}
            value={email}
            name="email"
            type="email"
            required
          />
        </div>
        <div className={styles.loginPassword}>
          <label>비밀번호</label>
          <input
            onChange={onChange}
            value={password}
            name="password"
            type="password"
            required
            minLength="7"
          />
        </div>
        {error !== null && <p>{error}</p>}
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
