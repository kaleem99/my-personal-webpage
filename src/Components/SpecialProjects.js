import { GoRepo } from "react-icons/go";
import ReadMore from "./Readmore";
const data = [
  {
    name: "Validate A South African ID",
    Link: "https://kaleem99.github.io/React-Validate-SA-ID/",
    text: "This web app partially validates South African ID numbers and can determine if the ID number corresponds to a male or female individual, along with their date of birth.",
  },
  {
    name: "Interactivator",
    Link: "https://kaleem99.pythonanywhere.com/interactivator/NUS-BCA/roc17q5zlb",
    text: "Video editing software tool allowing LT to edit University partner course videos by adding subtitles, adding quiz components, logos and headings.",
  },
  {
    name: "Interactive Simulation",
    Link: "https://kaleem99.github.io/testingDeployment/",
    text: "ReactJS project that enhances students' learning experience, making it more fun and interactive. Users have the option to experience a simulated negotiation between a candidate and a recruiter.",
  },
  {
    name: "The Blazing Grill Mobile App",
    Link: "https://play.google.com/store/apps/details?id=com.anonymous.blazinggrills&hl=en&gl=US",
    text: "This is a food ordering app designed for users to place orders via their mobile phones. The app utilizes Google Cloud and Firebase for data storage and is connected to a frontend application that enables workers to accept orders and track daily sales and orders.",
  },
];
const SpecialProjects = () => {
  return (
    <div className="ProjectsPage" style={{ width: "100%" }}>
      {data.map((data, i) => (
        <div className="ProjectsItem">
          <div className="ProjectsInnerItem">
            <div className="ProjectsIconAndName">
              <p className="ProjectsIcon">
                <GoRepo />
              </p>
              <h2 className="ProjectsSubheading">{data.name}</h2>
            </div>
            <br></br>
            <a
              target="_blank"
              href={data.Link}
              className="ProjectsSubheading2"
              rel="noreferrer"
            >
              Project Deployment Link
            </a>
            {/* <p>Private: {data.private.toString()}</p>
              <p>Github Pages: {data.has_pages.toString()}</p>
              <p>Languages: {data.language}</p> */}

            <div className="ProjectsOnly">
              <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
                App information:
              </h2>
              <ReadMore text={data.text} maxLength={50} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialProjects;
