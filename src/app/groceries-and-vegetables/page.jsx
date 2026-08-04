import React from 'react'
import vegetables from '../../../public/Vegetables.json'

const Vegetables = () => {
    return (
        <div>
            <div className="container"  style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around',overflow:'scroll'}}>
                <div className="vegetables">
                    <h3 style={{ color: 'red' }}>Not started yet!! Working over it</h3>
                    {
                        vegetables.map((vegetable) => {
                            return (
                                <div className="vegetablecard" key={vegetable.id}>
                                    <div className="pics"></div>
                                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                                        <div className="vegename"> <div className="icon">
                                            {vegetable.icon} </div> {vegetable.vegetableName} @ </div>
                                        <div className="price"> INR {vegetable.price}</div>
                                    </div>
                                    <button> Add to cart 🛒 </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Vegetables