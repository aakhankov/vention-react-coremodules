import { Link, useLocation } from 'react-router-dom';
import '../page-tabs/PageTabs.css';

export default function PageTabs() {
  const location = useLocation();

  return (
    <div className="navigation-tabs">
      <ul className="naviagation-list">
        <li className={`naviagation-item ${location.pathname === '/' ? 'nav-link-active' : ''}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`naviagation-item ${location.pathname === '/aboutus' ? 'nav-link-active' : ''}`}>
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>
    </div>
  );
}
