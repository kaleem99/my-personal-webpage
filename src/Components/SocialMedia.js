import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Components.css";
import { BiLogoGmail } from "react-icons/bi";
const arr = ["FaGithub", "FaLinkedin", "BiLogoGmail"];
const Icons = ({ num }) => {
  switch (num) {
    case 0:
      return <FaGithub />;
    case 1:
      return <FaLinkedin />;
    default:
      return <BiLogoGmail />;
  }
};
const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <div className="socialMediaInnerContent">
        {arr.map((func, i) => (
          <div className="Icon">
            <Icons num={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
