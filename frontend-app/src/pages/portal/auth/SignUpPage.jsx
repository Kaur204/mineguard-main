import Navbar from "../../../components/portal/auth/Navbar";
import SignupForm from "../../../components/portal/auth/SignInForm";
const SignUpPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <SignupForm
        redirect="/portal/user/dashboard"
        logIn="/portal/user/login"
      />
    </div>
  );
};

export default SignUpPage;