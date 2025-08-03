import "../../css/Layout.css";
import aiChatLogo from "../../assets/images/aiChatLogo.png";
import shopLogo from "../../assets/images/shopLogo.png";
import HomeLogo from "../../assets/images/homeLogo.png";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footerBtn text-sm " onClick={() => navigate("/ai-chat")}>
        <img src={aiChatLogo} />
        <div>챗봇</div>
      </div>
      <div className="footerBtn-center" onClick={() => navigate("/")}>
        <img src={HomeLogo} />
      </div>
      <div className="footerBtn text-sm" onClick={() => navigate("/shop")}>
        <img src={shopLogo} />
        <div>천안도감</div>
      </div>
    </footer>
  );
}

export default Footer;
