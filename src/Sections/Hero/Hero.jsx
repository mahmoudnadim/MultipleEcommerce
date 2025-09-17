import "./Hero.css"
import heroImg from "../../assets/img/heroImg.jpg"

export default function Hero() {
  return (
    <div class="CP heroContainer">
        <div class="heroLeft">
            <p class="heroTitle">Your Marketplace, Your Rules</p>
            <p class="heroDesc">Open a store, sell products, and get paid online—fast and easy.</p>
        </div>
        <div class="heroRight rounded-xl overflow-hidden">
            <img src={heroImg} alt="" />
        </div>
    </div>
  )
}
