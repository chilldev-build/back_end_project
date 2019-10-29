const express = require('express'),
     router = express.Router(),
     teamchartModel = require("../models/teamchart_model");

router.get('/', async (req,res,next)=>{

    const teamchartData = await teamchartModel.getAllweek(req.session.t_id);
    
    
    //console.log("team Data", req.session);

    res.render('template', { 
        locals:{
          title: '',
          chartdata: teamchartData,
          isLoggedIn: req.session.is_logged_in,
          dataFName: req.session.firstname,
          dataLName: req.session.lastname
          
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
    res.status(200).redirect('/team');
    
});

module.exports = router;

