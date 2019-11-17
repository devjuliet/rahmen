const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressJwt = require('express-jwt');
const indexRouter = require('./routes/index');
const cardRouter = require('./routes/cards');
const projectRouter = require('./routes/projects');
const usersRouter = require('./routes/users');
const backlogsRouter = require('./routes/backlogs');
const membersRouter = require('./routes/members');
const teamsRouter = require('./routes/teams');
const config = require('config')
const i18n = require('i18n');

const app = express();

i18n.configure({
  locales:['en', 'es'],
  cookie: 'language',
  directory: __dirname + '/locales'
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(i18n.init);

const jwtKey = config.get("secret.key");

app.use(expressJwt({secret:jwtKey})
.unless({path: ["/login"]}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/backlogs', backlogsRouter);
app.use('/members',membersRouter);
app.use('/cards',cardRouter);
app.use('projects',projectRouter);
app.use('/teams',teamsRouter);
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
