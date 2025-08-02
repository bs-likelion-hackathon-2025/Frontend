import { useNavigate } from "react-router-dom";
import "../../css/StartPage.css";
import "../../css/Text.css";
import "../../css/Common.css";
import "../../css/Button.css";
import ProjectLogo from "../../assets/images/ProjectLogo.svg";

function LoadingPage1() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/loadingPage2");
  };
  return (
    <div className="appWrapper">
      <div className="app">
        <div className="textGroup">
          <span className="text-3xl text-bold">
            오늘 뭐 먹지? <br />더 이상 고민 마세요!
          </span>
          <span className="text-base text-gray ">
            룰렛 & AI 챗봇이 당신의 입맛을 딱! 맞춰드립니다.
            <br />
            빠르게, 재밌게, 당신만의 메뉴를 찾아보세요!
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

export default LoadingPage1;
