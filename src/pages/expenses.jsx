import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const ExpensesPage = () => {
  return (
    <MainLayout type="expenses">
      
      {/* top content start*/}
      <div className="text-lg text-gray-500">Expenses Comparison</div>
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-full">
          <Card type="expenses" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate rerum veniam totam temporibus vero quos nemo repellendus" />
        </div>
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      
      <div className="text-lg text-gray-500">Expenses Breakdown</div>
      <div className="mb-1 sm:flex sm:gap-3">
        <div className="sm:w-1/3">
          <Card type="expenses" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate rerum veniam totam temporibus vero quos nemo repellendus"/>
        </div>
        <div className="sm:w-1/3">
          <Card type="expenses" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate rerum veniam totam temporibus vero quos nemo repellendus"/>
        </div>
        <div className="sm:w-1/3">
          <Card type="expenses" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate rerum veniam totam temporibus vero quos nemo repellendus"/>
        </div>
      </div>

      <div className="mb-1 sm:flex sm:gap-3">
        <div className="sm:w-1/3">
          <Card type="expenses" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate rerum veniam totam temporibus vero quos nemo repellendus"/>
        </div>
        <div className="sm:w-1/3">
          <Card type="expenses" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate rerum veniam totam temporibus vero quos nemo repellendus"/>
        </div>
        <div className="sm:w-1/3">
          <Card type="expenses" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate rerum veniam totam temporibus vero quos nemo repellendus"/>
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default ExpensesPage;