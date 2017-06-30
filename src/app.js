"use strict"
//REACT

import React from 'react';
import {render} from 'react-dom' ;
import {Provider} from 'react-redux';


import {applyMiddleware, createStore} from 'redux';

//import logger 

import logger from 'redux-logger';

//import combined reducers
import reducers from './reducers/index';
//importation du menu 
import Menu from './components/menu';
//Import Footer
import Footer from './components/footer'
//import ACTIONS

import {addToCart} from './actions/cartActions';
//import functions

import {postMovies,updateMovies,deleteMovies,getMovies} from './actions/moviesActions'

//Creation du store

const middleware=applyMiddleware(logger);
const store = createStore(reducers,middleware);



import MoviesList from './components/pages/moviesLists'

render(
<Provider store={store}>
<div>
	<Menu />
	<MoviesList/>
	<Footer />
</div>

</Provider>,document.getElementById('app')
	);



//Step 2 create and dispatch actions 

// store.dispatch({type:"INCREMENT",payload:1})
// store.dispatch({type:"INCREMENT",payload:3})
// store.dispatch({type:"INCREMENT",payload:5})
// store.dispatch({type:"INCREMENT",payload:7})
// store.dispatch({type:"INCREMENT",payload:9})

// store.dispatch(postMovies(

// ))


// //Dispatch a movie

// store.dispatch(deleteMovies(
// {id:1}
// ))



// //update a Book

// store.dispatch(updateMovies(
// {id:2,
// title:"ForestGump"}

// ))

// //-->Creation d'une nouvelle action pour la carte 

// //Add to cart
// store.dispatch(addToCart([{id:1}]))