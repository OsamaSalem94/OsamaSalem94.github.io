import React from "react";
import classes from "./SideLinks.module.css";
import IconLink from "../../components/IconLink/IconLink";
import { iconTypes } from "../../assets/icons";

interface Props {
  isLeft?: boolean;
  isFooter?: boolean;
}
const socialLinksData: { [key in iconTypes]?: string } = {
  Github: "https://github.com/OsamaSalem94",
  Linkedin: "https://www.linkedin.com/in/osama-salem-elsawalhi/",
  Hackerrank: "https://github.com/OsamaSalem94",
  Kaggle: "https://www.kaggle.com/osamaelsawalhi",
};

const SideLinks: React.FC<Props> = (props) => {
  return (
    <div
      className={`${classes.SideLinks} ${props.isLeft ? classes.Left : ""} ${
        !props.isFooter ? "fade-delayed" : ""
      }`}
    >
      {props.isLeft ? (
        <ul>
          {Object.entries(socialLinksData).map(([key, value]) => (
            <li key={key}>
              <IconLink
                aria-label={`Osama's ${key} profile`}
                iconType={key as iconTypes}
                href={value!}
              />
            </li>
          ))}
        </ul>
      ) : (
        <a aria-label="" href="mailto:eng.osama.94@gmail.com">
          eng.osama.94@gmail.com
        </a>
      )}
    </div>
  );
};

export default SideLinks;
