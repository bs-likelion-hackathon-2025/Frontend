import "../../css/Common.css";
import PitstopLogo from "../../assets/images/PitstopLogo.png";
import menubar from "../../assets/images/menubar.png";
function Header() {
  return (
    <header className="header">
      <img className="logo" src={PitstopLogo} />
      <img className="menuIcon" src={menubar} />
    </header>
  );
}

export default Header;
