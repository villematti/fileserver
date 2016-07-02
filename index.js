var Express = require('express');
app = Express();
var server = require('http').createServer(app);
var compression = require('compression');

var helmet = require('helmet');
var ejs = require('ejs');
var cors = require('cors');

var morgan = require('morgan');
var crypto = require('crypto');
var config = require('./config');

var mongoose = require('mongoose');

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false }));
app.use(bodyparser.json({limit: '5mb'}));

app.use(helmet());
app.use(compression());

app.set('view engine', 'ejs');

app.use('/assets', Express.static(__dirname + '/public'));
app.use(cors());
app.use(morgan('dev'));

// Routing
var userApi = require('./routes/api/user')(app);
var fileApi = require('./routes/api/file')(app);

mongoose.connect(config.db_server);

server.listen(config.port);