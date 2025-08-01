import "../css/StartPage.css";
import AppWrapper from "../components/common/AppWrapper";
import { useNavigate } from "react-router-dom";
function StartPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/home");
  };
  return (
    <AppWrapper>
      <div className="app">
        <div className="textGroup">
          <span className="text-4xl text-bold">
            천안의 이야기들이 <br />
            인자 시작되는 겨!
          </span>
          <span className="text-xs text-gray ">
            AI가 지금 당신을 기다리고 있어유
          </span>
        </div>
        <button className="btn-lg text-bold" onClick={handleStart}>
          시작해봐유
        </button>
      </div>
    </AppWrapper>
  );
}

export default StartPage;
