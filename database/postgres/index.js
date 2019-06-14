// const mongoose = require('mongoose');
// // require('dotenv').config();

// // let DB_URL = (process.env.NODE_ENV === 'development') ? 'mongodb://localhost/productDescription' : `mongodb+srv://matthewmata1030:${process.env.DB_PW}@cluster0-esl5a.mongodb.net/test?retryWrites=true&w=majority`
// // console.log(DB_URL)
// // // Connecting our local storage db to our application with the db name productDescription
// // const db = mongoose.connect(DB_URL, {useNewUrlParser: true});

// mongoose.connect('mongodb://localhost/productDescription', {useNewUrlParser: true});

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log('connection to mongo database successful')
// });

// module.exports = db;





//********************************************************
//UNCOMMENT BELOW FOR SEQUELIZE
//******************************************************** 

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('productdescription', 'ubuntu', 'password', {
//   host: 'ec2-18-222-125-220.us-east-2.compute.amazonaws.com',
//   dialect: 'postgres'
// })

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('sequelize connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// module.exports = sequelize;