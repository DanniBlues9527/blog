// import { useState } from 'react';
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <div className="home-header">
      <div className="home-header-title">
        <Link to="/">林中小屋</Link>
      </div>
      <div className="home-header-subtitle">
        <p>My Website</p>
      </div>
      <div className="home-header-nav">
        <div className="home-header-nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="home-header-nav-item">
          <Link to="/blog">Blog</Link>
        </div>
        <div className="home-header-nav-item">
          <Link to="/about">About Me</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
