import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="sign-in-page">
        <h1 className="sign-in-header">Log In</h1>
        <form></form>
        <span className="sign-in-text">
          No account yet? <Link to="/">Sign up.</Link>
        </span>
      </div>
    </>
  );
};

export default LoginPage;
