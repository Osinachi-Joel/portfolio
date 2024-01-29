import './navbar.css'
import Logo from '../../assets/logo.jpg'
import data from './data'
import {IoIosColorPalette} from "react-icons/io";

const Navbar = () => {
  return (
    <nav>
      
      {/* Container for the navigation elements */}
      <div className="container nav_container">

        {/* Logo section */}
        <a href="index.html" className='nav_logo'>
          <img src={Logo}alt="Logo" />
        </a>

        {/* Navigation menu section */}
        <ul className='nav_menu'>
          {
            // Mapping through the data array to generate list items for navigation
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        {/* Theme icon button */}
        <button id='theme_icon'><IoIosColorPalette /></button>
     </div>
      
    </nav>
  )
}

export default Navbar