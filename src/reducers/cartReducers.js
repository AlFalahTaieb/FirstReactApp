"use strict"


//Cart REducers


export function cartReducers(state={cart:[]},action){
switch(action.type){

case "GET_CART":
return{...state,
cart:action.payload,
totalAmount:totals(action.payload).amount,
totalqt:totals(action.payload).qt
}

break;


	case"ADD_TO_CART":
	// return{cart:[...state,...action.payload]}
	
	return{...state,
		cart:action.payload,
		totalAmount:totals(action.payload).amount,
	totalqt:totals(action.payload).qt

	}
	
	break;

//update

	case"UPDATE_CART":
return{...state,
	cart:action.payload,
	totalAmount:
	totals(action.payload).amount,
	totalqt:totals(action.payload).qt
}
	break;



//Delete
	case"DELETE_CART_ITEM":
	// return{cart:[...state,...action.payload]}

	return{...state,
		cart:action.payload,
			totalAmount:totals(action.payload).amount,
 totalqt:totals(action.payload).qt
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
