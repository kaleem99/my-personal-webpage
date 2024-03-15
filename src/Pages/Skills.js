import { SkillsSection } from "../Contants.js/NavSections";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="grid-container skillsPage">
      <div className="SkillsPage">
        {SkillsSection.map((data) => (
          <div className="skillsItem">
            <div className="SkillInnerItem">
              <p className="SkillsIcon">{data.function()}</p>
              <h2 className="SkillsSubheading">{data.title}</h2>
              <div className="skillsOnly">
                {data.skills.map((item) => (
                  <li>{item}</li>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
