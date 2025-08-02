import "../../css/Common.css";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="appWrapper">
      <div className="app">
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
