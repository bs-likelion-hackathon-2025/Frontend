import "../css/StartPage.css";
import "../css/Text.css";
import "../css/Common.css";
import loginBtn from "../assets/images/loginBtn.svg";
import ProjectLogo from "../assets/images/ProjectLogo.svg";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const handleKakaoLogin = () => {
    window.location.href = `${
      import.meta.env.VITE_API_BASE_URL
    }/oauth2/authorization/kakao`;
  };
  const handleGoHome = () => {
    navigate("/home");
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
        <img className="kakaoLogin" src={loginBtn} onClick={handleKakaoLogin} />
        <button onClick={handleGoHome}>go</button>
      </div>
    </div>
  );
}

export default LoginPage;
