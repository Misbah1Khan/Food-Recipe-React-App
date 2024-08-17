import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader"; // Import the Loader component

const Recipe = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState({}); // State to track which images have loaded

  const handleImageLoad = (id) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="Cards">
      {data.map((recipe) => (
        <div key={recipe.id} className="RecipeCard">
          <Link to={`/recipe/${recipe.id}`}>
            {!imageLoaded[recipe.id] && <Loader />} {/* Show loader if image is not loaded */}
            <img
              src={recipe.image}
              alt={recipe.name}
              className={`Cardimg ${!imageLoaded[recipe.id] ? "hidden" : ""}`} // Hide image until loaded
              onLoad={() => handleImageLoad(recipe.id)}
            />
            <h2>{recipe.name}</h2>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Recipe;