import React from 'react'
import Nav__Style from './navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
       
            <header>
                <a href="/">Logo</a>
                <nav>
                 <li><Link to="/" className={Nav__Style.links}>Home</Link></li>
                 <li><Link to="/about" className={Nav__Style.links}>about</Link></li>
                 <li><Link to="/service" className={Nav__Style.links}>service</Link></li>

                </nav>
            </header>

            <h1>Hello Navbar</h1>
        </div>
        
    )
}

export default Navbar
