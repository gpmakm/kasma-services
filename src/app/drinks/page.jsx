"use client"

import React from 'react'
import drink from '../../../public/drinks.json'
//import fs from 'fs'
import Image from 'next/image'

const Drinks = () => {
    const drinksCart=[]
   
    const addItem=(e)=>{
         drinksCart.push(e.target.parentElement.querySelector('input').value+" : "+
        e.target.parentElement.querySelector('input[name="quantity"]').value+" glasses")
      
        
       
            // fs.writeFileSync('/drinks.json', JSON.stringify(drink), 'utf-8', (err) => {
            //     if (err) {
            //         console.error('Error writing to file:', err);
            //     }
            // });
            
        
    }
    const order=async(e)=>{
e.preventDefault();
        let resp=await fetch('/backend/GetOrder',{
            method:'POSt',
            body:JSON.stringify(drinksCart),
            headers:{
                'Content-Type':'application/json'
            }
        })
        //console.log(resp)
    }
  return (
    <div>
        <div className="container">
            <div className="drinks">
                
                {
                    drink.map((drinks)=>{
                        return (
                           <div className='drinkcard' key={drinks.name}>
                             <div key={drinks.id}>
                                
                                
                                <Image src={drinks.image} alt={drinks.name} width={100} height={100} />
                               <h4>{drinks.name}</h4>
                                <p>{drinks.price}</p>
                                
                                
                               <input type="number" name="quantity" placeholder='Enter quantity in glasses' />
                                 <button type='button' onClick={addItem}>Add to cart</button>
                            </div>
                           </div>
                        )
                    })
                }
            </div>
             <button type='button' onClick={order}>Order</button>
        </div>
        {/* <Image src={im}/> */}
        </div>

    
  )
}

export default Drinks