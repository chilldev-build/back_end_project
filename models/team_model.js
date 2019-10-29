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
            const response = await db.any(`SELECT time_punch.week
                                        FROM time_punch where time_punch.id > 0
                                        ;`
                            );
            console.log("Week data :", response);
            console.log("type", typeof response);
            return response;
            

        }catch(error){
            return error.message;
        }

    }
    static async checkactivity(){
        const week =  await this.getAllweek();
        console.log("week1", week[0]);
        console.log("week2", week[1]);
        const activityList=[];
        let activity;
        week.forEach(item => {
            console.log("item", item);
            if(item.week>0 && item.week <= 10) {
                activity = 25+'%';
                console.log("activity", activity);
                activityList.push(item.week);
            }
            if(item.week>=30 && item.week <= 39) {
                activity = 40+'%';
                console.log("activity", activity);
                activityList.push(activity);
            }
            if(item.week>39) {
                activity = 50+'%';
                console.log("activity", activity);
                activityList.push(activity);
            }
        });
        console.log("activityList", activityList);
        return activityList;
}

    
    // static async totalhours(){
    //     let week = await this.getAllweek();
    //     console.log("week", week);
    //     try{
    //         const response = await db.one(
    //             `UPDATE team SET totalhoursperweek = week;`
    //         );
    //         console.log("Total hours ", response);
    //         return response;
    //     }catch(err){
    //         return err.message;
    //     }


    // }
    static async save(){
        console.log("inside sAVE");
        const activity = await this.checkactivity();
        console.log("activity sirisha:",activity);
        let index = 0;
        let response;
        while (index < activity.length) {
            try{
                console.log(`Saving employe ID: ${index + 1} with activity of ${activity[index]}`);
                response = await db.result(`UPDATE team SET activity = $1 WHERE id = $2;`, [activity[index], index + 1]);
            
                console.log("activity response11", response);
                
            }catch(error){
                return error.message;
            }
            index++;
            return response;
        }
        
        
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