import React from 'react'

const Navbar = () => {
 
  return (
    <nav>
      <span>KASMA SERVICES</span>
      <ul style={{ display: 'flex' }} id='menuItems'>

        <li> <a href="#Snacks">Snacks</a> </li>
        <li> <a href="#Stationary">Cyber Cafe Services</a> </li>
        <li> <a href="#Partners">Our partners</a> </li>

      </ul>
    </nav>
  )
}

export default Navbar