import { Link } from 'gatsby'
import React from 'react'
import Logo from "../components/img/logo.png"

export default function Navbar() {
  return (
    <section className="navigation">
    <header>
        <span className='image-clickable'>
            <Link to="/">
                <img src={Logo} alt="logo:" />
            </Link>
        </span>
    <nav>
        <ul class="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/sponsors">Sponsors</Link></li>
            <li><Link to="#contactUs">Contact</Link></li>
        </ul>
    </nav>
      <Link to="#"><button>Donate</button></Link>
</header>
    </section>
    
  )
}
