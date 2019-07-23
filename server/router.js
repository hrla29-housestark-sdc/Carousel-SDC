const router = require('express').Router();
const controller = require('./controller');

router.route('/allDocsPgsql')
  .get(controller.psql.findOne)
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