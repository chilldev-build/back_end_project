const express = require('express');
const router = express.Router(),
      bcrypt = require("bcryptjs");

const UserModel = require("../models/user_model");

/* GET users listing. */
router.get('/login', async (req, res, next)=> {

  res.render('template', {
    locals:{ 
      title: '',
      isLoggedIn: req.session.is_logged_in
    
     },
      partials:{
        partial : "partial-login"
      }
    });
  
});

router.get("/logout", (req, res, next)=> {
  req.session.destroy();
  res.status(200).redirect("/");
});

router.get("/signup", async (req,res,next)=>{

  res.render('template', {
    locals:{ 
      title: '',
      isLoggedIn: req.session.is_logged_in
     },
      partials:{
        partial : "partial-signup"
      }
    });
});

router.post("/login", async (req,res,next)=>{

  const {eid,password} = req.body;

  const user = new UserModel(null,null,eid,password);

  const response = await user.login();
  console.log(response);

  if(!!response.isValid){
    const{id,firstname,lastname,eid} = response;
    req.session.is_logged_in = true;
    req.session.eid = eid;
    req.session.firstname = firstname;
    req.session.lastname= lastname;
    req.session.t_id = id;
    res.status(200).redirect("/me");
  }else {
    res.sendStatus(401);
  }
 
});

router.post("/signup", async (req,res,next)=>{

  console.log("signup", req.body);
  const {firstname, lastname, eid } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const employee = new UserModel(firstname, lastname, eid, hash);

  const addEmployee = await employee.save();
  console.log("Was user added? ", addEmployee);

  if(addEmployee){
    res.status(200).redirect("/users/login");
  } else {
    res.status(500);
  }
  
});



module.exports = router;
