"use strict"

//ADD to chariot

export function addToCart(movie){
	return{
		type:"ADD_TO_CART",
		payload:movie
	}



}

//Delete From chariot

export function deleteCartItem(cart){
	return{
		type:"DELETE_CART_ITEM",
		payload:cart
	}
}

//Update chariot 
export function updateCart(_id, unit){
	return{
		type:"UPDATE_CART",
		_id:_id,
		unit:unit
	}
	
}