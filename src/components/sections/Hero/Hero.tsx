import React from "react";
import Button from "../../Button/Button";
import Heading from "../../Heading/Heading";
import classes from "./Hero.module.css";

interface Props {}

const Hero: React.FC<Props> = (props) => {
  return (
    <section id="Hero" className={classes.Hero}>
      <Heading variant="h1" size="normal" customClass="fade-up-delayed">
        Hi, my name is
      </Heading>
      <Heading variant="h2" size="big" customClass="fade-up-delayed">
        Osama Salem.
      </Heading>
      <Heading variant="h3" size="big" customClass="fade-up-delayed">
        I am a data analyst
      </Heading>
      <p className="fade-up-delayed">
        Data analysis can be a long tiring process, but I enjoy it and have the
        knack for it. I am a data analyst based in Egypt specializing in
        cleaning, analyzing and providing key insights for big datasets.
      </p>
      <div className="fade-up-delayed">
        <Button
          customClass={classes.Email}
          link="mailto:eng.osama.94@gmail.com"
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default Hero;
