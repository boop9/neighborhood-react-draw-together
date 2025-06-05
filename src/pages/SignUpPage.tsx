import { Link } from "react-router-dom";

export const SignUpPage = () => {
  return (
    <>
      <div className="registration-page">
        <h1 className="registration-header">Sign up</h1>
        <form></form>
        <span className="sign-up-text">
          Already have an account? <Link to="/sign-in">Sign in.</Link>
        </span>
      </div>
    </>
  );
};
