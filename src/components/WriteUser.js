import styles from "./WriteUser.module.css";
import Input from "../UI/Input";
import Select from "../UI/Select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WriteUser = () => {
  const navigate = useNavigate();
  const nowDate = new Date().toISOString().substring(0, 10);

  const [inputs, setInputs] = useState({
    모델명: "",
    일련번호: "",
    유심번호: "",
    개통일자: nowDate,
    개통번호: "",
    고객명: "",
    생년월일: "",
    통신사: "",
    개통종류: "",
    단말기할부: "",
    유심비: "",
    요금제: "",
    부가서비스: "",
    출고가: "",
    지원선택: "",
    공시지원금: "",
    추가지원금: "",
    현금납부: "",
    할부원금: 0,
    기본정책: "",
    추가정책: "",
    할인금액: "",
    판매마진: 0,
    서류첨부: "",
    메모: "",
    판매직원: "",
    정책번호: "",
  });
  const {
    모델명,
    일련번호,
    유심번호,
    개통일자,
    개통번호,
    고객명,
    생년월일,
    통신사,
    개통종류,
    단말기할부,
    유심비,
    요금제,
    부가서비스,
    출고가,
    지원선택,
    공시지원금,
    추가지원금,
    현금납부,
    할부원금,
    기본정책,
    추가정책,
    할인금액,
    판매마진,
    서류첨부,
    메모,
    판매직원,
    정책번호,
  } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onPriceChange = (e) => {
    const { value, name } = e.target;
    if (지원선택 !== "선택약정") {
      setInputs({
        ...inputs,
        [name]: value,
        할부원금:
          Number(출고가) -
          (Number(공시지원금) + Number(추가지원금) + Number(현금납부)),
      });
    } else {
      setInputs({
        ...inputs,
        [name]: value,
        공시지원금: "",
        추가지원금: "",
        할부원금: Number(출고가) - Number(현금납부),
      });
    }
  };

  const onMarginChange = (e) => {
    const { value, name } = e.target;
    if (유심비 !== "대납") {
      setInputs({
        ...inputs,
        [name]: value,
        판매마진: Number(기본정책) + Number(추가정책) - Number(할인금액),
      });
    } else {
      setInputs({
        ...inputs,
        [name]: value,
        판매마진: Number(기본정책) + Number(추가정책) - Number(할인금액) - 7700,
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/sales-list");
  };

  const onClick = (e) => {
    navigate("/sales-list");
  };

  return (
    <form onSubmit={onSubmit}>
      <section>
        <h4 className={styles.title}>단말기</h4>
        <div className={styles.salesInfo}>
          <Input
            onChange={onChange}
            className={styles.phoneInput}
            redStar="*"
            label="모델명"
            input={{
              placeholder: "단말기 모델명을 입력해주세요.",
              required: true,
              value: 모델명,
            }}
          />
          <Input
            onChange={onChange}
            className={styles.phoneInput}
            redStar="*"
            label="일련번호"
            input={{
              placeholder: "단말기 일련번호를 입력해주세요.",
              required: true,
              value: 일련번호,
            }}
          />
        </div>
      </section>
      <section>
        <h4 className={styles.title}>유심</h4>
        <div className={styles.salesInfo}>
          <Input
            onChange={onChange}
            className={styles.usimInput}
            label="유심번호"
            input={{
              placeholder: "유심 일련번호를 입력해주세요.",
              value: 유심번호,
            }}
          />
        </div>
      </section>
      <section>
        <h4 className={styles.title}>가입정보</h4>
        <div className={styles.salesInfo}>
          <Input
            onChange={onChange}
            redStar="*"
            label="개통일자"
            input={{
              type: "date",
              required: true,
              value: 개통일자,
            }}
          />
          <Input
            onChange={onChange}
            redStar="*"
            label="개통번호"
            input={{
              placeholder: "010-0000-0000",
              required: true,
              type: "tel",
              value: 개통번호,
            }}
          />
          <Input
            onChange={onChange}
            redStar="*"
            label="고객명"
            input={{
              placeholder: "고객명을 입력해 주세요.",
              required: true,
              value: 고객명,
            }}
          />
          <Input
            onChange={onChange}
            redStar="*"
            label="생년월일"
            input={{
              type: "date",
              required: true,
              value: 생년월일,
            }}
          />
          <Select
            onChange={onChange}
            redStar="*"
            label="통신사"
            input={{ required: true, value: 통신사 }}
          >
            <option hidden>-선택-</option>
            <option value="SKT">SKT</option>
            <option value="KTF">KTF</option>
            <option value="LGU">LGU</option>
            <option value="MVNO">MVNO</option>
          </Select>
          <Select
            onChange={onChange}
            redStar="*"
            label="개통종류"
            input={{ required: true, value: 개통종류 }}
          >
            <option hidden>-선택-</option>
            <option value="newNumber">신규</option>
            <option value="agencyChange">번호이동</option>
            <option value="changePhone">기기변경</option>
          </Select>
          <Select
            onChange={onChange}
            label="단말기할부"
            input={{ value: 단말기할부 }}
          >
            <option hidden>-선택-</option>
            <option value="24개월">24개월</option>
            <option value="30개월">30개월</option>
            <option value="36개월">36개월</option>
            <option value="48개월">48개월</option>
            <option value="기타">기타</option>
          </Select>
          <Select
            onBlur={onMarginChange}
            onChange={onMarginChange}
            label="유심비"
            input={{ value: 유심비 }}
          >
            <option hidden>-선택-</option>
            <option value="후납">후납</option>
            <option value="선납">선납</option>
            <option value="대납">대납</option>
            <option value="미구매">미구매</option>
          </Select>
          <Input onChange={onChange} label="요금제" input={{ value: 요금제 }} />
          <Input
            onChange={onChange}
            label="부가서비스"
            input={{ value: 부가서비스 }}
          />
        </div>
      </section>
      <section>
        <h4 className={styles.title}>할부원금</h4>
        <div className={styles.salesInfo}>
          <Input
            onChange={onPriceChange}
            onBlur={onPriceChange}
            inputClass={styles.rightText}
            label="출고가"
            input={{ value: 출고가 }}
          />
          <Select
            onChange={onPriceChange}
            onBlur={onPriceChange}
            value={inputs}
            label="지원선택"
            input={{ value: 지원선택 }}
          >
            <option hidden>-선택-</option>
            <option value="공시지원">공시지원</option>
            <option value="선택약정">선택약정</option>
          </Select>
          {지원선택 !== "선택약정" && (
            <>
              <Input
                onChange={onPriceChange}
                onBlur={onPriceChange}
                label="공시지원금"
                inputClass={styles.rightText}
                input={{ value: 공시지원금 }}
              />
              <Input
                onChange={onPriceChange}
                onBlur={onPriceChange}
                label="추가지원금"
                inputClass={styles.rightText}
                input={{ value: 추가지원금 }}
              />
            </>
          )}

          <Input
            onChange={onPriceChange}
            onBlur={onPriceChange}
            label="현금납부"
            inputClass={styles.rightText}
            input={{ value: 현금납부 }}
          />
          <Input
            onChange={onPriceChange}
            inputClass={styles.rightText}
            className={styles.disabledInput}
            label="할부원금"
            input={{ disabled: true, value: 할부원금 }}
          />
        </div>
      </section>
      <section>
        <h4 className={styles.title}>정산정보</h4>
        <div className={styles.salesInfo}>
          <Input
            onChange={onMarginChange}
            onBlur={onMarginChange}
            label="기본정책"
            inputClass={styles.rightText}
            input={{ value: 기본정책 }}
          />
          <Input
            onChange={onMarginChange}
            onBlur={onMarginChange}
            label="추가정책"
            inputClass={styles.rightText}
            input={{ value: 추가정책 }}
          />
          <Input
            onChange={onMarginChange}
            onBlur={onMarginChange}
            label="할인금액"
            inputClass={styles.rightText}
            input={{ value: 할인금액 }}
          />
          <Input
            onChange={onMarginChange}
            inputClass={styles.rightText}
            className={styles.disabledInput}
            label="판매마진"
            input={{ disabled: true, value: 판매마진 }}
          />
        </div>
      </section>
      <section>
        <h4 className={styles.title}>기타정보</h4>
        <div className={styles.salesInfo}>
          <Input
            onChange={onChange}
            label="서류첨부"
            input={{ type: "file", value: 서류첨부 }}
          />
          <Input onChange={onChange} label="메모" input={{ value: 메모 }} />
          <Input
            onChange={onChange}
            label="판매직원"
            input={{ value: 판매직원 }}
          />
          <Input
            onChange={onChange}
            label="정책번호"
            input={{ value: 정책번호 }}
          />
        </div>
      </section>
      <div className={styles.btnBox}>
        <button
          onClick={onClick}
          type="button"
          name="취소"
          className={styles.btnRed}
        >
          취소
        </button>
        <button name="등록" className={styles.btn}>
          등록합니다
        </button>
      </div>
    </form>
  );
};

export default WriteUser;
