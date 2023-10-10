const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const app = express();
const port = PROCESS.ENV.PORT || 3000
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(app.set('port'), () => {
    console.log(`port on ${port}`)
})

module.exports = app;