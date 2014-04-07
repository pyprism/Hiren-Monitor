/**
 * Created by prism on 4/6/14.
 */

var logentries = require('node-logentries'),
    mongoose = require('mongoose') ,
    config = require('../config.js');

var log = logentries.logger({
    token: config.token
});

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', function(err) {
    log.error('connection error: %s', err);
});

db.once('open', function callback () {
    // yay!
});




console.log(config.token);

// level specific methods like 'info', 'debug', etc.
//log.info("I'm a Lumberjack and I'm OK")

// generic log method, also accepts JSON entries
//log.log("debug", {sleep:"all night", work:"all day"})