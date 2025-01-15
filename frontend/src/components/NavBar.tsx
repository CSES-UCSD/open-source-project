import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ isLoggedIn }) {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {/* Links visible to everyone */}
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>

        {/* Conditional Links */}
        {isLoggedIn ? (
          // Additional links when logged in
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/upload">Upload Notes</Link>
            </li>
            <li className="logout">
              <Link to="/logout">Logout</Link>
            </li>
          </>
        ) : (
          // Login/Sign Up link when logged out
          <li className="login">
            <Link to="/signin">Login/Sign Up</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
