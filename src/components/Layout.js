import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children}) {
  return (
    <div className="layout">
        <Navbar />
        <div>
            {children}
        </div>
        <footer className="footer">
            <p>2019-2022 First Robotics Competition Team 7777 * The Septobots Robotics Club</p>
        </footer>
    </div>
  )
}
