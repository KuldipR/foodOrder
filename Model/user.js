const mongoose = require("mongoose");

User = new mongoose.Schema({
  firstName: { type: String, require: [true, "First Name cant be empty"] },
  lastName: { type: String, require: [true, "Last Name cant be empty"] },
  email: {
    type: String,
    validate: {
        validator: () => Promise.resolve(false),
        message: 'Email validation failed'
      },
    unique : true
  },
  date: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false },
  password: {type : String, require:[true,'Password can not be Empyty']},
  

});

module.exports = User