import React from "react";
import Tile from "./Tile"

function TileList({ data }) {

	function renderHogs(hogs) {
		const newArr = hogs.map((hog, index) => {
			return (
				<Tile key={`hogs-${index}`}
					data={hog}
					name={hog.name}
					img={hog.image}
					specialty={hog.specialty}
					/>)
		})
		return newArr
	}

	return (
		<div className="ui grid container">
			{renderHogs(data)}
		</div>
	);
}

export default TileList;
