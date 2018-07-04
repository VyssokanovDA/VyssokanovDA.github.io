const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const logger = require('morgan');
const path = require('path');

const app = express();

app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));


//app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);
require('./lib/passport');

app.listen(3000, () => console.log('Example app listening on port 3000!'));
