import Image from "next/image";
import styles from "./page.module.css";
import { Food } from "../../food-order/page";
import StationaryForm from "./stationary-order/page";
import Navbar from "./Navbar";
import Head from "next/head";
export default function Home() {
//console.log(process.env.NEXT_PUBLIC_VENDOR_PHONE);

  return (
   
    <div className={styles.page}>
       <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2797882078011980"
     crossorigin="anonymous"></script>
    </Head>
      <main className={styles.main}>
       
        <div className="container" >
          <p>
            Welcome to Kasma Services! We are dedicated to providing you with
            top-notch <a href="#snacks">snacks (coming soon) </a>and <a href="#Stationary">cyber cafe stationary services</a>. Whether you're craving
            delicious meals or need essential stationery supplies, we've got you
            covered. Our user-friendly platform allows you to easily browse menus,place orders, and connect with local vendors. Experience convenience, quality, and reliability all in one place with Kasma Services. Your
            satisfaction is our priority!
</p>
            <div className="code" style={{display:'flex',flexDirection:'column'}}>
              <code>Charges for snacks: Charges are mentioned but if you ordered for delievery then the prices will be increased from Rs.10 to Rs. 20</code>
            <code>Cyber cafe services will be delievered only at evening time</code>
            </div>
         


<div className="partners" id="Partners">
  <p>
  <h3>Our partners</h3>
  <ul>
    <li>Sharma Cyber Cafe</li>
    <li>Nandu hotel and mess</li>
    
  </ul>
</p>
</div>
        </div>
        
        <div id="Stationary">
            <StationaryForm cyberCafe="Sharma Cyber Cafe" upiID={`upi://pay?pa=${process.env.NEXT_PUBLIC_SHARMA_CYBER_CAFE}@upi&pn=Sharma%20Cyber%20Cafe&cu=INR`}/>
        </div>
      </main>
    </div>
  );
}
