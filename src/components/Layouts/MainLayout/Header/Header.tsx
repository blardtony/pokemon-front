import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container navbar mx-auto px-6 lg:px-2">
      <Link to={"/"} className="flex-1 text-xl font-bold">
        Pokemon
      </Link>
      <div className="flex-none">
        <Link className="btn btn-primary me-2" to={"/login"}>
          Log in
        </Link>
        <Link className="btn" to={"/register"}>
          Sign in
        </Link>
      </div>
    </header>
  );
};

export default Header;
