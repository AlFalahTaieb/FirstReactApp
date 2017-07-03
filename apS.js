var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/////////
// API //
/////////
var mongoose = require('mongoose');

// movieshop will be the name of the db:
mongoose.connect('mongodb://localhost:27017/movieshop');
var Movies = require('./models/movies.js');
var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:?????????? '));

//SETUPSESS




  app.use(session({
    secret: 'mySecretString',
    saveUninitialized: false,
    resave: false,
    cookie:{maxAge:1000*60*60*24*2},
    store: new MongoStore({ mongooseConnection: db, ttl: 2 * 24 * 60 * 60})
  }));
  
  // --->>> POST w/SESSION <<<---
  app.post('/cart', function(req, res) {
    var cart = req.body;
    // NOTE NOTE NOTE
    req.session.cart = cart; // THIS IS WHAT WE'RE SAVING W/SESS, YOU CAN CHANGE THIS TO STH ELSE IN OTHER PROJECTS!!!
    req.session.save(function(err) {
      if (err) {
        throw err;
      }
      res.json(req.session.cart)
    })
  });
  
  //  --->>> GET SESSION CART <<<---
  app.get('/cart', function(req, res) {
    if (typeof req.session.cart !== 'undefined') {
      res.json(req.session.cart);
    }
  });
  // --->>> END SESSION SET UP <<<---
  





// --->>> POST movie(S) <<<---
app.post('/movies', function(req, res) {
  var movie = req.body;

  Movies.create(movie, function(err, movies) {
    if (err) {
      throw err;
    }
    res.json(movies);
  });
});

// --->>> GET movieS <<<---
app.get('/movies', function(req, res) {
  Movies.find(function(err, movies) {
    if (err) {
      throw err;
    }
    res.json(movies);
  });
});

// --->>> UPDATE movie <<<---
app.put('/movies/:_id', function(req, res) {
  var movie = req.body,
      query = req.params._id;

  // if a field doesn't exist $set will add it:
  var update = {
    '$set': {
      title: movie.title,
      description: movie.description,
      image: movie.image,
      price: movie.price
    }
  };

  // when true, returns the updated document:
  var options = { new: true };

  Movies.findOneAndUpdate(query, update, options, function(err, movies) {
    if (err) {
      throw err;
    }
    res.json(movies);
  });
});

// --->>> DELETE movie <<<---
app.delete('/movies/:_id', function(req, res) {
  var query = { _id: req.params._id };

  Movies.remove(query, function(err, movies) {
    if (err) {
      throw err;
    }
    res.json(movies)
  });
});






app.get('/images', function(req,res) {
  var imgFolder = __dirname + '/public/images/';
 
  var fs = require('fs');

  fs.readdir(imgFolder, function(err, files) {
    if (err) {
      return console.error(err);
    }
    // create empty arr:
    var filesArr = [],
        i = 1;
    // iterate over imgs & add to arr:
    files.forEach(function(file) {
      filesArr.push({ name: file });
      i++;
    });
    // send json res w/array
    res.json(filesArr);
  })
})

////////////////
// END IMAGES //
////////////////




/////////////
// End API //
/////////////






app.listen(3001, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('API Server listening on http://localhost:3001');
});