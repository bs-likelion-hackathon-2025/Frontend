import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import AiChat from "./pages/AiChat";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import LoadingPage from "./pages/Loading/LoadingPage";
import LoadingPage1 from "./pages/Loading/LoadingPage1";
import LoadingPage2 from "./pages/Loading/LoadingPage2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route path="/loadingPage1" element={<LoadingPage1 />} />
      <Route path="/loadingPage2" element={<LoadingPage2 />} />
      <Route path="/loadingPage3" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/ai-chat" element={<AiChat />} />
      </Route>
    </Routes>
  );
}

export default App;
