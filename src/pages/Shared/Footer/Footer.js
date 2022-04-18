import React from 'react';
import logo from '../../../Images/footer-logo.png';
import CustomLink from '../CustomLink/CustomLink';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='bg-dark mt-5 py-5 px-2 d-flex'>
            <div>
                <p><small className='text-white'>Copyrights &copy; {year} All Rights Reserved , Powered By  </small><span><img id='footer-logo' src={logo} alt="" /></span></p>
            </div>
            <div className='ms-5'>
                <h5 className='text-white'>Useful Link</h5>
                <u>
                    <li>
                        <CustomLink className="text-decoration-none" to="/services">Services</CustomLink>
                        <CustomLink className="text-decoration-none" to="/blogs">Blogs</CustomLink>
                        <CustomLink className="text-decoration-none" to="/about">About</CustomLink>
                    </li>
                </u>
            </div>
        </div>
    );
};

export default Footer;