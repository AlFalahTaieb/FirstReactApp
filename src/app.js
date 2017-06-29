"use strict"
import {createStore} from 'redux';

//import combined reducers
import reducers from './reducers/index'
//import ACTIONS

import {addToCart} from './actions/cartActions'


//Creation du store
const store = createStore(reducers);


store.subscribe(function(){
console.log('current state is : ', store.getState());
// console.log('current Description: ',store.getState()[1].description);
})

//Step 2 create and dispatch actions 

// store.dispatch({type:"INCREMENT",payload:1})
// store.dispatch({type:"INCREMENT",payload:3})
// store.dispatch({type:"INCREMENT",payload:5})
// store.dispatch({type:"INCREMENT",payload:7})
// store.dispatch({type:"INCREMENT",payload:9})

store.dispatch({
type:"POST_MOVIE",
payload:[{
	id:1,
	title:'this is the movie title',
	description:'this is the movie description',
	 price:33},
{
	id:2,
	title:'La formule de Dieu',
	description:'Einstein',
	 price:45
}
]
})


//Dispatch a movie

store.dispatch({
type:"DELETE_MOVIE",
payload:{
	id:1}
})



//update a Book

store.dispatch({
	type:"UPDATE_MOVIE",
	payload:{
		id:2,
		title:"ForestGump"
			}
})

//-->Creation d'une nouvelle action pour la carte 

//Add to cart
store.dispatch(addToCart([{id:1}]))