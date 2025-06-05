import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="registration-page">
        <h1 className="registration-header">Log In</h1>
        <form></form>
        <span className="sign-in-text">
          No account yet? <Link to="/sign-up">Sign up.</Link>
        </span>
      </div>
    </>
  );
};

export default LoginPage;
