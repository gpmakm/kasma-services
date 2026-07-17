"use client"

import React, { useState } from 'react'
import { useQRCode } from 'next-qrcode'


const StationaryForm = (props) => {
    const [username, setUsername] = useState("")
    const [phone, setphone] = useState()
    const [paymentMode, setPaymentMode] = useState("")
    const [tid, setTid] = useState("");
    const { Canvas } = useQRCode();
    const [quantity,setQuantity]=useState(1)
        const [quantity2,setQuantit ]=useState(1)
            const [quantity3,setQuantity3]=useState(1)
                const [quantity4,setQuantity4]=useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false);

    let orders = new Array();

    const sendData = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        let photocopy = document.getElementById('photocopy');
        let colorcopy = document.getElementById('colorcopy');
        let blackandwhiteprint = document.getElementById('blackandwhiteprint');
        let colorprint = document.getElementById('colorprint');
        let lemination = document.getElementById('lemination');
        let spiralbinding = document.getElementById('spiralbinding');


        // if (payment.checked) {
        //     console.log("Payment is true");

        // }

        if (photocopy.checked) {
            orders.push("Photocopy - "+quantity)
        } if (colorcopy.checked) {
            orders.push("Colorcopy - "+quantity2)
        } if (blackandwhiteprint.checked) {
            orders.push("Printing(Black and white) - "+quantity3)
        } if (colorprint.checked) {
            orders.push("Printing(Color) - "+quantity4)
        } if (lemination.checked) {
            orders.push("Lamination")
        } if (spiralbinding.checked) {
            orders.push("Spiral Binding")
        }

        orders.join(" ", orders)

        let url = process.env.NEXT_PUBLIC_BACKEND_URL;



        let data = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: username,
                phone: phone,
                service: "cyber cafe stationary",
            })
        })
        let res = await data.json();
        alert(res.message);
        setIsSubmitting(false);
        const message = `From website \n Name: ${username}\nPhone: ${phone}\n${orders.join(", ")}`;

        const waUrl = `https://wa.me/${process.env.NEXT_PUBLIC_SHARMA_CYBER_CAFE}?text=${encodeURIComponent(message)}`;

        window.location.href = waUrl;  // redirects to WhatsApp

    }

    return (
        <div>
            <form onSubmit={sendData}>
                <div>
                    <h2>Connecting you to {props.cyberCafe}</h2>
                    <div>
                        <input type="text" name="username" value={username} id="" className="text" placeholder='Enter your name' onChange={(e) => { setUsername(e.target.value) }} required />
                        <input type="number" name="phone" value={phone} id="" className="text" placeholder='Enter your phone number' onChange={(e) => { setphone(e.target.value) }} required />

                        <label htmlFor="services">Select your services</label>
                        <div id="services" style={{ display: 'flex' }}>

                            <div className='options'>
                                <label htmlFor="photocopy">PhotoCopy for Rs. 3 per page</label>
                                <input type="checkbox" name="service" id="photocopy" />  <select value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}> <option value={1}>1</option> <option value={2}>2</option> <option value={3}>3</option> <option value={4}>4</option> <option value={5}>5</option> <option value={6}>6</option> <option value={7}>7</option> <option value={8}>8</option> <option value={9}>9</option> <option value={10}>10</option> </select>
                            </div>
                            <div className='options'>
                                <label htmlFor="colorcopy">ColorCopy for Rs. 5 per page</label> <input type="checkbox" name="service" id="colorcopy" />
                                 <select value={quantity2} onChange={(e)=>{setQuantity2(e.target.value)}}> <option value={1}>1</option> <option value={2}>2</option> <option value={3}>3</option> <option value={4}>4</option> <option value={5}>5</option> <option value={6}>6</option> <option value={7}>7</option> <option value={8}>8</option> <option value={9}>9</option> <option value={10}>10</option> </select>
                            </div>
                            <div className='options'>
                                <label htmlFor="blackandwhiteprint">Printing(Black and white) for Rs. 3 per page</label>
                                <input type="checkbox" name="service" id="blackandwhiteprint" />
                                 <select value={quantity3} onChange={(e)=>{setQuantity3(e.target.value)}}> <option value={1}>1</option> <option value={2}>2</option> <option value={3}>3</option> <option value={4}>4</option> <option value={5}>5</option> <option value={6}>6</option> <option value={7}>7</option> <option value={8}>8</option> <option value={9}>9</option> <option value={10}>10</option> </select>
                            </div>
                            <div className='options'>
                                <label htmlFor="colorprint">Printing(Color) for Rs. 10 per page</label>
                                <input type="checkbox" name="service" id="colorprint" />
                                 <select value={quantity4} onChange={(e)=>{setQuantity4(e.target.value)}}> <option value={1}>1</option> <option value={2}>2</option> <option value={3}>3</option> <option value={4}>4</option> <option value={5}>5</option> <option value={6}>6</option> <option value={7}>7</option> <option value={8}>8</option> <option value={9}>9</option> <option value={10}>10</option> </select>
                            </div>

                            <div className='options'>
                                <label htmlFor="lemination">Lamination</label>
                                <input type="checkbox" name="service" id="lemination" />
                            </div>
                            <div className='options'>
                                <label htmlFor="spiralbinding">Spiral Binding for Rs.20 per book</label>
                                <input type="checkbox" name="service" id="spiralbinding" />
                            </div>
<code>Upload your documents when uploaded using whatsapp, also mention how the order should be printed</code>
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
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send using whatsapp"}
                </button>
            </form>

        </div>
    )
}

export default StationaryForm