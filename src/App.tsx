import React from "react";
import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home, Project} from "Pages";
import {AnimatePresence} from "framer-motion";


const router = createBrowserRouter([
	{
		path:"/",
		element: <Home/>
	},
	{
		path:"/project/:projectName",
		element: <Project/>
	},
]);

function App() {
	return (
		<AnimatePresence mode='wait'>
			<RouterProvider router={router}/>
		</AnimatePresence>
	);
}

export default App;
