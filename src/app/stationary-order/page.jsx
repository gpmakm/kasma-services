"use client"

import React, { useState } from 'react'
import { useQRCode } from 'next-qrcode'

const StationaryForm = (props) => {
    const [username,setUsername]=useState("")
    const [phone,setphone]=useState()
 const [paymentMode, setPaymentMode] = useState("")
    const [tid, setTid] = useState("");
    const {Canvas}=useQRCode();

    let orders=new Array();

    const sendData=async (e)=>{
        e.preventDefault();
        let photocopy=document.getElementById('photocopy');
        let colorcopy=document.getElementById('colorcopy');
        let blackandwhiteprint=document.getElementById('blackandwhiteprint');
        let colorprint=document.getElementById('colorprint');
        let lemination=document.getElementById('lemination');
        let spiralbinding=document.getElementById('spiralbinding');
       

        // if (payment.checked) {
        //     console.log("Payment is true");
            
        // }

        if (photocopy.checked) {
            orders.push("Photocopy")
        } if (colorcopy.checked) {
            orders.push("Colorcopy")
        } if (blackandwhiteprint.checked) {
            orders.push("Printing(Black and white)")
        } if (colorprint.checked) {
            orders.push("Printing(Color)")
        } if (lemination.checked) {
            orders.push("Lamination")
        } if (spiralbinding.checked) {
            orders.push("Spiral Binding")
        }

        orders.join(" ",orders)

        let url=process.env.NEXT_PUBLIC_BACKEND_URL;

        let data=await fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                name:username,
                phone:phone,
                service:"cyber cafe stationary",
            })
        })
        let res=await data.json();
        alert(res.message);

       window.open(`https://wa.me/${process.env.NEXT_PUBLIC_SHARMA_CYBER_CAFE}?text=Name%20:%20${username}%0APhone%20:%20${phone}%0A${orders}`)
    }

  return (
    <div>
        <form onSubmit={sendData}>
        <div>
                <h2>Connecting you to {props.cyberCafe}</h2>
            <div>
                <input type="text" name="username" value={username} id="" className="text" placeholder='Enter your name' onChange={(e)=>{setUsername(e.target.value)}} required />
                <input type="number" name="phone" value={phone} id="" className="text" placeholder='Enter your phone number' onChange={(e)=>{setphone(e.target.value)}} required />

                <label htmlFor="services">Select your services</label>
                <div id="services" style={{display:'flex'}}>

                   <div className='options'>
                    <label htmlFor="photocopy">PhotoCopy for Rs. 3 per page</label>
                     <input type="checkbox" name="service" id="photocopy" />
                   </div>
                   <div className='options'>
                    <label htmlFor="colorcopy">ColorCopy for Rs. 5 per page</label> <input type="checkbox" name="service" id="colorcopy" />
                   </div>
                   <div className='options'>
                    <label htmlFor="blackandwhiteprint">Printing(Black and white) for Rs. 3 per page</label> 
                    <input type="checkbox" name="service" id="blackandwhiteprint" />
                   </div>
                    <div className='options'>
                    <label htmlFor="colorprint">Printing(Color) for Rs. 10 per page</label> 
                    <input type="checkbox" name="service" id="colorprint" />
                    </div>

                    <div className='options'>
                    <label htmlFor="lemination">Lamination</label>
                    <input type="checkbox" name="service" id="lemination" />
                    </div>
                    <div className='options'>
                    <label htmlFor="spiralbinding">Spiral Binding for Rs.20 per book</label>
                    <input type="checkbox" name="service" id="spiralbinding" />
                    </div>
                    
                </div>

               
            </div>
        </div>
             <div className="qrcode">
            <h2>Payment</h2>
             <div>
                        {/* Pay Now */}
                        <div className="options">
                            <label>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="upi"
                                    checked={paymentMode === "upi"}
                                    onChange={() => setPaymentMode("upi")}
                                />
                                Pay now through UPI QR
                            </label>
                        </div>

                        {/* Transaction ID Input */}
                        <div>
                            <input
                                type="text"
                                name="tid"
                                className="text"
                                placeholder="Enter transaction id"
                                disabled={paymentMode !== "upi"}
                                value={tid}
                                onChange={(e) => setTid(e.target.value)}
                            />
                        </div>

                        {/* Pay Later */}
                        <div className="options">
                            <label>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cash"
                                    checked={paymentMode === "cash"}
                                    onChange={() => setPaymentMode("cash")}
                                />
                                Pay later through cash
                            </label>
                        </div>
                    </div>

                    {/* UPI QR */}
                    {paymentMode === "upi" && (
                        <div style={{ marginTop: "16px" }}>
                            <Canvas
                                text={props.upiID}
                                options={{
                                    level: "M",
                                    width: 200,
                                    margin: 3,
                                    scale: 4,
                                    color: {
                                        dark: "#000000",
                                        white: "#ffffff",
                                    },
                                }}
                            />
                        </div>
                    )}
                </div>
                <button>Send message using whatsapp</button>
        </form>
       
    </div>
  )
}

export default StationaryForm