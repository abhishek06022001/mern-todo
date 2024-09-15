const mongoose = require("mongoose");
// mongoose obj
// ek blueprint of a schema bana
const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
//  schema ka ek blurprint objectbana uskao export krna padega  so u can perfornm operations on that

const Todos = new mongoose.model("Todos", todoSchema);
module.exports = Todos;
