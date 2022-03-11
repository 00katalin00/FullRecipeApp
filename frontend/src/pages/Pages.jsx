import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/recipe/:name" element={<Recipe />} />
      <Route path="/searched/:search" element={<Searched />} />
    </Routes>
  );
}

export default Pages;
