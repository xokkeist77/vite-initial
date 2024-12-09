import ReactLogo from './assets/react.svg?react';
import './index.css';

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<ReactLogo />
				<p>
					Edit <code>src/App.js</code> and save to 222 reload 2.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};
