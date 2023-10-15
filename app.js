const express = require('express');
const logsRoutes = require('./src/routes/routes')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongodb = require('./src/databases/databases');
require('dotenv').config();

const app = express();
app.set('port', process.env.PORT || 3001);

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

mongodb.connectMongoDB()
    .then(() => {
        console.log("todo god")
    })
    .catch((err) => {
        console.log("todo mal :(")
    })

app.use('/logs', logsRoutes)
app.listen(app.set('port'), () => {
    console.log(`port on ${app.set('port')}`)
})


module.exports = app;