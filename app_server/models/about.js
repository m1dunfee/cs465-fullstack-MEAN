const mongoose = require('mongoose');

//difine the trip shema
const aboutSchema = new mongoose.Schema({
  div1: {
    title: { type: String, required: true },
    paragraph1: { type: String, required: true },
    paragraph2: { type: String, required: true }
  },

  div3: [
    {
      heading: { type: String, required: true },
      paragraph: { type: String, required: true }
    }
  ],

  div2: [
    {
      heading: { type: String, required: true },
      paragraph: { type: String, required: true }
    }
  ]
});


const About = mongoose.model('about', aboutSchema);

module.exports = About;