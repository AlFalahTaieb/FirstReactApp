"use strict"

var mongoose = require('mongoose');

var moviesSchema = mongoose.Schema({
title:String,
description:String,
image:String,
price:Number

});
var Movies = mongoose.model('Movies',moviesSchema)
module.exports = Movies;