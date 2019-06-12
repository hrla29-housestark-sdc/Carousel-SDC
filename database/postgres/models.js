// const mongoose = require('mongoose');
// const db = require('./index');

// // Product Description Schema
// const productDescriptionSchema = new mongoose.Schema({
//   ID: Number,
//   productName: String,
//   designer: String,
//   price: Number,
//   stars: Number,
//   reviews: Number,
//   description: String,
//   fit: String,
//   sizes: Array,
//   colors: Array,
//   imageUrlsColor1: Array,
//   imageUrlsColor2: Array
// });

// // Connecting the Product Descriptions Schema to the database
// const ProductDescription = mongoose.model('ProductDescriptions', productDescriptionSchema);

// module.exports = ProductDescription;

//**********************************************************************
//UNCOMMENT BELOW FOR SEQUELIZE
//********************************************************************** 

// const Sequelize = require('sequelize');
// const db = require('./index');

// const Product = db.define('product', {
//   productName: { type: Sequelize.STRING },
//   designer: { type: Sequelize.STRING },
//   price: { type: Sequelize.FLOAT },
//   stars: { type: Sequelize.FLOAT },
//   reviews: { type: Sequelize.INTEGER },
//   description: { type: Sequelize.STRING },
//   fit: { type: Sequelize.STRING },
//   sizes: { type: Sequelize.STRING },
//   colors: { type: Sequelize.STRING },
//   imageUrlsColor1: { type: Sequelize.STRING(2000) },
//   imageUrlsColor2: { type: Sequelize.STRING(2000) },
//   createdAt: { type: Sequelize.DATE() },
//   updatedAt: { type: Sequelize.DATE() }
  
// })

// db.sync();

// module.exports = Product;

const { Client } = require('pg')
const db = require('./index');

const client = new Client({
  user: '',
  host: 'localhost',
  database: 'productdescription',
  password: '',
})

client.connect()

module.exports = client;