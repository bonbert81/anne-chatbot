import React from 'react';
import ReactDOM from 'react-dom';
import style from "./App.css";

const App = () => {
	return (
		<div>
			<h2>With webpack</h2>
		</div>
	);
};

ReactDOM.render(
	<App />,
	document.getElementById("app")
);

