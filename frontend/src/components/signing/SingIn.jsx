import React from 'react'
import "./Signin.css"

const SingIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2>Sign-In</h2>
        <form>
          <label>Email or mobile phone number</label>
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
            placeholder="Enter your password"
            required
          />

          <button type="submit">Sign-In</button>
        </form>

        <p>
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
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
  )
}

export default SingIn