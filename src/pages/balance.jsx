import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card type="balance" />
        </div>
        <div className="sm:w-1/3">
          <Card type="balance"/>
        </div>
        <div className="sm:w-1/3">
          <Card type="balance"/>
        </div>
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card type="balance"/>
        </div>
        <div className="sm:w-1/3">
          <Card type="balance"/>
        </div>
        <div className="sm:w-1/3">
          <Card type="balance"/>
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default BalancePage;