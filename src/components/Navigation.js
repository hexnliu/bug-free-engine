import { Link, NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Gurjaap Kahlon
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/work" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Work
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
