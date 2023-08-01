const mongoose = require('mongoose');

mongoose.connect(process.env.DBURL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in establishing connection'));

db.once('open', function(){
    console.log('Successfully connected to Database');
});

module.exports = db;