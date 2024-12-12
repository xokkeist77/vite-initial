import ReactLogo from './assets/react.svg?react';
//import { createElement } from 'react';
import { MyComponent } from './MyComponent';

import './index.css';

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
				<MyComponent type="normal" value="123" />
				<p>{date} год</p>
				{/* декларативный стиль до этой точки */}
			</header>
		</div>
	);
};

// const date = `${new Date().getFullYear()} год`;

// const DivApp = () => {
// 	return createElement('div', { className: 'App' }, Header());
// };

// const Header = () => {
// 	return createElement(
// 		'header',
// 		{ className: 'App-header' },
// 		ImageBox(),
// 		TextParagraph1(),
// 		RefLink(),
// 		DateParagraph(),
// 	);
// };

// const ImageBox = () => {
// 	return createElement('img', { className: 'App - logo', src: reactLogo });
// };

// const TextParagraph1 = () => {
// 	return createElement('p', null, `Edit `, CodeText(), ` and save to reload.`);
// };

// const DateParagraph = () => {
// 	return createElement('p', null, date);
// };

// const CodeText = () => {
// 	return createElement('code', null, 'src/App.js');
// };

// const RefLink = () => {
// 	return createElement(
// 		'a',
// 		{
// 			className: 'App-link',
// 			href: 'https://reactjs.org',
// 			target: '_blank',
// 			rel: 'noopener noreferrer',
// 		},
// 		'Learn React',
// 	);
// };

// export const App = () => {
// 	return DivApp();
// };
