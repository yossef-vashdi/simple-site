import Main from "./components/main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
