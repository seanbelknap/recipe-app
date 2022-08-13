import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const addItem = (data) => {
    setRecipes([...recipes, data]);
  };


  function deleteItem(newIndex) {
    setRecipes(recipes.filter((_, index) => index !== newIndex));
  }

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteItem={deleteItem} />
      <RecipeCreate addItem={addItem} />
    </div>
  );
}

export default App;
