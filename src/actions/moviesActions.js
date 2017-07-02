"use strict"

import axios from 'axios';

const GET_MOVIES = "GET_MOVIES";
const POST_MOVIE = "POST_MOVIE";
const DELETE_MOVIE = "DELETE_MOVIE";

//Get A MOVIE

export function getMovies(){
	return function(dispatch){
		axios.get("/movies")
		.then(function(response){
			dispatch({type:"GET_MOVIE",payload:response.data})
		})
		.catch(function(err){
			dispatch({type:"GET_MOVIE_REJECTED", payload:err})
		})
	}

}





//POST A MOVIE

export function postMovies(movie){
    return function (dispatch){
        axios.post("/movies",movie) //you should return axios
            .then(function(response){
                dispatch({type:"POST_MOVIE", payload:response.data})
            })
            .catch(function(err){
                dispatch({type:"POST_MOVIE_REJECTED", payload:"there was an error while posting a new movie"})
            })

    }
}

//DELETE A MOVIE
export function deleteMovies(id){
	return function(dispatch){
		axios.delete("/movies/"+id)
		.then(function(response){
			dispatch({type:"DELETE_MOVIE",payload:id})
		})
		.catch(function(err){
			dispatch({type:"DELETE_MOVIE_REJECTED",payload:err})
		})
	}
}

//UPDATE A MOVIE

export function updateMovies(movie){

	return {
	type:"UPDATE_MOVIE",
	payload:movie
}
}