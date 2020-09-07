import React from "react";
import HeaderOfSectionText from "../HeaderOfSectionText";
import image from "../../assets/man-laptop-v1.svg";
import importedStyles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <div className={importedStyles.AboutSectionWrapper}>
      <HeaderOfSectionText>Let's get acquainted</HeaderOfSectionText>
      <div className={importedStyles.AboutSectionContent}>
        <div className={importedStyles.AboutSectionImageWrapper}>
          <img src={image} width="100%" alt="man_with_laptop_image" />
        </div>
        <div className={importedStyles.AboutSectionTextWrapper}>
          <span className="headingSecondText">
            I am cool frontend developer
          </span>
          <p className={importedStyles.AboutSectionParagraph}>
            We will evaluate how clean your approach to writing CSS and
            Javascript code is. You can use any CSS and Javascript 3rd party
            libraries without any restriction.
          </p>
          <p className={importedStyles.AboutSectionParagraph}>
            If 3rd party css/javascript libraries are added to the project via
            bower/npm/yarn you will get bonus points. If you use any task runner
            (gulp/webpack) you will get bonus points as well. Slice service
            directory page PSD mockup into HTML5/CSS3.{" "}
          </p>
          <a href="#reg" className={importedStyles.AboutSectionLink}>
            Sing up now
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
