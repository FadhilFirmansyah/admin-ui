import transactions from "../../../data/transaction";
import { useState } from "react";
import Card from "../../Elements/Card";

const CardTransaction = () => {
    const tabs = ["All", "Revenue", "Expense"];
    const [trxs, setTrx] = useState(transactions);
    const [activeTab, setActiveTab] = useState("All");
  
    function handleClick(e){
      const transFiltered = e.target.value != "All" ? transactions.filter(({type}) => type == e.target.value) : transactions;
      setActiveTab(e.target.value);
      setTrx(transFiltered);
    }
  
    const transCard = trxs.map((transaction) => (
      <div key={transaction.id} className="flex justify-between my-6">
        <div className="flex">
          <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
            {transaction.icon}
          </div>
          <div className="ms-4">
            <span className="text-xl font-bold">
              {transaction.transactionName}
            </span>
            <br />
            <span className="text-gray-02">{transaction.shopName}</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xl font-bold text-gray-02">
            ${transaction.amount}
          </span>
          <br />
          <span className="text-gray-02">{transaction.date}</span>
        </div>
      </div>
    ));

    return (
        <Card
          variant="md:col-span-1 md:row-span-2"
          title="Recent Transaction"
          desc={
            <div>
              <div className="mb-4">
                {tabs.map((tab) => (
                  <button key={tab} className={activeTab == tab ? "px-4 font-bold border-b-4 border-primary text-primary": "px-4 font-bold text-gray-01"} value={tab} onClick={handleClick}>{tab}</button>
                ))}
              </div>
              {transCard}
            </div>
          }
        />
    );
}

export default CardTransaction