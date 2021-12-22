// import Articles from "./components/articles/articlesList";
import Main from "./components/main/main";
import FormTesting from "./components/formTesting/formTesting";
// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackEnd from "./components/backEnd/backEnd";

function App() {
  return (
    <>
      <img
        className="site-background-image"
        src={require("./img/beach.jpeg")}
        alt=""
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/form" element={<FormTesting />} />
          <Route path="/back-end" element={<BackEnd />} />
        </Routes>
      </BrowserRouter>
      {/* <FormTesting /> */}
      {/* <Main />
      <Articles /> */}
    </>
  );
}

export default App;
