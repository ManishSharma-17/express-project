const path = require('path')
function getAbout(req, res) {
    res.send("About page!");
};
function getAboutImage(req, res) {
    const aboutImage = req.params.aboutImage;
    if (aboutImage) {
        res.sendFile(path.join(__dirname, '..', 'public', 'images', 'car.jpg'));
    } else {
        res.send("Page not found!")
    }
};

module.exports = {
    getAbout,
    getAboutImage
}