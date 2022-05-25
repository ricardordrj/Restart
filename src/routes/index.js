import { Routes, Route } from "react-router-dom";
import { Home, About } from "../views";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default Router;
