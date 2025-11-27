const mongoose = require('mongoose');

    //difine the trip shema
const newsSchema = new mongoose.Schema({
  sidebar: [
    {
      name: { type: String, required: true },
      items: { type: [String], required: true }
    }
    // Array continues naturally; JSON maps 1:1
  ],
  article: {
    category: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, required: true }, // keep string since JSON used string
    author: { type: String, required: true },
    image: { type: String, required: true },
    paragraphs: { type: [String], required: true }
  }
});

const News = mongoose.model('news', newsSchema);

module.exports = News;