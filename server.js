// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Express to run server and routes
var express = require('express');

// Start up an instance of app
var app = express();


/* Dependencies */
var bodyParser = require('body-parser');
var cors = require('cors');
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.express.static('website');
// Spin up the server
app.listen(3000, startServer);
// Callback to debug
function startServer(){
    console.log('Starting Server for weather applications');
}

// Initialize all route with a callback function
function allRoute(){
    return projectData;
}

// Callback function to complete GET '/all'
app.get('/all', allRoute);

// Post Route