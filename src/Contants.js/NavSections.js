import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa6";
import { TbDeviceMobileCode } from "react-icons/tb";
import { TbBrandVscode } from "react-icons/tb";
import { IoServerSharp } from "react-icons/io5";

import { FaGithub } from "react-icons/fa";

import twoU from "../assets/images/2U.webp";
import umuzi from "../assets/images/Umuzi.png";
import learningmate from "../assets/images/LearningMate.png";
import education from "../assets/images/Education.png";
const NavSections = ["Home", "Skills", "Work", "Projects", "Contact"];
const SkillsSection = [
  {
    title: "Web Development",
    function: FaLaptopCode,
    skills: [
      "HTML",
      "CSS",
      "JavaScript (including ES6+)",
      "React.js",
      "Node.js (with Express.js)",
      "RESTful APIs",
      "Version Control (Git)",
    ],
  },
  {
    title: "Mobile Development",
    function: TbDeviceMobileCode,
    skills: [
      "React Native",
      "Mobile UI/UX Design",
      "Cross-platform Development",
    ],
  },
  {
    title: "Software Development",
    function: BsFillFileEarmarkCodeFill,
    skills: [
      "Java",
      "Object-Oriented Programming",
      "Software Architecture",
      "Data Structures & Algorithms",
    ],
  },
  {
    title: "Github",
    function: FaGithub,
    skills: [
      "Version Control (Git)",
      "Github Workflows",
      "Collaborative Development",
    ],
  },
  {
    title: "Web Design",
    function: FaCodepen,
    skills: [
      "UI/UX Design Principles",
      "Responsive Web Design",
      "Adobe XD or Figma (Design Tools)",
    ],
  },
  {
    title: "Additional Skills",
    function: IoServerSharp,
    skills: [
      "PostgreSQL",
      "RESTful API Design",
      // "GraphQL",
      "Testing (e.g., Jest)",
      "Webpack & Babel",
      "Debugging & Troubleshooting",
    ],
  },
  {
    title: "Tools",
    function: TbBrandVscode,
    skills: [
      "Visual Studio Code",
      "X Code",
      // "GraphQL",
      "Android Studio",
      "IntelliJ",
    ],
  },
];

const WorkSection = [
  {
    Company: "Gauteng Department of Education",
    title: "Tech Support Intern",
    image: education,
    experience: ["HTML", "CSS", "JavaScript (including ES6+)"],
    information:
      "The Gauteng Department of Education is a provincial government department under the Gauteng Provincial Government responsible for overseeing and regulating the basic education system in the Gauteng province of South Africa in accordance with the South African Schools Act of 1996.",
  },
  {
    Company: "Umuzi",

    title: "Junior Web Developer",
    image: umuzi,

    information:
      "Umuzi is an organization that trains top talented individuals for digital leading roles at employers.",
  },
  {
    Company: "2U",

    title: "Web Developer",
    image: twoU,
    information:
      "2U, Inc. is an American educational technology company that contracts with non-profit colleges and universities to build, deliver and support online degree and non-degree programs. It is also the parent company of edX.",
  },
  {
    Company: "LearningMate",

    title: "Software Engineer",
    image: learningmate,
    information:
      "LearningMate is a technology company specializing in teaching and learning solutions using digital tools and strong design principles. With over 20 years of experience, they have a global presence, serving various education sectors and promoting accessible, affordable, and effective education.",
  },
];
export { NavSections, SkillsSection, WorkSection };
