import React from "react";
import { useParams } from "react-router-dom";

const RecipeCards = ({ data }) => {
  const { id } = useParams();
  const recipe = data.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div className="RecipeDetails">
    <img src={recipe.image} alt={recipe.name} className="Detailimg" />
    <div className="RecipeInfo">
      <h1>{recipe.name}</h1>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
      <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
      <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong></p>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  </div>
  );
};

export default RecipeCards;