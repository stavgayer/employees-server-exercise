var mongoose = require("mongoose");
const { Schema } = mongoose;

var EmployeesSchema = new Schema(
  {
    name: { type: String, required: [true, "name is required!"] }
  },
  { timestamps: true }
);

var Employees = mongoose.model("Employees", EmployeesSchema);
module.exports = Employees;
