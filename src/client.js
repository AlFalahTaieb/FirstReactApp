"use strict"
//REACT

import React from 'react';
import {render} from 'react-dom' ;
import {Provider} from 'react-redux';
import {Router,Route,IndexRoute, browserHistory} from 'react-router';
import promise from 'redux-promise'

// import { createLogger } from 'redux-logger'
import {applyMiddleware, createStore} from 'redux';

//import logger 

import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import { createLogger } from "redux-logger";

//import combined reducers
import reducers from './reducers/index';
// j'ai fait tout ce qui est en bas car je ne travaillais pas avec react-router
// //importation du menu 
// import Menu from './components/menu';
// //Import Footer
// import Footer from './components/footer'
// //import ACTIONS

import {addToCart} from './actions/cartActions';
//import functions

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(middleware));

import MoviesList from './components/pages/moviesLists';
import Cart from './components/pages/cart';
import MovieForm from './components/pages/moviesForm';
import Main from './main';
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

import {postMovies,updateMovies,deleteMovies,getMovies} from './actions/moviesActions'
const middleware =applyMiddleware(thunk,logger());
// const store = createStore(reducers, middleware,applyMiddleware, promise);
const store = createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );

//Creation du store
// const middleware = applyMiddleware( thunk,  logger() );
// // const middleware=applyMiddleware(thunk,logger);
// export default compose(applyMiddleware(thunk))(createStore)(logger);
// const store = createStore(reducers,middleware);




const Routes=(
<Provider store={store}>
<Router history={browserHistory}>
<Route path="/" component={Main}>
<IndexRoute
 component={MoviesList}/>
<Route path="/admin" 
component={MovieForm}/>
<Route path="/cart" 
component={Cart}/>
</Route>

</Router>
</Provider>
)
render(
	Routes,document.getElementById('app')
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