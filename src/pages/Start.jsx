import "../css/Common.css";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="homebg">
        <div className="content">
          로딩페이지
          <button onClick={goHome}>시작하기</button>
        </div>
      </div>
    </>
  );
}

export default Start;
