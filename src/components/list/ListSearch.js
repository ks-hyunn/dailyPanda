import styles from "./ListSearch.module.css";

const ListSearch = () => {
  return (
    <div className={styles.searchBox}>
      <select className={styles.input}>
        <option hidden>통신사</option>
        <option value="SKT">SKT</option>
        <option value="KTF">KTF</option>
        <option value="LGU">LGU</option>
        <option value="MVNO">MVNO</option>
      </select>
      <input className={styles.input} placeholder="개통직원" />
      <input className={styles.input} placeholder="단말기 모델명" />
      <input className={styles.input} placeholder="고객명" />
      <input className={styles.input} placeholder="개통번호" />
      <button className={styles.btn}>검색</button>
    </div>
  );
};

export default ListSearch;
