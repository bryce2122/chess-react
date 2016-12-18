var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var busboy = require('connect-busboy'); //middleware for form/file upload
   //used for file path
var fs = require('fs-extra');
var multer = require('multer')
var ObjectId = require('mongodb').ObjectID;

var proxy = httpProxy.createProxyServer();
var app = express();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/react');

app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use(multer({ dest: './uploads/'}))


var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');

var router = express.Router()

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.get('/piano',function(req,res){
  res.sendFile(path.join(__dirname+'/public/piano.html'));
  //__dirname : It will resolve to your project folder.
});



app.post('/upload', function(req, res){
    console.log(req.body) // form fields
    
        var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var opening = req.body
   

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
   
collection.update(
   { "_id": ObjectId("5854be3bbb2c069b75c3e36d") },
   {
      "opening" : opening
      
   },
   { upsert: true }
)







    res.redirect("caro-kann");
   

    res.status(204).end()


    
});

















app.get('/stonewall',function(req,res){
  res.sendFile(path.join(__dirname+'/public/stonewall.html'));
  //__dirname : It will resolve to your project folder.
});


// app.get('/stonewall', function (req, res) {
//   res.render('stonewall');
// })

app.get('/french-defense',function(req,res){
  res.sendFile(path.join(__dirname+'/public/french.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/caro-kann',function(req,res){
  res.sendFile(path.join(__dirname+'/public/caro.html'));
  




})

app.get('/ajax', function(req, res) {
    
       var db = req.db;
  var collection = db.get('usercollection');
  var data = collection.find()
 
data.then(function(result) {
   var a = result.filter((c,i) => {

    return i === 0

  })
   

 res.send(a[0].opening.textline)

   
   }) //will log results.


    
});






  //__dirname : It will resolve to your project folder.


app.get('/sicilian-dragon',function(req,res){
  res.sendFile(path.join(__dirname+'/public/sicilian.html'));
  //__dirname : It will resolve to your project folder.
});




app.get('/myRoute', function(request, response) {
    response.sendFile( 'index.html'); //Since we have configured to use public folder for serving static files. We don't need to append public to the html file path.
});










app.use(express.static(publicPath));

// We only want to run the workflow when not in production
if (!isProduction) {

  // We require the bundler inside the if block because
  // it is only needed in a development environment. Later
  // you will see why this is a good idea
  var bundle = require('./server/bundle.js');
  bundle();

  // Any requests to localhost:3000/build is proxied
  // to webpack-dev-server
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
  });

}

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});







app.listen(port, function () {
  console.log('Server running on port ' + port);
});