const mongoose = require('mongoose');
const Travel = require('../models/travel');
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


const travelFindByCode = async(req,res) => {
    const q = await Model.find({'code': req.params.travelCode}).exec();

        //uncommint the following line to show results of query
        //on the console
        // console.log(q);

        if(!q){
            return res.status(404).json(err);
        }else{
            return res.status(200).json(q);
        };
};

const travelsAddTravel = async(req, res) => {
      
    //uncommint the following line to show results of query
    //on the console
    // console.log(q);
    const newTravel = new Travel({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    const q = await newTravel.save();
    
        if(!q){ //database returned no data
            return res.status(404).json(err);
        }else{
            return res.status(200).json(q);
        };


};

// PUT: travels/:travelCode - Updates an existing Travel
// Regardless of outcome, response must include an HTML status code
// and JSON message to the requesting client

const travelsUpdateTravel = async (req, res) => {
  console.log(req.params);
  console.log(req.body);

  try {
    const q = await Model.findOneAndUpdate(
      { code: req.params.travelCode }, //was trip code
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true } // return updated document
    ).exec();

    if (!q) {
      return res.status(404).json({
        message: "Travel not found"
      });
    }

    return res.status(201).json(q);

  } catch (error) {
    console.error("Update error:", error);
    return res.status(500).json({
      message: "Server error while updating travel",
      error: error.message
    });
  }

  // Uncomment to show query results
  // console.log(q);
};


module.exports = {
    travelsAddTravel,
    travelList,
    travelFindByCode,
    travelsUpdateTravel
};