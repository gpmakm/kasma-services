"use client"

import { React, useState } from 'react'

const StItem = () => {
  const stationaryCart = [];
  const handlePenClick = () => { stationaryCart.push("Pen") }
  const handleEraserClick = () => { stationaryCart.push("Eraser") }
  const handleSharpenerClick = () => { stationaryCart.push("Sharpener") }
  const handleGluClick = () => { stationaryCart.push("Glue") }
  const handleScissorsClick = () => { stationaryCart.push("Scissors") }
  const handleNotebookClick = () => { stationaryCart.push("Notebook") }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(stationaryCart);

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul style={{ margin: 65, padding: 15, listStyleType: 'none', padding:7 }}>


          <li> <button onClick={handlePenClick
          }   >Pen</button> </li>
          <li> <button onClick={handleEraserClick} > Eraser </button> </li>
          <li> <button onClick={handleSharpenerClick} >Sharpener</button></li>
          <li> <button onClick={handleGluClick} >Glue</button> </li>
          <li> <button onClick={handleScissorsClick} >Scissors</button> </li>
          <li> <button onClick={handleNotebookClick} >Notebook</button> </li>
          <code>Click to add an item</code>
        </ul>
        <button> Add to cart 🛒 </button>
      </form>
    </div>
  )
}

export default StItem