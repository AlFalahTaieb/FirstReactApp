"use strict"


//Get A MOVIE

export function getMovies(movie){
	return{
		type:"GET_MOVIE",

}

}



//POST A MOVIE

export function postMovies(movie){
	return{
		type:"POST_MOVIE",
		payload:movie
}

}

//DELETE A MOVIE
export function deleteMovies(id){

return {
type:"DELETE_MOVIE",
payload:id
}
}

//UPDATE A MOVIE

export function updateMovies(movie){

	return {
	type:"UPDATE_MOVIE",
	payload:movie
}
}