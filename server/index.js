const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router');
//const morgan = require('morgan');
const postgres = require('../database/postgres/models');


// if (cluster.isMaster) {
  
//   const numCPUs = require('os').cpus().length;
  
//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }
  
// } else {
//   // Creating server and port number
//   const express = require('express');
//   const app = express();
//   const port = process.env.PORT || 3002;
  
//   // Middleware
//   //app.use(morgan('dev'));
//   app.use(bodyParser.json());
//   app.use(bodyParser.urlencoded({extended: true}));
  
//   // Serves static HTML file
//   app.use(express.static(path.join(__dirname, '../client/dist')));
  
//   app.use('/productDescription', router);

//   app.listen(port, () => console.log('Worker %d running!', cluster.worker.id));
  
// }

const express = require('express');
const app = express();
const port = process.env.PORT || 3002;


// Middleware
//app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serves static HTML file
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/productDescription', router);

app.listen(port, () => console.log(`server is running at port: ${port}`));

// Verifies and sets port on where server is listens at