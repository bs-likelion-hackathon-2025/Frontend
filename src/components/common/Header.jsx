import "../../css/Common.css";
import PitstopLogo from "../../assets/images/PitstopLogo.png";
import menubar from "../../assets/images/menubar.png";
function Header() {
  return (
    <header className="header">
      <img className="logo" src={PitstopLogo} alt="Pitstop logo" />
      <img className="menuIcon" src={menubar} alt="Navigation menu" />
    </header>
  );
}

export default Header;
