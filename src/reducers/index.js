"use strict"

import {combineReducers} from 'redux';

//Importer les Reducers pour pouvoir combiner
import {moviesReducers} from './moviesReducers'
import {cartReducers} from './cartReducers.js'

//On combine ce qu'il y'a la haut
//CombineReducers==Prend un objet as un argumnt
export default combineReducers({
movies:moviesReducers,
cart:cartReducers

})
