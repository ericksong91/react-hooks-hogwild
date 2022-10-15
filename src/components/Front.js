import React from "react";

function Front({ name, img, specialty }) {
    return (
        <>
            <h3>{name}</h3>
            <img src={img} alt={specialty} />
        </>
    );
}

export default Front;
