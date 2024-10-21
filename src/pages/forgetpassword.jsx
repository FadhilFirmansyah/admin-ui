import FormForgetPassword from "../components/Fragments/FormForgetPassword";
import Authlayout from "../components/Layouts/Authlayout";

const ForgetPasswordPage = () => {
  return (
    <Authlayout type="forget password">
      <FormForgetPassword />
    </Authlayout>
  );
};

export default ForgetPasswordPage;