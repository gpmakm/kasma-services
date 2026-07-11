"use client"

import React from 'react'
import drink from '../../../public/drinks.json'
import Image from 'next/image'

const Drinks = () => {
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
                                {console.log(drinks.image)}
                                
                                <Image src={drinks.image} alt={drinks.name} width={200} height={200} />
                                <h4>{drinks.name}</h4>
                                <p>{drinks.price}</p>
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