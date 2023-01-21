import React from "react";
import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home, Project} from "Pages";


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
		<RouterProvider router={router}/>
	);
}

export default App;
