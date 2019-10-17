const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  type: {
    type: String
  }
});

const Contact = mongoose.model("Contacts", ContactSchema);

module.exports = Contact;
