import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/american/:type" element={<Cuisine />} />
      <Route path="/thai/:type" element={<Cuisine />} />
      <Route path="/japanese/:type" element={<Cuisine />} />
    </Routes>
  );
}

export default Pages;
