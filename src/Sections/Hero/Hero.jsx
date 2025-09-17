import "./Hero.css"
import heroImg from "../../assets/img/heroImg.jpg"

export default function Hero() {
  return (
    <div className="CP heroContainer">
        <div className="heroLeft">
            <p className="heroTitle">Your Marketplace, Your Rules</p>
            <p className="heroDesc">Open a store, sell products, and get paid online—fast and easy.</p>
        </div>
        <div className="heroRight rounded-xl overflow-hidden">
            <img src={heroImg} alt="" />
        </div>
    </div>
  )
}
