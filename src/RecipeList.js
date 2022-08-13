import React from "react";

function RecipeList({recipes, deleteItem}) {
  
  const rows = recipes.map(({ name, cuisine, photo, ingredients, preparation }, index) => (
    <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td> <img src = {photo} alt={photo} /> </td>
      <td className="content_td"><p>{ingredients}</p></td>
      <td className="content_td"><p>{preparation}</p></td>
      <td> <button name="delete" onClick={() => deleteItem(index)} >Delete</button> </td>
    </tr>
  ));

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
