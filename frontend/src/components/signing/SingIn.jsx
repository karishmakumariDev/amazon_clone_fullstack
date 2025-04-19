import React, { useState } from 'react';
import "./Signin.css";
import { useFetchUserForLogin } from "../../hooks/userfetch";
//import { useNavigate } from 'react-router-dom';

//const navigate = useNavigate();


const SignIn = () => {
  const [loginform, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const { mutate, isLoading } = useFetchUserForLogin(); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    mutate(loginform, {
      onSuccess: () => {
        setLoginForm({ email: "", password: "" });
        setErrors({});
        // you can navigate to homepage here if needed

      },
      onError: (error) => {
        const msg = error.response?.data?.message || "Invalid credentials";

        if (msg.includes("email")) {
          setErrors({ email: "Email not found" });
        } else if (msg.includes("password")) {
          setErrors({ password: "Incorrect password" });
        } else {
          setErrors({ general: msg });
        }
      },
    });
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2>Sign-In</h2>
        <form onSubmit={handleSubmit}>
          <label>Email or mobile phone number</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={loginform.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginform.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error-msg">{errors.password}</p>}
          {errors.general && <p className="error-msg">{errors.general}</p>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Sign-In"}
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's{" "}
          <a href="#">Conditions of Use</a> and{" "}
          <a href="#">Privacy Notice</a>.
        </p>

        <div className="signin-help">
          <a href="#">Need help?</a>
        </div>

        <div className="signin-footer">
          <p>New to Amazon?</p>
          <a href="/register">Create your Amazon account</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

