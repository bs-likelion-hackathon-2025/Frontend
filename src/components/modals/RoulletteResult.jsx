import "./Modal.css";
import roul1 from "../../assets/images/roul1.svg";
import roul2 from "../../assets/images/roul2.svg";
import roul3 from "../../assets/images/roul3.svg";
import roul4 from "../../assets/images/roul4.svg";
import { useNavigate } from "react-router-dom";
const images = {
  양식: [roul3],
  한식: [roul2],
  중식: [roul4],
  일식: [roul1],
};
function RoulletteResult({ result, onClose }) {
  const navigate = useNavigate();

  const handleAskAi = () => {
    navigate("/ai-chat");
  };
  return (
    <div className="modalWrapper">
      <div className="resultmodal">
        <button className="modalClose" onClick={onClose}>
          x
        </button>

        <span className="resultText">
          룰렛 결과
          <br />
          오늘은 {result}이 나왔어유!
        </span>

        <img src={images[result]} alt={result} className="resultImg" />

        <div className="resultButtons">
          <button onClick={handleAskAi}>천둥이한테 물어보기</button>
          <button>추천식당 보기</button>
        </div>
      </div>
    </div>
  );
}
export default RoulletteResult;
