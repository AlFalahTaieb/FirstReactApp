var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var Movies=require('./models/movies');
var index = require('./routes/index');
var users = require('./routes/users');
var Movies=require('./models/movies');
var app = express();


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
// app.use('/static', express.static(path.join(__dirname, 'public')))
// app.set('view engine', 'html');
app.set('views', __dirname,'/public')



//API SERV
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieshop');//pour crée la db, mongoose va la créer automatiquement
Movies=require('./models/movies.js');

//------POST--------
app.post('/movies', function(req, res){
var movie = req.body;

Movies.create(movie, function(err, movies){
if(err){
throw err;
}
res.json(movies);
})
});
//END POST
//GET BOOKS

app.get('/movies',function(req,res){
Movies.find(function(err,movies){
	if(err){
		throw err;
	}
	res.json(movies)
})
})

//Delete

app.delete('/movies/:_id',function(req,res){
var query = {_id:req.params._id};
Movies.remove(query,function(err,movies){
	if(err){
		throw err;
	}
	res.json(movies)
})
});
//Update
app.put('/movies/:_id,function(req,res'){
	var movies = req.body;
	var query = req.params._id;
	//si non éxistant création d'un nouveau champ
	var update={
		'$set':{
			title:movie.title,
			description:movie.description,
			image:movie.image,
			price:movie.price
		}

	}
};


app.get('*',function(req,res){
	res.sendFile(path.resolve(__dirname,'public','index.html'));
	// response.sendfile('./public/index.html');
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
