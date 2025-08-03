import "./Modal.css";
import "../../css/Text.css";
import { useEffect, useRef } from "react";

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
        <button className="modalClose text-2xl" onClick={onClose} type="button">
          x
        </button>
        <div className="modalText">
          <span className="text-base text-bold">
            고민은 짧게, 선택은 랜덤으로!
          </span>
          <span className=" text-2xl text-bold">오늘 메뉴 추천 드릴게유</span>
          <span className="modalInfo text-sm">
            매일 한 번! 룰렛은 24시간마다 다시 돌릴 수 있어요.
          </span>
        </div>
      </div>
    </div>
  );
}

export default RouletteModal;
