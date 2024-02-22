const cron = require("node-cron")
// min hours day month year 
cron.schedule("* * * * *",()=>{
    console.log("jitu bhai ki shadi")
});



