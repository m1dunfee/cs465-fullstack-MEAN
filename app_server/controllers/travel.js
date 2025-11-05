const travel = (req, res) => {
    res.render('travel', {title: "Travel - Travlr Getaways Web Template"}); //this references travel.hbs in that first param type string (located in view folder)
};

module.exports = {
    travel
};