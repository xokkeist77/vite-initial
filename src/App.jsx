import ReactLogo from './assets/react.svg?react';
//import './index.css';

export const App = () => {
	const date = new Date().getFullYear(); // декларативный стиль
	return (
		<div className="App">
			<header className="App-header">
				{/* декларативный стиль от этой точки */}
				<ReactLogo />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{date} год</p>
				{/* декларативный стиль до этой точки */}
			</header>
		</div>
	);
};
