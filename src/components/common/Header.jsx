import "../../css/Layout.css";
import PitstopLogo from "../../assets/images/PitstopLogo.svg";
import menubar from "../../assets/images/menubar.png";
function Header() {
  return (
    <header className="header">
      <img className="logo" src={PitstopLogo} alt="Pitstoplogo" />
      <img src={menubar} alt="Navigationmenu" />
    </header>
  );
}

export default Header;
