"use client"

import React, { useState } from 'react'
import { useQRCode } from 'next-qrcode';

const Food = (props) => {
    const { Canvas } = useQRCode()
    const [username, setUsername] = useState("");
    const [userphone, setUserphone] = useState("");
    const [litti, setLitti] = useState("Litti")
    const [samosa, setSamosa] = useState("Samosa");
    const [litti_chaat, setLitti_chaat] = useState("Litti chaat")
    const [samosa_chaat, setSamosa_chaat] = useState("Samosa chaat");
    const [bhojan, setBhojan] = useState("Breakfast/Lunch/Dinner");
    const [chai, setTeasetChai] = useState("Chai");
    const [paymentMode, setPaymentMode] = useState("")
    const [tid, setTid] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const [postPay, setPostPay] = useState("Pay after service")
    const [sweets, setSweets] = useState("Mithai")
    const [sweetname, setSweetname] = useState("")

    const orders = new Array();
// let sweetCheckbox = document.getElementById('sweets');
//     const enableText = () => {
        
//         let sweetText = document.getElementById('sweetname');
//         if (sweetCheckbox.checked) {
//             sweetText.disabled = false;
//         } else {
//             sweetText.disabled = true;
//         }
//     }
    const enableTid = () => {
        const paynow = document.getElementById('paynow');
        const tid = document.getElementById('tid')
        const upipay = document.getElementById('pay_upi')
        if (paynow.checked) {
            upipay.style.display = "block";
            tid.disabled = false
        }
        else {
            upipay.style.display = "none";
            tid.disabled = true;
        }
    }
    const sendData = async (e) => {
        e.preventDefault();
        let litti = document.getElementById('litti');
        let samosa = document.getElementById('samosa');
        let litti_chaat = document.getElementById('litti_chaat');
        let samosa_chaat = document.getElementById('samosa_chaat');
        let bhojan = document.getElementById('bhojan');
        let chai = document.getElementById('chai');

        if (litti.checked) {
            orders.push("Litti")
        } if (samosa.checked) {
            orders.push("Samosa")
        } if (litti_chaat.checked) {
            orders.push("Litti chaat")
        } if (samosa_chaat.checked) {
            orders.push("Samosa chaat")
        } if (bhojan.checked) {
            orders.push("Breakfast/Lunch/Dinner")
        } if (chai.checked) {
            orders.push("Chai")
        }
        //  if (sweetCheckbox.checked) {
        //     orders.push(sweetText.value)
        // }

        const list = () => {
            orders.forEach(element => {
                orders.join("-", orders + "\n")
            });
            return orders;
        }
        console.log(orders);

        let orderSummary = "Name: " + username + "\n" + "Phone: " + userphone + "\n" + orders + "\n" + tid
        console.log(orderSummary);
        let url = process.env.NEXT_PUBLIC_BACKEND_URL;


       
        let data = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: username,
                phone: userphone,
                service: "Khana",
            })
        })
        let res = await data.json();
        alert(res.message);
        setIsSubmitting(false);
        const message = `From website \n Name: ${username}\nPhone: ${userphone}\n${orderSummary}`;

        const waUrl = `https://wa.me/${process.env.NEXT_PUBLIC_PAY_MERCHANT}?text=${encodeURIComponent(message)}`;

        window.location.href = waUrl;
       

    }


    return (
        <div className='foodFormContainer'>

            <form onSubmit={sendData}>
                <h2>Ordering food</h2>
                <input type="text" name="username" id="" className='text' value={username} placeholder='Enter your name' onChange={(e) => { setUsername(e.target.value) }} required />
                <input type="number" name="phonenum" id="" className='text' value={userphone} placeholder='Enter your phone number' onChange={(e) => { setUserphone(e.target.value) }} required />
                <label htmlFor="order">Select your order</label>
                <div id='foodContainer'>
                    <div>
                        <label htmlFor="litti">Litti for Rs. 10 per piece (Fried)</label>
                        <input type="checkbox" name="item" id="litti" />

                    </div>
                    <div>
                        <label htmlFor="samosa">Samosa for Rs. 10 per piece</label>
                        <input type="checkbox" name="item" id="samosa" />
                    </div>
                    <div>
                        <label htmlFor="litti_chaat">Litti Chaat for Rs. 25 per full plate</label>
                        <input type="checkbox" name="item" id="litti_chaat" />
                    </div>
                    <div>
                        <label htmlFor="samosa_chaat">Samosa Chaat for Rs. 25 per full plate</label>

                        <input type="checkbox" name="item" id="samosa_chaat" />
                    </div>
                    <div>
                        <label htmlFor="bhojan">Bhojan Rs.30/Rs.50/Rs.70</label>
                        <input type="checkbox" name="item" id="bhojan" />
                    </div>
                    <div>
                        <label htmlFor="chai">Chai for Rs. 10 per cup</label>


                        <input type="checkbox" name="item" id="chai" />
                    </div>
                    <div>
                        <label htmlFor="sweets">Sweets</label>

                        <input type="checkbox" name="item" id="sweets" />


                        <input type="text" name="" id="sweetname" disabled='disabled' className='text' value={sweetname} placeholder='Enter sweets names' onChange={(e) => { setSweetname(e.target.value) }} />
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
                                Pay later through UPI/Cash
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

export default Food;