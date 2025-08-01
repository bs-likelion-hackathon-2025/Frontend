import AppWrapper from "./AppWrapper";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <AppWrapper>
      <Header />
      <Outlet />
      <Footer />
    </AppWrapper>
  );
}

export default Layout;
