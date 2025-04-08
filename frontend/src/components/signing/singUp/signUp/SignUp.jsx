import React from 'react'
import "./Signup.css"
import { NavLink } from 'react-router-dom'


const SignUp = () => {
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
        <form >
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            
            placeholder="First and last name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="At least 6 characters"
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