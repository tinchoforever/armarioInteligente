
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
// var greenUsersAPI = require('./routes/greenUsers');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);


var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);
if (process.env.NODE_ENV ==='production'){
  //For Heroku
  io.configure(function () {
      io.set("transports", ["xhr-polling"]);
      io.set("polling duration", 10);
      io.set("log level", 1);
  });
}

var mainSocket = {};
io.sockets.on('connection', function(socket) {
  mainSocket = socket;


});

// NodeJS includes
var sys = require('sys');
var fs = require('fs');

// Stores the RFID id as it reconstructs from the stream.
var id = '';
// List of all RFID ids read
var ids = [];


fs.createReadStream('/dev/cu.usbmodemfa141', { bufferSize: 1 })

.on('open', function(fd) {
  sys.puts('Begin scanning RFID tags.');
})

.on('end', function() {
  sys.puts('End of data stream.');
})

.on('close', function() {
  sys.puts('Closing stream.');
})

.on('error', function(error) {
  sys.debug(error);
})

.on('data', function(chunk) {
  chunk = chunk.toString('ascii').match(/\w*/)[0]; // Only keep hex chars
  if ( chunk.length == 0 ) { // Found non-hex char
    if ( id.length > 0 ) { // The ID isn't blank
      // Store the completely reconstructed ID
      if (mainSocket){
            mainSocket.emit("new-clothe", {id:id});
      }
      sys.puts(id);
    }
    id = ''; // Prepare for the next ID read
    return;
  }
  id += chunk; // Concat hex chars to the forming ID
});

