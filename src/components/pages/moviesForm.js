"use strict"

import React from 'react';
import {Well,Panel,FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postMovies,deleteMovies} from '../../actions/moviesActions';


class MovieForm extends React.Component{
handleSubmit(){
	const movie=[{
		title:findDOMNode(this.refs.title).value,
		description:findDOMNode(this.refs.description).value,
		price:findDOMNode(this.refs.price).value
	}]
	this.props.postMovies(movie);
}

onDelete(){
	let movieId= findDOMNode(this.refs.delete).value;
	this.props.deleteMovies(movieId);
}

render(){

const moviesList = this.props.movies.map(function(moviesArr){
return(
<option key={moviesArr._id}>{moviesArr._id}</option>
	)
})

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
			<Panel style={{marginTop:'25px'}}>
				      <FormGroup controlId="formControlsSelectMultiple">
        <ControlLabel>Select A Movie</ControlLabel>
        <FormControl ref="delete" componentClass="select">
          <option value="select">Select</option>
          {moviesList}
        </FormControl>
      </FormGroup>
      <Button onClick={this.onDelete.bind(this)}bsStyle="danger">Delete Movie</Button>
			</Panel>
		</Well>

)
}

}
function mapStateToProps(state){
	return{
		movies:state.movies.movies
	}
}

function mapDispatchToPropos(dispatch){
	return bindActionCreators({
		postMovies,
		deleteMovies
	},dispatch)
}
export default connect(mapStateToProps,mapDispatchToPropos)(MovieForm);