import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
class Header extends Component {
  render() {
    return (
      <header>
        <p>Vention</p>
        <Link to='/'>
          <img src='./src/assets/logo.svg' alt='' />
        </Link>
        <p>Cards</p>
      </header> 
    )
  }
}
export default Header
