import Image from "next/image";
import styles from "./page.module.css";
import Food  from "./food-order/page";
import StationaryForm from "./cyber-cafe-order/page";
import Navbar from "./Navbar";
import StItem from "./stationary-order/page";
import Vegetables from "./groceries-and-vegetables/page";
import Drinks from "./drinks/page";

export default function Home() {
//console.log(process.env.NEXT_PUBLIC_VENDOR_PHONE);

  return (
   
    <div className={styles.page}>
       
      <main className={styles.main}>
       
        <div className="container" >
          <p>
            Welcome to Kasma Services! We are dedicated to providing you with
            top-notch <a href="#snacksnfood">snacks </a><a href="#stationary">stationary items</a>,<a href="#cybercafe">Cyber cafe</a>. Whether you're craving
            delicious meals or need essential stationery supplies, also need supply of vegetables and grocery items <a href="#vegetablesngroceries">Vegetables and groceries</a> we've got you
            covered. Our user-friendly platform allows you to easily browse menus,place orders, and connect with local vendors. Experience convenience, quality, and reliability all in one place with Kasma Services. Your
            satisfaction is our priority!
</p>
            <div className="code" style={{display:'flex',flexDirection:'column'}}>
              <code>Charges for snacks: Charges are mentioned but if you ordered for delievery then the prices will be increased from Rs.10 to Rs. 20</code>
            <code>Cyber cafe services will be delievered only at evening time</code>
            </div>
         


        </div>
        
        <div id="cybercafe">
            <StationaryForm cyberCafe="Sharma Cyber Cafe" upiID={`upi://pay?pa=${process.env.NEXT_PUBLIC_SHARMA_CYBER_CAFE}@upi&pn=Sharma%20Cyber%20Cafe&cu=INR`}/>
        </div>
        <div id="stationary">
          <StItem/>
        </div>
       <div id="snacksnfood">
         <Food upiID={`upi://pay?pa=${process.env.PAY_MERCHANT}@upi&pn=Kasma%20Services%Office&cu=INR`} />
       </div>
       <div id="drinks">
        <Drinks/>
        </div>
       <div id="vegetablesngroceries">
          <Vegetables/>
       </div>
      </main>
    </div>
  );
}
