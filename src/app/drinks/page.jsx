"use client"

import React from 'react'
import drink from '../../../public/drinks.json'
import Image from 'next/image'

const Drinks = () => {
    const addItem=(e)=>{
        console.log(e.target.parentElement.querySelector('input').value)
        console.log(e.target.parentElement.querySelector('input[name="quantity"]').value)
    }
  return (
    <div>
        <div className="container">
            <div className="drinks">
                <h3 style={{color:'red'}}>Not started yet!! Working over it</h3>
                {
                    drink.map((drinks)=>{
                        return (
                           <div className='drinkcard' key={drinks.name}>
                             <div key={drinks.id}>
                                
                                
                                <Image src={drinks.image} alt={drinks.name} width={100} height={100} />
                                <h4>{drinks.name}</h4>
                                <p>{drinks.price}</p>
                                <input type="text" value={drinks.name}  />
                               <input type="number" name="quantity" placeholder='Enter quantity' />
                                 <button type='button' onClick={addItem}>Add to cart</button>
                            </div>
                           </div>
                        )
                    })
                }
            </div>
        </div>
        {/* <Image src={im}/> */}
        </div>

    
  )
}

export default Drinks