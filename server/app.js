
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var conf = require('./config');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var passport = require('passport');
var flash 	 = require('connect-flash');
var LocalStrategy = require('passport-local').Strategy;
var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.session({ secret: conf.secret }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});


app.get('/', routes.index);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
