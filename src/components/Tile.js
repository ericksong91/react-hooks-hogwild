import React, {useState} from "react";
import Front from "./Front"
import Back from "./Back"

function Tile({ name, img, specialty, data }) {
    const [showDetails, setShowDetails] = useState(false)

    function handleClick() {
        setShowDetails(!showDetails);
    }

    return (
        <div className="ui four wide column image pigTile" onClick={handleClick}>
            {showDetails ? 
            <Back 
            name={name}
            greased={data.greased} 
            specialty={specialty} 
            weight={data.weight} 
            medal={data["highest medal achieved"]} /> 
            : 
            <Front name={name} img={img} specialty={specialty} />}
        </div>
    );
}

export default Tile;
