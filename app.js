let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let handlebars = require('hbs');


let aboutRouter = require('./app_server/routes/about')
let contactRouter = require('./app_server/routes/contact')
let indexRouter = require('./app_server/routes/index');
let mealsRouter = require('./app_server/routes/meals')
let newsRouter = require('./app_server/routes/news')
let roomsRouter = require('./app_server/routes/rooms')
let travelRouter = require('./app_server/routes/travel');
// let usersRouter = require('./app_server/routes/users');

//api files
let apiRouter = require('./app_api/routes/index');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
console.log('Views dir:', path.join(__dirname, 'app_server', 'views'));
app.use(express.static(path.join(__dirname, 'public')));
console.log('Views dir:', path.join(__dirname, 'public'));

app.set('view engine', 'hbs');

//bring in database
require('./app_api/models/db');

app.locals.layout = 'layouts/layout';

// register handlebars partials
handlebars.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));
console.log('Partials dir:', path.join(__dirname, 'app_server', 'views', 'partials'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS
app.use('/api', (req, res, next) =>{
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); //need to update for prod?
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/', indexRouter);
app.use('/meals', mealsRouter);
app.use('/news', newsRouter);
app.use('/rooms', roomsRouter);
app.use('/travel', travelRouter);
//app.use('/user', userRouter); // keep off until I find where the view is 

//api endpoints
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
