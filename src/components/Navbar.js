import { Link } from 'gatsby'
import React from 'react'
import Logo from "../components/img/logo.png"

export default function Navbar() {
  return (
    <section className="navigation">
        <nav>
         <Link to="/"><img src={Logo} alt="logo" className='image-clickable'/></Link>
            <div class="nav-links">
                <ul>    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/sponsors">Sponsors</Link></li>
                    <li><Link to="#contactUs">Contact</Link></li>
                    <li><Link to="#"><button className='hero-btn'>Donate</button></Link></li>
                </ul>
            </div>
        </nav>
    </section>
    
  )
}
