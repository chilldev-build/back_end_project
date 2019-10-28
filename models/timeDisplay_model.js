const db = require('./conn');

class Time{
    constructor( eeid, starttime, endtime, active){
        this.eeid = eeid; 
        this.starttime = starttime;
        this.endtime = endtime;
        this.active = active;
        
    }


    static async getTimeById(id){
        try{

            const response = await db.any(`SELECT * From time_punch WHERE eeid = $1 and starttime > '2019-10-21 00:00:00';`, [id]);
            // console.log("response :", response);
            return response;

        }catch(error){
            return error.message;
        }

    }


    
}


module.exports = Time;