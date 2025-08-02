import "../../css/Layout.css";
import cHomeLogo from "../../assets/images/c-HomeLogo.png";
import aiChatLogo from "../../assets/images/aiChatLogo.png";
import Community from "../../assets/images/CommunityLogo.png";
import mypageLogo from "../../assets/images/mypageLogo.png";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div
        className="footerBtn text-sm btnclick"
        onClick={() => navigate("/home")}
      >
        <img src={cHomeLogo} />
        <div className="text-bold ">홈</div>
      </div>
      <div className="footerBtn text-sm" onClick={() => navigate("/ai-chat")}>
        <img src={aiChatLogo} />
        <div>챗봇</div>
      </div>
      <div className="footerBtn text-sm">
        <img src={Community} />
        <div>커뮤니티</div>
      </div>
      <div className="footerBtn text-sm">
        <img src={mypageLogo} />
        <div>마이페이지</div>
      </div>
    </footer>
  );
}

export default Footer;
