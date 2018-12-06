var mongoose = require("mongoose");
const { Schema } = mongoose;

var EmployeesRulesSchema = new Schema(
  {
    roleId : Schema.Types.ObjectId,
    employeesId: { type: Schema.Types.ObjectId, ref: 'Employees' },
    enable: {type : Boolean , default: true}
  },
  { timestamps: true }

);

var EmployeesRules = mongoose.model("EmployeesRules", EmployeesRulesSchema);
module.exports = EmployeesRules;
