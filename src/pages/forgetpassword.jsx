import FormForgetPassword from "../components/Fragments/FormForgetPassword";
import AuthLayout from "../components/Layouts/AuthlLayout";

const ForgetPasswordPage = () => {
  return (
    <AuthLayout type="forget password">
      <FormForgetPassword />
    </AuthLayout>
  );
};

export default ForgetPasswordPage;