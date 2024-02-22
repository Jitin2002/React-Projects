const cron = require("node-cron")
//cron job 
// npm i node-cron

// min hours day month year 
cron.schedule("* * * * *",()=>{
    console.log("jitu bhai ki shadi")
});



