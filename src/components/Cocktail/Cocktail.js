import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cocktail.module.css";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <div className={styles["single-cocktail"]}>
      <div className={styles["img-container"]}>
        <img src={image} alt={name} />
      </div>
      <div className={styles["cocktail-info"]}>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className={styles.details}>
          details
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
