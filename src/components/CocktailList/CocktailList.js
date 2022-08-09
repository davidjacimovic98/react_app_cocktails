import React from "react";
import { useGlobalContext } from "../../context";
import Cocktail from "../Cocktail/Cocktail";
import Loading from "../Loading/Loading";
import styles from "./CocktailList.module.css";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className={styles["no-cocktails"]}>
        no cocktails matched your search
      </h2>
    );
  }

  return (
    <div className={styles.cocktails}>
      <h2>cocktails</h2>
      <div className={styles["cocktails-list"]}>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
