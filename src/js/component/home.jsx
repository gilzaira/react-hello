import React from "react";
import Navbar from "./navbar";
import Sectiontop from "./sectiontop";
import CardList from "./card";
import Footer from "./footer";


//create your first component
const Home = () => {
	return <div>
		<div className="p-2 pt-4">
			<Navbar />
			<Sectiontop />
			<CardList />
			<Footer />
		</div>

	</div >;
};

export default Home;
