import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
        <Link className="navbar-brand text-light fw-bold" to="/">Student Portal</Link>
        
        <div className="nav-links d-flex gap-4">
          <Link className="nav-link text-light fw-bold" to="/">Home</Link>
          <Link className="nav-link text-light fw-bold" to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
