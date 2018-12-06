const mongoose = require("mongoose");
const router = require("express").Router();
const Employees = mongoose.model("Employees");
const EmployeesRules = mongoose.model("EmployeesRules");
const Attendance = mongoose.model("Attendance");

router.post("/initialize", (req, res, next) => {
  var employees = new Employees();
  employees.name = req.body.name;
//   var employeesRules = new EmployeesRules;
//   employeesRules.employeesId = req.body.employeesId;
//   var attendance = new Attendance();
//   attendance.employeesId = req.body.employeesId;
//   attendance.roleId = req.body.roleId;
    
employees.save().then(() => {
    res.status(200).json({ message: "Added" });
  });
});

router.get("/GetEmployeeList", (req, res, next) => {
  Employees.find()
    .lean()
    .then((employees, err) => {
      if (err) {
        next(err);
      }
      if (!employees) {
        return res.sendStatus(401);
      }

      return res.json({ employees });
    })
    .catch(next);
});

router.get("/GetEmployeeRoles", (req, res, next) => {
  EmployeesRules.find({ employeesId: req.query.employeesId })
    .lean()
    .then((rules, err) => {
      if (err) {
        next(err);
      }
      if (!rules) {
        return res.sendStatus(401);
      }

      return res.json({ rules });
    })
    .catch(next);
});
router.post("/ClockIn", (req, res, next) => {
  var attendance = new Attendance();
  attendance.employeesId = req.body.employeesId;
  attendance.roleId = req.body.roleId;
  attendance.save().then((att, err) => {
    if (err) {
      next(err);
    }
    if (!att) {
      return res.sendStatus(401);
    }

    return res.json({ att });
  }).catch(next);
});
module.exports = router;
