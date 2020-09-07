import React from "react";
import styles from "./BaseLayout.module.css";

const BaseLayout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
export default BaseLayout;
