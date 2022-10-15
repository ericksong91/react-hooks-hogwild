import React from "react";

// name={name}
// greased={data.greased} 
// specialty={specialty} 
// weight={data.weight} 
// medal={data["highest medal achieved"]} /> 

function Back({ name, specialty, greased, weight, medal }) {

    console.log(greased)
    console.log(weight)

    return (
        <div>
            <h3>{name}</h3>
            <h4>Specialty: {specialty}</h4>
            <h4>Weight: {weight}</h4>
            <h4>{greased ? <h2>GREASED</h2> : <div>No grease</div>}</h4>
            <h4>Highest Medal Achieved: {medal}</h4>
        </div>
    );
}

export default Back;
