const mongoose = require('mongoose');
const readLine = require('readline');

// host and db name
const host = process.env.DB_HOST || 'localhost:27017';
const dbName = process.env.DB_NAME || 'cs465-fullstack-mean';

// USE BACKTICKS here so ${host} is interpolated
const dbURI = process.env.DB_URI || `mongodb://${host}/${dbName}`;

// build the connection and set the connection timeout (in ms)
const connect = () => {
  setTimeout(() => {
    mongoose.connect(dbURI, {
      // serverSelectionTimeoutMS: 10000
    }).catch(err => {
      console.error('Initial mongoose connection error:', err.message);
    });
  }, 1000);
};

// Monitor connection events
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Windows-specific listener
if (process.platform === 'win32') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('SIGINT', () => {
    process.emit('SIGINT');
  });
}

// graceful shutdown
const gracefulShutdown = msg => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
  });
};

// shutdown invoked by nodemon restart
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart');
  process.kill(process.pid, 'SIGUSR2');
});

// shutdown invoked by app termination (Ctrl+C)
process.once('SIGINT', () => {
  gracefulShutdown('app termination');
  process.exit(0);
});

// shutdown invoked by container / hosting
process.once('SIGTERM', () => {
  gracefulShutdown('app shutdown');
  process.exit(0);
});

// make initial connection to DB
connect();

// import mongoose schemas (ensure these call mongoose.model)
require('./about');
require('./contact');
require('./index');
require('./meals');
require('./news');
require('./rooms');
require('./travel');

module.exports = mongoose;
