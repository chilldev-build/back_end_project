const express = require('express');
const router = express.Router();
const timeDisplayModel = require("../models/timeDisplay_model");
const moment = require('moment');

router.get('/test', async (req, res, next) => {
    const tsInfo = await timeDisplayModel.getTimeById('10');
    
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

    let tsHours = [];
    tsInfo.forEach((item) => {
      let hoursDisplay = {'hours': item.hours }
      //let newDiff = {'hours': (moment((item.endtime - item.starttime)).format('h:mm'))} 
    tsHours.push(hoursDisplay);
    })    

    console.log('chilldev data is: ', tsInfo);
    
    
    res.render('template', {
      locals:{ 
        title: 'Chilldev',
        isLoggedIn: req.session.is_logged_in,
        tsInfoDate: tsInfoDate,
        tsClockIn: tsClockIn,
        tsClockOut: tsClockOut,
        tsHours: tsHours
       },
        partials:{
          partial : 'partial-timeDisplay',
        }
    });
    
  
  }); 



  module.exports = router;
