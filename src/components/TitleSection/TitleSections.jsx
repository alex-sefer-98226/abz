import React from "react";
import styles from "./TitleSection.module.css";

const TitleSection = () => {
  return (
    <div className={styles.TitleSectionContent}>
      <div className={styles.TitleSectionHeading}>
        <h1 className="headingFirstText headingFirstText--left">
          test assignment
          <br /> for frontend <br />
          developer position
        </h1>
      </div>
      <div className={styles.TitleSectionDescription}>
        We kindly remind you that your test assignment should be submitted{" "}
        <wbr />
        as a link to github/bitbucket repository.
        <span className="dont-show">
          {" "}
          Please be patient, we consider <wbr />
          and respond to every application that meets minimum requirements. We
          look forward to your submission. Good luck! The photo has to scale{" "}
          <wbr />
          in the banner area on the different screens
        </span>
        <span className="show">...</span>{" "}
        {/*Это костыль. Не работает text-overflow:elipsis*/}
      </div>
      <a href="#reg" className={styles.TitleSectionLink}>
        Sing up now
      </a>
    </div>
  );
};
export default TitleSection;
