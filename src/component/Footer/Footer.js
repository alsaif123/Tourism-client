import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
             <div className="mt-5">
      <div className="footer">
        <div className="footer_sub">
          <h4>Our Contact Info.</h4>
          <br />
          <p>ADD 01: 5535 Brionna Village Suite 166</p>
          <p>ADD 02: 1603 Johnston Fort Apt. 229</p>
          <p>EMAIL: alsaif200200@gmail.com</p>
          <p>TEL: (+00)-456 789 000</p>
        </div>
        <div className="footer_sub">
          <h4>Support</h4>
          <br />
          <p>TECHNICAL SUPPORT</p>
          <p>DOCUMENTS & FORMS</p>
          <p>RETURN GOODS POLICY</p>
          <p>CONTACT US</p>
        </div>
        <div className="footer_sub">
          <h4>HOST</h4>
          <br />

         
          <p>Host your home</p>
          <p>Host an Online Experience</p>
          <p>Host an Experience</p>
          <p>Community Center </p>
          <p>Resource Center</p>
        </div>

        <div  className="footer_sub">
          <h4> COMMUNITY</h4>
          <p>Diversity & Belonging</p>
          <p>Against Discrimination</p>
          <p>Accessibility</p>
          <p>Guest Referrals</p>
        </div>
      </div> <hr />
      <p className='text-center'>
        <small >© 2017 Medicare Pharmacies. All Rights Reserved.</small>
      </p>
    </div>
        </div>
    );
};

export default Footer;