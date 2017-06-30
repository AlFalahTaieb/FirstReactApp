"use strict"

import React from 'react';
import {Well,Panel,FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap';

class MovieForm extends React.Component{
render(){

	return(
		<Well>
			<Panel>
			<FormGroup controlId="title">
				<ControlLabel>Title</ControlLabel>
					<FormControl
						type="text"
						placeholder="Enter Title"
						ref="title" />
			</FormGroup>	
			
				<FormGroup controlId="description">
				<ControlLabel>Description</ControlLabel>
					<FormControl
						type="text"
						componentClass="textarea" placeholder="Enter Description" 
						ref="description" />
			</FormGroup>

				<FormGroup controlId="price">
				<ControlLabel>price</ControlLabel>
					<FormControl
						type="text"
						placeholder="Enter price"
						ref="price" />
			</FormGroup>

			<Button bsStyle="primary">Save</Button>
			</Panel>
		</Well>

)
}

}

export default MovieForm