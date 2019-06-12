const client = require('../database/postgres/models');
const ProductDescriptionMongo = require('../database/mongodb/models');
const dressData = require('../seeding/dressData.json');
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

module.exports = {
  //currently mongoose
  // findByIdOfOne: (req, res) => {
    //   ProductDescription.findAll({}) 
    //     .then(data => res.status(200).send(data))
    //     .catch(err => res.status(404).send('Error'));
    // },
  mongodb: {
    findOne: (req, res) => {
      const random = Math.round(Math.random() * (10000000 - 9000000) + 9000000);
      ProductDescriptionMongo.find({ 
        ID: random
        //ID: 10000023
      })
      .limit(1)
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('error in findAll'));
    },
    postToProducts: (req, res) => {
      var counter = 10000023;
      ProductDescriptionMongo.create({
        productName: "something",
        designer: "justin",
        price: 103,
        stars: 5,
        reviews: 133,
        description: "it is very very  very nice",
        fit: "perfect",
        sizes: ['XXS','XS','S','M','L'],
        colors: ['Red'],
        imageUrlsColor1: ["ThisIsALink", "AnotherLink"],
        imageUrlsColor2: null,
        ID: counter
      })
      .then(() => {
        //counter++
        res.status(200).send('success');
      })
      .catch(err => res.status(404).send('error'))
    },
    deleteAll: (req, res) => {
      ProductDescriptionMongo.destroy({ where: {}, truncate: true }) 
        .then(() => res.status(201).send('Deleted All'))
        .catch(err => res.status(404).send('Error'));
    }
  },
  psql: {
    // findOne: (req, res) => {
    //   const random = Math.round(Math.random() * (10000000 - 9000000) + 9000000);
    //   ProductDescriptionPG.findAll({
    //     where: {
    //       id: random
    //       //productName: dressData[dressDataRandomInt].productName
    //     },
    //     limit: 1
    //   })
    //     .then(data => res.status(200).send(data))
    //     .catch(err => res.status(404).send('error psql.findOne'))
    // }
    test: (req, res) => {
      const random = Math.round(Math.random() * (10000000 - 9000000) + 9000000);
      client.query(`SELECT * FROM products WHERE id = ${random}`, (err, data) => {
        // console.log(err, res)
        // client.end()
        if(err){
          res.status(404).send('err')
        } else{
          res.status(200).send(data.rows[0])
        }
      })
    }
  },
  //currently mongoose
  // deleteAll: (req, res) => {
  //   ProductDescription.deleteMany()
  //   //ProductDescription.destroy({ where: {}, truncate: true }) 
  //     .then(() => res.status(201).send('Deleted All'))
  //     .catch(err => res.status(404).send('Error'));
  // },
  //currently mongoose
  findOneRandom: (req, res) => {
    ProductDescription.aggregate([{ $sample: { size: 1 } }, { explain: true }])
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('Error'));
  },
  //currently mongoose
  // recommendation: (req, res) => {
  //   console.log('rec being called')
  //   ProductDescription.findById('5cf9bf10d4e8ba2595c10279')
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send('Error'));
  // },
  // recommendation: (req, res) => {
  //   console.log('rec being called')
  //   ProductDescription.aggregate([{ $sample: { size: 4 } }])
  //   .then(data => res.status(200).send('not here'))
  //   .catch(err => res.status(404).send('Error'));
  // },
  //currently mongoose
  // findOneById: (req, res) => {
  //   const { _id } = req.params;
  //   ProductDescription.find({ _id })
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send('Error'));
  // }
}