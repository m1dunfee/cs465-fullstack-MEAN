const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways'});//this references index.hbs in that first param type string (located in view folder)
};

module.exports = {
    index
};