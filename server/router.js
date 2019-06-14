const router = require('express').Router();
const controller = require('./controller');

// Fetch or delete all data 
// router.route('/allDocsMongo')
//   .get(controller.mongodb.findOne)
  //.post(controller.mongodb.postToProducts)
  //.delete(controller.deleteAll)
//   .delete(controller.deleteAll)

router.route('/allDocsPgsql')
  .get(controller.psql.test)
  //.post(controller.psql.postToProducts)
  //.delete(controller.deleteAll)

// // Fetch one dress randomly
// router.route('/findOneRandom')
//   .get(controller.findOneRandom);

// // Fetch 5 dresses for Recommendation Bar
// router.route('/recommendation')
//   .get(controller.recommendation);

// // Fetch or delete all data 
// router.route('/allDocs')
//   .get(controller.psql.findOneById)
//   .delete(controller.psql.deleteAll)

// // Fetch one dress randomly
// router.route('/findOneRandom')
//   .get(controller.psql.findOneRandom);

// // Fetch 5 dresses for Recommendation Bar
// router.route('/recommendation')
//   .get(controller.psql.recommendation);

module.exports = router;