import { useState, useEffect } from 'react'
import axios from 'axios';
import Recipe from './Component/Recipe';
import Header from './Component/Header';
import RecipeCards from './Component/RecipeCards';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './Component/Footer';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Loader from './Component/Loader'; 

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/recipes");
        console.log(response.data);
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);  // Set loading to false after data is fetched
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <Loader />;  // Show the loader while loading
  }

  return (
  
    <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Recipe data={recipes} />} />
            <Route path="/recipe/:id" element={<RecipeCards data={recipes} />} />
            <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>

  )
}

export default App
