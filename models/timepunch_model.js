const db = require('./conn');

class TimeSheet{
    constructor( id, eeid, starttime, endtime, active){
        this.id = id;
        this.eeid = eeid; 
        this.starttime = starttime;
        this.starttime = starttime
        this.endtime = endtime
        this.active = active;
        
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
            const response = await db.result(`insert into time_punch (eeid, starttime) Values ( 10 , '${this.starttime}');`)
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
         const response = await db.result(
            `UPDATE time_punch SET endtime = '${this.endtime}' 
            WHERE id = (select id from time_punch where eeid = '10' 
            and endtime isnull and starttime >
            '2019-10-25 12:15:00')
             RETURNING endtime;`)
        /* const response = await db.result(`insert into time_punch(endtime) Values ( '${this.endtime}');`) */
        
        console.log(response)
        return response;
    }
    catch(err){
        return err.message
    }
}
    
}


module.exports = TimeSheet;