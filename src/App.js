import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AllRecipes from "./components/AllRecipes";
import IndividualRecipe from "./components/IndividualRecipe";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
//https://react-icons.github.io/react-icons

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <AllRecipes />
      <IndividualRecipe />
      <Footer />
    </div>
  );
}

export default App;
