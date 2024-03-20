import React, { useState } from "react";
import ReadMore from "../Components/Readmore";
import { WorkSection } from "../Contants.js/NavSections";
import WorkExperience from "../Components/WorkExperience";
import EducationHistory from "../Components/EducationHistory";

import "./Work.css";
const options = ["Work Experience", "Education History"];

const Work = () => {
  const [type, setType] = useState("");

  const renderPortfolio = () => {
    switch (type) {
      case options[0]:
        return <WorkExperience />;
      case options[1]:
        return <EducationHistory />;
      default:
        return <WorkExperience />;
    }
  };
  return (
    <div className="grid-container workPage">
      <div>
        <select
          onChange={(e) => setType(e.target.value)}
          className="SelectFilter"
        >
          {options.map((val) => (
            <option value={val}>{val}</option>
          ))}
        </select>
        <div>{renderPortfolio()}</div>
      </div>
    </div>
  );
};

export default Work;
