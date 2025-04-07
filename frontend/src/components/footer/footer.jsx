import React from 'react';
import "./footer.css";

const Footer = () => {
  
  const today = new Date();
  console.log("today",today);
  const day = today.getDate();
  console.log("day",day);
  const month = today.getMonth() + 1; 
  console.log("month",month);
  const year = today.getFullYear();
  console.log("year",year);

  const realdate = `${day}-${month}-${year}`;
  console.log("realdate",realdate);
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>Back to top</p>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Connect with Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p> {realdate} Karishma's Amazon Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

