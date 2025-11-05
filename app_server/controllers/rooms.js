const rooms = (req,res) => {
    res.render('rooms', {title: "Rooms - Travlr Getaways Web Template"});
};

module.exports = {
    rooms
};