import React from 'react'
import drink from '../../../public/drinks.json'
const Drinks = () => {
  return (
    <div>
        <div className="container"></div>
            <div className="drinks">
                <h3 style={{color:'red'}}>Not started yet!! Working over it</h3>
                {
                    drink.map((drinks)=>{
                        return (
                            <div key={drinks.id}>
                                <h4>{drinks.name}</h4>
                                <p>${drinks.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        

    
  )
}

export default Drinks