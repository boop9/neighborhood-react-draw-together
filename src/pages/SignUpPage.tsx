import { Link } from "react-router-dom";

export const SignUpPage = () => {
  return (
    <>
      <div className="registration-page">
        <div className="registration-contents">
          <h1 className="registration-header">Sign up</h1>
          <form className="sign-up-form-container">
            <div className="sign-up-inputs-container">
              <div className="sign-up-input-container">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-input"
                ></input>
              </div>
              <div className="sign-up-input-container">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-input"
                ></input>
              </div>
            </div>

            <div className="forgot-password-link">
              <Link to="/" className="forgot-pass">
                Forgot Password?
              </Link>
            </div>

            <div className="sign-up-button-container">
              <button className="sign-up-button">Login</button>
            </div>
          </form>
          <span className="sign-up-text">
            Already have an account? <Link to="/sign-in">Sign in.</Link>
          </span>
        </div>
      </div>
    </>
  );
};
