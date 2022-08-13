import React, { useState } from "react";

function RecipeCreate({ addItem }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    comment: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(formData);
    setFormData({ ...initialFormState });
  };
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
        
          <tr>
            <td> 
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value= {formData.name}
              />
            </td>
            <td>
            <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value= {formData.cuisine}
              />
            </td>
            <td>
            <input
                id="photo"
                type="url"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                value= {formData.photo}
              />
            </td>
            <td>
            <textarea
              id="ingredients"
              name="ingredients"
              placeholder="Ingredients"
              onChange={handleChange}
              value= {formData.ingredients}
            />
            </td>
            <td>
            <textarea
              id="preparation"
              name="preparation"
              placeholder="preparation"
              onChange={handleChange}
              value= {formData.preparation}
            />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
