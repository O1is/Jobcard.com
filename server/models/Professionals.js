const mongoose = require("mongoose");

const ProfessionalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  yearsExperience: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  offers: {
    type: String,
  },
});

const ProfessionalModel = mongoose.model("professionals", ProfessionalSchema);

module.exports = ProfessionalModel;
