import React, { useState } from 'react'
import "./Signin.css"

const SingIn = () => {
  const [loginform, setLonginForm] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name",name);
    console.log("value",value)
    setLonginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginform); 
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

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginform.password}
            onChange={handleChange}
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

