import { useNavigate } from "react-router-dom";
import "../../css/StartPage.css";
import "../../css/Text.css";
import "../../css/Common.css";
import "../../css/Button.css";
import ProjectLogo from "../../assets/images/ProjectLogo.svg";

function LoadingPage3() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/loadingPage4");
  };
  return (
    <div className="appWrapper">
      <div className="app">
        <div className="textGroup">
          <span className="text-3xl text-bold">
            여그 천안, <br />
            이야기 한 바탕 시작해볼까?
          </span>
          <span className="text-base text-gray ">
            지금, 우리 동네의 진짜 이야기를 함께 만들어보세요.
          </span>
        </div>
        <img className="ProjectLogo" src={ProjectLogo} />
        <button className="btn-lg text-base text-bold " onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
}

export default LoadingPage3;
