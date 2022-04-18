import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div>
            <p><small>Copyrights &copy; {year} All Rights Reserved , Powered By Health Coach</small></p>
        </div>
    );
};

export default Footer;