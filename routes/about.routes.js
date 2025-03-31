const express = require('express');
const about = require('../controllers/about.controller');

const aboutRout = express.Router();

aboutRout.get('/', about.getAbout);
aboutRout.get('/:aboutImage', about.getAboutImage);

module.exports = aboutRout;