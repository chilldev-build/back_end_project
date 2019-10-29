const db = require('./conn');
class Team{
   constructor(id,eeid,starttime,endtime,hours,week){
       this.id = id;
       this.eeid = eeid;
       this.starttime = this.starttime;
       this.endtime = endtime;
       this.hours= hours;
       this.week = week;
   }
   static async getAllweek(eeid){
       try{
           const response = await db.one(`SELECT *
                                       FROM time_punch WHERE eeid =$1
                                       ;` [eeid]);
           console.log("Hours data :", response);
           return response;
       }catch(error){
           return error.message;
       }
   }
}
module.exports = Team;
