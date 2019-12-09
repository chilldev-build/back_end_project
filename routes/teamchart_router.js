const express = require("express"),
  router = express.Router(),
  teamchartModel = require("../models/teamchart_model"),
  timeDisplayModel = require("../models/timeDisplay_model");

router.get("/", async (req, res, next) => {
  const teamchartData = await teamchartModel.getAllweek(req.session.t_id);
  const tsInfo = await timeDisplayModel.getTimeById(req.session.t_id);

  req.session.isClockedIn =
    tsInfo[tsInfo.length - 1].endtime == null ? true : false;

  //console.log("team Data", req.session);

  res.render("template", {
    locals: {
      title: "",
      chartdata: teamchartData,
      isLoggedIn: req.session.is_logged_in,
      dataFName: req.session.firstname,
      dataLName: req.session.lastname,
      isClockedIn: req.session.isClockedIn
    },
    partials: {
      partial: "partial-landing"
    }
  });
});

router.post("/", async (req, res) => {
  console.log("Request Body", req.body);
  for (let key in req.body) {
    teamModel.update(key, req.body[key]);
  }
  res.status(200).redirect("/team");
});

module.exports = router;
