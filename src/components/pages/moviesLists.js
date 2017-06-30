"use strict"

import React from 'react';
import {connect} from 'react-redux';//Connect Componen with Redux store
import {bindActionCreators} from 'redux';

import {getMovies} from '../../actions/moviesActions';
import {Grid,Col,Row,Button} from 'react-bootstrap';

import MovieItem from './movieItem';

import MoviesForm from './moviesForm';

import Cart from './cart';


class MoviesList extends React.Component{
componentDidMount(){
	//dipatch an action 
	this.props.getMovies(
		[
		{
	id:1,
	title:'Scarface',
	description:'this is the movie description',
	 price:96
	},
	{
	id:2,
	title:'La ligne verte',
	description:'Le film qui va vous laisser sans voix',
	 price:69
	}
	]
	)
}

	render(){

		// console.log('test,this.props.movies);
		const moviesList=this.props.movies.map(function(moviesArr){
return(
<Col xs={12} sm={6} md={4} key={moviesArr.id}>
<MovieItem
		id={moviesArr.id}
		title={moviesArr.title}
		description={moviesArr.description}
		price={moviesArr.price}/>

</Col>
	)})
return(
<Grid>
	<Row>
	<Cart/>
	</Row>
<Row>
<Col xs={12} sm={6}>
<MoviesForm/>
</Col>
{moviesList}
</Row>
</Grid>
)

	}
}
//return State
function mapStateToPropos(state){
	return{
		movies:state.movies.movies
	}
}

//Dispatch action qu'on va passer en objet
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getMovies:getMovies
		// otherActions:xxxxx
	},dispatch)
}
export default connect(mapStateToPropos,mapDispatchToProps)(MoviesList);
