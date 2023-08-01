const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();
const port = 8000;

// 'cors' middleware to enable CORS for all routes
app.use(cors());

// Parsing JSON bodies for API requests
app.use(express.json());

// Parse URL-encoded bodies for form submissions (when data is sent through x-www-form-urlencoded in Postman)
app.use(express.urlencoded({ extended: true }));

const db = require('./config/mongoose');

app.use('/', require('./routes'));

app.listen(process.env.PORT, function(err){
    if(err){console.log('Problem in connecting to server', err)};
    console.log('Yup! My Express server is running on Port:', port);
})