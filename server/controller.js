const pg = require('../database/postgres/models');
const db = require('../database/mongodb/index');
const redis = require('../database/redis/index');

module.exports = {
  psql: {
    /*******************************************/
    /*******TESTS LAST 1 MILLION ENTRIES********/
    /*******************************************/

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

    /*******************************************/
    /*******TESTS LAST 1,000 ENTRIES************/
    /*******************************************/

    findOne: (req, res) => {
      const random = Math.round(Math.random() * (10000000 - 9999000) + 9999000);
      pg.query(`SELECT * FROM products WHERE id = ${random}`, (err, data) => {
        if(err){
          res.status(404).send(err)
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
  // findOneRandom: (req, res) => {
  //   ProductDescription.aggregate([{ $sample: { size: 1 } }, { explain: true }])
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send('Error'));
  // },
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