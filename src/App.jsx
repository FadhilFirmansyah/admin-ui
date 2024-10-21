import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import ForgetPasswordPage from "./pages/forgetpassword";
import ErrorRoute from "./pages/errorRoute";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignInPage/>,
    },
    {
      path: "/register",
      element: <SignUpPage/>,
    },
    {
      path: "/forget-password",
      element: <ForgetPasswordPage/>,
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
