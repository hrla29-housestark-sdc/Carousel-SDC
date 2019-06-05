// const mongoose = require('mongoose');
// require('dotenv').config();

// let DB_URL = (process.env.NODE_ENV === 'development') ? 'mongodb://localhost/productDescription' : `mongodb+srv://matthewmata1030:${process.env.DB_PW}@cluster0-esl5a.mongodb.net/test?retryWrites=true&w=majority`

// // Connecting our local storage db to our application with the db name productDescription
// const db = mongoose.connect(DB_URL, {useNewUrlParser: true});

// module.exports = db;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('productdescription', '', '', {
  host: 'localhost',
  dialect: 'postgres'
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;