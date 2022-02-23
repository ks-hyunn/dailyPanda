import styles from "./WriteUser.module.css";
import Input from "../UI/Input";
import Select from "../UI/Select";

const WriteUser = () => {
  return (
    <form>
      <div className={styles.phoneUsim}>
        <section className={styles.phoneBox}>
          <h4 className={styles.title}>단말기</h4>
          <div className={styles.phone}>
            <Input
              className={styles.phoneInput}
              redStar="*"
              label="일련번호"
              input={{
                placeholder: "단말기 일련번호를 입력해주세요.",
                required: true,
              }}
            />
          </div>
        </section>
        <section className={styles.usimBox}>
          <h4 className={styles.title}>유심</h4>
          <div className={styles.usim}>
            <Input
              className={styles.usimInput}
              label="일련번호"
              input={{ placeholder: "유심 일련번호를 입력해주세요." }}
            />
          </div>
        </section>
      </div>
      <section>
        <h4 className={styles.title}>가입정보</h4>
        <div className={styles.salesInfo}>
          <Input
            redStar="*"
            label="개통일자"
            input={{
              type: "date",
              required: true,
            }}
          />
          <Input
            redStar="*"
            label="개통번호"
            input={{
              placeholder: "010-0000-0000",
              required: true,
              type: "tel",
            }}
          />
          <Input
            redStar="*"
            label="고객명"
            input={{
              placeholder: "고객명을 입력해 주세요.",
              required: true,
            }}
          />
          <Input
            redStar="*"
            label="생년월일"
            input={{
              type: "date",
              required: true,
            }}
          />
          <Select redStar="*" label="통신사" input={{ required: true }}>
            <option hidden>-선택-</option>
            <option value="SKT">SKT</option>
            <option value="KTF">KTF</option>
            <option value="LGU">LGU</option>
            <option value="MVNO">MVNO</option>
          </Select>
          <Select redStar="*" label="개통종류" input={{ required: true }}>
            <option hidden>-선택-</option>
            <option value="newNumber">신규</option>
            <option value="agencyChange">번호이동</option>
            <option value="changePhone">기기변경</option>
          </Select>
        </div>
      </section>
    </form>
  );
};

export default WriteUser;
