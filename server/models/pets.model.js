const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    minLength: [3, "Pet name must be at least 3 characters long"],
  },
  type: {
    type: String,
    minLength: [3, "Pet Type must be at least 3 characters long"],
  },
  description: {
    type: String,
    minLength: [3, "Pet Description must be at least 3 characters long"],
  },
  skill1: {
    type: String,
  },
  skill2: {
    type: String,
  },
  skill3: {
    type: String,
  },
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
