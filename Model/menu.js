const mongoose = require("mongoose");

menuSchema = new mongoose.Schema({
  itemName: { type: String,unique : [true,'Item Already Exists in Menu'], required: [true, "Item Name cant be empty"] },
  itemDescription: { type: String },
  isVeg:{ type : Boolean , default : false},
  price:{type : Number,min : 0 ,required: ["true", "price cant be empty"]},
  isAvailable : {type : Boolean , default : true},

  
  date: { type: Date, default: Date.now },
  
  
});
const Menu = mongoose.model('Menu', menuSchema);


module.exports = Menu