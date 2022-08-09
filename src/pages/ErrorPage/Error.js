import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.error}>
      <h2>oops! page not found</h2>
      <Link to="/">back home</Link>
    </div>
  );
};

export default Error;
