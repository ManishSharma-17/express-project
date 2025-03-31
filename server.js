const express = require('express');
const path = require('path')

const users = require('./routes/user.routes')
const about = require('./routes/about.routes')
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    let start = Date.now();
    next();
    let time = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${time}ms`);
}); 
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use("/users", users);
app.use('/about', about);
app.listen(PORT, () => console.log(`Server listening at ${PORT}...`));