const express = require('express'),
     router = express.Router(),
     teamModel = require("../models/team_model");

router.get('/', async (req,res,next)=>{

    const teamData = await teamModel.getAllteamdata();
    const weekData =await teamModel.getAllweek();
    const activitynew = await teamModel.checkactivity();
    //const totalhours = await teamModel.totalhours();
    const save = await teamModel.save();

    console.log("team Data", teamData);
    console.log("activitynew", activitynew);

    res.render('template', { 
        locals:{
          title: '',
          teamdata: teamData,
          weekdata: weekData,
          activitynew :activitynew,
          //totalhours : totalhours,
          save:save,
          isLoggedIn: req.session.is_logged_in
        },
        partials:{
          partial:"partial-team"
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