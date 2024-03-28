import React, { useEffect, useState } from "react";
import "./Projects.css";
import AllProjects from "../Components/AllProjects";
import SpecialProjects from "../Components/SpecialProjects";
const options = ["All Github Projects", "Special Projects"];
const Projects = () => {
  console.log(process.env.REACT_APP_GITHUB_BEARER_TOKEN);
  const BearerToken = process.env.REACT_APP_GITHUB_BEARER_TOKEN;
  const perPage = 100; // Maximum number of repositories per page
  const page = 1;
  const [state, setState] = useState([]);
  const [type, setType] = useState(options[0]);
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/user/repos?per_page=${perPage}&page=${page}&affiliation=owner`,
          {
            headers: {
              Authorization: `token ${BearerToken}`,
              Accept: "application/vnd.github.v3+json", // Recommended accept header
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setState(data);
        console.log(data); // Log the fetched repositories to check if they are coming through
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);
  const renderprojectTypes = () => {
    switch (type) {
      case options[0]:
        return <AllProjects state={state} />;
      case options[1]:
        return <SpecialProjects />;
      default:
        return <AllProjects state={state} />;
    }
  };
  return (
    <div className="grid-container projectsPage">
      <div className="ProjectsPageInnerDiv">
        <select
          onChange={(e) => setType(e.target.value)}
          className="SelectFilter"
        >
          {options.map((val) => (
            <option value={val}>{val}</option>
          ))}
        </select>
        <div>{renderprojectTypes()}</div>
      </div>
    </div>
  );
};

export default Projects;
