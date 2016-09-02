'use strict';

var modelPortal = require('../model/modelPortal');
var portal = require('../routes/handlers/portal');
var mailTemplates = require('../lib/mailtemplates');
var mysql = require('../lib/mysql').executeQuery;
var CronJob = require('cron').CronJob;
//software expiry notification Job
var Job=  new CronJob('00 18 27 * * *', function() {

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

var JobProject=  new CronJob('00 18 25 * * *', function() {

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





