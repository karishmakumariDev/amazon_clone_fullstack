import React, { useState } from 'react'
import "./Signup.css"
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  const [signupform, setSignupForm] = useState({
    fullname: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    console.log("e")
    const { name, value } = e.target;
    console.log(name) 
    console.log(value)
    setSignupForm({
      ...signupform,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    console.log(signupform);
  }

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className='navlogo'>
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
            name="fullname"
            placeholder="First and last name"
            value={signupform.fullname}
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

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="At least 6 characters"
            value={signupform.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Continue</button>
        </form>

        <p>
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
        </p>

        <div className="signin-help">
          <a href="#">Need help?</a>
        </div>

        <div className="signin-footer">
          <p>Already have an account? <a href="/login">Sign in</a></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
