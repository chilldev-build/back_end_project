const express = require('express'),
     router = express.Router(),
     teamchartModel = require("../models/teamchart_model");

router.get('/', async (req,res,next)=>{

    const teamchartData = await teamchartModel.getAllweek();
    
    
    console.log("team Data", teamchartData);

    res.render('template', { 
        locals:{
          title: 'Team',
          chartdata: teamchartData,
          isLoggedIn: req.session.is_logged_in
        },
        partials:{
          partial:"partial-landing"
        }

      });
});

router.post("/", async (req,res) => {
    console.log("Request Body", req.body);
    for(let key in req.body){
        
        teamModel.update(key,req.body[key]);
    }
    res.status(200).redirect('/:{eid}');
    
});

module.exports = router;