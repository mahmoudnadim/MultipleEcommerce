import "./Mainfeatures.css"
import DCard from "../../components/DCard/DCard";
import { DiPhp,DiMysql } from "react-icons/di";
import { FaVuejs,FaLaravel  } from "react-icons/fa";

export default function Mainfeatures() {
  return (
    <div class="CP mainContainer mainFeaturesContainer_c">
        <p class="sectionTitle w-full">Techno</p>
        <div class="features_c flex flex-wrap justify-center items-center gap-4">
            <DCard icon={<DiPhp />} title="Native php"/>
            <DCard icon={<DiMysql />} title="MySQL"/>
            <DCard icon={<FaLaravel />} title="Laravel"/>
            <DCard icon={<FaVuejs />} title="Vuejs"/>
        </div>
    </div>
  )
}
