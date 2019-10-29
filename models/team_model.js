const db = require('./conn');
class Team{
   constructor(id,team_id,employee,lastworkedon,activity,totalhoursperweek,week){
       this.id = id;
       this.team_id = team_id;
       this.employee = employee;
       this.lastworkedon = lastworkedon;
       this.activity = activity;
       this.totalhoursperweek = totalhoursperweek;
       this.week = week;
   }
   static async getAllweek(){
       try{
           const response = await db.one(`SELECT week
                                       FROM time_punch where id = 58;
                                       ;`
                           );
           console.log("Week data :", response);
           return response.week;
       }catch(error){
           return error.message;
       }
   }
   static async checkactivity(){
       let week =  await this.getAllweek();
       console.log("week", week);
       let activity = null
       if(week>0 && week <= 10) {
           activity = 25+'%';
           console.log("activity", activity);
           return activity;
       }
       if(week>10 && week <= 20) {
           activity = 50+'%';
           console.log("activity", activity);
           return activity;
       }
       if(week>20 && week <= 30) {
           activity = 75+'%';
           console.log("activity", activity);
               return activity;
       }
       if(week>30 && week <40) {
           activity = 90+'%';
           console.log("activity", activity);
           return activity;
       }
       else{
           return activity;
       }
}
   static async save(){
       console.log("inside sAVE");
       const activity = await this.checkactivity();
       console.log("activity sirisha:",activity);
       let index = 0;
       let response;
       while (index < activity.length) {
           try{
               //console.log(Saving employe ID: ${index + 1} with activity of ${activity[index]});
               response = await db.result(`UPDATE team SET activity = $1 WHERE id = $2;`, [activity[index], index + 1]);
               console.log("activity response11", response);
           }catch(error){
               return error.message;
           }
           index++;
       }
           return response;
   }
    static async getAllteamdata(){
       try{
           const response = await db.any(`SELECT team.employee,
                                       team.lastworkedon,
                                       team.activity,
                                       team.totalhoursperweek
                                       FROM team INNER JOIN time_punch
                                       on team.id = time_punch.id
                                       ORDER BY team.id;`
                           );
           console.log("team data :", response);
           return response;
       }catch(error){
           return error.message;
       }
   }
}
module.exports = Team;