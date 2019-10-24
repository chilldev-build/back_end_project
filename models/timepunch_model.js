const db = require('./conn');

class TimeSheet{
    constructor(id,eid,firstname,lastname){
        this.id = id;
        this.eid = eid;
        this.firstname = firstname;
        this.lastname = lastname;
        this.starttime = starttime;
        this.endtime = endtime; 
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
    async addStartTime (starttime){

        try{
            const response = await db.one(`INSERT INTO time_punch(id, starttime, endtime, worktype) VALUES (55567, ${starttime}, Sales);`)
            console.log(response);
            return response;
        }
        catch(err){
            return err.message; 
        }
    }
    
}


module.exports = TimeSheet;