import React from "react";
import { Link } from "react-router-dom";



// just a plain normal React router navbar
// Note that "/" is music, not home, as music will be
// the main focus
export const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/">Music</Link>
      <Link to="/electricity">Spot</Link>
    </div>
    </>
  );
};
