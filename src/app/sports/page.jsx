import React from 'react'
import sports from '../../../public/sports.json'
const SportsItems = () => {
    return (
        <div>
            <h1>Sports Items</h1>
            <div className="container"  style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
                <div className="vegetables">

                    {
                        sports.map((item) => {
                            return (
                                <div className="vegetablecard" key={item.id}>
                                    <h2>{item.name}</h2>
                                    <p>{item.price}</p>
                                    <img src={item.image} alt={item.name} width={100} height={100} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SportsItems