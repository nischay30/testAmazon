import React, { Component } from 'react';
import config from '../config.js';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SnackBar from 'material-ui/Snackbar';
import request from 'superagent';
import PreviewDialog from './PreviewDialog';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			address: '',
			number: '',
			openDialog: false,
			data:[],
			snackOpen: false
		}
	}

	handleNameChange = (event) => {
		this.setState({ name: event.target.value});
	}

	handleNumberChange = (event) => {
		this.setState({ number: event.target.value});
	}

	handleAddressChange = (event) => {
		this.setState({ address: event.target.value});
	}

	handleFormSubmit = (event) => {
		event.preventDefault();
		const data = {
			name: this.state.name,
			number: this.state.number,
			address: this.state.address
		}
		this.saveDetailsToServer(data);
		this.setState({ name: '', number:'', address: ''});
	}

	handleViewAll = () => {
		request
			.get(`${config.serverUrl}/phonebook`)
			.end((err, res)=> {
				if(err) { console.log('Err', err); return; }
				this.setState({ data: res.body, openDialog: true});
				console.log(res);
			});
	}

	handleClose = () => {
		this.setState({ openDialog: false});
	}

	saveDetailsToServer(data) {
		request
			.post(`${config.serverUrl}/save`)
			.send({data})
			.end((err, res) => {
				if(err) { console.log(err); return; }
				this.setState({ snackOpen: true});
			});
	}

	handleRequestClose = () => {
		this.setState({ snackOpen: false});
	}

	render() {
		return(
				<div>
					{
						this.state.openDialog ?
							<PreviewDialog
								dialogOpened={this.state.openDialog}
								handleClose={this.handleClose}
								data={this.state.data}
							/> 
							: null
					}
					<form onSubmit={ this.handleFormSubmit}>
						<label style={{fontSize: 30}}> Enter mame: </label>
						<TextField
						  id={`${this.state.name}n`}
							value={this.state.name}
							onChange={this.handleNameChange}
							type='text'
							required
						/>
						<label style={{fontSize: 30}}> Enter poneNumber: </label>
						<TextField
							id={`${this.state.number}p`}
							value={this.state.number}
							onChange={this.handleNumberChange}
							type='number'
							required
						/>
						<label style={{fontSize: 30}}> Enter Address: </label>
						<TextField
							id={`${this.state.address}a`}
							value={this.state.address}
							onChange={this.handleAddressChange}
							type='text'
							required
						/>
						<RaisedButton
							primary={true}
							label='submit'
							type='submit'
						/>
					</form>
					<SnackBar
						open={this.state.snackOpen}
						message='Saved'
						autoHideDuration={3000}
						onRequestClose={this.handleRequestClose}
					/>
					<RaisedButton
						style={{margin: '3vh'}}
						label='View All'
						onTouchTap={ this.handleViewAll }
						secondary={true}
					/>
				</div>
			);
	}
}

export default HomePage;


