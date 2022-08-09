import React from "react";
import { useGlobalContext } from "../../context";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <div className={styles.main}>
      <form className={styles.form}>
        <div className={styles["form-div"]}>
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
