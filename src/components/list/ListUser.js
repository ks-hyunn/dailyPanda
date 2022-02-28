import { useEffect, useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import styles from "./ListUser.module.css";
import ListSearch from "./ListSearch";
import ListHeader from "./ListHeader";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const ListUser = (props) => {
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const readDb = await getDocs(collection(db, props.userData.uid));
      readDb.forEach((doc) => {
        const dataInfo = doc.data();
        setDbData((prev) => {
          return [...prev, dataInfo];
        });
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <ListSearch />
      <ListHeader>
        {dbData.map((data, i) => (
          <div key={i} className={styles.customerList}>
            <div className={styles.roxhddlf}>{data.개통일자}</div>
            <div className={styles.xhdtlstk}>{data.통신사}</div>
            <div className={styles.rhroraud}>{data.고객명}</div>
            <div className={styles.roxhdqjsgh}>{data.개통번호}</div>
            <div className={styles.roxhdwhdfb}>{data.개통종류}</div>
            <div className={styles.ahepfaud}>{data.모델명}</div>
            <div className={styles.vksaoakwls}>{data.판매마진}</div>
            <div className={styles.vksaowlrdnjs}>
              {data.판매직원}
              <Link to={`/sales-update?index=${i}`}>
                <MdOpenInNew className={styles.changeGreen} />
              </Link>
            </div>
          </div>
        ))}
      </ListHeader>
    </>
  );
};

export default ListUser;
