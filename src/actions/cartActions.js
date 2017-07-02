"use strict"

//ADD to chariot

export function addToCart(movie){
	
	  return function(dispatch) {
    axios.post('cart', cart)
      .then(function(response) {
        dispatch({
          type: ADD_TO_CART,
          payload: response.data
        })
      })
      .catch(function(err) {
        dispatch({
          type: ADD_TO_CART_REJECTED,
          msg: 'Error posting to cart.'
        })
      })
  };
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