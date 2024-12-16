import { useEffect } from "react";
import loginImage from "../assets/images/background_login.png";
import { Link } from "react-router-dom";
import SignInForm from "../components/SignIn/SignInForm";
const SignInPage = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${loginImage})`;
    return () => {
      document.body.style.backgroundImage = "";
    };
  });
  return (
    <div className="flex justify-center items-center h-screen px-4 md:px-0">
      <div className="card bg-white/60 w-full md:w-[500px] ">
        <div className="card-body">
          <Link to={"/"} className="text-5xl font-bold text-center mb-4">
            Pokemon
          </Link>
          <h4 className="text-center mb-6">Sign in to continue</h4>
          <SignInForm />
          <p className="mt-4">
            You already have an account ?{" "}
            <Link to={"/login"} className="link">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
