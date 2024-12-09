import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragments/Dashboard/CardBalance";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardExpensesBreakdown from "../components/Fragments/Dashboard/CardExpensesBreakdown";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction";
import CardGoals from "../components/Fragments/Dashboard/CardGoals";
import CardStatistics from "../components/Fragments/Dashboard/CardStatistics";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <CardBalance/>
        <CardGoals/>
        <CardBill/>
        <CardTransaction/>
        <CardStatistics/>
        <CardExpensesBreakdown/>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;