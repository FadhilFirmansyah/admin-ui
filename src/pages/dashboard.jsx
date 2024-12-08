import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragments/Dashboard/CardBalance";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardExpensesBreakdown from "../components/Fragments/Dashboard/CardExpensesBreakdown";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <CardBalance/>
        <Card title="Goals"/>
        <CardBill/>
        <CardTransaction/>
        <Card variant="md:col-span-2" title="Statistics" />
        <CardExpensesBreakdown/>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;