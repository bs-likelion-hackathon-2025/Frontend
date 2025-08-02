import "../../css/Layout.css";

import PitstopLogo from "../../assets/images/PitstopLogo.svg";
import menubar from "../../assets/images/menubar.png";
import { useState, useEffect } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);
  return (
    <header className="header">
      <img className="logo" src={PitstopLogo} alt="Pitstoplogo" />
      <img
        src={menubar}
        alt="Navigationmenu"
        onClick={() => setIsMenuOpen(true)}
      />
      {isMenuOpen && (
        <div className="menuScreen" onClick={() => setIsMenuOpen(false)}>
          <div className="sidebarMenu">
            <button
              className="sidebarClose"
              onClick={() => setIsMenuOpen(false)}
            >
              ×
            </button>
            <ul>
              <li>챗봇</li>
              <li>커뮤니티</li>
              <li>찜</li>
              <li>천안장터</li>
              <li>마이페이지</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
