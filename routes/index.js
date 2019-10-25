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
  console.log("req params", req.params)
  const {time_id} = req.params;
  console.log("time id :", time_id);
  const theTime = await timeModel.getById(time_id);
  console.log("the Time data is: ", theTime);

  res.render("template",{
    locals:{ 
      title: '',
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
  const time_Instance = new timeModel(starttime, null, null, null ,null ,null );
  const timeIn = await time_Instance.addStartTime();
}); 


/* This will input the EndTime  */

router.post("/add_timeOut", async (req, res) =>{
   let { endtime } = req.body;
   console.log("this is the endtime", endtime);
  endtime = moment().format("YYYY-M-D  H:m:ss")
  console.log("this is the endtime ",endtime);
  const time_InstanceOut = new timeModel(null,endtime, null, null, null, null);
  const timeOut = await time_InstanceOut.addEndTime(); 

});

module.exports = router;


