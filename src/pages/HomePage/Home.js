import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import CocktailList from "../../components/CocktailList/CocktailList";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <CocktailList />
    </div>
  );
};

export default Home;
