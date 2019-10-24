const db = require('./conn');

class TimeSheet{
    constructor(id,eid,firstname,lastname){
        this.id = id;
        this.eid = eid;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    static async getAll(){

        try{

            const response = await db.any(`SELECT * From time_punch;`);
            return response;

        }catch(error){
            return error.message;
        }
    }

    static async getById(id){
        try{

            const response = await db.one(`SELECT * From employee WHERE id = $1;`, [id]);
            console.log("response :", response);
            return response;

        }catch(error){
            return error.message;
        }

    }
    
}


module.exports = TimeSheet;