const express = require('express');
const app = express();
const PORT = 3000;
const userData = [
    {
        firstName: 'Sandeep',
        lastName: 'Sharma',
    }, {
        firstName: 'Manish',
        lastName: 'Sharma',
    }, {
        firstName: 'Kanchan',
        lastName: 'Sharma',
    }
];
app.use((req, res, next) => {
    let start = Date.now();
    next();
    let time = Date.now() - start;
    console.log(`${req.method} ${req.url} ${time}ms`);
});
app.use(express.json());
app.post('/users', (req, res, next) => {
    if (!req.body.firstName) {
        return res.status(400).json({
            error: 'Missing User Name!'
        })
    }
    const newUser = {
        firstName: req.body.firstName,
        lastNmae: req.body.lastName
    };
    userData.push(newUser);
    res.json(newUser);
})
app.get('/users', (req, res) => {
    res.send(userData);
})
app.get('/users/:userId', (req, res) => {
    const userId = Number(req.params.userId);
    const user = userData[userId];
    if (user) {
        res.send(user);
    } else {
        res.send({
            error: "User not found!"
        })
    }
});
app.listen(PORT, () => console.log(`Server listening at ${PORT}...`));