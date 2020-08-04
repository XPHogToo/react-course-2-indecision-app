// Interactive counter applet
class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		};
	}
	componentDidMount() {
		try {
			const stringCount = localStorage.getItem('count');
			const loadCount = parseInt(stringCount, 10);
			
			if (!isNaN(loadCount)) {
				this.setState(() => ({ count: loadCount }));
			}
		} catch (e) {
			// Do nothing at all
		}
	}
	componentDidUpdate(prevState) {
		if (prevState.count !== this.state.count) {
			const stringCount = JSON.stringify(this.state.count);
			localStorage.setItem('count', stringCount);
			console.log('saving data');
		}
	}
	componentWillUnmount () {
		console.log('componentWillUnmount');
	}
	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}
	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	};
	handleReset() {
		this.setState(() => {
			return {
				count: 0
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		);
	}

}


ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
// 	count++;
// 	renderCounterApp();
// };
// const minusOne = () => {
// 	count--;
// 	renderCounterApp();
// };
// const resetCount = () => {
// 	count = 0;
// 	renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={minusOne}>-1</button>
// 			<button onClick={resetCount}>Reset</button>
// 		</div>
// 	);
// 	//ReactDOM.render(template, appRoot);
// 	ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();