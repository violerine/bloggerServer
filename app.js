var createError = require('http-errors');
var express = require('express');
const mongoose = require ('mongoose')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Mocha = require('mocha');
var chai = require('chai')
var chaiHttp = require('chai-http');

var cors = require ('cors')

var indexRouter = require('./routes/index');
var articleRouter = require('./routes/articles');

var app = express();

// mongoose.connect("mongodb://127.0.0.1:27017/blogTDD")
mongoose.connect("mongodb://blogtdd:blogtdd@ds233500.mlab.com:33500/blogtdd")


app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

chai.use(chaiHttp);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/articles', articleRouter);

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
