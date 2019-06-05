//const mongoose = require('mongoose');
const Product = require('../database/models');
const dressData = require('./dressData.json');
const fastcsv = require('fast-csv');  
const fs = require('fs');  


// Random Data Arrays
const designers = ['Something Navy', 'Eliza J', 'Leith', 'Free People', 'BP.', 'Chelsea28', 'Harper Rose', 'Charles Henry', 'Rachel Parcell', 'Gibson', 'WAYF']
const fits = ["Runs large; order one size down.", "True to size.", "Runs small; order one size up."];

// Seed Data function that randomizes a single data object
const seedData = () => {
  // Gets a random index from the Dress Data json array
  const dressDataRandomInt = Math.floor(Math.random() * dressData.length);
  
  // Grabs the data object from the json array
  const productName = dressData[dressDataRandomInt].productName;
  const description = dressData[dressDataRandomInt].description;
  var colors = dressData[dressDataRandomInt].colors;
  var imageUrlsColor1 = dressData[dressDataRandomInt].imageUrlsColor1;
  var imageUrlsColor2 = dressData[dressDataRandomInt].imageUrlsColor2;
  // Grabs the data from the Random Data Array
  const designer = designers[Math.floor(Math.random() * 11)];
  const fit = fits[Math.floor(Math.random() * 3)];
  // Randomizes a number 
  const price = Math.floor(Math.random() * (300 - 100)) + 100;
  const stars = Math.floor(Math.random() * (5 - 1)) + 1;
  const reviews = Math.floor(Math.random() * (20 - 10)) + 10;
  // Static size Array
  var sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large'];

  sizes = sizes.join();
  colors = colors.join();
  imageUrlsColor1 = imageUrlsColor1.join();
  imageUrlsColor2 = imageUrlsColor2.join();
  
  var createdAt = null;
  var updatedAt = null;
  
  return { productName, designer, price, stars, reviews, description, fit, sizes, colors, imageUrlsColor1, imageUrlsColor2, createdAt, updatedAt }
}

// Fills main data array with x number of documents
const documentsTotal = 500000
const mainDataArray = [];
for (let i = 0; i < documentsTotal; i++) {
  mainDataArray.push(seedData());
}

// Seeder function creating documents in the DBMS
// const seeder = () => {
//   Product.bulkCreate(mainDataArray)
//     .then(() => console.log('seeded'))
//     //.then(() => mongoose.connection.close())
//     .catch((err) => console.log(err));
// }

// // Runs seeder function
// seeder();


const ws = fs.createWriteStream('data.csv', {flags: 'a'}); 

fastcsv  
  .write(mainDataArray)
  .pipe(ws);