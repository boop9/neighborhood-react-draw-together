import { Link } from "react-router-dom";

export const SignUpPage = () => {
  return (
    <>
      <div className="sign-up-page">
        <h1 className="sign-up-header">Log In</h1>
        <form></form>
        <span className="sign-up-text">
          Already have an account? <Link to="/sign-in">Sign in.</Link>
        </span>
      </div>
    </>
  );
};
