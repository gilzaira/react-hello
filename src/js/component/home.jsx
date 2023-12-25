import React from "react";
import Navbar from "./navbar";
import Sectiontop from "./sectiontop";
import Card from "./card";
import Footer from "./footer";


//create your first component
const Home = () => {
	return <div>
		{Navbar()}
		{Sectiontop()}
		{Card()}
		{Footer()}
	</div>;




};

export default Home;
