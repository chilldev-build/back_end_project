const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan'),
es6Renderer = require('express-es6-template-engine'),
chart = require('chart.js'),
session = require("express-session"),
FIleStore = require("session-file-store")(session);


require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const teamRouter = require('./routes/team_router');
const chartRouter = require('./routes/teamchart_router');

const app = express();

app.engine("html", es6Renderer);
app.set('views', './views');
app.set("view engine" ,"html");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(chart());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    store: new FIleStore(),
    secret: "get rad",
    resave: false,
    saveUninitialized: true,
    is_logged_in: false
}));

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/team',teamRouter);
app.use('/me',chartRouter);

module.exports = app;
