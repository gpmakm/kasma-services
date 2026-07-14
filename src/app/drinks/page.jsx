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
    const order=async(n)=>{
        let resp=await fetch('/backend/GetOrder',{
            method:'POSt',
            body:JSON.stringify(n),
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
                <h3 style={{color:'red'}}>Not started yet!! Working over it</h3>
                {
                    drink.map((drinks)=>{
                        return (
                           <div className='drinkcard' key={drinks.name}>
                             <div key={drinks.id}>
                                
                                
                                <Image src={drinks.image} alt={drinks.name} width={100} height={100} />
                               <h4><input type="text" value={drinks.name} style={{border: 'none', padding: '5px',fontWeight:'bold',fontSize:'16px'}}  /></h4>
                                <p>{drinks.price}</p>
                                
                                
                               <input type="number" name="quantity" placeholder='Enter quantity in glasses' />
                                 <button type='button' onClick={addItem}>Add to cart</button>
                            </div>
                           </div>
                        )
                    })
                }
            </div>
             <button type='button' onClick={order(drinksCart)}>Order</button>
        </div>
        {/* <Image src={im}/> */}
        </div>

    
  )
}

export default Drinks