const allowedOrigins = require('./allowedOrigins')

const corsOptions = { // thrid party middleware
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) { //only allow those origins to access our backend api !origin allow postman to test the api.
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,  //allow credentials header, it handles the credentials for you
    optionsSuccessStatus: 200  // original to be 204, but some device have problems with it so change to 200
}

module.exports = corsOptions