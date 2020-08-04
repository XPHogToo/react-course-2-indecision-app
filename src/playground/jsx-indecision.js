console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
	title: 'Indecision App',
	subtitle: 'Eenie, Meenie, Minie, Moe',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;
	
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderApp();
	}
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() *app.options.length);
	const selection = app.options[randomNum];
	alert(selection);
};

const onRemoveAll = () => {
	app.options = [];
	renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={onRemoveAll}>Remove All Options</button>
			<ol>
				{
					app.options.map((option) => <li key={option}>{option}</li>)
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type='text' name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
};

renderApp();