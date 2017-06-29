"use strict"
//REACT

import React from 'react';
import {render} from 'react-dom' ;

import {applyMiddleware, createStore} from 'redux';

//import logger 

import logger from 'redux-logger'

//import combined reducers
import reducers from './reducers/index'
//import ACTIONS

import {addToCart} from './actions/cartActions'
//import functions

import {postMovies,updateMovies,deleteMovies} from './actions/moviesActions'

//Creation du store

const middleware=applyMiddleware(logger);
const store = createStore(reducers,middleware);



import MoviesList from './components/pages/moviesLists'

render(
<MoviesList/>,document.getElementById('app')
	);


// store.subscribe(function(){
// console.log('current state is : ', store.getState());
// // console.log('current Description: ',store.getState()[1].description);
// })

//Step 2 create and dispatch actions 

// store.dispatch({type:"INCREMENT",payload:1})
// store.dispatch({type:"INCREMENT",payload:3})
// store.dispatch({type:"INCREMENT",payload:5})
// store.dispatch({type:"INCREMENT",payload:7})
// store.dispatch({type:"INCREMENT",payload:9})

store.dispatch(postMovies(
	[{
	id:1,
	title:'Godfather',
	description:'this is the movie description',
	 price:33},
{
	id:2,
	title:'La formule de Dieu',
	description:'Le film qui va vous laisser sans voix',
	 price:45
}]
))


//Dispatch a movie

store.dispatch(deleteMovies(
{id:1}
))



//update a Book

store.dispatch(updateMovies(
{id:2,
title:"ForestGump"}

))

//-->Creation d'une nouvelle action pour la carte 

//Add to cart
store.dispatch(addToCart([{id:1}]))