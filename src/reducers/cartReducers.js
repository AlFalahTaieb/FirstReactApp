"use strict"


//Cart REducers


export function cartReducers(state={cart:[]},action){
switch(action.type){
	case"ADD_TO_CART":
	return{cart:[...state,...action.payload]}
	break;
//Delete
	case"DELETE_CART_ITEM":
	return{cart:[...state,...action.payload]}
	break;

}
return state
}
