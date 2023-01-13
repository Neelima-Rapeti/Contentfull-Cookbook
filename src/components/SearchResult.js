import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cell from "./Cell";

function SearchResult({ recipes }) {
  const [filterRecipe, setFilterRecipe] = useState("");
  const { search } = useParams();
  const navigate = useNavigate();

  const filteredData = recipes.filter((el) => {
    if (search === "") {
      navigate("/");
    } else {
      return el.fields.title.toLowerCase().includes(search);
    }
    console.log(el.fields.title);
  });

  useEffect(() => {
    setFilterRecipe(filteredData);
  }, []);

  return (
    <div className="grid mx-5">
      {filterRecipe &&
        filterRecipe.map((ele) => {
          return <Cell entry={ele} key={ele.sys.id}/>;
        })}
    </div>
  );
}

export default SearchResult;
