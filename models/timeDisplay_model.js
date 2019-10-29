const db = require('./conn');

class Time{
    constructor( eeid, starttime, endtime, hours){
        this.eeid = eeid; 
        this.starttime = starttime;
        this.endtime = endtime;
        this.hours = hours;
        
    }


    static async getTimeById(id){
        try{

            const response = await db.any(`
            SELECT starttime, endtime, round(cast(extract(minutes from hours)/60 + extract(hours from hours) as numeric),2) as hours 
            From time_punch WHERE eeid = $1 and starttime > '2019-10-21 00:00:00' ORDER BY ID;`, [id]);
            // console.log("response :", response);
            return response;

        }catch(error){
            return error.message;
        }

    }


    
}


module.exports = Time;