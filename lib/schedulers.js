/*'use strict';

var modelPortal = require('../model/modelPortal');
var portal = require('../routes/handlers/portal');
var mailTemplates = require('../lib/mailtemplates');
var mysql = require('../lib/mysql').executeQuery;
var CronJob = require('cron').CronJob;
//software expiry notification Job
var Job=  new CronJob('00 10 00 * * *', function() {

mysql('call usp_getAllRetailer()', function(err, result) {
                    if (err) {
                        console.log('Line 277 Admin js '+err);
                    } else {
                        for(var i=0;i<result[0].length;i++)
                        {
                          sendExpirationMails(result[0][i].id);
                        }
                    }
                });
  

         
          
    console.log("software expiry notification mail send successfully");
  //}, function() {
    //console.log("Utilisation job completed successfully");
}, true, 'IST');


function sendExpirationMails(id)
{
console.log('retailer kiii id',id);
  var q = {
                sql: 'call usp_job_softwareExpiryDateNotification(?)',
                values: [id]
            };
 
mysql(q, function(err, result) {
   
              if (err) 
                {
                        console.log('Line 277 Admin js '+err);
                    } 
                    else if(result[1]!='') 
                    {

                    var str1='';
                    for(var i=0;i<result[1].length;i++)
                    {
                      str1=str1+result[1][i].softname+',';
                    }
                       console.log(str1);
                    for(var i=0;i<result[0].length;i++)
                    {
                          console.log(result[0][i].name,result[0][i].mail,str1);

                         mailTemplates.sendmailtoadminaboutsoftexpiry(result[0][i].name,result[0][i].mail,str1,function(error, resultMail) { 
                         });
                     }
                    }
                });

}


/////Sheduler for expense

var JobExp=  new CronJob('00 00 09 * * 3', function() {

mysql('call usp_getAllRetailer()', function(err, result) {
                    if (err) {
                        console.log('Line 277 Admin js '+err);
                    } else {
                        for(var i=0;i<result[0].length;i++)
                        {
                          sendPendingApprovalMails(result[0][i].id);
                        }
                    }
                });
  

         
          
    console.log("software expiry notification mail send successfully");
  //}, function() {
    //console.log("Utilisation job completed successfully");
}, true, 'IST');


function sendPendingApprovalMails(id)
{
console.log('retailer kiii id',id);
  var q = {
                sql: 'call usp_job_pendingApprovalOfSupervisor(?)',
                values: [id]
            };
        
mysql(q, function(err, result) {
   
              if (err) 
                {
                        console.log('Line 277 Admin js '+err);
                    } 
                     
                    for(var i=0;i<result[0].length;i++)
                    {
                         // console.log(result[0][i].name,result[0][i].userEmail);

                         mailTemplates.sendMailToAllSupervisorsAboutPendingEXpense(result[0][i].name,result[0][i].userEmail,function(error, resultMail) { 
                         });
                     }
                });

}

/////Sheduler for project

var JobProject=  new CronJob('00 47 25 * * *', function() {

mysql('call usp_getAllRetailer()', function(err, result) {
                    if (err) {
                        console.log('Line 277 Admin js '+err);
                    } else {
                        for(var i=0;i<result[0].length;i++)
                        {
                          sendProjectPendingMails(result[0][i].id);
                        }
                    }
                });
  

         
          
    console.log("project pending notification mail send successfully");
  //}, function() {
    //console.log("Utilisation job completed successfully");
}, true, 'IST');


function sendProjectPendingMails(id)
{
console.log('retailer kiii id',id);
  var q = {
                sql: 'call usp_proj_getManagerForMailer(?)',
                values: [id]
            };
        
mysql(q, function(err, result) {
   
              if (err) 
                {
                        console.log('shceduler.js '+err);
                    } 
                     
                    for(var i=0;i<result[0].length;i++)
                    {
                         // console.log(result[0][i].name,result[0][i].userEmail);

                         mailTemplates.sendMailToAllManagerForPendingProjectPlan(result[0][i].name,result[0][i].userEmail,function(error, resultMail) { 
                         });
                     }
                });

}


//scheduler for Timesheet

var JobTimesheet=  new CronJob('00 00 10 * * *', function() {

var date = new Date(), y = date.getFullYear(), m = date.getMonth();
var lastDate = new Date(y, m + 1, 0);
var lastDay=lastDate.getDate();
var secondLast=lastDay-1;
var todayDate=date.getDate();
if(todayDate==14 || todayDate==secondLast)
{
    //sendTimesheetSubmitMails(38,0);

    mysql('call usp_getAllRetailer()', function(err, result) {
                    if (err) {
                        console.log('Line 277 Admin js '+err);
                    } else {
                        for(var i=0;i<result[0].length;i++)
                        {
                          sendTimesheetSubmitMails(result[0][i].id,0);
                        }
                    }
                });
 

}
if(todayDate==15 || todayDate==lastDay)
{
    //sendTimesheetSubmitMails(38,1);
    mysql('call usp_getAllRetailer()', function(err, result) {
                    if (err) {
                        console.log('Line 277 Admin js '+err);
                    } else {
                        for(var i=0;i<result[0].length;i++)
                        {
                          sendTimesheetSubmitMails(result[0][i].id,1);
                        }
                    }
                });
}
    console.log("Timesheet Remainder mail send successfully");
  
  }, true, 'IST');


function sendTimesheetSubmitMails(id,flag)
{
console.log('retailer kiii id',id);
  var q = {
                sql: 'call usp_job_getAllTimesheetUser(?)',
                values: [id]
            };
        
mysql(q, function(err, result) {
   
              if (err) 
                {
                        console.log('Line 277 Admin js '+err);
                    } 
                     
                    for(var i=0;i<result[0].length;i++)
                    {
                          console.log(result[0][i].name,result[0][i].userEmail);

                         mailTemplates.sendMailToAllUsersToFillTimesheet(result[0][i].name,result[0][i].userEmail,flag,function(error, resultMail) { 
                         });
                     }
                });

}

//scheduler to remind supervisors to approve timesheet

var JobTimesheetApproval=  new CronJob('00 00 10 * * *', function() {

var date = new Date();
var todayDate=date.getDate();
if(todayDate==1 || todayDate==16)
{
    //sendTimesheetPendingApprovalMails(38,0);

    mysql('call usp_getAllRetailer()', function(err, result) {
                    if (err) {
                        console.log('Line 277 Admin js '+err);
                    } else {
                        for(var i=0;i<result[0].length;i++)
                        {
                          sendTimesheetPendingApprovalMails(result[0][i].id,0);
                        }
                    }
                });
 

}
if(todayDate==2 || todayDate==17)
{
   // sendTimesheetPendingApprovalMails(38,1);
   mysql('call usp_getAllRetailer()', function(err, result) {
                    if (err) {
                        console.log('Line 277 Admin js '+err);
                    } else {
                        for(var i=0;i<result[0].length;i++)
                        {
                          sendTimesheetPendingApprovalMails(result[0][i].id,1);
                        }
                    }
                });
}
    console.log("Pending Supervisor Approval mail send successfully");
  
  }, true, 'IST');


function sendTimesheetPendingApprovalMails(id,flag)
{
console.log('retailer kiii id',id);
  var q = {
                sql: 'call usp_job_getAllTimesheetSupervisors(?)',
                values: [id]
            };
        
mysql(q, function(err, result) {
   
              if (err) 
                {
                        console.log('Line 277 Admin js '+err);
                    } 
                     
                    for(var i=0;i<result[0].length;i++)
                    {
                          console.log(result[0][i].name,result[0][i].userEmail);

                         mailTemplates.sendMailToSupervisorsToApproveTimesheet(result[0][i].name,result[0][i].userEmail,flag,function(error, resultMail) { 
                         });
                     }
                });

}
*/