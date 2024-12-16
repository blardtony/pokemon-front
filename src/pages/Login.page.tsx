import { useEffect } from "react";
import loginImage from "../../assets/images/background_login.png";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
const LoginPage = () => {
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
          <h4 className="text-center mb-8">Log in to continue</h4>
          <LoginForm />
          <p className="mt-4">
            Not on Pokemon yet ?{" "}
            <Link to={"/register"} className="link">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
