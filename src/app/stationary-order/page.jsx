"use client"

import { React, useState } from 'react'

const StItem = () => {
  const stationaryCart = [];
  const [username, setUserName] = useState("");
  const [contact, setContact] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [quantity2, setQuantity2] = useState(0)
  const [quantity3, setQuantity3] = useState(0)
  const [quantity4, setQuantity4] = useState(0)
  const handlePenClick = (e) => { stationaryCart.push("Pen - " + quantity4); e.target.style = "text-decoration:line-through; content: ' (Added)' "; console.log(stationaryCart);
   }
  const handleEraserClick = (e) => { stationaryCart.push("Eraser - " + quantity); e.target.style = "text-decoration:line-through" ;  console.log(stationaryCart) }
  const handleSharpenerClick = (e) => { stationaryCart.push("Sharpener - " + quantity2); e.target.style = "text-decoration:line-through" ;  console.log(stationaryCart) }
  const handleGluClick = (e) => { stationaryCart.push("Glue - " + quantity3); e.target.style = "text-decoration:line-through" ;  console.log(stationaryCart) }
  const handleScissorsClick = (e) => { stationaryCart.push("Scissors - " + quantity4); e.target.style = "text-decoration:line-through" ;  console.log(stationaryCart) }
  const handleNotebookClick = (e) => { stationaryCart.push("Notebook - " + quantity3); e.target.style = "text-decoration:line-through" ;  console.log(stationaryCart) }
// const cartItems = [];
//   cartItems.push(stationaryCart);
     
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
       const message =  "\nContact: " + username + "\nOrdered items: " + stationaryCart.join(", ");
    const encodedMessage = encodeURIComponent(message);
    const message2 =  "\nContact: " + contact + "\nOrdered items: " + stationaryCart.length;
  //  console.log(message);
  //  console.log(message2);
   
   
    const whatsappURL = `https://wa.me/${process.env.NEXT_PUBLIC_PAY_MERCHANT}?text=${encodedMessage}`;
   window.open(whatsappURL);

  }
  



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul style={{ margin: 65, padding: 15, listStyleType: 'none', padding: 7 }}>

          <input type="text" name="username" value={username} id="" className="text" placeholder='Enter your phone number' onChange={(e) => { setUserName(e.target.value) }} required />
          {/* <input type="text" name="phone" value={contact} id="" className="text" placeholder='Enter your phone number' onChange={(e) => { setContact(e.target.value) }} required /> */}
          <li> <button onClick={handlePenClick
          } type="button" >Pen</button>  <select value={quantity4} onChange={(e) => { setQuantity4(e.target.value) }}><option value={0}>0</option> <option value={1}>1</option> <option value={2}>2</option> <option value={3}>3</option> <option value={4}>4</option> <option value={5}>5</option> <option value={6}>6</option> <option value={7}>7</option> <option value={8}>8</option> <option value={9}>9</option> <option value={10}>10</option> </select> </li>

          <li> <button onClick={handleEraserClick} type="button"  > Eraser </button> <select value={quantity} onChange={(e) => { setQuantity(e.target.value) }}> <option value={0}>0</option> <option value={1}>1</option> <option value={2}>2</option> <option value={3}>3</option> <option value={4}>4</option> <option value={5}>5</option> <option value={6}>6</option> <option value={7}>7</option> <option value={8}>8</option> <option value={9}>9</option> <option value={10}>10</option> </select> </li>
          <li> <button onClick={handleSharpenerClick} type="button" >Sharpener</button> <select value={quantity2} onChange={(e) => { setQuantity2(e.target.value) }}> <option value={0}>0</option> <option value={1}>1</option> <option value={2}>2</option> <option value={3}>3</option> <option value={4}>4</option> <option value={5}>5</option> <option value={6}>6</option> <option value={7}>7</option> <option value={8}>8</option> <option value={9}>9</option> <option value={10}>10</option> </select></li>
          <li> <button onClick={handleGluClick} type="button" >Glue</button> </li>
          <li> <button onClick={handleScissorsClick} type="button" >Scissors</button> </li>
          <li> <button onClick={handleNotebookClick} type="button" >Notebook</button> <select value={quantity3} onChange={(e) => { setQuantity3(e.target.value) }}><option value={0}>0</option> <option value={1}>1</option> <option value={2}>2</option> <option value={3}>3</option> <option value={4}>4</option> <option value={5}>5</option> <option value={6}>6</option> <option value={7}>7</option> <option value={8}>8</option> <option value={9}>9</option> <option value={10}>10</option> </select> </li>
          <code>Click to add an item, firstly select the quantity then place item</code>
        </ul>
        <button> Place order </button>
      </form>
    </div>
  )
}

export default StItem
export { cartItems };