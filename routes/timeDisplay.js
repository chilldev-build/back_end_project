const express = require('express');
const router = express.Router();
const timeDisplayModel = require("../models/timeDisplay_model");
const moment = require('moment');

router.get('/test', async (req, res, next) => {
    const tsInfo = await timeDisplayModel.getTimeById('1');
    
    let tsInfoDate = [];
    tsInfo.forEach((item) => {
      let newDate = {'date': moment(item.starttime).format('MM/DD/YYYY')} 
    tsInfoDate.push(newDate);
    })
    
    let tsClockIn = [];
    tsInfo.forEach((item) => {
      let newClockIn = {'starttime': moment(item.starttime).format('h:mm A')} 
    tsClockIn.push(newClockIn);
    })

    let tsClockOut = [];
    tsInfo.forEach((item) => {
      let newClockOut = {'endtime': moment(item.endtime).format('h:mm A')} 
    tsClockOut.push(newClockOut);
    })    

    let tsDiffMath = [];
    tsInfo.forEach((item) => {
      let diffMath = {'diffHours': (item.endtime - item.starttime)};
      //let newDiff = {'hours': (moment((item.endtime - item.starttime)).format('h:mm'))} 
    tsDiffMath.push(diffMath);
    })    

    console.log('chilldev data is: ', tsDiffMath);
    
    
    res.render('template', {
      locals:{ 
        title: 'Chilldev',
        isLoggedIn: req.session.is_logged_in,
        tsInfoDate: tsInfoDate,
        tsClockIn: tsClockIn,
        tsClockOut: tsClockOut
       },
        partials:{
          partial : 'partial-timeDisplay',
        }
    });
    
  
  }); 



  module.exports = router;
