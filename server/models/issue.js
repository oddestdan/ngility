const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Issue", IssueSchema);
