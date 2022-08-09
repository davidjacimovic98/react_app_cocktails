import React, { useEffect, useState, useCallback } from "react";
import Loading from "../../components/Loading/Loading";
import { useParams, Link } from "react-router-dom";
import styles from "./SingleCocktail.module.css";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const getCocktail = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getCocktail();
  }, [id, getCocktail]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2>no cocktail to display</h2>;
  }

  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;

  return (
    <div className={styles.main}>
      <Link to="/" className={styles.btn}>
        back home
      </Link>
      <h2>{name}</h2>
      <div className={styles.drink}>
        <img src={image} alt={name} />
        <dir className={styles.info}>
          <p>
            <span className={styles.data}>name :</span>&nbsp;
            {name}
          </p>
          <p>
            <span className={styles.data}>category :</span>&nbsp;
            {category}
          </p>
          <p>
            <span className={styles.data}>info :</span>&nbsp;
            {info}
          </p>
          <p>
            <span className={styles.data}>glass :</span>&nbsp;
            {glass}
          </p>
          <p>
            <span className={styles.data}>instructions :</span>&nbsp;
            {instructions}
          </p>
          <p>
            <span className={styles.data}>ingredients :</span>&nbsp;
            {ingredients.map((item, index) => {
              return item ? (
                <span key={index} className={styles.ingredient}>
                  {item}
                </span>
              ) : null;
            })}
          </p>
        </dir>
      </div>
    </div>
  );
};

export default SingleCocktail;
