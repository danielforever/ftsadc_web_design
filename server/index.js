require('dotenv').config()
const https = require("https");
const fs = require("fs");
const express = require('express');
const app = express();
const path = require('path');
const { logger, logEvents } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
let cors = require('cors');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/dbConn')
let mongoose = require('mongoose');
const PORT = Number(process.env.PORT) || 3500;


console.log(process.env.NODE_ENV);

connectDB();

// Show logger actions in ./logs/reqLog.log
app.use(logger);

// CORS for Nodejs and React to interact
app.use(cors(corsOptions));

// less hackers know about our stack
app.disable('x-powered-by');

// For ExpressJS to read json file
app.use(express.json())

// For Javascript server to read cook token
app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'public')))

// Add routes 
app.use('/', require('./routes/root'))
app.use('/auth', require('./routes/authRoutes'))
app.use('/users', require('./routes/userRoutes'))
app.use('/createusers', require('./routes/userNoTokenRoutes'))
app.use('/posters', require('./routes/posterRoutes'))
app.use('/otp', require('./routes/otpRoutes'))

/* https.createServer({
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    }, app).listen(3500, () => {
    console.log("server is runing at port 3500");
  }); */

// Check if the webpage exists
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
      res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
      res.json({ message: '404 Not Found' })
  } else {
      res.type('txt').send('404 Not Found')
  }
})

// Return error to ./logs/errorLog.log
app.use(errorHandler)

// Connect server with mongoDB
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  https.createServer({
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  }, app).listen(3500, () => {
  console.log("server is runing at port 3500");
});
  /* app.listen(PORT, () => console.log(`Server running on port ${PORT}`)) */
})

// Return error to ./logs/mongoErrLog.log
mongoose.connection.on('error', err => {
  console.log(err)
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})

module.exports = app;