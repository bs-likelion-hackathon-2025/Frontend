import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import AiChat from "./pages/AiChat";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/ai-chat" element={<AiChat />} />
      </Route>
    </Routes>
  );
}

export default App;
