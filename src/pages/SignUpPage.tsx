import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignUpPage = () => {
  // Status for form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  // Status for error message
  const [error, setError] = useState("");
  // hook for navigation
  const navigate = useNavigate();
  // Form handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // sends data to Flask-Endpoint
      const response = await fetch("/src/backend/app.py", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // procces answer
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }
      // Successful: forwarding to login page
      navigate("/src/pages/LoginPage.tsx");
    } catch (err) {
      // Shows error
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };
  //input Handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="registration-page">
        <div className="registration-contents">
          <h1 className="registration-header">Sign up</h1>
          {/* Shows error message */}
          {error && <div className="error-message">{error}</div>}
          <form className="sign-up-form-container" onSubmit={handleSubmit}>
            <div className="sign-up-inputs-container">
              <div className="sign-up-input-container">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="form-input"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="sign-up-input-container">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-input"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="forgot-password-link">
              <Link to="/" className="forgot-pass">
                Forgot Password?
              </Link>
            </div>

            <div className="sign-up-button-container">
              <button type="submit" className="sign-up-button">
                Create Account
              </button>
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
