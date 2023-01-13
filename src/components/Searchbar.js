import React from "react";
import { useState, useEffect } from "react";
import client from "../client";
import { useParams, useNavigate } from "react-router-dom";


function Searchbar({ recipes, setRecipes }) {
  const { id } = useParams();
  const navigate =useNavigate();
  const [query, setQuery] = useState("");
  const [searchText, setSearchText] = useState("");

  const onChange = (e) => setQuery(e.target.value);


  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchresult/${query}`);
    
  };

  return (
    <>
     {/* <NavLink to="/searchresult"> */}

     <form onSubmit={onSubmit} className="form input-group search-form">
        <input
          className="rounded"
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food..."
        ></input>
        <button className="btn btn-outline-warning rounded" type="submit">
          Search
        </button>
      </form>

      {/* </NavLink> */}
      
      
    </>
  );
}

export default Searchbar;
