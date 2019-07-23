
//**********************************************************************
//UNCOMMENT BELOW FOR SEQUELIZE
//********************************************************************** 

const Sequelize = require('sequelize');
const db = require('./index');

const Product = db.define('products', {
  product_name: { type: Sequelize.STRING },
  designer: { type: Sequelize.STRING },
  price: { type: Sequelize.FLOAT },
  stars: { type: Sequelize.FLOAT },
  reviews: { type: Sequelize.INTEGER },
  description: { type: Sequelize.STRING },
  fit: { type: Sequelize.STRING },
  sizes: { type: Sequelize.STRING },
  colors: { type: Sequelize.STRING },
  image_urls_color1: { type: Sequelize.STRING(2000) },
  image_urls_color2: { type: Sequelize.STRING(2000) },
})

db.sync();

module.exports = Product;

