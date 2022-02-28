import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Sign.module.css";
import { authGet, authService } from "../../firebase";
import { updateProfile } from "firebase/auth";

const Sign = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [store, setStore] = useState("");
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
    } else if (name === "store") {
      setStore(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const auth = authGet();
    try {
      await authService(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: store,
      });
      props.setIsLogIn(true);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.signBox}>
      <h3>회원가입</h3>
      <form onSubmit={onSubmit} className={styles.inputBox}>
        <div className={styles.signId}>
          <label>이메일</label>
          <input
            onChange={onChange}
            value={email}
            name="email"
            type="email"
            required
          />
        </div>
        <div className={styles.signPassword}>
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
        <div className={styles.signStore}>
          <label>매장명</label>
          <input onChange={onChange} value={store} name="store" required />
        </div>
        {error && <p>{error}</p>}
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
