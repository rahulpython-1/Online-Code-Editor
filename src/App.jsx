import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";
import EditorPage from "./Pages/EditorPage";

function App() {
	const[userName,getUserName]=useState("")
	function setUpUser(s){
		getUserName(s)

	}
	return (
		<>
			<div>
				<Toaster
					position='top-right'
					toastOptions={{
						success: {
							theme: {
								primary: "#4aed88",
							},
						},
					}}
				/>
			</div>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Home setUpUser={setUpUser} />}
					/>
					<Route
						path='/editor/:roomId'
						element={<EditorPage userName={userName} />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
