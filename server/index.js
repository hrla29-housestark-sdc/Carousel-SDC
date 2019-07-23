const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router');
const express = require('express');
require('../database/postgres/index');

const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serves static HTML file
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/productDescription', router);

app.listen(port, () => console.log(`server is running at port: ${port}`));