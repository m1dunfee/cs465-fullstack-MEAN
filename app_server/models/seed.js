const Mongoose = require('./db');
const About = require('./about');
const Contact = require('./contact');
const Index = require('./index');
const Meals = require('./meals');
const News = require('./news');
const Rooms = require('./rooms');
const Travel = require('./travel');

let fs = require('fs');
let about = JSON.parse(fs.readFileSync('./data/about.json','utf8'));
let contact = JSON.parse(fs.readFileSync('./data/contact.json','utf8'));
let index = JSON.parse(fs.readFileSync('./data/index.json','utf8'));
let meals = JSON.parse(fs.readFileSync('./data/meals.json','utf8'));
let news = JSON.parse(fs.readFileSync('./data/news.json','utf8'));
let rooms = JSON.parse(fs.readFileSync('./data/rooms.json','utf8'));
let travel = JSON.parse(fs.readFileSync('./data/travel.json','utf8'));


const seedDB = async () => {
    await About.deleteMany({});
    await About.insertMany(about);
    //
    await Contact.deleteMany({});
    await Contact.insertMany(contact);
    //
    await Index.deleteMany({});
    await Index.insertMany(index);
    //
    await Meals.deleteMany({});
    await Meals.insertMany(meals);
    //
    await News.deleteMany({});
    await News.insertMany(news);
    //
    await Rooms.deleteMany({});
    await Rooms.insertMany(rooms);
    //
    await Travel.deleteMany({});
    await Travel.insertMany(travel);
};

seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});