"use client"

import { React, useState } from 'react'

const StItem = () => {
  const stationaryCart = [];
  const [username, setUserName] = useState("");
  const [contact, setContact] = useState()
  const [quantity, setQuantity] = useState(1)
  const [quantity2, setQuantity2] = useState(1)
  const [quantity3, setQuantity3] = useState(1)
  const [quantity4, setQuantity4] = useState(1)
  const handlePenClick = (e) => { stationaryCart.push("Pen - " + quantity4); e.target.style = "text-decoration:line-through; content: ' (Added)' " }
  const handleEraserClick = (e) => { stationaryCart.push("Eraser - " + quantity); e.target.style = "text-decoration:line-through" }
  const handleSharpenerClick = (e) => { stationaryCart.push("Sharpener - " + quantity2); e.target.style = "text-decoration:line-through" }
  const handleGluClick = (e) => { stationaryCart.push("Glue - " + quantity3); e.target.style = "text-decoration:line-through" }
  const handleScissorsClick = (e) => { stationaryCart.push("Scissors - " + quantity4); e.target.style = "text-decoration:line-through" }
  const handleNotebookClick = (e) => { stationaryCart.push("Notebook - " + quantity3); e.target.style = "text-decoration:line-through" }

     
  
  const handleSubmit = (e) => {
    e.preventDefault();
       const message = "Name: " + username + "\nContact: " + contact + "\nOrdered items: " + stationaryCart.join(", ");
    const encodedMessage = encodeURIComponent(message);
   
    const whatsappURL = `https://wa.me/${process.env.NEXT_PUBLIC_PAY_MERCHANT}?text=${encodedMessage}`;
    window.open(whatsappURL);

  }
  const cartItems = [];
  cartItems.push(stationaryCart);



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul style={{ margin: 65, padding: 15, listStyleType: 'none', padding: 7 }}>

          <input type="text" name="username" value={username} id="" className="text" placeholder='Enter your name' onChange={(e) => { setUserName(e.target.value) }} required />
          <input type="number" name="phone" value={contact} id="" className="text" placeholder='Enter your phone number' onChange={(e) => { setContact(e.target.value) }} required />
          <li> <button onClick={handlePenClick
          } type="button" >Pen</button>  <select value={quantity4} onChange={(e) => { setQuantity4(e.target.value) }}> <option value={1}>1</option> <option value={2}>2</option> <option value={3}>3</option> <option value={4}>4</option> <option value={5}>5</option> <option value={6}>6</option> <option value={7}>7</option> <option value={8}>8</option> <option value={9}>9</option> <option value={10}>10</option> </select> </li>
          <li> <button onClick={handleEraserClick} type="button"  > Eraser </button> <select value={quantity} onChange={(e) => { setQuantity(e.target.value) }}> <option value={1}>1</option> <option value={2}>2</option> <option value={3}>3</option> <option value={4}>4</option> <option value={5}>5</option> <option value={6}>6</option> <option value={7}>7</option> <option value={8}>8</option> <option value={9}>9</option> <option value={10}>10</option> </select> </li>
          <li> <button onClick={handleSharpenerClick} type="button" >Sharpener</button> <select value={quantity2} onChange={(e) => { setQuantity2(e.target.value) }}> <option value={1}>1</option> <option value={2}>2</option> <option value={3}>3</option> <option value={4}>4</option> <option value={5}>5</option> <option value={6}>6</option> <option value={7}>7</option> <option value={8}>8</option> <option value={9}>9</option> <option value={10}>10</option> </select></li>
          <li> <button onClick={handleGluClick} type="button" >Glue</button> </li>
          <li> <button onClick={handleScissorsClick} type="button" >Scissors</button> </li>
          <li> <button onClick={handleNotebookClick} type="button" >Notebook</button> <select value={quantity3} onChange={(e) => { setQuantity3(e.target.value) }}> <option value={1}>1</option> <option value={2}>2</option> <option value={3}>3</option> <option value={4}>4</option> <option value={5}>5</option> <option value={6}>6</option> <option value={7}>7</option> <option value={8}>8</option> <option value={9}>9</option> <option value={10}>10</option> </select> </li>
          <code>Click to add an item</code>
        </ul>
        <button> Place order </button>
      </form>
    </div>
  )
}

export default StItem
export { cartItems };