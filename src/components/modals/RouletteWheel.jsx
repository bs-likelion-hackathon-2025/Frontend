import { useState } from "react";
import "./RouletteWheel.css";
import roul1 from "../../assets/images/roul1.svg";
import roul2 from "../../assets/images/roul2.svg";
import roul3 from "../../assets/images/roul3.svg";
import roul4 from "../../assets/images/roul4.svg";
import spinPointer from "../../assets/images/spinPointer.svg";
const options = ["양식", "한식", "중식", "일식"];
const images = {
  양식: [roul3],
  한식: [roul2],
  중식: [roul4],
  일식: [roul1],
};

export default function RouletteWheel({ onResult }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationDegree, setRotationDegree] = useState(0);

  const spinWheel = () => {
    if (isSpinning) return;

    const randomIndex = Math.floor(Math.random() * options.length);
    const degree = 360 * 10 + randomIndex * (360 / options.length);

    setIsSpinning(true);
    setRotationDegree(degree);

    setTimeout(() => {
      const result = options[randomIndex];
      onResult(result);
      setIsSpinning(false);
    }, 4000);
  };

  return (
    <div className="roulette-container">
      <div className="wheelWrapper">
        <div className="pointerIcon">
          <img src={spinPointer} />
        </div>
        <div
          className="wheel"
          style={{ transform: `rotate(${rotationDegree}deg)` }}
        >
          {options.map((opt, idx) => (
            <div key={opt} className={`sector sector-${idx}`}>
              <img src={images[opt]} alt={opt} />
              <span>{opt}</span>
            </div>
          ))}
          <button
            className="startBtn"
            onClick={spinWheel}
            disabled={isSpinning}
          >
            START
          </button>
        </div>
      </div>
    </div>
  );
}
