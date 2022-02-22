import SalesLayout from "../components/layout/SalesLayout";
import ContentCard from "../UI/ContentCard";

const SalesWrite = () => {
  return (
    <>
      <SalesLayout
        title={"판매작성"}
        subTitle={"개통하신 정보를 아래의 양식에 맞게 차례대로 입력해주세요. ("}
        star={" * "}
        sub={"는 필수항목 입니다.)"}
      />
      <ContentCard>asd</ContentCard>
    </>
  );
};

export default SalesWrite;
