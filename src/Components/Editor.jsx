import React, { useEffect, useRef } from "react";
import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";

const Editor = () => {
	const editorRef = useRef(null);

	useEffect(() => {
		const editor = Codemirror.fromTextArea(
			document.getElementById("realtimeEditor"),
			{
				mode: { name: "javascript", json: true },
				theme: "dracula",
				autoCloseBrackets: true,
				lineNumbers: true,
			}
		);
		editorRef.current = editor;
	}, []);

	const handleRunClick = () => {
		try {
			const code = editorRef.current.getValue();

			eval(code)
			
		} catch (error) {
			console.error("Error executing code:", error);
		}
	};

	return (
		<div className="editorContainer">
			<textarea id='realtimeEditor' />
			<button
				className='run btn '
				onClick={handleRunClick}>
				Run 🚀
			</button>

		</div>
	);
};

export default Editor;
