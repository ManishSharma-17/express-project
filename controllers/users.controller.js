const users = require("../models/users.model")
function postUser(req, res, next) {
    if (!req.body.firstName) {
        return res.status(400).json({
            error: 'Missing User Name!'
        })
    }
    const newUser = {
        firstName: req.body.firstName,
        lastNmae: req.body.lastName
    };
    users.push(newUser);
    res.json(newUser);
}

function getUser(req, res) {
    const userId = Number(req.params.userId);
    const user = users[userId];
    if (user) {
        res.send(user);
    } else {
        res.send({
            error: "User not found!"
        })
    }
}
function getUsers(req, res) {
    res.send(users)
}

module.exports = {
    postUser,
    getUser,
    getUsers,
}