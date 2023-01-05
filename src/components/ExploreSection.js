import { NavLink } from "react-router-dom";

export default function ExploreSection({ entry }) {
    return (
      <div className="cell">
        <img src={entry.fields.image.fields.file.url} alt={entry.fields.title} />
          <p>{entry.fields.title.toLowerCase().charAt(0).toUpperCase() + entry.fields.title.toLowerCase().slice(1)}</p>
          <div className="linkToIndividual">
          <NavLink to="/{entry.fields.title}">See AllRecipes</NavLink>
          </div>
      </div>
    );
  }

  