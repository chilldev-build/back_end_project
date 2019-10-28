const express = require('express');
const router = express.Router();
const timeModel = require("../models/timepunch_model");
const moment = require('moment');


/* GET home page. */
router.get('/', async function(req, res, next) {
  const timeData = await timeModel.getAll();
  console.log("Time data", timeData);

res.render('template', {
  locals:{ 
    title: 'Index Page',
    timedata : timeData,
    isLoggedIn: req.session.is_logged_in,
    employeeName: req.session.firstname
   },
    partials:{
      partial : "partial-index"
    }
   });
});
 
router.get("/:time_id", async (req,res,next)=> {
  const NameOfEmployee = await timeModel.getName();
  console.log("req params", req.params)
  const {time_id} = req.params;
  console.log("time id :", time_id);
  const theTime = await timeModel.getById(time_id);
  console.log("the Time data is: ", theTime);

  res.render("template",{
    locals:{ 
      title: '',
      dataName: NameOfEmployee,
      timedata: theTime,
      isLoggedIn: req.session.is_logged_in
      
     },
      partials:{
        partial : "partial-employee"
      }
  });
});



/* This will input the startTime  */

 router.post("/add", async (req, res) =>{
  let { starttime } = req.body;
  starttime = moment().format("YYYY-M-D  H:m:ss")
  const time_Instance = new timeModel(null, null, starttime, null, null);
  const timeIn = await time_Instance.addStartTime();
  
  if(timeIn.rowCount !== 1){
    res.sendStatus(500);
  }else{
    res.redirect("/time");
  }
}); 


/* This will input the EndTime  */

router.post("/add_timeOut", async (req, res) =>{
  let { endtime } = req.body;
  console.log("this is the endtime", endtime);
  endtime = moment().format("YYYY-M-D  H:m:ss")
  console.log("this is the endtime ",endtime);
  const time_InstanceOut = new timeModel(null, null, null, endtime, null);
  const timeOut = await time_InstanceOut.addEndTime();
  const hoursData = await timeModel.addHours();
  
  if(timeOut.rowCount !== 1){
    res.sendStatus(500);
  }else{
    res.redirect("/time");
  }
  

});

module.exports = router;
