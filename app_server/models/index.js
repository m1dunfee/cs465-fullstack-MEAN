const mongoose = require('mongoose');

    //difine the trip shema
const indexSchema = new mongoose.Schema({
  jumbotron: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    paragraph1: { type: String, required: true },
    paragraph2: { type: String, required: true },
    anchor1: { type: String, required: true },
    anchor2: { type: String, required: true }
  },

  blog: {
    title: { type: String, required: true },
    posts: [
      {
        anchortag: { type: String, required: true },
        date: { type: String, required: true },
        paragraph: { type: String, required: true }
      }
    ]
  },

  testimonials: {
    title: { type: String, required: true },
    paragraph: { type: String, required: true },
    span: { type: String, required: true }
  },

  images: {
    rooms: { type: String, required: true },
    dives: { type: String, required: true },
    section: { type: String, required: true }
  }
});

const Index = mongoose.model('index', indexSchema);

module.exports = Index;