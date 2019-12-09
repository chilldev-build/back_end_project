const express = require("express");
const router = express.Router();
const timeDisplayModel = require("../models/timeDisplay_model");
const timeModel = require("../models/timepunch_model");
const moment = require("moment");

router.get("/timesheet", async (req, res, next) => {
  const NameOfEmployee = await timeModel.getName();
  const tsInfo = await timeDisplayModel.getTimeById(req.session.t_id);

  req.session.isClockedIn =
    tsInfo[tsInfo.length - 1].endtime == null ? true : false;
  console.log("isClockedIn:", req.session.isClockedIn);

  let tsInfoDate = [];
  tsInfo.forEach(item => {
    let newDate = { date: moment(item.starttime).format("MM/DD/YYYY") };
    tsInfoDate.push(newDate);
  });

  let tsClockIn = [];
  tsInfo.forEach(item => {
    let newClockIn = { starttime: moment(item.starttime).format("h:mm A") };
    tsClockIn.push(newClockIn);
  });

  let tsClockOut = [];
  tsInfo.forEach(item => {
    let newClockOut =
      item.endtime == null
        ? { endtime: "" }
        : { endtime: moment(item.endtime).format("h:mm A") };
    tsClockOut.push(newClockOut);
    console.log("tsInfo is:", tsInfo);
  });

  let tsHours = [];
  tsInfo.forEach(item => {
    let hoursDisplay = { hours: item.hours };
    //let newDiff = {'hours': (moment((item.endtime - item.starttime)).format('h:mm'))}
    tsHours.push(hoursDisplay);
  });

  console.log("tsClockOut data is: ", tsClockOut);

  res.render("template", {
    locals: {
      title: "",
      isLoggedIn: req.session.is_logged_in,
      tsInfoDate: tsInfoDate,
      tsClockIn: tsClockIn,
      tsClockOut: tsClockOut,
      tsHours: tsHours,
      dataFName: req.session.firstname,
      dataLName: req.session.lastname,
      isClockedIn: req.session.isClockedIn
    },
    partials: {
      partial: "partial-timeDisplay"
    }
  });
});

module.exports = router;
