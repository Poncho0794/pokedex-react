import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import FourOFour from "../views/404";
import Home from "../views/Home";
import PokeDetail from "../views/PokeDetail";
export default function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pokemon/:id" exact element={<PokeDetail />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </Router>
  );
}
