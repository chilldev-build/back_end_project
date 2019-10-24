const express = require('express');
const router = express.Router(),
timeModel = require("../models/timepunch_model");


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
      title: 'This is the Time app',
      timedata: theTime,
      isLoggedIn: req.session.is_logged_in
      
     },
      partials:{
        partial : "partial-employee"
      }
  });
});

router.post("/time", async (req,res) =>{
     
  const {starttime} = req.body;
  const startTimeInstance = new timeModel(starttime);
  const employeeStart = await startTimeInstance.addStartTime();
  console.log(employeeStart);

})

module.exports = router;
