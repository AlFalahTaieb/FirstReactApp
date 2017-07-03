"use strict"

import React from 'react';
import {
  MenuItem, InputGroup, DropdownButton, Image, Col, Row, Well, Panel, FormControl, FormGroup, ControlLabel, Button
} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postMovies,deleteMovies,getMovies} from '../../actions/moviesActions';
import axios from 'axios';

class MovieForm extends React.Component{

  constructor() {
    super();

    this.state = {
      images: [{}],
      img: ''
    };
  }

componentDidMount(){
 // get imgs from api:
 this.props.getMovies();
    axios.get('/api/images/')
      .then(function(response) {
        this.setState({ images: response.data });
      }.bind(this))
      .catch(function(err) {
        this.setState({
          images: 'Error loading image files from server.',
          img: ''
        })
      }.bind(this))
  }

  handleSelect(img) {
    this.setState({
      img: '/images/' + img
    });
  }

handleSubmit(){
	const movie=[{
		title:findDOMNode(this.refs.title).value,
		description:findDOMNode(this.refs.description).value,
		price:findDOMNode(this.refs.price).value,
		images:findDOMNode(this.refs.image).value
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

   const imgList = this.state.images.map(function(imgArr, i) {
      return(
        <MenuItem
          key={i}
          eventKey={imgArr.name}
          onClick={this.handleSelect.bind(this, imgArr.name)}
        >
          {imgArr.name}
        </MenuItem>
      )
    }, this);
	return(

      <Well>
        <Row>
          <Col xs={12} sm={6}>
            <Panel>
              <InputGroup>
                <FormControl type="text" ref="image" value={this.state.img} />
                <DropdownButton
                  componentClass={InputGroup.Button}
                  id="input-dropdown-addon"
                  title="Select an Image"
                  bsStyle="primary"
                >
                  {imgList}
                </DropdownButton>
              </InputGroup>
              <Image src={this.state.img} responsive/>
            </Panel>
          </Col>
			<Col xs={12} sm={6}>
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

			</Col>

		</Row>
		
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
		deleteMovies,
		getMovies
	},dispatch)
}
export default connect(mapStateToProps,mapDispatchToPropos)(MovieForm);