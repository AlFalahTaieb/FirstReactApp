"use strict"
//3 Definir les reducers
export function moviesReducers(state={
	movies:[]
},action){
	switch(action.type){

	case "GET_MOVIE":
	
		return {...state,
		movies:[...action.payload]}
		break;

		case "POST_MOVIE":

		// return {...state,movies:[...state.movies, ...action.payload]};
		return {...state,
        movies: [
          ...state.movies,
          ...action.payload,
        ],
        msg: 'Saved! Click to continue',
        style: 'success',
        validation: 'success',
      };
		break;
	
		case "DELETE_MOVIE":
		const currentMovieToDelete=[...state.movies]
		const indexToDelete = currentMovieToDelete.findIndex(
			function(movie){
				// return movie._id.toString() === action.payload;
				//ou
				return movie._id == action.payload;

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
		return movie._id===action.payload._id;
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
