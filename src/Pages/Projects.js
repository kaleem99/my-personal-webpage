import React, { useEffect, useState } from "react";
import "./Projects.css";
import { GoRepo } from "react-icons/go";

const Projects = () => {
  console.log(process.env.REACT_APP_GITHUB_BEARER_TOKEN);
  const BearerToken = process.env.REACT_APP_GITHUB_BEARER_TOKEN;
  const perPage = 100; // Maximum number of repositories per page
  const page = 1;
  const [state, setState] = useState([]);
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

  return (
    <div className="grid-container projectsPage">
      <div className="ProjectsPage">
        {state
          .filter((repo) => repo.language != null)
          .map((data, i) => (
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
                  href={data.html_url}
                  className="ProjectsSubheading2"
                  rel="noreferrer"
                >
                  Github URL Link
                </a>
                <p>Private: {data.private.toString()}</p>
                <p>Github Pages: {data.has_pages.toString()}</p>
                <p>Languages: {data.language}</p>

                <div className="ProjectsOnly">
                  {/* <ReadMore text={data.information} maxLength={50} /> */}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
