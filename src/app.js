"use strict"
import {createStore} from 'redux';

//3 Definir les reducers
const reducer = function(state=[],action){
	switch(action.type){
		case "POST_BOOK":
		return state = action.payload;
		break;
	}
	return state
}

//Creation du store
const store = createStore(reducer);


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
type:"POST_BOOK",
payload:[{
	id:1,
	title:'this is the book title',
	description:'this is the book description',
	 price:33},
{
	id:2,
	title:'La formule de Dieu',
	description:'Einstein',
	 price:45
}
]
})


//Dispatch 3rd

store.dispatch({
type:"POST_BOOK",
payload:({
	id:3,
	title:'The Secret path of ?',
	description:'GOD And God',
	 price:17}
)})