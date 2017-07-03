"use strict"
import React from 'react';
import {MenuItem, InputGroup, DropdownButton, Image, Col, Row, Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postMovies, deleteMovies, getMovies, resetButton} from '../../actions/moviesActions.js';
import axios from 'axios';

class MoviesForm extends React.Component{
  constructor() {
    super();
    this.state = {
      images:[{}],
      img:''
    }
  }
  componentDidMount(){
    this.props.getMovies();
    //GET IMAGES FROM API
    axios.get('/api/images')
      .then(function(response){
        this.setState({images:response.data});
      }.bind(this))
      .catch(function(err){
        this.setState({images:'error loading image files from the server', img:''})
      }.bind(this))
  }
  handleSubmit(){
    const movie=[{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      images:findDOMNode(this.refs.image).value,
      price: findDOMNode(this.refs.price).value,
    }]
    this.props.postMovies(movie);
  }

  onDelete(){
    let movieId = findDOMNode(this.refs.delete).value;

    this.props.deleteMovies(movieId);
  }

  handleSelect(img){
    this.setState({
      img: '/images/'+ img
    })
  }

  resetForm(){
    //RESET THE Button
    this.props.resetButton();

    findDOMNode(this.refs.title).value = '';
    findDOMNode(this.refs.description).value = '';
    findDOMNode(this.refs.price).value = '';
    this.setState({img:''});
  }

  render(){

    const moviesList = this.props.movies.map(function(moviesArr){
      return (
        <option key={moviesArr._id}> {moviesArr._id}</option>
      )
    })

    const imgList = this.state.images.map(function(imgArr, i){
      return(
        <MenuItem key={i} eventKey={imgArr.name}
          onClick={this.handleSelect.bind(this, imgArr.name)}>{imgArr.name}</MenuItem>
      )
    }, this)

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
                  title="Select an image"
                  bsStyle="primary">
                  {imgList}
                </DropdownButton>
              </InputGroup>
              <Image src={this.state.img} responsive/>
            </Panel>
          </Col>
          <Col xs={12} sm={6}>
            <Panel>
              <FormGroup controlId="title" validationState={this.props.validation}>
                <ControlLabel>Title</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter Title"
                    ref="title" />
                    <FormControl.Feedback/>
              </FormGroup>
              <FormGroup controlId="description" validationState={this.props.validation}>
                <ControlLabel>Description</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter Description"
                    ref="description" />
                    <FormControl.Feedback/>
              </FormGroup>
              <FormGroup controlId="price" validationState={this.props.validation}>
                <ControlLabel>Price</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter Price"
                    ref="price" />
                    <FormControl.Feedback/>
              </FormGroup>
              <Button
                onClick={(!this.props.msg)?(this.handleSubmit.bind(this)):(this.resetForm.bind(this))}
                bsStyle={(!this.props.style)?("primary"):(this.props.style)}>
                {(!this.props.msg)?("Save movie"):(this.props.msg)}
              </Button>
            </Panel>
            <Panel>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select a movie id to delete</ControlLabel>
                <FormControl ref="delete" componentClass="select" placeholder="select">
                  <option value="select">select</option>
                    {moviesList}
                </FormControl>
              </FormGroup>
              <Button onClick={this.onDelete.bind(this)} bsStyle="danger">Delete movie</Button>
            </Panel>
          </Col>
        </Row>

      </Well>
    )
  }
}
function mapStateToProps(state){
  return {
    movies: state.movies.movies,
    msg: state.movies.msg,
    style: state.movies.style,
    validation: state.movies.validation
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    postMovies,
    deleteMovies,
    getMovies,
    resetButton
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MoviesForm);
