import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormTesting from "./components/formTesting/formTesting";
import App from "./App";

function RoutingSystem() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<FormTesting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutingSystem;
