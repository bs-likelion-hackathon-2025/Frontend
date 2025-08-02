import { useNavigate } from "react-router-dom";
import "../../css/StartPage.css";
import "../../css/Text.css";
import "../../css/Common.css";
import "../../css/Button.css";
import ProjectLogo from "../../assets/images/ProjectLogo.svg";
import PitstopLogo from "../../assets/images/PitstopLogo.svg";
function LoadingPage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/loadingPage1");
  };
  return (
    <div className="appWrapper">
      <div className="app">
        <img className="pitstopLogo" src={PitstopLogo} />
        <img className="ProjectLogo" src={ProjectLogo} />
        <button className="btn-lg text-base text-bold " onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
}

export default LoadingPage;
