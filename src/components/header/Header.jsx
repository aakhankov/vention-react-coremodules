import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <p>Vention</p>
      <Link to="/">
        <img src="./src/assets/logo.svg" alt="" />
      </Link>
      <p>Cards</p>
    </header>
  );
}
