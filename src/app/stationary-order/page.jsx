"use client"

import { React, useState } from 'react'

const StItem = () => {
  const stationaryCart = [];
  const [username, setUserName] = useState("");
  const [contact, setContact] = useState()
  const handlePenClick = (e) => { stationaryCart.push("Pen"); e.target.style = "text-decoration:line-through; content: ' (Added)' " }
  const handleEraserClick = (e) => { stationaryCart.push("Eraser"); e.target.style = "text-decoration:line-through" }
  const handleSharpenerClick = (e) => { stationaryCart.push("Sharpener"); e.target.style = "text-decoration:line-through" }
  const handleGluClick = (e) => { stationaryCart.push("Glue"); e.target.style = "text-decoration:line-through" }
  const handleScissorsClick = (e) => { stationaryCart.push("Scissors"); e.target.style = "text-decoration:line-through" }
  const handleNotebookClick = (e) => { stationaryCart.push("Notebook"); e.target.style = "text-decoration:line-through" }
  const handleSubmit = (e) => {
    e.preventDefault();
    const message ="Name: " + username + "\nContact: " + contact + "\nOrdered items: " + stationaryCart.join(", ");
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${process.env.NEXT_PUBLIC_PAY_MERCHANT}?text=${encodedMessage}`;
    window.open(whatsappURL);

  }
  const cartItems=[];
  cartItems.push(stationaryCart);
  
  
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul style={{ margin: 65, padding: 15, listStyleType: 'none', padding: 7 }}>

          <input type="text" name="username" value={username} id="" className="text" placeholder='Enter your name' onChange={(e) => { setUserName(e.target.value) }} required />
          <input type="number" name="phone" value={contact} id="" className="text" placeholder='Enter your phone number' onChange={(e) => { setContact(e.target.value) }} required />
          <li> <button onClick={handlePenClick
          }  type="button" >Pen</button> </li>
          <li> <button onClick={handleEraserClick} type="button"  > Eraser </button> </li>
          <li> <button onClick={handleSharpenerClick} type="button" >Sharpener</button></li>
          <li> <button onClick={handleGluClick} type="button" >Glue</button> </li>
          <li> <button onClick={handleScissorsClick} type="button" >Scissors</button> </li>
          <li> <button onClick={handleNotebookClick} type="button" >Notebook</button> </li>
          <code>Click to add an item</code>
        </ul>
        <button> Place order </button>
      </form>
    </div>
  )
}

export default StItem
export { cartItems  };