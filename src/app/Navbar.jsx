import React from 'react'

const Navbar = () => {
 
  return (
    <nav>
    <a href="/">  <span>KASMA SERVICES</span></a>
      <ul style={{ display: 'flex' }} id='menuItems'>

        <li> <a href="#snacksnfood">Snacks</a> </li>
        <li> <a href="#cybercafe">Cyber Cafe Services</a> </li>
        <li> <a href="#stationary">Stationary items</a> </li>
          <li> <a href="#drinks">Drinks</a> </li>
        <li> <a href="#vegetablesngroceries">Vegetables and groceries</a> </li>
        <li> <a href="#sportsitems">Sports items</a> </li>
        <li> <a href="#electrician">Electrician consultancy</a> </li>
        {/* <li> <a href="/my-cart">My cart 🛒</a> </li> */}
      </ul>
    </nav>
  )
}

export default Navbar