import React from 'react'
import sports from '../../../public/sports.json'
const SportsItems = () => {
  return (
    <div>
        <h1>Sports Items</h1>
        {
            sports.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <img src={item.image} alt={item.name} width={100} height={100} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default SportsItems