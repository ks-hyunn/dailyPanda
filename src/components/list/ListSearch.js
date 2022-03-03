import styles from "./ListSearch.module.css";

const ListSearch = ({ search, setSearch, onSearch }) => {
  const onChange = (e) => {
    const { value, name } = e.target;
    setSearch({
      ...search,
      [name]: value.replace(/ /g, ""),
    });
  };

  return (
    <form onSubmit={onSearch} className={styles.searchBox}>
      <select
        required
        value={search.통신사}
        onChange={onChange}
        name="통신사"
        className={styles.input}
      >
        <option value="" hidden>
          통신사
        </option>
        <option value="SKT">SKT</option>
        <option value="KTF">KTF</option>
        <option value="LGU">LGU</option>
        <option value="MVNO">MVNO</option>
      </select>
      <input
        value={search.판매직원}
        name="판매직원"
        onChange={onChange}
        className={styles.input}
        placeholder="판매직원"
        required
      />
      <input
        value={search.고객명}
        name="고객명"
        onChange={onChange}
        className={styles.input}
        placeholder="고객명"
        required
      />
      <input
        value={search.개통번호}
        name="개통번호"
        onChange={onChange}
        className={styles.input}
        placeholder="개통번호"
        required
      />
      <button className={styles.btn}>검색</button>
    </form>
  );
};

export default ListSearch;
