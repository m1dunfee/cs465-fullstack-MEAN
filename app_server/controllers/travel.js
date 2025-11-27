const { json } = require("express");

const travelEndPoint = 'http://localhost:3000/api/travel';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

// let fs = require('fs');
// let state = JSON.parse(fs.readFileSync('./data/travel.json','utf8'));

// const travel = (req, res) => {
//     res.render('travel', {title: "Travel", state}); //this references travel.hbs in that first param type string (located in view folder)
// };

/* get tracel view*/
const travel = async function(req,res) {
    // console.log('travel controller');
    await fetch(travelEndPoint, options)
    .then(res => res.json())
    .then(state => {
        // console.log(json);
        let message = null;
        if(!(state instanceof Array)){
            message = 'API lookup error';
            state = [];
        }else{
            if(!(json.length)){
                message = "No trips existin our database"
            }
        }
        res.render('travel', {title: 'Travel', state, message})
    })
    .catch(err => res.status(500).send(e.message));
}

module.exports = {
    travel
};