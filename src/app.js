"use strict"
import {createStore} from 'redux';

//3 Definir les reducers
const reducer = function(state={movies:[]},action){
	switch(action.type){
		case "POST_MOVIE":
		// let books=state.books.concat(action.payload)
		return {movies:[...state.movies,...action.payload]};
		break;
	
		case "DELETE_MOVIE":
		const currentMovieToDelete=[...state.movies]
		const indexToDelete = currentMovieToDelete.findIndex(
			function(movie){
				return movie.id ===action.payload.id;
			}

			)
			//on utilise slice car nous sommes entrain de travailler sur un tableau
		return {movies:[...currentMovieToDelete.slice(0,indexToDelete),
		...currentMovieToDelete.slice(indexToDelete +1)
		]}	
		break;

		case "UPDATE_MOVIE":
//create a copy of the current array of ..
const currentMovieToUpdate=[...state.movies]
//Determine at which index in movies array is the book to be updated

const indexToUpdate=currentMovieToUpdate.findIndex(
	function(movie){
		return movie.id===action.payload.id;
	})
const newMovieToUpdate={
	...currentMovieToUpdate[indexToUpdate],
	title:action.payload.title
}
//pour montrer la mise à jour 

console.log("what is it newMovieToUpdate",newMovieToUpdate);

return {movies:[...currentMovieToUpdate.slice(0,indexToUpdate),newMovieToUpdate,...currentMovieToUpdate.slice(indexToUpdate+1)]}

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