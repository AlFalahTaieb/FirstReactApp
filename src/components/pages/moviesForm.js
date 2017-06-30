"use strict"

import React from 'react';
import {Well,Panel,FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postMovies} from '../../actions/moviesActions';


class MovieForm extends React.Component{
handleSubmit(){
	const movie=[{
		title:findDOMNode(this.refs.title).value,
		description:findDOMNode(this.refs.description).value,
		price:findDOMNode(this.refs.price).value
	}]
	this.props.postMovies(movie);
}

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

			<Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Save</Button>
			</Panel>
		</Well>

)
}

}

function mapDispatchToPropos(dispatch){
	return bindActionCreators({postMovies},dispatch)
}
export default connect(null,mapDispatchToPropos)(MovieForm);