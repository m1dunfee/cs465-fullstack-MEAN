const mongoose = require('mongoose');

    //difine the trip shema
const mealsSchema = new mongoose.Schema({
  meals: [
    {
      name: { type: String, required: true },
      image: { type: String, required: true },
      span: { type: String, required: true },
      paragraph: { type: String, required: true }
    }
  ]
});
    
const Meals = mongoose.model('meals', mealsSchema);

module.exports = Meals;