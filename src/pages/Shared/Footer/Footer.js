import React from 'react';
import logo from '../../../Images/footer-logo.png';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='bg-dark mt-5 py-5 px-2'>
            <p><small className='text-white'>Copyrights &copy; {year} All Rights Reserved , Powered By  </small><span><img id='footer-logo' src={logo} alt="" /></span></p>
        </div>
    );
};

export default Footer;