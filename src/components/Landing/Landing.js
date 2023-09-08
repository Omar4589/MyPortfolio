import React from "react";
import styles from "./styles";

const Landing = ({ children }) => {
  return <div style={{ ...styles.main }}>{children}</div>;
};

export default Landing;
