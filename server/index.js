require('dovend')
const express = require('express');
const app = express();
const path = require('path');
const { logger } = require('./middleware/logger')
let mongoose = require('mongoose');
let cors = require('cors');
const cookieParser = require('cookie-parser');
const corsOptions = require('./config/corsOptions');
let bodyParser = require('body-parser');
const userRoute = require('../server/routes/blog');
const dbURL = 'mongodb+srv://testuser:12345@cluster0.qrz4436.mongodb.net/test';


app.use(logger);

app.use(cors(corsOptions));

app.use(express.json())

app.use(cookieParser)




mongoose
  .connect(dbURL)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));




app.use('/users', userRoute)
const port = process.env.PORT || 3500;

const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
// Error Handling
app.use((req, res, next) => {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});