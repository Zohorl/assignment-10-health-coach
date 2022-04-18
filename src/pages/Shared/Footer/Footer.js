import React from 'react';
import logo from '../../../Images/logo1.png';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div>
            <p><small>Copyrights &copy; {year} All Rights Reserved , Powered By <span><img id='footer-logo' src={logo} alt="" /></span> </small></p>
        </div>
    );
};

export default Footer;