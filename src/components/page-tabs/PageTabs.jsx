import { Link } from "react-router-dom";
import "../page-tabs/PageTabs.css";
export default function PageTabs() {
  return (
    <div className="navigation-tabs">
      <ul className="naviagation-list">
        <li className="naviagation-item">
          <Link to="/">Home</Link>
        </li>
        <li className="naviagation-item">
          <Link to="/aboutus">About Us</Link>
        </li>
        <Link to="*"></Link>
      </ul>
    </div>
  );
}
