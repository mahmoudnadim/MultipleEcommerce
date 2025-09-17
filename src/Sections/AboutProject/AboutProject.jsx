import "./AboutProject.css"
import { MdOutlineDesignServices,MdOutlineSecurity,MdOutlineTranslate  } from "react-icons/md";
import DCard from "../../components/DCard/DCard"
import { HiOutlineRocketLaunch } from "react-icons/hi2"

export default function AboutProject() {
  return (
    <div className="CP AboutProject_c">
      <p className="sectionTitle w-full">Key Features</p>
      <div className="AboutProjectContentList flex flex-wrap justify-center items-center gap-4">
          <DCard icon={<MdOutlineDesignServices />} title="Simple and Flexible:" desc="Designed for ease of use with a clean, intuitive interface."/>
          <DCard icon={<MdOutlineSecurity />} title="Security & Oversight:" desc="Strong protection and monitoring for your financial system."/>
          <DCard icon={<HiOutlineRocketLaunch />} title="Fast & Accurate:" desc="Delivers high speed and precise performance."/>
          <DCard icon={<MdOutlineTranslate  />} title="Website Translator" desc="Break language barriers with our powerful Website Translator."/>
      </div>
    </div>
  )
}
