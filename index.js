const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const movieRoutes = require('./router/router');
const db = require('./config/db');
const router = require('./router/router');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('uploads')); 
app.use('/uploads', express.static('uploads'));

app.use('/',router);

// Start server
app.listen(3009, () => {
    console.log('Server is running on port http://localhost:3009');
});