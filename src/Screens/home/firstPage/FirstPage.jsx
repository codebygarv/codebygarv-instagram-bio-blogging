import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./FirstPage.css";

const FirstPage = () => {
  const mainContainerRef = useRef(null);
  const headingRef = useRef(null);
  const roleRef = useRef(null);
  const nameRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      mainContainerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      roleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, delay: 1.5, ease: "power2.out" }
    );
    gsap.fromTo(
      arrowRef.current,
      { x: 20, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 1.8, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="main-container" ref={mainContainerRef}>
      <h1 className="main-heading" ref={headingRef}>
        Portfolio
      </h1>
      <div className="role-container" ref={roleRef}>
        <span>Full Stack web developer</span>
      </div>
      <p className="name-text" ref={nameRef}>
        Code By Garv
      </p>
      <div className="minimal-design">
        <div className="line"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default FirstPage;
