import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="nav__logo">
        <img src="./logo.png" alt="logo" />
        <h1>Scoar</h1>
      </Link>
      <div className="nav__links">
        <Link to="/home">Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/support">Support</Link>
        <Link to="/about">About</Link>
        <Link to="/auth">Sign up</Link>
      </div>
    </div>
  );
}
