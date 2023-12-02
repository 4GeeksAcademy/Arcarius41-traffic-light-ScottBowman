import React from "react";
import StopLight from "./StopLight";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<StopLight />
		</div>
	);
};

export default Home;
