import "./VideoSection.css"
import video_1 from "../../assets/videos/video_1.mp4"

export default function VideoSection() {
  return (
    <div className="CP VideoSection_c">
      <p class="sectionTitle w-full">Project About</p>
      <div className=" AboutProject grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div class="videoCardContainer">
          <video controls>
              <source src={video_1} type="video/mp4" />
          </video>
        </div>
        <div className="AboutProjectContent">
            <p className="AboutProjectContentTitle mb-3">Build Your Own <br/> Online Store in Minutes</p>
            <p className="AboutProjectContentDesc mb-5">Join our multi-vendor marketplace to create your shop, showcase products, chat with buyers, and accept secure online payments—all in a fully responsive design that works beautifully on mobile, tablet, and laptop.</p>
        </div>
      </div>
    </div>
  )
}