"use strict"

//ADD to CART

export function addToCart(movie){
	return{
		type:"ADD_TO_CART",
		payload:movie
	}
}