import "../css/Common.css";
import { useEffect, useState } from "react";
import RouletteModal from "../components/modals/RouletteModal";
function Home() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(true);
  }, []);
  return (
    <div className="app">
      {" "}
      {showModal && <RouletteModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Home;
