import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import AiChat from "./pages/AiChat";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Start from "./pages/Start";
function App() {
  return (
    <Routes>
      <Route path="/start" element={<Start />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/ai-chat" element={<AiChat />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
