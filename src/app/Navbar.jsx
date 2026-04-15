import React from 'react'

const Navbar = () => {
 
  return (
    <nav>
      <span>KASMA SERVICES</span>
      <ul style={{ display: 'flex' }} id='menuItems'>

        <li> <a href="#snacksnfood">Snacks</a> </li>
        <li> <a href="#cybercafe">Cyber Cafe Services</a> </li>
        <li> <a href="#stationary">Stationary items</a> </li>
        <li> <a href="#vegetablesngroceries">Vegetables and groceries</a> </li>
        <li> <a href="/cart">My cart 🛒</a> </li>
      </ul>
    </nav>
  )
}

export default Navbar