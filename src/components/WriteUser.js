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
          <Select label="단말기할부">
            <option value="24개월">24개월</option>
            <option value="30개월">30개월</option>
            <option value="36개월">36개월</option>
            <option value="48개월">48개월</option>
            <option value="기타">기타</option>
          </Select>
          <Select label="유심비">
            <option value="후납">후납</option>
            <option value="선납">선납</option>
            <option value="대납">대납</option>
            <option value="미구매">미구매</option>
          </Select>
          <Input label="요금제" />
          <Input label="부가서비스" />
        </div>
      </section>
      <section>
        <h4 className={styles.title}>할부원금</h4>
        <div className={styles.salesInfo}>
          <Input label="출고가" input={{ type: "tel" }} />
          <Select label="지원선택">
            <option value="공시지원">공시지원</option>
            <option value="선택약정">선택약정</option>
          </Select>
          <Input label="공시지원금" input={{ type: "tel" }} />
          <Input label="추가지원금" input={{ type: "tel" }} />
          <Input label="현금납부" input={{ type: "tel" }} />
          <Input
            className={styles.disabledInput}
            label="할부원금"
            input={{ type: "tel", disabled: true }}
          />
        </div>
      </section>
      <section>
        <h4 className={styles.title}>정산정보</h4>
        <div className={styles.salesInfo}>
          <Input label="기본정책" input={{ type: "tel" }} />
          <Input label="추가정책" input={{ type: "tel" }} />
          <Input label="할인금액" input={{ type: "tel" }} />
          <Input
            className={styles.disabledInput}
            label="판매마진"
            input={{ type: "tel" }}
          />
        </div>
      </section>
      <section>
        <h4 className={styles.title}>기타정보</h4>
        <div className={styles.salesInfo}>
          <Input label="서류첨부" input={{ type: "file" }} />
          <Input label="메모" />
          <Input label="판매직원" />
          <Input label="정책번호" />
        </div>
      </section>
      <div className={styles.btnBox}>
        <button className={styles.btnRed}>취소</button>
        <button className={styles.btn}>등록합니다</button>
      </div>
    </form>
  );
};

export default WriteUser;
