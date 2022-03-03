import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { MdOpenInNew } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import styles from "./ListUser.module.css";

import ListSearch from "./ListSearch";
import ListHeader from "./ListHeader";

import { db } from "../../firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";

const ListUser = ({ userData }) => {
  const navigate = useNavigate();
  const [dbData, setDbData] = useState([]);
  const [search, setSearch] = useState({
    통신사: "",
    판매직원: "",
    고객명: "",
    개통번호: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const readDb = await getDocs(collection(db, userData.uid));
      readDb.forEach((doc) => {
        const dataInfo = doc.data();
        setDbData((prev) => {
          return [dataInfo, ...prev];
        });
      });
    };
    fetchData();
  }, []);

  const onClick = async (e) => {
    const storage = getStorage();
    const target = e.target.id;
    if (window.confirm("삭제하시겠습니까?")) {
      await deleteDoc(doc(db, userData.uid, target));
      const deleteRef = ref(storage, `${userData.uid}/${target}`);
      await deleteObject(deleteRef);
      navigate("/sales-list", { replace: true });
    }
  };

  const onSearch = (e) => {
    e.preventDefault();
    setDbData([]);
    dbData.filter((e) => {
      if (
        e.통신사 === search.통신사 &&
        e.판매직원 === search.판매직원 &&
        e.고객명 === search.고객명 &&
        e.개통번호 === search.개통번호
      ) {
        setDbData((prev) => [e, ...prev]);
      }
    });
  };
  return (
    <>
      <ListSearch setSearch={setSearch} search={search} onSearch={onSearch} />
      <ListHeader>
        {dbData.map((data, i) => (
          <form onSubmit={onClick} id={data.작성} key={i}>
            <div className={styles.customerList}>
              <div className={styles.roxhddlf}>{data.개통일자}</div>
              <div className={styles.xhdtlstk}>{data.통신사}</div>
              <div className={styles.rhroraud}>{data.고객명}</div>
              <div className={styles.roxhdqjsgh}>{data.개통번호}</div>
              <div className={styles.roxhdwhdfb}>{data.개통종류}</div>
              <div className={styles.ahepfaud}>{data.모델명}</div>
              <div className={styles.vksaoakwls}>{data.판매마진}</div>
              <div className={styles.vksaowlrdnjs}>{data.판매직원}</div>
              <div className={styles.clickBtn}>
                <Link to={`/sales-update?index=${data.작성}`}>
                  <MdOpenInNew className={styles.update} />/
                </Link>
                <button className={styles.btn}>
                  <AiFillDelete className={styles.delete} />
                </button>
              </div>
            </div>
          </form>
        ))}
      </ListHeader>
    </>
  );
};

export default ListUser;
