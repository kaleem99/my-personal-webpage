import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../Pages/Home";
import Work from "../Pages/Work";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import Skills from "../Pages/Skills";
const Main = () => {
  return (
    <Router>
      <NavBar />
      <div className="Main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />

          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
