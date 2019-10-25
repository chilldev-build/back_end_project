const db = require('./conn');

class TimeSheet{
    constructor(starttime,endtime, id,eid,firstname,lastname){
        this.starttime = starttime;
        this.endtime = endtime; 
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
    async addStartTime(){
        try{
            const response = await db.result(`insert into time_punch (starttime) Values ( '${this.starttime}');`)
            console.log(response)
            return response;
        }
        catch(err){
            return err.message; 
        }
}
    async addEndTime(){
        console.log("this is endtime");
        try{
        const response = await db.result(`insert into time_punch(endtime) Values ( '${this.endtime}');`)
        
        console.log(response)
        return response;
    }
    catch(err){
        return err.message
    }
}
    
}


module.exports = TimeSheet;