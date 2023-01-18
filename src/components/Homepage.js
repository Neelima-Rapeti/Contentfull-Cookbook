import React from "react";
import { NavLink } from "react-router-dom";
import Cell from "./Cell";
import Hero from "./Hero";
import FilterBar from "./FilterBar";

export default function Homepage({ recipes }) {
  return (
    <div>
      <FilterBar />
      <Hero />
      <div>
        <h4 className="ms-5">Recently added</h4>
        <div className="ExploreBody">
          <div className="grid">
            {recipes
              .slice(-8)
              .reverse()
              .map((rec) => {
                return <Cell entry={rec} key={rec.sys.id} />;
              })}
          </div>
          <div className="Button">
            <NavLink to="/allrecipes">
              <button
                className="btn btn-outline-warning rounded"
                style={{ backgroundColor: "rgb(49, 58, 61)" }}
              >
                See All
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
