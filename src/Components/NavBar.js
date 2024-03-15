import { NavSections } from "../Contants.js/NavSections";
import "./Components.css";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom
import { FaShapes } from "react-icons/fa";

const NavBar = () => {
  const location = useLocation().pathname;
  console.log(location);
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
              location.slice(1) === nav || (location === "/" && nav === "Home")
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
};

export default NavBar;
