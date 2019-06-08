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

  imageUrlsColor1 = imageUrlsColor1.slice(0, 2);
  imageUrlsColor2 = imageUrlsColor2.slice(0, 2);

  //***********************************************
  //UNCOMMENT BELOW IF WRITING TO CSV
  //*********************************************** 

  sizes = sizes.join();
  colors = colors.join();
  imageUrlsColor1 = imageUrlsColor1.join();
  imageUrlsColor2 = imageUrlsColor2.join();
  
  var createdAt = null;
  var updatedAt = null;
  
  return { productName, designer, price, stars, reviews, description, fit, sizes, colors, imageUrlsColor1, imageUrlsColor2 , createdAt, updatedAt }
}

// Fills main data array with x number of documents
// const documentsTotal = 500000
// const mainDataArray = [];
// for (let i = 0; i < documentsTotal; i++) {
//   mainDataArray.push(seedData());
// }

// Seeder function creating documents in the DBMS
// const seeder = () => {
//   Product.bulkCreate(mainDataArray)
//     .then(() => console.log('seeded'))
//     //.then(() => mongoose.connection.close())
//     .catch((err) => console.log(err));
// }

// // Runs seeder function
// seeder();



// const ws = fs.createWriteStream('data.json', {flags: 'w'});

// function writeTenMillionTimes(writer, data, encoding, callback) {
//   let i = 10000000;
//   writer.write('[', encoding);
//   write();
//   function write() {
//     let ok = true;
//     do {
//       i--;
//       if (i === 0) {
//         // last time!
//         data = seedData();
//         writer.write(`${JSON.stringify(data, null, 2)}]`, encoding, callback);
//       } else {
//         // See if we should continue, or wait.
//         // Don't pass the callback, because we're not done yet.
//         data = seedData();
//         ok = writer.write(`${JSON.stringify(data, null, 2)}, \n`, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // had to stop early!
//       // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
// }

// writeTenMillionTimes(ws, null, 'utf8', () => {
//   console.log('completed writing one million times')
// });

//********************************************
//UNCOMMENT BELOW FOR WRITING TO CSV FILE
//******************************************** 

const ws = fs.createWriteStream('data.csv', {flags: 'a'}); 

// fastcsv  
//   .write(mainDataArray, {includeEndRowDelimiter: true})
//   .pipe(ws);

function writeFiveTimes(writer, data, encoding, callback) {
  let i = 10000001;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time!
        data = seedData();
        data = Object.values(data).join('|');
        writer.write(data, encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        data = seedData();
        data = Object.values(data).join('|') + '\n';
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}

writeFiveTimes(ws, null, 'utf8', () => {
  console.log('completed writing 5000 times')
});