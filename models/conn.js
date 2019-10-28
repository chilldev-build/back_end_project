const pgp = require("pg-promise")({
    query:function(e){
        console.log("query : ",e.query);
    }
});

const options ={
    host: "localhost",
<<<<<<< HEAD
    database: "backendproject"
   
=======
    database: "backendproject",
    user: "chilldev",
    password: "password"

>>>>>>> bd942d3409d2c86e6fb0733f348bb7fb9f9a5d39
};

const db = pgp(options);

module.exports = db;