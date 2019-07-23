const { Pool } = require('pg')
const db = require('./index');

const pool = new Pool({
  user: 'ubuntu',
  host: 'ec2-18-218-45-85.us-east-2.compute.amazonaws.com',
  database: 'productdescription',
  password: 'password',
  port: 5432
})

pool.connect()
  .then(() => console.log('connected to postgres'))
  .catch(err => console.log('error connecting to db instance', err))

module.exports = pool;

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
