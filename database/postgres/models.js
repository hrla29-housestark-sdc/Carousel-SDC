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

// const Product = db.define('products', {
//   product_name: { type: Sequelize.STRING },
//   designer: { type: Sequelize.STRING },
//   price: { type: Sequelize.FLOAT },
//   stars: { type: Sequelize.FLOAT },
//   reviews: { type: Sequelize.INTEGER },
//   description: { type: Sequelize.STRING },
//   fit: { type: Sequelize.STRING },
//   sizes: { type: Sequelize.STRING },
//   colors: { type: Sequelize.STRING },
//   image_urls_color1: { type: Sequelize.STRING(2000) },
//   image_urls_color2: { type: Sequelize.STRING(2000) },
// })

// db.sync();

// module.exports = Product;

const { Client } = require('pg')
const db = require('./index');

const client = new Client({
  user: 'ubuntu',
  host: 'ec2-18-222-125-220.us-east-2.compute.amazonaws.com',
  database: 'productdescription',
  password: 'password',
  port: 5432
})

client.connect()
  .then(() => console.log('successful connection to db instance'))
  .catch(err => console.log('error connecting to db instance', err))

module.exports = client;