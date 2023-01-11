import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AllRecipes from "./components/AllRecipes";
import IndividualRecipe from "./components/IndividualRecipe";
import Chicken from "./components/categories/Chicken"
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
//https://react-icons.github.io/react-icons
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allrecipes" element={<AllRecipes />} />
        <Route path="/recipe/:id" element={<IndividualRecipe />} />
        <Route path="/allrecipes/categories/chicken" element={<Chicken />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
