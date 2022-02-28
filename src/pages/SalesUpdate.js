import SalesLayout from "../components/layout/SalesLayout";
import UpdateUser from "../components/UpdateUser";
import ContentCard from "../UI/ContentCard";

const SalesUpdate = (props) => {
  return (
    <>
      <SalesLayout
        title={"판매작성"}
        subTitle={"개통하신 정보를 아래의 양식에 맞게 차례대로 입력해주세요. ("}
        star={" * "}
        sub={"는 필수항목 입니다.)"}
      />
      <ContentCard>
        <UpdateUser
          userData={props.userData}
          setDbData={props.setDbData}
          dbData={props.dbData}
        />
      </ContentCard>
    </>
  );
};

export default SalesUpdate;
