// Interactive counter applet
class Visibility extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visible: false
		};
	}
	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visible: !prevState.visible
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
				{this.state.visible && (
					<div>
						<p>Hey. These are some details that you can now see!</p>
					</div>
				)}
			</div>
		);
	}

}

ReactDOM.render(<Visibility />, document.getElementById('app'));

//console.log('visibility-toggle.js is running!');

// JSX - JavaScript XML
// let app = {
// 	title: 'Visibility Toggle',
// 	buttonText: 'Show details',
// 	visibleState: false,
// 	hiddenText: 'Hey! This is some text you can now see!'
// };

// const onButtonToggle = () => {
// 	if (app.visibleState) {
// 		console.log('In True State');
// 		app.buttonText = 'Hide details';
// 		app.visibleState = false;
// 	}
// 	else {
// 		console.log('In False State');
// 		app.buttonText = 'Show details';
// 		app.visibleState = true;
// 	}
// 	renderVisibility();
// };

// const appRoot = document.getElementById('app');

// const renderVisibility = () => {
// 	const template = (
// 		<div>
// 			<h1>{app.title}</h1>
// 			<button onClick={onButtonToggle}>{app.buttonText}</button>
// 			{app.visibleState && <p>{app.hiddenText}</p>}
// 		</div>
// 	);
// 	ReactDOM.render(template, appRoot);
// };

// renderVisibility();