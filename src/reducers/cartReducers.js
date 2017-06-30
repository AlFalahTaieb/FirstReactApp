"use strict"


//Cart REducers


export function cartReducers(state={cart:[]},action){
switch(action.type){



	case"ADD_TO_CART":
	// return{cart:[...state,...action.payload]}
	
	return{...state,
		cart:action.payload,
		totalAmount:totals(action.payload).amount,
	totalQt:totals(action.payload).qt

	}
	
	break;

//update

	case"UPDATE_CART":
const currentMovieToUpdate=[...state.cart]
const indexToUpdate=currentMovieToUpdate.findIndex(
	function(movie){
		return movie._id === action._id;
	}
   )
const newMovieToUpdate = {
	...currentMovieToUpdate[indexToUpdate],
	quantity: currentMovieToUpdate[indexToUpdate].quantity + action.unit
}
let cartUpdate = [...currentMovieToUpdate.slice(0,indexToUpdate),newMovieToUpdate,
...currentMovieToUpdate.slice(indexToUpdate+1)]
 
 return {...state,
		cart:cartUpdate,
		totalAmount:totals(cartUpdate).amount,
		totalQt: totals(cartUpdate).qt
	}
	break;


//Delete
	case"DELETE_CART_ITEM":
	// return{cart:[...state,...action.payload]}

	return{...state,
		cart:action.payload,
			totalAmount:totals(action.payload).amount,
 totalQt:totals(action.payload).qt
}

	
	break;

}
return state
}


//Calcul du total

export function totals(payloadArr){
	const totalAmount = payloadArr.map(function(cartArr){
		return cartArr.price * cartArr.quantity;
	}).reduce(function(a,b){
		return a+b;
	},0)//Débuter par 0 

const totalqt=payloadArr.map(function(qt){
	return qt.quantity;
}).reduce(function(a,b){
return a + b;
},0);

	return {amount:totalAmount.toFixed(2),qt:totalqt}
}
