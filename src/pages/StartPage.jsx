import "../css/StartPage.css";
import "../css/Text.css";
import "../css/Common.css";
import { useNavigate } from "react-router-dom";
import loginBtn from "../assets/images/loginBtn.svg";
function StartPage() {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/home");
  };
  return (
    <div className="appWrapper">
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
        <img className="kakaoLogin" src={loginBtn} onClick={handleStart} />
      </div>
    </div>
  );
}

export default StartPage;
