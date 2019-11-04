const pgp = require("pg-promise")({
    query:function(e){
        console.log("query : ",e.query);
    }
});

const options ={
    host: "db-setup-demo.c8f1yxbut2km.us-east-2.rds.amazonaws.com",
    database: "backendproject",
    user: "postgres",
    password: "#thisisthenewamazonpassword"

};

const db = pgp(options);

module.exports = db;