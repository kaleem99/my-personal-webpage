import { WorkSection } from "../Contants.js/NavSections";
import ReadMore from "./Readmore";
const WorkExperience = () => {
  return (
    <div className="WorkPage">
      {WorkSection.map((data, i) => (
        <div className="workItem">
          <div className="SkillInnerItem">
            {/* <p className="workIcon">{data.function()}</p> */}
            <div className="WorkImagesItem">
              <img className={`WorkImages a${i}`} src={data.image} alt="" />
            </div>
            <h2 className="workSubheading">{data.Company}</h2>
            <h3 className="workSubheading2">{data.title}</h3>

            <div className="workOnly">
              <ReadMore text={data.information} maxLength={50} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
