"use strict"
import {createStore} from 'redux';

//3 Definir les reducers
const reducer=function(state=0,action){
	switch(action.type){
		case "INCREMENT":
		return state + action.payload;
		break;
	}
	return state
}

//Creation du store
const store = createStore(reducer);


store.subscribe(function(){
console.log('current state is : '+ store.getState());
// console.log('current price: ',store.getState().price);
})

//Step 2 create and dispatch actions 

store.dispatch({type:"INCREMENT",payload:1})
store.dispatch({type:"INCREMENT",payload:1})
store.dispatch({type:"INCREMENT",payload:1})
store.dispatch({type:"INCREMENT",payload:1})
store.dispatch({type:"INCREMENT",payload:1})

// store.dispatch({
// type:"POST_BOOK",
// payload:{
// 	id:1,
// 	title:'this is the book title',
// 	description:'this is the book description',
// 	price:33,33
// }

// })