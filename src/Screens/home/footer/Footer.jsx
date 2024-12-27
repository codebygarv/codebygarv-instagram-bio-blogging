import React, { useEffect, useState } from 'react';
import './Footer.css';  // Import the CSS file

const Footer = () => {
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        let count = localStorage.getItem('visitCount');
        
        if (!count) {
            count = 1;
        } else {
            count = parseInt(count) + 1;
        }
        
        localStorage.setItem('visitCount', count);
        setVisitCount(count);
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">Total Visits: {visitCount}</p>
            </div>
        </footer>
    );
};

export default Footer;
