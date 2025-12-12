const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens

// Method to authenticate our JWT 
function authenticateJWT(req, res, next) { 
    console.log('In Middleware'); 

    const authHeader = req.headers['authorization'];
    //console.log('Auth Header: ' + authHeader); 

    if(authHeader == null) { 
        console.log('Auth Header Required but NOT PRESENT!'); 
        return res.sendStatus(401); 
    } 
    
    let headers = authHeader.split(' '); 
    if(headers.length < 1) { 
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    } 
    
    const token = authHeader.split(' ')[1]; 
    //console.log('Token: ' + token); 

    if(token == null) { 
        console.log('Null Bearer Token'); 
        return res.sendStatus(401); 
    } 
    
    // console.log(process.env.JWT_SECRET);
    // console.log(jwt.decode(token)); 
    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
         if(err) { 
            return res.sendStatus(401).json('Token Validation Error!'); 
         } 
         req.auth = verified; // Set the auth paramto the decoded object 
    }); 
    next(); // We need to continue or this will hang forever
}

const travelController = require('../controllers/travel');
const authController = require('../controllers/authentication');

//redister user for auth
router
    .route("/register")
    .post(authController.register);

//login user  route 
router
    .route("/login")
    .post(authController.login);

router
    .route('/travel')
    .get(travelController.travelList)
    .post(authenticateJWT, travelController.travelsAddTravel);

//this is for single find by travelcode
router
    .route('/travel/:travelCode')
    .get(travelController.travelFindByCode)
    .put(authenticateJWT, travelController.travelsUpdateTravel);

module.exports = router;