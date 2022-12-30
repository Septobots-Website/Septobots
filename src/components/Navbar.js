import { Link } from 'gatsby'
import React, {useState} from 'react'
import Logo from "../components/img/logo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <section className="navigation">
        <nav>
         <Link to="/"><img src={Logo} alt="logo" className='image-clickable'/></Link>
            <div class="nav-links" id="nav-links">
            <FontAwesomeIcon icon={faTimes} className="fa fa-times" onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</FontAwesomeIcon>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/sponsors">Sponsors</Link></li>
                    <li><Link to="#contactUs">Contact</Link></li>
                    <li><Link to="#"><button className='hero-btn'>Donate</button></Link></li>
                </ul>
            </div>
            <FontAwesomeIcon icon={faBars} className="fa fa-bars" onClick="showMenu()"/>
        </nav>
    </section>
    
  )
}
