var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
var app = express();

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
  //__dirname : It will resolve to your project folder.
});

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