var mongoose = require("mongoose");
const { Schema } = mongoose;

var AttendanceSchema = new Schema(
  {
    employeesId: { type: Schema.Types.ObjectId, ref: "Employees" },
    roleId: { type: Schema.Types.ObjectId, ref: "EmployeesRules" },
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

var Attendance = mongoose.model("Attendance", AttendanceSchema);
module.exports = Attendance;
