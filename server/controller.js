const ProductDescription = require('../database/models');

module.exports = {
  //currently mongoose
  // findByIdOfOne: (req, res) => {
  //   ProductDescription.findAll({}) 
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send('Error'));
  // },
  findIdOne: (req, res) => {
    ProductDescription.findAll({ 

    })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send('error in findAll'));
  },
  postToProducts: (req, res) => {
    ProductDescription.create({
      productName: "yeet",
      designer: "mark",
      price: 200,
      stars: 5,
      reviews: 123,
      description: "it is very very nice",
      fit: "perfect",
      sizes: "XXS,XS,S,M,L",
      colors: "Red,Blue",
      imageUrlsColor1: "ThisIsALink",
      imageUrlsColor2: "AnotherLink",
      createdAt: new Date(),
      updatedAt: new Date() 
    })
    .then(() => res.status(200).send('success'))
    .catch(err => res.status(404).send('error'))
  },
  deleteAll: (req, res) => {
    ProductDescription.destroy({ where: {}, truncate: true }) 
      .then(() => res.status(201).send('Deleted All'))
      .catch(err => res.status(404).send('Error'));
  }
  //currently mongoose
  // deleteAll: (req, res) => {
  //   ProductDescription.deleteMany()
  //   //ProductDescription.destroy({ where: {}, truncate: true }) 
  //     .then(() => res.status(201).send('Deleted All'))
  //     .catch(err => res.status(404).send('Error'));
  // },
  //currently mongoose
  // findOneRandom: (req, res) => {
  //   ProductDescription.aggregate([{ $sample: { size: 1 } }])
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