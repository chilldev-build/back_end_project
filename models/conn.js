const pgp = require("pg-promise")({
    query:function(e){
        console.log("query : ",e.query);
    }
});

const options ={
    host: "localhost",
    database: "backendproject",
    user: "chilldev",
    password: "password"

};

const db = pgp(options);

module.exports = db;