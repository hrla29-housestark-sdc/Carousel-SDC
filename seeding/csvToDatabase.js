const sequelize = require('sequelize');
const db = require('../database/index');
const Product = require('../database/models');


//db.query('\\copy products FROM "../data.csv"')
db.query("COPY products FROM '~/markhayford/documents/repos/hrla29-SDC/Carousel-SDC/data.csv'")
  .then(() => console.log('successfully copied from csv to database'))
  .catch(err => console.log('error with model.query', err))