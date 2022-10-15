import React, { useState } from "react";
import Nav from "./Nav";
import TileList from "./TileList"
import hogs from "../porkers_data";

function App() {
	const [onlyGreased, setOnlyGreased] = useState(false);
	const [selectSort, setSelectSort] = useState("");

	function toggleGrease() {
		setOnlyGreased(!onlyGreased)
	}
	const filterPig = onlyGreased ? hogs.filter(hog => {
		return hog.greased === true
	}) : hogs

	function toggleSort(e) {
		setSelectSort(e.target.value)
	}

	const sortedPigs = () =>{
		switch (selectSort) {
			case "name":
				return [...filterPig].sort((a,b) => {
					if (a.name < b.name) {
						return -1
					} else {
						return 1
					}
				})
			case "weight":
				return [...filterPig].sort((a,b)=> {
					return a.weight - b.weight
				})
			default:
				return filterPig
		}
	}

	return (
		<div className="App">
			<Nav toggleSort={toggleSort} toggleGrease={toggleGrease} />
			<TileList data={sortedPigs()} />
		</div>
	);
}

export default App;
