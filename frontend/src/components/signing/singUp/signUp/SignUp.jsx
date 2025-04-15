import React, { useState } from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";
import { useFetchUserRegister } from "../../../../hooks/userfetch";
//import { toast } from 'react-toastify'

const SignUp = () => {
  const [signupform, setSignupForm] = useState({
    firstname: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});
  const { mutate, isLoading } = useFetchUserRegister();

  const handleChange = (e) => {
    console.log(e);
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name);
    console.log("value", value);
    setSignupForm({
      ...signupform,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!signupform.firstname.trim()) {
      newErrors.firstname = "Name is required";
    }

    if (!signupform.email.includes("@")) {
      newErrors.email = "Enter a valid email address";
    }

    if (!/^\d{10}$/.test(signupform.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (signupform.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // agar error nahi hai to true
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;
    console.log("summited with", signupform);
    mutate(signupform, {
      onSuccess: () => {
        setSignupForm({
          firstname: "",
          email: "",
          password: "",
          mobile: "",
        });
        setErrors({});
      },
      onError: (error) => {
        const message = error.response?.data?.message || "Something went wrong";
        if (message.includes("email")) {
          setErrors({ email: message });
        } else if (message.includes("mobile")) {
          setErrors({ mobile: message });
        } else {
          setErrors({ general: message });
        }
      },
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="navlogo">
          <NavLink to="/" activeClassName="active-link">
            <div className="navbar-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon Logo"
              />
              <span>.in</span>
            </div>
          </NavLink>
        </div>

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="First and last name"
            value={signupform.firstname}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={signupform.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "0.9rem", marginTop: "1px" }}>
              {errors.email}
            </p>
          )}

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="At least 6 characters"
            value={signupform.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "0.9rem", marginTop: "1px" }}>
              {errors.password}
            </p>
          )}

          <label>Mobile Number</label>
          <input
            type="text"
            name="mobile"
            placeholder="Enter your mobile number"
            value={signupform.mobile}
            onChange={handleChange}
            required
          />
          {errors.mobile && (
            <p style={{ color: "red", fontSize: "0.9rem", marginTop: "1px" }}>
              {errors.mobile}
            </p>
          )}
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Continue"}
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a>{" "}
          and <a href="#">Privacy Notice</a>.
        </p>

        <div className="signin-help">
          <a href="#">Need help?</a>
        </div>

        <div className="signin-footer">
        <p>
             Already have an account?{" "}
             <NavLink to="/login" className="signin-link">
             Sign in
            </NavLink>
        </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
