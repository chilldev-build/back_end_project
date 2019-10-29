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
                                        FROM time_punch where id = 1
                                        ;`
                            );
            console.log("Week data :", response);
            return response.week;

        }catch(error){
            return error.message;
        }

    }
}

module.exports = Team;

