import { useNavigate } from "react-router-dom";
import "../../css/StartPage.css";
import "../../css/Text.css";
import "../../css/Common.css";
import "../../css/Button.css";
import ProjectLogo from "../../assets/images/ProjectLogo.svg";

function LoadingPage2() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/loadingPage3");
  };
  return (
    <div className="appWrapper">
      <div className="app">
        <div className="textGroup">
          <span className="text-3xl text-bold">
            우리 동네 <br />
            유쾌한 이야기부터 숨은 명소까지!
          </span>
          <span className="text-base text-gray ">
            유머, 정보, 맛집 탐방기, 관광지 추천까지
            <br />
            취향이 비슷한 이웃들과 함께 나누는 따뜻한 커뮤니티
          </span>
        </div>
        <img className="ProjectLogo" src={ProjectLogo} />
        <button className="btn-lg font-base text-bold " onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
}

export default LoadingPage2;
