import { GoRepo } from "react-icons/go";

const AllProjects = ({ state }) => {
  return (
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
  );
};
export default AllProjects;
