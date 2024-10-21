import FormForgetPassword from "../components/Fragments/FormForgetPassword";
import AuthLayout from "../components/Layouts/AuthLayout";

const ForgetPasswordPage = () => {
  return (
    <AuthLayout type="forget password">
      <FormForgetPassword />
    </AuthLayout>
  );
};

export default ForgetPasswordPage;