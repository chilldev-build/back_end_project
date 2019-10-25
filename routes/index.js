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

router.post("/add", async (req, res) =>{
  let { starttime } = req.body;
  starttime = moment().format("YYYY-M-D  H:m:ss")
  const time_Instance = new timeModel(starttime);
  const timeIn = await time_Instance.addStartTime();
  console.log(timeIn)
 
 
 
  /*  let { starttime } = req.body;
  console.log(req.body);
  const time_Instance = new timeModel(starttime);
  const timeIn = await time_Instance.addStartTime();
  console.log("this is a test", timeIn); */
  
  
});

module.exports = router;
