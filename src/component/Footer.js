import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
          <a href="https://www.facebook.com/merdul.sharma.3?mibextid=ZbWKwL" className="fab fa-facebook-f"></a>
          <a href="https://github.com/Merdulsh2003" className="fab fa-github"></a>
          <a href="https://www.instagram.com/mridulsh2003_21/?igshid=MXhpNmJhdnduMWkxMg%3D%3D" className="fab fa-instagram"></a>
          <a href="https://www.linkedin.com/in/merdul-sharma-962324292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="fab fa-linkedin"></a>
          <a href="mailto:merdulsharma2003@gmail.com" className="fas fa-envelope"></a>
          <a href="https://t.me/MridulSh2003" className="fab fa-telegram"></a>
        </div>
        <div className="links">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#product">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
        </div>
        <div className="credit">
          © 2024 <span>Merdul Sharma</span> | All rights reserved.
        </div>
      </section>
    </>
  );
};

export default Footer;
