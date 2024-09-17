import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark text-white  flex-column justify-content-center w-100 text-center py-4 shadow ">
      <h4>MOSTRANS APP</h4>
      <div className="d-flex justify-content-center gap-4 mt-1">
        <Link to="/" className="link text-light">
          Character List
        </Link>
        <Link to="/locations" className="link text-light">
          Character Location
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
