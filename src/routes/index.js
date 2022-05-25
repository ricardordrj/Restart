import { Routes, Route } from "react-router-dom";
import { Home, About, Gallery } from "../views";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/gallery" element={<Gallery />} />
  </Routes>
);

export default Router;
