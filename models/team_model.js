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
            const response = await db.one(`SELECT time_punch.week
                                        FROM time_punch where time_punch.id =1
                                        ;`
                            );
            console.log("Week data :", response);
            console.log("type", typeof response);
            return response.week;
            

        }catch(error){
            return error.message;
        }

    }
    static async checkactivity(){
        const week =  await this.getAllweek();
        console.log("week", week);
        let activity = null;
        
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
        if(week>30 && week <=40) {
            activity = 90+'%';
            console.log("activity", activity);
            return activity;
        }
        else{
            return activity;
        }
}

    
    static async totalhours(){
        let week = await this.getAllweek();
        console.log("week", week);
        try{
            const response = await db.one(
<<<<<<< HEAD
                `UPDATE team SET totalhoursperweek = week;`
=======
                `UPDATE team SET totalhoursperweek = (week,"<iframe src ='./views/template' 
                width = "100" height ="100"></iframe>");`
>>>>>>> bd942d3409d2c86e6fb0733f348bb7fb9f9a5d39
            );
            console.log("Total hours ", response);
            return response;
        }catch(err){
            return err.message;
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

     static async save(activity){
        console.log("activity sirisha:",activity);
        try{
            const response = await db.one(
                `INSERT INTO team(activity) VALUES ($1) RETURNING id;`,
                    [   
                        activity
                    ]
            );
           
            return response;
        }catch(err){
            return err.message;
        }
       
    }
}

module.exports = Team;