import "../css/Common.css";
import mainRoul from "../assets/images/mainRoul.svg";
import ProjectLogo from "../assets/images/ProjectLogo.svg";
import { useState } from "react";
import RouletteModal from "../components/modals/RouletteModal";
import Card from "./Card";
function Home() {
  const [showModal, setShowModal] = useState(false);
  const handleImageClick = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="homebg">
        <div className="content">
          <img src={ProjectLogo} className="aiImg" />
          <img src={mainRoul} onClick={handleImageClick} className="roulImg" />
          {showModal && <RouletteModal onClose={() => setShowModal(false)} />}
          <Card variant="weather" />
          <Card variant="brief" />
        </div>
      </div>
    </>
  );
}

export default Home;
