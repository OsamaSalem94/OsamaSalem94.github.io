import React from "react";
import InlineLink from "../../../InlineLink/InlineLink";
import classes from "./AboutMeContent.module.css";

interface Props {}

const AboutMeContent: React.FC<Props> = (props) => {
  return (
    <div>
      <p>Hello! I'm Osama, a data analyst based in Egypt.</p>
      <p>
        I love cleaning and analyzing datasets and trying to provide key
        insights with visualizations using Sql, Python, Power BI and Tableau .
      </p>
      <p>
        I graduated from{" "}
        <InlineLink href="http://www.zu.edu.eg/">Zagazig University</InlineLink>{" "}
        and worked as Electrical Engineer for 2 years. After that, I realized I
        wanna do something I love and enjoy , so I shifted my career to become a
        data analyst.
      </p>
      <p>Here are a few tools I've been working with recently:</p>
      <ul className={classes.SkillsList}>
        <li>Python</li>
        <li>Pandas</li>
        <li>Matplotlib</li>
        <li>Seaborn</li>
        <li>MySQL / PostgreSQL</li>
        <li>MongoDB</li>
        <li>Power Bi</li>
        <li>Tableau</li>
      </ul>
    </div>
  );
};

export default AboutMeContent;
