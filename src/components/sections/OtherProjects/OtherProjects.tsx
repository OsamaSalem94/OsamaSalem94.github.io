import React, { useContext, useState } from "react";
import { IProjectContent } from "../../../@types/Work";
import MainContext from "../../../MainContext";
import Button from "../../Button/Button";
import classes from "./OtherProjects.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";

interface Props {}

const OtherProjects: React.FC<Props> = (props) => {
  const GRID_LIMIT = 6;
  const { otherProjects } = useContext(MainContext);
  const [showMore, setShowMore] = useState(false);
  const renderDataMapCallback = (item: IProjectContent) => (
    <ProjectCard key={item.title} projectData={item} showMore={showMore} />
  );
  return (
    <section className={classes.OtherProjects}>
      <h2 className={`${classes.OtherProjectsHeading} fade-up`}>
        Other Noteworthy Projects
      </h2>
      <div className={classes.OtherProjectsGrid}>
        {showMore
          ? otherProjects.map(renderDataMapCallback)
          : otherProjects.slice(0, GRID_LIMIT).map(renderDataMapCallback)}
      </div>
      {otherProjects.length > GRID_LIMIT ? (
        <Button
          customClass={`${classes.ShowMoreBtn} fade-up`}
          clickHandler={() => {
            setShowMore((prev) => !prev);
          }}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      ) : null}
    </section>
  );
};

export default OtherProjects;
