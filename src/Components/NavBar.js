import { NavSections } from "../Contants.js/NavSections";
import { useState, useEffect } from "react";
import "./Components.css";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom
import { FaShapes, FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const location = useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // E
  console.log(window.innerWidth);
  if (windowWidth < 600) {
    return (
      <div className={`NavBar ${isMenuOpen ? "open" : "close"}`}>
        <div className="navA Portfolio">
          <p>
            <FaShapes />
          </p>
          <p>{"\t"}Portfolio</p>
        </div>
        <div className="menuToggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        {isMenuOpen && (
          <div className="menuItems">
            {NavSections.map((nav) => (
              <div className="navItem" key={nav}>
                <a
                  href={nav}
                  className={
                    location.slice(1) === nav ||
                    (location === "/" && nav === "Home")
                      ? "navA active"
                      : "navA"
                  }
                >
                  {nav}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="NavBar">
        <div className="navA Portfolio">
          <p>
            <FaShapes />
          </p>
          <p>{"\t"}Portfolio</p>
        </div>
        {NavSections.map((nav) => (
          <div className="navItem">
            <a
              href={nav}
              className={
                location.slice(1) === nav ||
                (location === "/" && nav === "Home")
                  ? "navA active"
                  : "navA"
              }
            >
              {nav}
            </a>
          </div>
        ))}
      </div>
    );
  }
};

export default NavBar;
