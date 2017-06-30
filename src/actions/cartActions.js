"use strict"

//ADD to CART

export function addToCart(movie){
	return{
		type:"ADD_TO_CART",
		payload:movie
	}



}

//Delete From Cart

export function deleteCartItem(cart){
	return{
		type:"DELETE_CART_ITEM",
		payload:cart
	}


	
}