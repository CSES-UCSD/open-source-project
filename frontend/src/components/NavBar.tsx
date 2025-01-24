import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      navigate("/");
    } else {
      navigate("/dashboard");
      setIsLoggedIn(true);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo linking to Home */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="src/assets/cses-opensource.png" alt="CSES Logo" className="logo-image" />
        </Link>
      </div>

      {/* Centered Navbar Links */}
      <ul className="navbar-links">
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/upload">Upload Notes</Link>
            </li>
          </>
        )}
      </ul>

      {/* Login/Logout Button */}
      <div className="auth-button">
        <button onClick={handleAuthClick}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
