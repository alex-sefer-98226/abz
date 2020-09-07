import React from "react";
import style from "./subheader.module.css";

const SubheaderOfSectionText = (props) => {
  return <div className={style.subheader}>{props.children}</div>;
};

export default SubheaderOfSectionText;
