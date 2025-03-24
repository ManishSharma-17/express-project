const express = require('express');
const users = require('../controllers/users.controller');
const usersRout = express.Router();
usersRout.use((req, res, next) => {
    console.log('ip address: ', req.ip)
    next();
});
usersRout.post('/', users.postUser);
usersRout.get('/', users.getUsers);
usersRout.get('/:userId', users.getUser);

module.exports = usersRout;