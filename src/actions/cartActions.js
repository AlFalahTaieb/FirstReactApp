"use strict"
import axios from 'axios';

const ADD_TO_CART = "ADD_TO_CART";
  const UPDATE_CART = "UPDATE_CART";
  const DELETE_CART_ITEM = "DELETE_CART_ITEM";
 const ADD_TO_CART_REJECTED = "ADD_TO_CART_REJECTED";



export function getCart() {
   return function(dispatch) {
     axios.get('/api/cart')
       .then(function(response) {
         dispatch({
           type: "GET_CART",
           payload: response.data
         })
      })
       .catch(function(err){
         dispatch({
           type: "GET_CART_REJECTED",
           msg: 'Error getting cart from session.'
         })
       })
  }
  }

//ADD to chariot

export function addToCart(cart){
	
	  return function(dispatch) {
    axios.post("/api/cart", cart)
      .then(function(response) {
        dispatch({
          type: "ADD_TO_CART",
          payload: response.data
        })
      })
      .catch(function(err) {
        dispatch({
          type: "ADD_TO_CART_REJECTED",
          msg: 'Error posting to cart.'
        })
      })
  };
}





//Update chariot 
export function updateCart(_id, unit){
const currentMovieUpdate=cart
const indexToUpdate = currentMovieUpdate.findIndex(
  function(movie){
    return movie._id === _id;
  })
	

const newMovieToUpdate ={
  ...currentMovieUpdate[indexToUpdate],
  quantity: currentMovieUpdate[indexToUpdate].quantity + unit
}

let cartUpdate = [...currentMovieUpdate.slice(0,indexToUpdate), newMovieToUpdate,
...currentMovieUpdate.slice(indexToUpdate + 1)];

return function(dispatch) {
    axios.post("/api/cart", cartUpdate)
    
      .then(function(response) {
        dispatch({
          type: "UPDATE_CART",
          payload: response.data
        })
      })
      .catch(function(err) {
        dispatch({
          type: "UPDATE_CART_REJECTED",
          msg: 'Error'
        })
      })
  }
}

//Delete From chariot

export function deleteCartItem(cart){
return function(dispatch){
  axios.post("/api/cart",cart)
  .then(function(response){
    dispatch({
      type:"DELETE_CART_ITEM",
      payload:response.data
    })
    .catch(function(err){
      dispatch({type:"DELETE_CART_ITEM_REJECTED",
        msg:'error when deleting an item from the cart'})
    })
  })
}
}