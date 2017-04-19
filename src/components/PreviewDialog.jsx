import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Table, TableHeader, TableHeaderColumn, TableRow, TableBody, TableRowColumn} from 'material-ui/Table';	

class PreviewDialog extends Component {

	render() {
		const actions = <FlatButton primary={true} label='close' onTouchTap={this.props.handleClose}/>

		const row = this.props.data.map((entry) => {
			return(
					<TableRow id={entry.id} stripedRows={true} >
						<TableRowColumn>{entry.name}</TableRowColumn>
						<TableRowColumn>{entry.number}</TableRowColumn>
						<TableRowColumn>{entry.address}</TableRowColumn>
					</TableRow>
				);
		});
		return(
				<Dialog
					open={this.props.dialogOpened}
					actions={actions}
					title='PhoneBook'
					autoScrollBodyContent={true}
				>
					<Table height='250px'>
						<TableHeader adjustForCheckbox={false}>
							<TableRow>
								<TableHeaderColumn>Name</TableHeaderColumn>
								<TableHeaderColumn>Number</TableHeaderColumn>
								<TableHeaderColumn>Address</TableHeaderColumn>
							</TableRow>
						</TableHeader>
						<TableBody >
							{row}
						</TableBody>
					</Table>
				</Dialog>
			);
	}
}

export default PreviewDialog;
