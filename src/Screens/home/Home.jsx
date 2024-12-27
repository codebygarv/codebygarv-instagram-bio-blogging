import React, { useState, useEffect, useRef } from 'react';
import FirstPage from './firstPage/FirstPage';
import { gsap } from 'gsap';
import Navbar from './Navbar/Navbar';
import './Home.css'
import HomeContent from './homeContent.jsx/HomeContent';
import Footer from './footer/Footer';

const Home = () => {
  const [showFirstPage, setShowFirstPage] = useState(true);
  const homeContentRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to('.main-container', { opacity: 0, duration: 1, onComplete: () => setShowFirstPage(false) });
      gsap.fromTo(
        homeContentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.2 }
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showFirstPage ? (
        <FirstPage />
      ) : (
        <div className="main-home-content" ref={homeContentRef}>
          <Navbar />
          <HomeContent />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
