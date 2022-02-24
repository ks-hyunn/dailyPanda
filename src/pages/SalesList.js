import SalesLayout from "../components/layout/SalesLayout";
import ListSearch from "../components/ListSearch";
import ContentCard from "../UI/ContentCard";

const SalesList = () => {
  return (
    <>
      <SalesLayout
        title={"판매목록"}
        subTitle={"작성하신 모든 판매목록을 관리하실 수 있습니다."}
      />
      <ContentCard>
        <ListSearch />
      </ContentCard>
    </>
  );
};

export default SalesList;
