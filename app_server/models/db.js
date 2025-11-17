const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = 'mongodb://${host}/travlr'; //pretty sure this is gonna need to be corrected to serve the right route.
const readLine = require('readline');

//build the connection string and set the connection timeout.
// in milliseconds
const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
    }), 1000);
};

// Monitor connection events
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ${dbURI}');
});

mongoose.connection.on('error', () => {
    console.log('Mongoose connected error', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

//windows specifi lisnter
if(process.platform === 'win32'){
    const r1 = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    r1.on('SIGINT', () => {
        process.emit("SIGINT")
    });
};

//gonfire for graceful shotdown
const gracefulShutdown = (msg) => {
    mongoose.connect.close(() => {
        console.log('Mongoose disconnected through ${msg}');
    });
};

//event listeners to process graceful shutdowns

//shutdown invoked
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart');
    process.kill(process.pid, 'SIGUSR2');
});

//shutdown invoked by app terminations
process.once('SIGINT', () => {
    gracefulShutdown('app termination');
    process.exit(0);
});

//shutdown invoked by container termination
process.once('SIGTERM', () => {
    gracefulShutdown('app shutdown');
    process.exit(0);
});

//make inital connection to DB
connect();

//import mongoose shema
require('./travlr') //this is the missing data file in models
module.exports = mongoose;