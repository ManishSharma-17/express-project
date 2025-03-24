const express = require('express');
const about = require('../controllers/about.controller');

const aboutRout = express.Router();

aboutRout.get('/', about.getAbout);

module.exports = aboutRout;