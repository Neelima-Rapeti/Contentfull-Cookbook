import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AllRecipes from "./components/AllRecipes";
import IndividualRecipe from "./components/IndividualRecipe";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
//https://react-icons.github.io/react-icons
import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import { useState, useEffect } from "react";
import client from "./client";
import Searchbar from "./components/Searchbar";
import SearchResult from "./components/SearchResult";


function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "blog",
        // The following line orders the items per creation date:
        order: "sys.createdAt",
      })
      .then((response) => setRecipes(response.items))
      .catch(console.error);
  }, []);
  return (
    <div className="App">
      <Navbar setRecipes={setRecipes} recipes={recipes} />
      <Routes>
        <Route path="/" element={<Homepage recipes={recipes} />} />
        <Route path="/allrecipes" element={<AllRecipes />} />
        <Route path="/recipe/:id" element={<IndividualRecipe />} />
        <Route
          path="/allrecipes/category/:ingredient"
          element={<Categories />}
        />

        <Route path="/searchresult/:search" element={<SearchResult recipes={recipes}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
