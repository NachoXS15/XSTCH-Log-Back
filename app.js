const express = require('express');
const logsRoutes = require('./src/routes/routes')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use('/logs', logsRoutes)
app.listen(app.set('port'), () => {
    console.log(`port on ${port}`)
})


module.exports = app;