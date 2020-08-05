import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
	};
	handleRemoveOptions = () => {
		this.setState(() => ({ options: [] }));
	};
	handleRemoveOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));
	};
	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const selection = this.state.options[randomNum];
		this.setState(() => ({ selectedOption: selection }));
	};
	handleCloseModal = () => {
		this.setState(() => ({ selectedOption: undefined }));
	};
	handleAddOption = (option) => {
		if (!option) {
			return 'Enter valid value to add option.';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists.';
		}
		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	};
	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if (options) {
				this.setState(() => ({ options: options }));
			}
		} catch (e) {
			// Do nothing at all
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	render() {
		return (
			<div>
				<Header />
				<div className="content-container">
					<Action 
						hasOptions={this.state.options.length > 0}
						handlePick={this.handlePick}
					/>
					<div className="widget">
						<Options 
							options={this.state.options}
							handleRemoveOptions={this.handleRemoveOptions}
							handleRemoveOption={this.handleRemoveOption}
						/>
						<AddOption 
							handleAddOption={this.handleAddOption}
						/>
					</div>
				</div>
				<OptionModal 
					selectedOption={this.state.selectedOption}
					handleCloseModal={this.handleCloseModal}
				/>
			</div>
		);
	}
}