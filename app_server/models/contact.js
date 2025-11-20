const mongoose = require('mongoose');

//difine the trip shema
const contactSchema = new mongoose.Schema({
  contactform: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true }
  },

  contactInfo: [
    {
      method: { type: String, required: true },
      value: { type: String, required: true }
    }
  ]
});


const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;