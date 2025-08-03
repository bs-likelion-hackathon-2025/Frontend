import "../css/Common.css";
import { useEffect, useState } from "react";
import RouletteModal from "../components/modals/RouletteModal";
function Home() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(true);
  }, []);
  return (
    <>
      <div className="homebg">
        <div className="content">홈</div>
      </div>
      {showModal && <RouletteModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Home;
