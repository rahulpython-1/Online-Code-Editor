import { useState } from "react";
import React from "react";
import Logo from "../assets/Logo.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = ({ setUpUser }) => {
	const navigate = useNavigate();

	const [userName, setUserName] = useState("");

	function handleInputEnter(e) {
		if (e.code === "Enter") {
			joinRoom();
		}
	}

	function joinRoom() {
		if (!userName) {
			toast.error(" USERNAME IS REQUIRED");
		}
		else {
			navigate(`/editor/${userName}`);
			setUpUser(userName);
		}
	}



	return (
		<div className='homePageWrapper'>
			<div className='formWrapper'>
				<img
					src={Logo}
					alt='LOGO'
					height='80px'
				/>

				<h4 className='MainLabel'>WELCOME TO CODING </h4>
				<h4 className='MainLabel'>GREAT TO SEE YOU AGAIN😀😃</h4>

				<div className='inputGroup'>
					<input
						type='text'
						className='inputBox'
						placeholder='User Name'
						onChange={(e) => setUserName(e.target.value)}
						onKeyDownCapture={handleInputEnter}
					/>

					<button
						className='btn  joinbtn'
						onClick={joinRoom}>
						GO
					</button>
				</div>
			</div>

			<footer>
				<h4>
					Built With 🧠&nbsp; BY <a href='https://github.com/rahulpython-1'>Rahul Kumar Thakur</a>
				</h4>
			</footer>
		</div>
	);
};

export default Home;
