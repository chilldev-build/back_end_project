const db = require("./conn"),
      bcrypt = require("bcryptjs");

class Employee{

    constructor(firstname, lastname,eid, password){
        
        this.firstname = firstname;
        this.lastname = lastname;
        this.eid = eid;
        this.password = password;
    }

    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword);
    }

    async login(){
        console.log("this is the login infor:", this);
        try{
            const response = await db.one(`SELECT  id, firstname, lastname, eid, password FROM employee WHERE eid = $1;`,
                                    [this.eid]);
            
            const isValid = this.checkPassword(response.password);
            
            
            if(!!isValid){
                const{id,firstname,lastname} = response;
                return {isValid, id, firstname, lastname};
            }else{
                return { isValid};
            }

        }catch(err){
                return err.message;
        }
    }

    async save(){
        try{
            const response = await db.one(
                `INSERT INTO employee(eid,firstname, lastname,password) VALUES ($1,$2,$3,$4) RETURNING id;`,
                    [   this.eid,
                        this.firstname,
                        this.lastname,
                        this.password
                    ]
            );
           
            return response;
        }catch(err){
            return err.message;
        }
       
    }
}

module.exports = Employee;