import "./Modal.css";
import "../../css/Text.css";
import { useEffect, useRef } from "react";
import shortLogo from "../../assets/images/shortLogo.svg";
function RouletteModal({ onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modalWrapper">
      <div className="modal" ref={modalRef}>
        <button className="modalClose" onClick={onClose} type="button">
          x
        </button>
        <div className="modalText">
          <img src={shortLogo} />
          <span className=" text-2xl ">
            고민은 짧게, 선택은 랜덤으로!
            <br />
            오늘 메뉴 추천 드릴게유
          </span>
        </div>
      </div>
    </div>
  );
}

export default RouletteModal;
