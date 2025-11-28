const mongoose = require('mongoose');
const travel = require('../models/travel');
const Model = mongoose.model('travel'); //name of the model not he name of the collection in the db

const travelList = async(req,res) => {
    const q = await Model.find({}).exec();

        //uncommint the following line to show results of query
        //on the console
        // console.log(q);

        if(!q){
            return res.status(404).json(err);
        }else{
            return res.status(200).json(q);
        };
};


// travelCode was labeled as Code in seeds, but I did do that
// if you want that to run update the travel.js model file
// then run the seed.js file to update the database.

// const travelFindByCode = async(req,res) => {
//     const q = await Model.find({'code': req.params.travelCode}).exec();

//         //uncommint the following line to show results of query
//         //on the console
//         // console.log(q);

//         if(!q){
//             return res.status(404).json(err);
//         }else{
//             return res.status(200).json(q);
//         };
// };

module.exports = {
    travelList
    // travelFindByCode
};