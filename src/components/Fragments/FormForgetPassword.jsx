import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";

const FormForgetPassword = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <Button variant="bg-primary w-full font-bold text-white bg-emerald-500" type="submit">
	      Password Reset
      </Button>
    </form>
  );
};

export default FormForgetPassword;
