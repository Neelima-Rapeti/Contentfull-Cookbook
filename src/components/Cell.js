import { NavLink } from "react-router-dom";
import {useState} from "react";
import eye from '../images/eye.gif';

export default function Cell({ entry }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }

    return (
      <div className="cell" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <img className="foto" src={entry.fields.image.fields.file.url} alt={entry.fields.title} />
          <p>{entry.fields.title.toLowerCase().charAt(0).toUpperCase() + entry.fields.title.toLowerCase().slice(1)}</p>
          
            {isHovering && (  
          <div className="eye" >
          <NavLink className="eyeNavlink" to={`/recipe/${entry.sys.id}`} >
            <img className="eyeGif" src={eye} alt="see more"/>
          </NavLink>
          </div>
          )}   
          
          </div>
      
    );
  }