import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Editor from "../Components/Editor";
import Avatar from "react-avatar";
const EditorPage = ({userName}) => {
	const navigate = useNavigate();
	return (
		<div className='mainWrap'>
			<div className='aside'>
				<div className='asideInner'>
					<div className='logo'>
						<img
							src={Logo}
							alt='Logo'
							className='logoImage'
							width='60px'
						/>
					</div>
					<h3>Keep Solving 🤔</h3>
					
					<div className='clientsList'>
						<Avatar
							name={userName}
							size={50}
							round='14px'
						/>
						<span className='userName'>{userName}</span>
					</div>
				</div>
				<button className='btn leaveBtn' onClick={()=>navigate("/")}>Leave </button>
			</div>
			<div className='editorWrap'>
				<Editor />
			</div>
		</div>
	);
};

export default EditorPage;
