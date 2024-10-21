import FormSignUp from "../components/Fragments/FormSignUp";
import AuthLayout from "../components/Layouts/Authlayout";

const SignUpPage = () => {
  return (
    <AuthLayout type="sign up">
      <FormSignUp />
    </AuthLayout>
  );
};

export default SignUpPage;