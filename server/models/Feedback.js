const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
{
  visitFrequency: {type: String,required: true},
  foodQuality: {type: Number,required: true},
  serviceQuality: {type: Number,required: true},
  overallExperience: {type: Number,required: true},
  recommend: {type: String,enum: ["Yes", "No"],required: true},
  suggestions: {type: String},
  followUp: {type: Boolean,default: false}
}, { timestamps: true });

module.exports = mongoose.model("Feedback", feedbackSchema);
