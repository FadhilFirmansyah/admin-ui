import { Link } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo"

const Navbar = () => {
  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balance",
      icon: <Icon.Balance />,
      label: "Balance",
    },
    {
      id: "transaction",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Transaction",
    },
    {
      id: "bills",
      link: "/bills",
      icon: <Icon.Bills />,
      label: "Bills",
    },
    {
      id: "expenses",
      link: "/expenses",
      icon: <Icon.Expenses />,
      label: "Expenses",
    },
    {
      id: "goals",
      link: "/goals",
      icon: <Icon.Goals />,
      label: "Goals",
    },
    {
      id: "settings",
      link: "/settings",
      icon: <Icon.Settings />,
      label: "Settings",
    },
  ];

  return (
    <nav className="bg-black text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
      <div>
        <div className="flex justify-center mb-10">
          <Logo variant="text-white text-2xl text-sm sm:text-2xl" />
        </div>
        {menus.map((menu) => (
          <Link to={menu.link}>
            <div className="flex hover:bg-slate-500 hover:text-white px-4 py-3 rounded-md">
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block text-white">{menu.label}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pt-2 sticky-bottom-12">
          <Link to="/login">
	        <div className="flex bg-slate-500 px-4 py-3 rounded-md hover:text-white">
	          <div className="mx-auto sm:mx-0"><Icon.Logout/></div>
	          <div className="ms-3 hidden sm:block text-white">Logout</div>
	        </div>
          </Link>
        <div className="border-b my-10 border-b-special-bg"></div>
        <div className="flex justify-between">
          <div className="mx-auto sm:mx-0 self-center">
            <img src="images/profile.png" />
          </div>
          <div className="hidden sm:block text-white">
            Fadhil
            <br />
            View Profile
          </div>
          <div className="hidden sm:block text-white"><Icon.KebabMenu/></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;