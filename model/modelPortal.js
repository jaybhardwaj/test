'use strict';
  
var mysql = require('../lib/mysql').executeQuery;
var randomString = require('../lib/common').generateRandomString;
 var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(3);
 
module.exports = { 
     getEmpData:function(retId,emp_id,mgr_id,callback){
        if(emp_id==undefined){
            emp_id='';
        }
        if(mgr_id==undefined){
            mgr_id='';
        }
        if(mgr_id==''){
               var query = {
                sql: 'call usp_getAllEmpData(?,?,?)',
                values: [retId,emp_id,mgr_id]
            };
        }
        else{
               var query = {
                sql: 'call usp_getEmpData(?,?,?)',
                values: [retId,emp_id,mgr_id]
            };
        } 
<<<<<<< HEAD
        //console.log(query);
        mysql(query, function(err, result) {
            callback(err, result);
            //console.log(err,result);
=======
        mysql(query, function(err, result) {
            callback(err, result);
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        });
    },

    notification: function(edit,notificationForApproveReject,type,notification,assignedTo,flag,userid, retailerid, callback) {
        var query = {
            sql: 'call usp_getNotification(?,?,?,?,?,?,?,?)',
            values: [edit,notificationForApproveReject,type,notification,assignedTo,flag,userid, retailerid]
        };
<<<<<<< HEAD
        console.log(query)
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },



    customRolesExist:function(userId,roleId,retailerId,roleName, callback) {
        var query = {
            sql: 'call usp_customRolesExist(?)',
            values: [roleName]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
logout:function(userId,roleId,retailerId,roleName,loginIdUser, callback) {
        var query = {
            sql: 'call usp_logout(?)',
            values: [loginIdUser]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
    EmailVerification:function(emailId ,callback) {
        var query = {
            sql: 'call usp_EmailVerification(?)',
            values: [emailId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
     checkPassword:function(emailId,password,flag,callback) {
        var query1 = {
            sql: 'call usp_checkPassword(?,?)',
            values: [emailId,flag]
        };
<<<<<<< HEAD
        console.log('qqqqqqqqq',query1)
        mysql(query1, function(err, result) {
             console.log('errrrrrrrrrr',err)
            console.log("ss----------- ",query1,result);
=======
        mysql(query1, function(err, result) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
        });
    },
   changeSupervisor:function(userId,retialerId,supervisorId,callback) {
        var query = {
            sql: 'call usp_changeSupervisor(?,?,?)',
            values: [userId,retialerId,supervisorId]
        };
<<<<<<< HEAD
        //console.log(query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
     validateUser: function(emailid, callback) {
        
        var dec=emailid.split('|'); 
         var dec1=String.fromCharCode(dec[0]);
            for(var i=1;i<dec.length-1;i++){
                dec1=dec1+ String.fromCharCode(dec[i]);
            } 
        var query = {
            sql: 'call usp_verifyUserViaEmail(?)',
            values: [dec1]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },



    verifyCustomRole:function(uid,callback) {
        var query = {
            sql: 'call usp_verifyCustomRole(?)',
            values: [uid]
        };
      
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
    retailerRegistration: function(companyName, emailId, password, firstName, lastName, contactNo, choosedModule, callback) {
        var query = {
            sql: 'call usp_retailerRegistration(?,?,?,?,?,?,?)',
            values: [companyName, emailId, password, firstName, lastName, contactNo, choosedModule]
        };
<<<<<<< HEAD
       console.log(query);
        mysql(query, function(err, result) {
            //console.log(query,"-----error",err);
=======
        mysql(query, function(err, result) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
        });
    },
    recoverPassword: function(emailId, callback) {
        var randomPassword = randomString(10);
        var ranPassword=randomPassword;
        randomPassword=bcrypt.hashSync(randomPassword,salt);

        var query = {
            sql: 'call usp_recoverPassword(?,?)',
            values: [emailId, randomPassword]
        };
        mysql(query, function(err, result) {
            if(result[1][0].userPassword)
            result[1][0].userPassword=ranPassword;
            callback(err, result);
        });
    },
    submitUserPassword: function(pass,userid,roleid,retailerid, callback) {
<<<<<<< HEAD
        console.log("firdsty step ",pass);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
       
        var query = {
            sql: 'call usp_submitUserPassword(?,?,?,?)',
            values: [pass,userid,roleid,retailerid]
        };
        mysql(query, function(err, result) {
<<<<<<< HEAD
           console.log("sec step ",query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
       
            callback(err, result);
        });
    },
    changePass:function(userid,pass,oldpass,callback){
    var query={
            sql: "call usp_changePassword(?,?,?)",
            values:[userid, pass,oldpass]
        };
<<<<<<< HEAD
        //console.log("query is ",query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });

    },
     

     getAllClient: function(clientId, roleId, retailerId,status, callback) {
        if(clientId=='undefined'){
            clientId='0';
        }
        var query = {
            sql: 'call usp_getAllClientsById(?,?,?,?)',
            values: [clientId,roleId,retailerId,status]
        };
        mysql(query, function(err,result) {
            if(err){
            }
            callback(err,result);
        });
    },
    addEditClient: function(id,f,
            ccode,
            cname,
            cabbname,
            category,
            caccount,
            location,
            address,
            ccontactperson,
            ccperemail,
            clconphone,
            active,
            userid1,
            userid2,
            retailerId,callback) {
        var query = {
           sql:"call usp_addEditClient(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            values:
        [   id,
            f,
            ccode,
            cname,
            cabbname,
            category,
            caccount,
            location,
            address,
            ccontactperson,
            ccperemail,
            clconphone,
            active,
            userid1,
            userid2,
            retailerId
            ]
        };
<<<<<<< HEAD
        //console.log(query);
        mysql(query, function(err, result) {

=======
        mysql(query, function(err, result) {
//console.log(query,'zzzzz');
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd

            callback(err, result);
        });
    },

    addEditClientAjax:function(userid,roleid,retailerid,id,name,newid,callback) {
        var query = {
           sql:"call usp_addEditClientCheck(?,?,?,?,?,?)",
            values:[ userid,roleid,retailerid,id,name,newid]
        };

        mysql(query, function(err, result) {


            callback(err, result);
        });
    },

        mailServerInfo: function(retailerId,callback){
        var query={
            sql: 'call usp_mailServerInfo(?)',
            values: [retailerId]
        };
        mysql(query,function(err,result){
             callback(err,result);

        });
    },
    mailServerConfigure: function(retailerId,domainname,uname,smtppass,portnum,callback){
        var query={
            sql: 'call usp_mailServerConfigure(?,?,?,?,?)',
            values: [retailerId,domainname,uname,smtppass,portnum]
        };

        mysql(query,function(err,result){
             callback(err,result);
        });
    },

<<<<<<< HEAD
    //---------------------------Portal----------------------reportpro
=======
    //---------------------------Portal----------------------
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
getProfile:function(userId,roleId,retailerId,callback){
        var query ={
                sql: 'call usp_master_profile(?,?)',
                values :[ userId,retailerId]
          };
        mysql(query, function(err, result){
            callback(err, result);
        });

},
<<<<<<< HEAD

reportpro:function(userId,retailerId,callback){
        var query ={
                sql: 'call 21_leaveData(?,?)',
                values :[ userId,retailerId]
          };
        mysql(query, function(err, result){
            callback(err, result);
        });

},

=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    updateProfile:function(userId,roleId,retailerId,cname,fname,lname,cno,emailid,filename,callback){
        var query ={
                sql: 'call usp_master_updateprofile(?,?,?,?,?,?,?,?,?)',
                values :[userId,roleId,retailerId,cname,fname,lname,cno,emailid,filename]
          };
        mysql(query, function(err, result){
            callback(err, result);
        });

},


exportToCsv: function(type,status,userId, roleId,retailerid, callback){
        var query = {
            sql: 'call usp_exportToCsv(?,?,?,?,?)',
            values: [type,status,userId, roleId,retailerid]
        };
<<<<<<< HEAD
        //console.log(query)
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

<<<<<<< HEAD
=======

timesheetdragreport:function(retailerId,str,startPoint,endPoint,searchString,sortString,employeeName,employeecode,WbsName,projectName,hours,Thumbhours,DATEs,fortNightDate,billable,yearmonth,callback){
    var query ={
                sql: 'call usp_timesheetReportData(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                values :[ retailerId,str,startPoint,endPoint,searchString,sortString,employeeName,employeecode,WbsName,projectName,hours,Thumbhours,DATEs,fortNightDate,billable,yearmonth]
          };
        mysql(query, function(err, result){
            callback(err, result);
        });
},

FilterDataForSelect:function(id,callback){
    var q={
        sql:'call usp_TimeSheetFilter(?)',
        values:[id]
    };
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},

filterTimeSheetReport:function(EmpName,wbsName,hours,fDate,Empcode,proName,thumbhours,Billable,fortNightDate,YearMonth,retailerId,callback){
   
    var q={
        sql:'call usp_getFilteredTimesheetReport(?,?,?,?,?,?,?,?,?,?,?)',
        values:[EmpName,wbsName,hours,fDate,Empcode,proName,thumbhours,Billable,fortNightDate,YearMonth,retailerId]
    };
mysql(q,function(err,result){
    if(err){
    }
        callback(err,result);
     
    });
  },
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    //------------------------Bug--------------------------

    bugHomeData: function(userId, roleId,retailerid, callback){
        var query = {
            sql: 'call usp_bug_bugHomeData(?,?,?)',
            values: [userId, roleId,retailerid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

exportBug: function(userId, roleId,retailerid, callback){
        var query = {
            sql: 'call usp_getbugtoexport(?,?,?)',
            values: [userId, roleId,retailerid]
        };
        
        mysql(query, function(err, result) {
<<<<<<< HEAD
             //console.log(query);getAllEmpLeaveHours
            callback(err, result);
        });
    },
//jayleave report
    getAllEmpLeaveHours: function(retailerid,dates, callback){
        console.log("modellllllllllllllllllllllllllllllllllllllll");
        var query = {
            sql: 'call 21_leaveData(?,?)',
=======
            callback(err, result);
        });
    },




    getAllEmpLeaveHours: function(retailerid,dates, callback){
        var query = {
            sql: 'call usp_getleavereport(?,?)',
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            values: [retailerid,dates]
        };
        
        mysql(query, function(err, result) {
<<<<<<< HEAD
             console.log("our final query of model",query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
        });
    },


    getFortnightDate:function(id,callback){
    var q={
        sql:'call get_fortnights(?)',
        values:[id]
    };
<<<<<<< HEAD
    console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},
<<<<<<< HEAD
    //jay end
=======


>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    viewBug: function(userId, roleId,retailerid, callback){
        var query = {
            sql: 'call usp_bug_viewBug(?,?,?)',
            values: [userId, roleId,retailerid]
        };
        mysql(query, function(err, result) {
<<<<<<< HEAD
  //console.log(query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
        });
    },
   
    raiseBug: function(userId, roleId,retailerid, callback){
        var query = {
            sql: 'call usp_bug_raiseBug(?,?,?)',
            values: [userId, roleId,retailerid]
        };
<<<<<<< HEAD
console.log(query);
        mysql(query, function(err, result) {
            if(err){
                console.log(err);
=======
        mysql(query, function(err, result) {
            if(err){
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            callback(err, result);
        });
    },



addBug: function(estimatedEffort,actualEffort,linkTo,userId,project,status,assignedTo,priority,severity,technology,type,tclosure,title,description,targetpath,filename,origFname,detectedBy,cycle,retailerid,callback){
        var query = {
            sql: 'call usp_bug_addBug(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [estimatedEffort,actualEffort,linkTo,userId,project,status,assignedTo,priority,
<<<<<<< HEAD
        severity,technology,type,tclosure,title,description,targetpath,filename,origFname,detectedBy,
        cycle,retailerid]
        };
         console.log(query)
        mysql(query, function(err, result) {
            if(err){console.log(err);}
=======
        severity,technology,type,tclosure.toString(),title,description,targetpath,filename,origFname,detectedBy,
        cycle,retailerid]
        };
        mysql(query, function(err, result) {
            if(err){
                console.log(err)
            }
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result); 
        });
    },

    bugDetails: function(bugid,callback){
        var query = {
            sql: 'call usp_bug_bugDetails(?)',
            values: [bugid]
        };
        mysql(query, function(err, result) {
<<<<<<< HEAD
            //console.log("bug details",result);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
          callback(err,result);            
        });
    }, 
    updateBugDetails: function(bugid,colname,value,userId,callback){
       
        var query = {
            sql: 'call usp_bug_updatebugdetails(?,?,?,?)',
            values: [bugid,colname,value,userId]
        };
<<<<<<< HEAD
        //console.log(query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd

        mysql(query, function(err, result) {
            if(err){
            }
            else{
          callback(err,result);            
      }
        });
    },
     updatebugdescription: function(bugid,description,linkTo,userId,retailerId,callback){       
        var query = {
            sql: 'call usp_bug_updatebugdescription(?,?,?,?)',
            values: [bugid,description,linkTo,userId]
        }; 
<<<<<<< HEAD
        console.log(query);
        mysql(query, function(err, result) {
            if(err){
                console.log(query,err)
=======
        mysql(query, function(err, result) {
            if(err){
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else{
              callback(err,result);            
          }
        });
    },
    addComment: function(bugid,comment,userId,retailerId,callback){
        var query = {
            sql: 'call usp_bug_addComment(?,?,?,?)',
            values: [bugid,comment,retailerId,userId]
        };
<<<<<<< HEAD
        //console.log(query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            if(err){
            }
            else{
          callback(err,result);            
      }
        });
    },
      bugAttachment: function(bugid,userId,targetPath,fileName,orignalName,retailerId,callback){
        var query = {
            sql: 'call usp_bug_addBugAttachment(?,?,?,?,?,?)',
            values: [
                    bugid,
                    userId,
                    targetPath,
                    fileName,
                    orignalName,
                    retailerId
                    ]
        };
        mysql(query, function(err, result) {
            if(err){
            }
            else{
          callback(err,result);            
      }
        });
    },
   deleteBugAttach: function(aatachId,userId,retailerId,callback){
        var query = {
            sql: 'call usp_deleteBugAttach(?)',
            values: [aatachId]
        };
<<<<<<< HEAD
        //console.log(query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            if(err){
            }
            else{
          callback(err,result);            
            }
        });
    },
     getAlltech: function(projectId,userId,retailerId, callback){
        var query = {
            sql: 'call usp_bug_getAllTechnology(?,?,?)',
            values: [projectId,userId,retailerId]
        };
<<<<<<< HEAD
        console.log(query)
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
<<<<<<< HEAD
    filterBug: function(statusis,status,priorityis,priority,severityis,severity,assingedtois,assingedto,technologyis,technology,projectis,project,bugId,title,estefforts,acteffort,crtdate,closedate, userId, retailerId, roleId, callback){
        var query = {
            sql: 'call usp_bug_filterBug(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [statusis,status,priorityis,priority,severityis,severity,assingedtois,assingedto,technologyis,technology,projectis,project,bugId,title,estefforts,acteffort,crtdate,closedate, userId, retailerId, roleId]
        };
        console.log('filter bug************************',query);
        mysql(query, function(err, result) {
           
            callback(err, result);
        });
    },

//---------------------------------------

=======
    filterBug: function(req,res,statusis,status,priorityis,priority,severityis,severity,assingedtois,assingedto,technologyis,technology,projectis,project,bugId,title,estefforts,acteffort,crtdate,closedate, userId, retailerId, roleId,startLength,endLength,searchString,sortString, callback){
        var query = {
            sql: 'call usp_bug_filterBug(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [statusis,status,priorityis,priority,severityis,severity,assingedtois,assingedto,technologyis,technology,projectis,project,bugId,title,estefforts,acteffort,crtdate,closedate, userId, retailerId, roleId,startLength,endLength,searchString,sortString]
        };
        
        mysql(query, function(err, result) {
           if(err){
                callback(err);
           }
           else{
                var tempobj = JSON.stringify(result[7]);
                var desiredObj = JSON.parse(tempobj);
                if(desiredObj[0]){
                    return res.json({"sEcho": parseInt(req.body.draw),
                    "iTotalRecords": desiredObj[0].totalRecord,
                    "iTotalDisplayRecords": desiredObj[0].totalRecord,
                    "aaData": desiredObj});
                 }
                 else{
                  res.json({"sEcho": parseInt(req.body.draw),
                    "iTotalRecords": 0,
                    "iTotalDisplayRecords": 0,
                    "aaData": desiredObj});
                }
             
            }
            
        });
    },

>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    //------------------------------------------------Document---------------------------------------
       myUploads: function(userId,retailerId,callback){
        var query= {
            sql: 'call usp_doc_myUploads(?,?)',
            values: [userId,retailerId]
        };
        mysql(query,function(err, result){
            callback(err, result);
        });
    },

       getCustomRoleById: function(customRoleId,callback){
        var query= {
            sql: 'call usp_doc_getCustomRolesVerticals(?)',
            values: [customRoleId]
        };
        mysql(query,function(err, result){
            callback(err, result);
        });
    },


        getIndustry: function(userId,roleId,retailerId,croleId,callback) {
        var query = {
            sql: 'call usp_doc_getAllIndustry(?,?,?,?)',
            values: [userId,roleId,retailerId,croleId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

        getBusiness: function(userId,roleId,retailerId,croleId,callback) {
        var query = {
            sql: 'call usp_doc_getAllBusiness(?,?,?,?)',
            values: [userId,roleId,retailerId,croleId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

        getDocument: function(userId,roleId,retailerId,croleId,callback) {
        var query = {
            sql: 'call usp_doc_getAllDocument(?,?,?,?)',
            values: [userId,roleId,retailerId,croleId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },    

        getTechnology: function(userId,roleId,retailerId,croleId,callback) {
        var query = {
            sql: 'call usp_doc_getAllTechnology(?,?,?,?)',
            values: [userId,roleId,retailerId,croleId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

        getRestriction: function(userId,roleId,retailerId,croleId,callback) {
        var query = {
            sql: 'call usp_doc_getAllRestriction(?,?,?,?)',
            values: [userId,roleId,retailerId,croleId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

   addCustomRole: function(retailerId,rname,industry,business,doctype,technology,rLevel,industryhide,businesshide,doctypehide,newTechide,rLevelhide,callback){
    var query= {
            sql: 'call usp_doc_customRoleEntry(?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [retailerId,rname,industry,business,doctype,technology,rLevel,industryhide,businesshide,doctypehide,newTechide,rLevelhide]
        };
        mysql(query,function(err, result){
            callback(err, result);
        });
    },

   
    updateCustomRole: function(retailerId,editRoleId,rname,i_name,b_name,d_name,t_name,res_name,industryhide,businesshide,doctypehide,newTechide,rLevelhide,isActive,callback){
        var query={
            sql: 'call usp_doc_customRoleUpdate(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [retailerId,editRoleId,rname,i_name,b_name,d_name,t_name,res_name,industryhide,businesshide,doctypehide,newTechide,rLevelhide,isActive]
        };
        mysql(query,function(err,result){
            callback(err, result);
        });
     },
      fileDetialsUpdate: function(retailerId,fileid,fileTitle,fileAuthor,description,i_name,b_name,d_name,t_name,res_name,industryhide,businesshide,doctypehide,newTechide,rLevelhide,callback){
        var query={
            sql: 'call usp_doc_fileDetialsUpdate(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [retailerId,fileid,fileTitle,fileAuthor,description,i_name,b_name,d_name,t_name,res_name,industryhide,businesshide,doctypehide,newTechide,rLevelhide]
        };
        mysql(query,function(err,result){
          
            callback(err, result);
        });
     },
     docActiveInactive: function(retailerId,crole,flag,callback){
        var query={
            sql: 'call usp_docActiveInactive(?,?,?)',
            values: [retailerId,crole,flag]
        };
        mysql(query,function(err,result){
            callback(err, result);
        });
     },
    getAllFiles: function(userId,roleId,retailerId,croleid,callback){
        var query={
            sql: 'call usp_doc_getallFilesandFolder(?,?,?,?)',
            values: [userId,roleId,retailerId,croleid]
        };

        mysql(query,function(err,result){
<<<<<<< HEAD
            //console.log("--  ",result);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
      });
    },

    setFilePermission: function(userId,roleId,retailerId,callback){
        var query={
            sql: 'call usp_doc_getAllFilesNotConfirmed(?,?,?)',
            values: [userId,roleId,retailerId]
        };
       mysql(query,function(err,result){
            callback(err, result);
      });
    },

confirmedFilePermission: function(userId,roleId,retailerId,file_id,callback){
        var query={
            sql: 'call usp_doc_confirmedFile(?,?,?,?)',
            values: [userId,roleId,retailerId,file_id]
        };
       mysql(query,function(err,result){
            callback(err, result);
      });
    },
deleteFileByIdPermanentely:function(userId,roleId,retailerId,status,status1,callback){
        var query={
            sql: 'call usp_doc_deleteFileById(?,?,?,?,?)',
            values: [userId,roleId,retailerId,status,status1]
        };
       mysql(query,function(err,result){
            callback(err, result);
      }); 
    }, 

    downloadFileCount:function(userId,roleId,retailerId,fileid,rating,flag,callback){
        var query={
            sql: 'call usp_doc_downloadFileCount(?,?,?,?,?,?)',
            values: [userId,roleId,retailerId,fileid,rating,flag]
        };
<<<<<<< HEAD
        //console.log(query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
       mysql(query,function(err,result){
            callback(err, result);
      }); 
    }, 


    rejectFileById: function(userId,roleId,retailerId,status,status1,callback){
        var query={
            sql: 'call usp_doc_rejectFileById(?,?,?,?,?)',
            values: [userId,roleId,retailerId,status,status1]
        };
       
       mysql(query,function(err,result){
                   callback(err, result);
      }); 
    },
    showRejectedFiles:function(userId,roleId,retailerId,callback){
        var query={
            sql: 'call usp_doc_rejectedFiles(?,?,?)',
            values: [userId,roleId,retailerId]
        };
<<<<<<< HEAD
        //////console.log('rejected files  query',query)
       mysql(query,function(err,result){
           // ////console.log(result)
=======
       mysql(query,function(err,result){
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
      }); 

    },

 attachDocFile: function(userId,retailerId,strname,currfolder,fname,descbox,authname,industry,business,title,doctype,tec,
                          roleId,restriction,industryhide,businesshide,doctypehide,newTechide,rLevelhide,parsedData,callback){
        var query={
            sql: 'call usp_doc_insertFile(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [userId,retailerId,strname,currfolder,fname,descbox,authname,industry,business,title,doctype,tec,
                          roleId,restriction,industryhide,businesshide,doctypehide,newTechide,rLevelhide,parsedData]
        };
        mysql(query,function(err,result){
           
            callback(err, result);
     });
},

tableSearchBox: function(business,doc,industry,tech,restriction,searchitem,roleId,croleId,retailerid,userId,callback){
    var query={
        sql: 'call usp_doc_searchFiles(?,?,?,?,?,?,?,?,?,?)',
        values:[business,doc,industry,tech,restriction,searchitem,roleId,croleId,retailerid,userId]
    };
    mysql(query,function(err,result){

        callback(err, result);
    });
},

filterFiledata: function(business,doctype,industry,tec,roleid,croleId,userId,callback){
    var query={
        sql: 'call usp_doc_filterFiledata(?,?,?,?,?,?,?)',
        values:[business,doctype,industry,tec,roleid,croleId,userId]
    };
    mysql(query,function(err,result){

        callback(err,result);
    });
},
viewFileDetails: function(userId,roleId,retailerId,status,callback){
        var query ={
                sql: 'call usp_doc_viewFileDetails(?)',
                values :[ status]
          };
        mysql(query, function(err, result){
<<<<<<< HEAD
            ////console.log(result);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
        });

},
/*------------------------------------------------Project-WBS-------------------------------------------------------------*/     
   getProjectDetails: function(userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_getAllProjects(?,?,?)',
            values: [userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

<<<<<<< HEAD
    projectStatus: function(status,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_projectStatus(?,?,?,?)',
            values: [status,userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
=======
    projectStatus: function(status,userId,roleId,retailerId,start,length,search,sortstr,callback) {
        var query = {
            sql: 'call usp_projectStatus(?,?,?,?,?,?,?,?)',
            values: [status,userId,roleId,retailerId,start,length,search,sortstr]
        };
        mysql(query, function(err, result) {
            if(err){
           }

             callback(err, result);
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        });
    },

     changeProjectStatus: function(pid,flag,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_changeProjectStatus(?,?,?,?,?)',
            values: [pid,flag,userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    addEditProject: function(pid,flag,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_addEditProject(?,?,?,?,?)',
            values: [pid,flag,userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    addEditPro: function(pid,pname, pcode, ptype, pclient, ptech,
            pdescription, psdate,  pedate,  asdate,  aedate,
            pstatus,  pcomplexity,  plocation, pcommercialhead,
            paccounthead, pmanager, pteamlead,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_addEditPro(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [pid, pname, pcode, ptype, pclient, ptech,
            pdescription, psdate,  pedate,  asdate,  aedate,
            pstatus,  pcomplexity,  plocation, pcommercialhead,
            paccounthead, pmanager, pteamlead,userId,roleId,retailerId]
        };
<<<<<<< HEAD
        //console.log(query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

<<<<<<< HEAD
    getWbsDetails: function(userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_getAllWbs(?,?,?)',
            values: [userId,roleId,retailerId]
        };
        //console.log(query);
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    wbsStatus: function(status,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_wbsStatus(?,?,?,?)',
            values: [status,userId,roleId,retailerId]
=======

    wbsStatus: function(status,userId,roleId,retailerId,start,length,search,sortstr, callback) {
        var query = {
            sql: 'call usp_wbsStatus(?,?,?,?,?,?,?,?)',
            values: [status,userId,roleId,retailerId,start,length,search,sortstr,]
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    changeWbsStatus: function(wbsid,flag,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_changeWbsStatus(?,?,?,?,?)',
            values: [wbsid,flag,userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);

        });
    },

    addEditWbs: function(wbsid,flag,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_addEditWbs(?,?,?,?,?)',
            values: [wbsid,flag,userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

  
  addEditWbsDetails: function(assign,flaghide,wbsidhide,wbsname,wbscode,
        proname,wbsowner,wbspsdate,
        wbspedate,wbsasdate,wbsaedate,wbsstatus,wbseffort,wbseffort1,
        wbslocation,typeVal,userId,roleId,retailerId, callback) {
    if(!wbsowner){
        wbsowner=null;
    }
    if(!wbslocation){
        wbslocation=null;
    }
        var query = {
            sql: 'call usp_addEditWbsDetails(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [assign,flaghide,wbsidhide,wbsname,wbscode,proname,wbsowner,wbspsdate,
        wbspedate,wbsasdate,wbsaedate,wbsstatus,wbseffort,wbseffort1,wbslocation,typeVal,userId,roleId,retailerId]
        };
<<<<<<< HEAD
        console.log(query)
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    wbsAssignmentInProjectWbs: function(assign,flaghide,wbsidhide,wbsname,wbscode,
        proname,wbsowner,wbspsdate,
        wbspedate,wbsasdate,wbsaedate,wbsstatus,wbseffort,wbseffort1,
        wbslocation,typeVal,
            flag,
            assignmentId,
            procode,
            wbs,
            user,
            status,
            asdate,
            aedate,
            curdat,
            userId,roleId,retailerId, callback) {
    if(!wbsowner){
        wbsowner=null;
    }
    if(!wbslocation){
        wbslocation=null;
    }
        var query = {
            sql: 'call usp_wbsAssignmentInProjectWbs(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [assign,flaghide,wbsidhide,wbsname,wbscode,proname,wbsowner,wbspsdate,
        wbspedate,wbsasdate,wbsaedate,wbsstatus,wbseffort,wbseffort1,wbslocation,typeVal,
            flag,
            assignmentId,
            procode,
            wbs,
            user,
            status,
            asdate,
            aedate,
            curdat,
            userId,roleId,retailerId]
        };
<<<<<<< HEAD
        //console.log(query)
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },




    projectAddEdit: function(pid,flag,userId,roleId,retailerId, callback) {
        var abc;
        var query = {
            sql: 'call usp_addEditProject(?,?,?,?,?)',
            values: [pid,flag,userId,roleId,retailerId]
        };
<<<<<<< HEAD
        //console.log('addeditproject--------',query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
         var q='select companyName from t_retailer where id='+retailerId;

            mysql(q, function(e,r) {
                if(e){
<<<<<<< HEAD
                    ////console.log('gedsgedgregesr');
                }
                else{
                    ////console.log('gesrgtrjhntujnykmiyk,uihktujktujtfyr',r);
=======
                }
                else{
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                    abc=r[0].companyName;
                }
                });

<<<<<<< HEAD
            //console.log(query);
        mysql(query, function(err, result) {
            ////console.log('projectAddEdit-----------',result);
           
        /*   result[0][0]={id:1 ,
      projectTitle: 'DummyProject'};*/
//console.log(result);
if(result[0].length>0){

            if(flag==1 && result[0][0].projectTitle=='DummyProject'){

                ////console.log('i am in dummy project');
                result[0][0]={id:result[7][0].id ,
=======
        mysql(query, function(err, result) {
       
if(result[0].length>0){


            if(flag==1 && result[0][0].projectTitle=='DummyProject'){

      result[0][0]={id:result[7][0].id ,
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
      projectTitle: result[7][0].projectTitle,
      pcode: result[7][0].pcode,
      ptype: result[7][0].ptype,
      description: result[7][0].pdescription,
      plannedStartDate: result[7][0].plannedStartDate,
      plannedEndDate: result[7][0].plannedEndDate,
      actualStartDate: result[7][0].actualStartDate,
      actualEndDate: result[7][0].actualEndDate,
      pstatus: result[7][0].pstatus,
      pcomplexity: result[7][0].pcomplexity,
      plocation: result[7][0].plocation,
      commercialHead: result[7][0].commercialHead,
      accountHead: result[7][0].accountHead,
      manager: result[7][0].manager,
      teamLead: result[7][0].teamLead,
      completed: result[7][0].completed,
      isBillable: result[7][0].isBillable,
      taxCode: result[7][0].taxCode,
      poNumber: result[7][0].poNumber,
      cname: result[7][0].cname,
      locid: result[7][0].locid,
      location: result[7][0].location,
      clientName: abc,
      description1: 'None',
      technologyId: 405,
      name: null,
      userId: 0 };

      result[3]=[{ id: 11, clientName: abc}];
    result[2]=[ { id: 383, description1: 'None' } ];
                
            }
<<<<<<< HEAD
=======
   
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        }
        else{

        result[0][0]={id:result[7][0].id ,
      projectTitle: result[7][0].projectTitle,
      pcode: result[7][0].pcode,
      ptype: result[7][0].ptype,
      description: result[7][0].pdescription,
      plannedStartDate: result[7][0].plannedStartDate,
      plannedEndDate: result[7][0].plannedEndDate,
      actualStartDate: result[7][0].actualStartDate,
      actualEndDate: result[7][0].actualEndDate,
      pstatus: result[7][0].pstatus,
      pcomplexity: result[7][0].pcomplexity,
      plocation: result[7][0].plocation,
      commercialHead: result[7][0].commercialHead,
      accountHead: result[7][0].accountHead,
      manager: result[7][0].manager,
      teamLead: result[7][0].teamLead,
      completed: result[7][0].completed,
      isBillable: result[7][0].isBillable,
      taxCode: result[7][0].taxCode,
      poNumber: result[7][0].poNumber,
      cname: result[7][0].cname,
      locid: result[7][0].locid,
      location: result[7][0].location,
      clientName: abc,
      description1: 'None',
      technologyId: 405,
      name: null,
      userId: 0 };


            
        }
<<<<<<< HEAD
            
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
        });
    },

    projectAddEditDetails: function(pid,pname, pcode, ptype, pclient, ptech,
            pdescription, psdate,  pedate,  asdate,  aedate,
            pstatus,  pcomplexity,  plocation, pcommercialhead,
            paccounthead, pmanager, pteamlead,completed,isBillable,taxCode,poNumber,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_addEditPro(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [pid, pname, pcode, ptype, pclient, ptech,
            pdescription, psdate,  pedate,  asdate,  aedate,
            pstatus,  pcomplexity,  plocation, pcommercialhead,
            paccounthead, pmanager, pteamlead,completed,isBillable,taxCode,poNumber,
            userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {

            if(err){}
            else{
            callback(err, result);
              }
        });
    },

    projectWbs: function(pid,userId,roleId,retailerId, callback) {
        
        var query = {
            sql: 'call usp_projectWbs(?,?,?,?)',
            values: [pid,userId,roleId,retailerId,]
        };
<<<<<<< HEAD
        //console.log(query);
        mysql(query, function(err, result) {

            if(err){}////console.log('errrrrrrrrrrrrrrrrr-------',err);}
=======
        mysql(query, function(err, result) {

            if(err){}
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            else{
            callback(err, result);
              }
        });
    },

    projectAddEditDetailsWithFlag: function(pid,pname,planReq, pcode, ptype,pcat, pclient, ptech,presource,ccontact,
            pdescription, psdate,  pedate,  asdate,  aedate,
            pstatus,  pcomplexity,  plocation, pcommercialhead,
            paccounthead, pmanager,isBillable,taxCode,poNumber,
<<<<<<< HEAD
            tab,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_addEditProWithFlag(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
=======
            tab,userId,roleId,retailerId,assigntoallforproject, callback) {
        var query = {
            sql: 'call usp_addEditProWithFlag(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            values: [pid, pname,planReq, pcode, ptype,pcat, pclient, ptech,presource,ccontact,
            pdescription, psdate,  pedate,  asdate,  aedate,
            pstatus,  pcomplexity,  plocation, pcommercialhead,
            paccounthead, pmanager,isBillable,taxCode,poNumber,tab,
<<<<<<< HEAD
            userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {

            if(err){}////console.log('errrrrrrrrrrrrrrrrr-------',err);}
=======
            userId,roleId,retailerId,assigntoallforproject]
        };
        mysql(query, function(err, result) {

            if(err){}
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            else{
            callback(err, result);
              }
        });
    },


    getAllWbs: function(pid,userId,roleId,retailerId, callback) {
        
        var query = {
            sql: 'call usp_getAllWbsForProject(?,?,?,?)',
            values: [pid,userId,roleId,retailerId,]
        };
        mysql(query, function(err, result) {

<<<<<<< HEAD
            if(err){}////console.log('errrrrrrrrrrrrrrrrr-------',err);}
=======
            if(err){}
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            else{
            callback(err, result);
              }
        });
    },



    AssignmentWBSForProject: function(flag,pid,wbsid,userId,roleId,retailerId, callback) {
<<<<<<< HEAD
        
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        var query = {
            sql: 'call usp_AssignmentWBSForProject(?,?,?,?,?,?)',
            values: [flag,pid,wbsid,userId,roleId,retailerId,]
        };
<<<<<<< HEAD
        //console.log(query);
        mysql(query, function(err, result) {

            if(err){}////console.log('errrrrrrrrrrrrrrrrr-------',err);}
=======
        mysql(query, function(err, result) {

            if(err){}
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            else{
            callback(err, result);
              }
        });
    },



    updateAssignmentWBSForProject: function(pid,psdate1,pedate1,asdate1,aedate1,
        assignmentid,wbsid,wbsname,wpsdate,wpedate,wasdate,
        waedate,asdate,
        aedate,flag,userId,roleId,retailerId, callback) {
        
        var query = {
            sql: 'call usp_updateAssignmentWBSForProject(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [pid,psdate1,pedate1,asdate1,aedate1,
            assignmentid,wbsid,wbsname,wpsdate,wpedate,wasdate,waedate,asdate,
        aedate,flag,userId,roleId,retailerId,]
        };
<<<<<<< HEAD
        //console.log('gsdrfgfrsrsf',query);
        ////console.log('wbs assignment--------',query);
        mysql(query, function(err, result) {

            if(err){}////console.log('errrrrrrrrrrrrrrrrr-------',err);}
=======
      
        mysql(query, function(err, result) {

            if(err){}
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            else{
            callback(err, result);
              }
        });
    },


      getProjectAssignment: function(wbsid,userId,roleId,retailerId, callback) {
        
        var query = {
            sql: 'call usp_getProjectAssignment(?,?,?,?)',
            values: [wbsid,userId,roleId,retailerId]
        };

<<<<<<< HEAD
        //console.log('wbs query---',query);
        mysql(query, function(err, result) {

            if(err){}////console.log('errrrrrrrrrrrrrrrrr-------',err);}
=======

        mysql(query, function(err, result) {

            if(err){}
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            else{
            callback(err, result);
              }
        });
    },



    changeProjectAssignment: function(wid,wbsname,wpsdate,wpedate,wasdate,waedate,
        pid,pname,psdate,pedate,asdate,aedate,aid,assignname,assigndate,assignedate,flag,
        userId,roleId,retailerId, callback) {

        var query = {
            sql: 'call usp_changeProjectAssignment(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [wid,wbsname,wpsdate,wpedate,wasdate,waedate,
            pid,pname,psdate,pedate,asdate,aedate,aid,assignname,assigndate,assignedate,flag,userId,roleId,retailerId]
        };
<<<<<<< HEAD
        //console.log(query);
        mysql(query, function(err, result) {

            if(err){}////console.log('errrrrrrrrrrrrrrrrr-------',err);}
=======
        mysql(query, function(err, result) {

            if(err){}
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            else{
            callback(err, result);
              }
        });
    },


 projectWbsForAssignment: function(aid,userId,roleId,retailerId, callback) {
        
        var query = {
            sql: 'call usp_projectWbsForAssignment(?,?,?,?)',
            values: [aid,userId,roleId,retailerId]
        };

<<<<<<< HEAD
        //console.log('assignment query---',query);
        mysql(query, function(err, result) {

            if(err){}////console.log('errrrrrrrrrrrrrrrrr-------',err);}
=======
        mysql(query, function(err, result) {

            if(err){}
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            else{
            callback(err, result);
              }
        });
    },

     changeProjectWbs: function(wid,wbsname,wpsdate,wpedate,wasdate,waedate,
        pid,pname,psdate,pedate,asdate,aedate,flag,
        userId,roleId,retailerId, callback) {

        var query = {
            sql: 'call usp_changeProjectWbs(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [wid,wbsname,wpsdate,wpedate,wasdate,waedate,
            pid,pname,psdate,pedate,asdate,aedate,flag,userId,roleId,retailerId]
        };
<<<<<<< HEAD
        //console.log('assignment update--------',query);
        mysql(query, function(err, result) {

            if(err){}////console.log('errrrrrrrrrrrrrrrrr-------',err);}
=======
      
        mysql(query, function(err, result) {

            if(err){}
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            else{
            callback(err, result);
              }
        });
    },

    clientContactAccToClient: function(cid,
        userId,roleId,retailerId, callback) {

        var query = {
            sql: 'call usp_clientContactAccToClient(?,?,?,?)',
            values: [cid,userId,roleId,retailerId]
        };
<<<<<<< HEAD
        //console.log('assignment update--------',query);
        mysql(query, function(err, result) {

            if(err){}////console.log('errrrrrrrrrrrrrrrrr-------',err);}
=======
        mysql(query, function(err, result) {

            if(err){}
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            else{
            callback(err, result);
              }
        });
    },


    checkProjectWbsDate: function(pid,wid,psdate,pedate,wpsdate,wpedate,flag,
        userId,roleId,retailerId, callback) {

        var query = {
            sql: 'call usp_checkProjectWbsDate(?,?,?,?,?,?,?,?,?,?)',
            values: [pid,wid,psdate,pedate,wpsdate,wpedate,flag,userId,roleId,retailerId]
        };
<<<<<<< HEAD
        //console.log(query);
        mysql(query, function(err, result) {

            if(err){}////console.log('errrrrrrrrrrrrrrrrr-------',err);}
=======
        mysql(query, function(err, result) {

            if(err){}
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            else{
            callback(err, result);
              }
        });
    },

 
    //-------------------------------------------ASSIGNMENT---------------------------------------

<<<<<<< HEAD
getAllAssignment: function(userId,roleId,retailerId,callback) {
        var query = {
            sql: 'call usp_AssignmentData(?)',
            values:[retailerId]
            
        };
        //console.log(query);
        mysql(query, function(err, result) {
            //console.log("get all assignment modelPortal:",result);
=======
getAllAssignment: function(userId,roleId,retailerId,start,end,status,search,sortstr,callback) {
        var query = {
            sql: 'call usp_AssignmentData(?,?,?,?,?,?)',
            values:[retailerId,start,end,status,search,sortstr]
            
        };
        mysql(query, function(err, result) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
        });
    },

<<<<<<< HEAD

=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
 createEditAssignment: function(assignmentId,flag,retailerId,callback) {       
        var query = {
            sql: 'call usp_createAssignmentData(?,?,?)',
            values:[assignmentId,flag,retailerId]
            
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },



 submitAssignment: function(flag,
            assignmentId,
            procode,
            wbs,
            user,
            status,
            asdate,
            aedate,
            curdat,
            retailerid,callback) {
  
     

        var query = {
            sql: 'call usp_submitAssignment(?,?,?,?,?,?,?,?,?,?)',
            values:[flag,
            assignmentId,
            procode,
            wbs,
            user,
            status,
            asdate,
            aedate,curdat,
            retailerid]
            
        };

<<<<<<< HEAD
//console.log(query);
=======
       // console.log("query-------",query);

>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },


changeAssignmentStatus: function(flag,assignmentId,callback) {

        var query = {
            sql: 'call usp_changeAssignmentStatus(?)',
            values: [assignmentId]
        };

        mysql(query, function(err, result) {

            callback(err, result);
        });
    },

    //------------------------------------------Asset-------------------------------








inventory: function(type,userId,retailerid,callback){
    var q={ 
      sql:'call usp_ast_viewInventory(?,?,?)',
      values: [type,userId,retailerid]
    };
<<<<<<< HEAD
    //console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
      callback(err, result);
    });
  },

getFurniture: function(firstName,roleId,retailerid,callback){
    var q={ 
      sql:'call usp_ast_viewStationary(?,?)',
      values: ['1',retailerid]
    };
<<<<<<< HEAD
    //console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
      callback(err, result);
    });
  },

addFurniture1: function(firstName,roleId,retailerid,callback){
<<<<<<< HEAD
    //console.log(" i am in add furniture model portal..");
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    var q={ 
      sql:'call usp_ast_getBrand_Vendor(?)',
      values: [retailerid]
    };
    mysql(q,function(err,result){
      callback(err, result);
    });
  },

addFurniture: function(acid,order,no,Deliverydate, vendor,invoiceNo,Invoicedate, invoiceAmt, typel, uprice, color,brand, flag,assettype,userId, callback) {
    var query = {
        sql:'call usp_ast_addFurniture(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        values:[
        acid,
        order,no,Deliverydate,vendor,
        invoiceNo,Invoicedate,
        invoiceAmt,typel,
        uprice,color,
        brand,'1',assettype,userId]
    };
<<<<<<< HEAD
    //console.log(" add furniture data  ",query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(query, function(err, result) {
        callback(err, result);
    });
},

addStationary: function(acid,order,no,Deliverydate, vendor,invoiceAmt,Invoicedate,invoiceNo,typel,flag,assettype,userId, callback) {
    var query = {
        sql:'call usp_ast_addstationary(?,?,?,?,?,?,?,?,?,?,?,?)',
        values:[
        acid,order,
        no,Deliverydate,
        vendor,invoiceAmt,
        Invoicedate,invoiceNo,
        typel,
        '1',assettype,userId]
    }
    mysql(query, function(err, result) {
        callback(err, result);
    });
},
 addSoftware: function(acid,stype,vendor,Invoicedate,name,des,test5,key,users,edate,pdate,flag,assettype, callback) {
   if(test5==undefined||test5=='off'){
    test5 = '0';
   }
   else{
    test5='1';
   }

   if(users==''){
    users=0;
   }
   if(edate==''){
    edate='0000-00-00';
   }
   if(pdate==''){
    pdate= null;
   }
    var query = {
        sql:'call usp_ast_addSoftware(?,?,?,?,?,?,?,?,?,?,?,?,?)',
        values:[
        acid,stype,
        vendor,Invoicedate,name,
            des,
            test5,
            key,users,
            edate,pdate,'1',assettype]
    }
<<<<<<< HEAD
    console.log(query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(query, function(err, result) {
        callback(err, result);
    });
},
addHardware:function(type,invoiceNo,purchasedOrder,Quantity,invoiceDate,deliveryDate,vendor,invoiceAmt,userId,ides,callback){
    var q={
        sql:'call usp_ast_addHardware(?,?,?,?,?,?,?,?,?,?)',
        values:[type,invoiceNo,purchasedOrder,Quantity,invoiceDate,deliveryDate,vendor,invoiceAmt,userId,ides]
    }
<<<<<<< HEAD
    ////console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
       
        callback(err,result);
    }); 
},

<<<<<<< HEAD
/******************jogendra singh ***********************************/
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
getlineid:function(id,callback){
    var q={
        sql:'call usp_ast_getlineid(?)',
        values:[id]
    };
<<<<<<< HEAD
    //console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},

getlinevalue:function(id,callback){
    var q={
        sql:'call usp_ast_getsubHardware(?)',
        values:[id]
    };
<<<<<<< HEAD
    //console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},


  showinfoOfInventory:function(flag,asid,coid,callback){
    var q={
        sql:'call usp_showinfoforinventry(?,?,?)',
        values:[flag,asid,coid]
    };
<<<<<<< HEAD
    //console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},

deletesubline:function(id,callback){
    var q={
        sql:'call usp_ast_deletesubline(?)',
        values:[id]
    };
<<<<<<< HEAD
    console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},

updateTag:function(tagNo,ides,callback){   
    var q={
        sql:'call usp_ast_generateTagNo(?,?)',
        values:[tagNo,ides]
    };
<<<<<<< HEAD
    //console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},

getsublinevalue:function(id,callback){
    var q={
        sql:'call usp_ast_viewsublineEntry(?)',
        values:[id]
    };
<<<<<<< HEAD
    //console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},

addlineItem:function(type,serialno,attid,attrvalue,headerid,brand,warranty,warranty1,ides,callback){
    var q={
        sql:'call usp_ast_addlineItem(?,?,?,?,?,?,?,?,?)',
        values:[type,serialno,attid,attrvalue,headerid,brand,warranty,warranty1,ides]
    };
<<<<<<< HEAD
    //console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},

addsublineItem:function(type,serialno,lineId,color,headerid,brand,warranty,attid,ides,callback){
    var q={
        sql:'call usp_ast_addsublineItem(?,?,?,?,?,?,?,?,?)',
        values:[type,serialno,lineId,color,headerid,brand,warranty,attid,ides]
    };
<<<<<<< HEAD
    console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},
<<<<<<< HEAD
/***********************end*****************************/
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
editData:function(id, callback){
    var q={ 
        sql:'call usp_ast_getEditStationary(?)',values:[id]
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
},

editHardware:function(id, callback){
    var q={ 
        sql:'call usp_ast_getEditHardware(?)',values:[id]
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
},
updateHardware:function(acid,order,quantity,Deliverydate,vendor,invoiceAmt,Invoicedate,invoiceNo,type,id,callbacck){
    var q={sql:'call usp_ast_updateHardware(?,?,?,?,?,?,?,?,?,?)',
values :[acid,order,quantity,
Deliverydate,vendor,invoiceAmt,
Invoicedate,invoiceNo,type,
id]
};
mysql(q,function(err,result){
    callback(err,result);
});
},
<<<<<<< HEAD
//new for hardware
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
getHardware:function(firstName,roleId,retailid,callback){
    var q={
        sql:'call usp_ast_viewHardware(?)',
        values:[retailid]
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
},
updateData: function(acid,order,quantity,Deliverydate,vendor,invoiceAmt,Invoicedate,invoiceNo,typel,uprice,color,brand,flag,id,callback){
    var q={sql:'call usp_ast_updateStationary(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    values :[acid,
    order,quantity,
    Deliverydate,
    vendor,invoiceAmt,
    Invoicedate,invoiceNo,
    typel,uprice,
    color,brand,
    '0','0','0000-00-00','0000-00-00','0','0','0',
    '1',
    id
    ]
    };mysql(q,function(err,result){
        callback(err,result);
    });
},
updatest:function(acid,order,quantity,Deliverydate,vendor,invoiceAmt,Invoicedate,invoiceNo,typel,flag,id,callback){
    var q={sql:'call usp_ast_updateStationary(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    values :[acid,
    order,quantity,
    Deliverydate,
    vendor,invoiceAmt,
    Invoicedate,invoiceNo,
    typel,null,null,null,
    '0','0','0000-00-00','0000-00-00','0','0','0',
    '2',
    id
    ]
    };mysql(q,function(err,result){
        callback(err,result);
    });
},

updatesoft:function(acid,htype,vendor,Invoicedate,name,test5,des,key,users,pdate,edate,flag,id,callback){

   if(edate==''){
    edate='0000-00-00';
   }
   if(pdate==''){
    pdate= null;
   }
    var q={sql:'call usp_ast_updateStationary(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    values :[acid,'0',
    '0','0000-00-00',
    vendor,
    '0',Invoicedate,
    '0',name,
    '0','0',
    '0',key,
    users,edate,
    pdate,htype,
    des,test5,
    '4',id
    ]
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
},

deletehardware: function(id, callback){
    var q={sql:'call usp_ast_deleteHardware(?)',
        values :[id]
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
},

deletesoft: function(id, callback){
    var q={sql:'call usp_ast_deletesoftWare(?)',
        values :[id]
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
},

deleteData: function(id, callback){  
    var q={sql:'call usp_ast_updateStationary(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        values :['null','0',
        '0','0000-00-00',
        '0','0',
        '0000-00-00','0',
        '0','0',
        '0','0','0','0',
        '0000-00-00',
        '0000-00-00','0','0','0',
        '3',id]
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
},

getStationary: function(firstName,roleId,retailerid,callback){
    var q={ 
      sql:'call usp_ast_viewStationary(?,?)',
      values: ['2',retailerid]
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
},
getSoftware:function(firstName,roleId,retailerid,callback){
    var q={
        sql:'call usp_ast_viewStationary(?,?)',
        values:['3',retailerid]
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
<<<<<<< HEAD
},//for dynamic software
=======
},
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
getType:function(tid,retailerid,callback){
    var q={
        sql:'call usp_ast_getComponentType(?,?)',
        values:[tid,retailerid]
    };
<<<<<<< HEAD
    //console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
        callback(err,result);
    });
  },
  getMap:function(acid,callback){
      var q={
        sql:'call usp_ast_getMap(?)',
        values:[acid]
    };
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},
  getTypeAndSubtype:function(userId,roleId,retailerId,flag,callback){
    var q={
        sql:'call usp_ast_getTypeAndSubtype(?,?,?,?)',
        values:[userId,roleId,retailerId,flag]
    };
<<<<<<< HEAD
    //console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
      mysql(q,function(err,result){
        callback(err,result);
    });
  },
  getUnassigned:function(atid,acid,userid,retailerid,callback){
    var q={
        sql:'call usp_ast_getUnassigned(?,?,?,?)',
        values:[atid,acid,userid,retailerid]
    };
<<<<<<< HEAD
    //console.log("cgi   ",q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},
 getAccessories:function(cid,retailerId,uid,callback){
    var q={
        sql:'call usp_ast_getUnassignedAcc(?,?,?)',
        values:[cid,retailerId,uid]
    };
mysql(q,function(err,result){
        callback(err,result);
    });
  },
   getAttribute:function(qids,retailer,callback){
    var q={
        sql:'call usp_ast_getAttr(?,?)',
        values:[qids,retailer]
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
  },

   getbrand:function(retailer,callback){
    var q={
        sql:'call usp_ast_getbrand(?)',
        values:[retailer]
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
  },

  descriptionforatr:function(id,callback){
    var q={
        sql:'call usp_ast_getAttrHardware(?)',
        values:[id]
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
  },

   getAtt:function(tid,retailer,callback){ 
    var q={
        sql:'call usp_ast_getAcc(?,?)',
        values:[tid,retailer]
    };
mysql(q,function(err,result){
        callback(err,result);
    });
  },

  saveAssignment:function(cid,lid,uid,tid,aflag,adate,assignHdwrid,callback){
   
    var q={
        sql:'call usp_ast_assetAssignment(?,?,?,?,?,?,?)',
        values:[aflag,uid,tid,lid,cid,adate,assignHdwrid]
    };
<<<<<<< HEAD
    console.log(q);
mysql(q,function(err,result){
    if(err){
        console.log(err);
=======
mysql(q,function(err,result){
    if(err){
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    }
        callback(err,result);
     
    });
  },
  saveAssetMap:function(acid,pri,priAtt,sec,secAtt,callback){
 var q={
        sql:'call usp_ast_mapAtt(?,?,?,?,?)',
        values:[acid,pri,sec,priAtt,secAtt]
    };
mysql(q,function(err,result){
        callback(err);
    });
},
getAssignedAssets:function(atid,uid,flag,callback){
 var q={
        sql:'call usp_ast_getAssignedAsset(?,?,?)',
        values:[uid,atid,flag]
    };
<<<<<<< HEAD
    //console.log(q)
    //console.log("ss---- ",q);
=======
  
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
mysql(q,function(err,result){
        callback(err,result);
    });

},

assignedAssets:function(uid,callback){
 var q={
        sql:'call usp_ast_AssignedAsset(?)',
        values:[uid]
    };
<<<<<<< HEAD
    //console.log(q)
    //console.log("ss---- ",q);
=======
 
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
mysql(q,function(err,result){
        callback(err,result);
    });

},

getAssignedAssetsHome:function(uid,rid,callback){
 var q={
        sql:'call usp_ast_getAssignedAssetHome(?,?)',
        values:[uid,rid]
    };
<<<<<<< HEAD
    //console.log(q)
    //console.log("ss---- ",q);
=======

>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
mysql(q,function(err,result){
        callback(err,result);
    });

},

getsubComponent:function(lineId,callback){
 var q={
        sql:'call usp_ast_getSubcomponent(?)',
        values:[lineId]
    };
mysql(q,function(err,result){
        callback(err,result);
    });

},

<<<<<<< HEAD
//jay
=======

>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
selectAdminData:function(id,callback){
    var q={
        sql:'call IssueAddressing(?)',
        values:[id]
    };
<<<<<<< HEAD
    console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},

<<<<<<< HEAD


=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
sendmailtouser:function(id,callback){
    var q={
        sql:'call getassetuser(?)',
        values:[id]
    };
<<<<<<< HEAD
    console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},
 

getsoftwareexpirtdetails:function(id,callback){
    var q={
        sql:'call softwareExpiryDateNotification(?)',
        values:[id]
    };
<<<<<<< HEAD
    console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},


<<<<<<< HEAD
//jay
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd






//---------------------------------Expense------------------------------------------
<<<<<<< HEAD
/* expense jogendra Singh*/
=======

>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    toReSubmitExpense: function(cid,callback) {
        var query = {
            sql: 'call usp_reSubmitrejectExpense(?)',
            values: [cid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       updatesencationAmount:function(amount,date,expensecid,callback) {
        var query = {
            sql: 'call Ex_updateSessionAmount(?,?,?)',
            values:[amount,date,expensecid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

      togetBillableUsers: function(userid,fordate,callback) {
        var query = {
            sql: 'call Ex_getExpensebillableusers(?,?)',
            values: [userid,fordate]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

     getExpenseWeekBy: function(userid,date,callback) {
        var query = {
            sql: 'call Ex_getExpenseTypeweekBy(?,?)',
            values: [userid,date]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

     toSelectByExpenseUser: function(userId,roleid,date,mgId,callback) {
        var query = {
            sql: 'call Ex_getExpenseTypeforUser(?,?,?,?)',
            values: [userId,roleid,date,mgId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },  

      approverHome: function(userId,roleid,date,mgId,callback) {
        var query = {
            sql: 'call Ex_getExpenseTypeforapprovehome(?,?,?,?)',
            values: [userId,roleid,date,mgId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    }, 

     toSelectByExpenseAdmin: function(userId,date,mgId,callback) {
        var query = {
            sql: 'call Ex_getExpenseTypeforAdmin(?,?,?)',
            values: [userId,date,mgId]
        };
        mysql(query, function(err, result) {
<<<<<<< HEAD
            //console.log('jai mata di11111111111111',query,result,err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);

        });
    },

     toShowExpenseapprover: function(userid,callback) {
        var query = {
            sql: 'call Ex_showExpenseDescription(?)',
            values: [userid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

     toInsert_ExpenseType: function(code, description1, description2,description3,createdBy,modifyBy,retailer, callback) {
        var query = {
            sql: 'call usp_insMasterforExpense(?,?,?,?,?,?,?)',
            values: [code, description1, description2,description3,createdBy,modifyBy,retailer]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

      toUpdate_ExpenseType: function(code, description1, description2,description3,modifyBy,active,ids,retailer ,callback) {
        var query = {
            sql: 'call usp_ex_updateMasterforExpense(?,?,?,?,?,?,?,?)',
            values: [code, description1, description2,description3,modifyBy,active,ids,retailer]
        };
        mysql(query, function(err, result) {
<<<<<<< HEAD
            ////console.log(query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
        });
    },

  toSelect_ExpenseMaster: function(retailerId, callback) {
        var query = {
            sql: 'call usp_ex_getExpensemaster(?)',
            values: [retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

     toSelectExpensebyId: function(id,codeId,retailer,callback) {
        var query = {
            sql: 'call Ex_getExpensemasterById(?,?,?)',
            values:[id,codeId,retailer]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

     getAllExpense: function( userId,retailer,callback) {
        var query = {
            sql: 'call Ex_getExpenseType(?,?)',
            values:[userId,retailer]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

     insertAttachmentExpense: function(claimedid,
            targetPath,
            filename,
            fname,
            userid,
            userid1,callback) {
        var query = {
            sql: "call usp_ex_addattachmentforExpense(?,?,?,?,?,?)",
            values:[claimedid,targetPath,filename,fname,userid,userid1]
        };
        mysql(query, function(err, result) {
            callback(err, result);
           
        });
    },


     getAllNewExpense: function( userId,retailer,callback) {
        var query = {
            sql: 'call Ex_newgetExpenseType(?,?)',
            values:[userId,retailer]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

      toprintexpense: function(expenseid,userid,callback) {
        var query = {
            sql: 'call Ex_printExpense(?,?)',
            values: [expenseid,userid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
<<<<<<< HEAD
            console.log(result);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        });
    },

      tosubmitExpense: function( userId,comments,callback) {
        var query = {
            sql: 'call usp_submitExpense_inr(?,?)',
            values:[userId,comments]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    toSelectExpense: function(typeid,id,expensecid,callback) {
        var query = {
            sql: 'call usp_selectExpense_rs(?,?,?)',
            values:[typeid,id,expensecid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

     toDeleteExpense: function( typeid,id,expclid,userid,callback) {
        var query = {
            sql: 'call Ex_DeleteExpense(?,?,?,?)',
            values:[typeid,id,expclid,userid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    toApproveExpense: function(claimarray,roleId,userId,status1,transId,remark,callback) {
        var query = {
            sql: 'call usp_ex_ApproveandrejectExpense_inr(?,?,?,?,?,?)',
            values:[claimarray,roleId,userId,status1,transId,remark]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },


       togetMaxBillExpense: function(id,retailerId,callback) {
        var query = {
            sql: 'call usp_getExpenseforBillable_rs(?,?)',
            values:[id,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },


    toSelectMasterExpense: function(claimarray,retailer,callback) {
        var query = {
            sql: 'call usp_selectExpenseMasterByCode(?,?)',
            values:[claimarray,retailer]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       insertHotelExpense: function(hotelexpensetypeid,hoteltrip,fromDate,toDate,hotelName,hotelReason,hotelifOther,hotelperDayRate,hotelTotalDay,hotelCurrency,htex,userid,userid1,retailerId,fornightDate,callback) {
        var query = {
            sql: 'call usp_insertHotelExpense_rsandinr(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values:[hotelexpensetypeid,hoteltrip,fromDate,toDate,hotelName,hotelReason,hotelifOther,hotelperDayRate,hotelTotalDay,hotelCurrency,htex,userid,userid1,retailerId,fornightDate]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       updateHotelExpense: function( hotelexpensetypeid,hoteltrip,fromDate,toDate,hotelName,hotelReason,hotelifOther,hotelperDayRate,hotelTotalDay,hotelCurrency,htex,userid,userid1,exthotel,extclaimhotel,callback) {
        var query = {
            sql: 'call usp_updatetHotelExpense_rsandinr(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values:[hotelexpensetypeid,hoteltrip,fromDate,toDate,hotelName,hotelReason,hotelifOther,hotelperDayRate,hotelTotalDay,hotelCurrency,htex,userid,userid1,exthotel,extclaimhotel]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       insertTravelExpense: function( travelexpensetypeid,traveltrip,travelFromDate,travelToDate,travelType,travelReason,travelIfNot,travelRatePerDay,travelTotalDay,travelCurrency,travelex,userid,userid1,retailerId,fornightDate,callback) {
        var query = {
            sql:'call usp_insertExpenseforTravel_rsandinr(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,traveltrip,travelFromDate,travelToDate,travelType,travelReason,travelIfNot,travelRatePerDay,travelTotalDay,travelCurrency,travelex,userid,userid1,retailerId,fornightDate]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       updateTravelExpense: function(travelexpensetypeid,traveltrip,travelFromDate,travelToDate,travelType,travelReason,travelIfNot,travelRatePerDay,travelTotalDay,travelCurrency,travelex,userid,userid1,exthotel,extclaimhotel,callback) {
        var query = {
            sql: 'call usp_updateExpenseforTravel_rsandinr(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,traveltrip,travelFromDate,travelToDate,travelType,travelReason,travelIfNot,travelRatePerDay,travelTotalDay,travelCurrency,travelex,userid,userid1,exthotel,extclaimhotel]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       insertFoodExpense: function( travelexpensetypeid,foodtrip,foodFromDate,foodToDate,foodReason,foodCurrency,foodtex,userid,userid1,retailerId,fornightDate,callback) {
        var query = {
            sql: 'call usp_insertExpenseforFood_rsandinr(?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,foodtrip,foodFromDate,foodToDate,foodReason,foodCurrency,foodtex,userid,userid1,retailerId,fornightDate]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       updateFoodExpense: function(travelexpensetypeid,foodtrip,foodFromDate,foodToDate,foodReason,foodCurrency,foodtex,userid,userid1,exthotel,extclaimhotel,callback) {
        var query = {
            sql: 'call usp_updateExpenseforFood_rsandinr(?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,foodtrip,foodFromDate,foodToDate,foodReason,foodCurrency,foodtex,userid,userid1,exthotel,extclaimhotel]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       insertPhoneExpense: function(travelexpensetypeid,phonetrip,phoneFromDate,phoneToDate,phoneReason,phoneCurrency,phoneExp,userid,userid1,retailerId,fornightDate,callback) {
        var query = {
            sql: 'call usp_insertExpenseforPhone_rsandinr(?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,phonetrip,phoneFromDate,phoneToDate,phoneReason,phoneCurrency,phoneExp,userid,userid1,retailerId,fornightDate]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       updatePhoneExpense: function( travelexpensetypeid,phonetrip,phoneFromDate,phoneToDate,phoneReason,phoneCurrency,phoneExp,userid,userid1,exthotel,extclaimhotel,callback) {
        var query = {
            sql: 'call usp_updateExpenseforPhone_rsandinr(?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,phonetrip,phoneFromDate,phoneToDate,phoneReason,phoneCurrency,phoneExp,userid,userid1,exthotel,extclaimhotel]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       insertRsdExpense: function( travelexpensetypeid,rsdtrip,rsdFromDate,rsdToDate,rsdvehicle,rsdReason,rsdifnot,rsdKmRate,rsdtotal,rsdCurrency,rsdtex,userid,userid1,retailerId,fornightDate,desig,callback) {
        var query = {
            sql: 'call usp_insertExpenseforRSD_rsandinr(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,rsdtrip,rsdFromDate,rsdToDate,rsdvehicle,rsdReason,rsdifnot,rsdKmRate,rsdtotal,rsdCurrency,rsdtex,userid,userid1,retailerId,fornightDate,desig]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       updateRsdExpense: function( travelexpensetypeid,rsdtrip,rsdFromDate,rsdToDate,rsdvehicle,rsdReason,rsdifnot,rsdKmRate,rsdtotal,rsdCurrency,rsdtex,userid,userid1,exthotel,extclaimhotel,desig,callback) {
        var query = {
            sql: 'call usp_updateExpenseforRSD_rsandinr(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,
            rsdtrip,rsdFromDate,rsdToDate,rsdvehicle,rsdReason,
            rsdifnot,rsdKmRate,rsdtotal,rsdCurrency,rsdtex,userid,
            userid1,exthotel,extclaimhotel,desig]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       insertPerdiemExpense: function( travelexpensetypeid,perdiemtrip,perdiemFromDate,perdiemToDate,perdiemHotelName,perdiemReason,perdiemIfNot,perdiemRate,perdiemtotal,perdiemCurrency,perdiemtex,userid,userid1,retailerId,fornightDate,callback) {
        var query = {
            sql: 'call usp_insertExpenseforPerDiem_rsandinr(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,perdiemtrip,perdiemFromDate,perdiemToDate,perdiemHotelName,perdiemReason,perdiemIfNot,perdiemRate,perdiemtotal,perdiemCurrency,perdiemtex,userid,userid1,retailerId,fornightDate]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       updatePerdiemExpense: function(travelexpensetypeid,perdiemtrip,perdiemFromDate,perdiemToDate,perdiemHotelName,perdiemReason,perdiemIfNot,perdiemRate,perdiemtotal,perdiemCurrency,perdiemtex,userid,userid1,exthotel,extclaimhotel,callback) {
        var query = {
            sql: 'call usp_updateExpenseforPerDiem_rsandinr(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,perdiemtrip,perdiemFromDate,perdiemToDate,perdiemHotelName,perdiemReason,perdiemIfNot,perdiemRate,perdiemtotal,perdiemCurrency,perdiemtex,userid,userid1,exthotel,extclaimhotel]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       insertOtherExpense: function( travelexpensetypeid,othertrip,otherFromDate,otherToDate,otherReason,otherCurrency,othertex,userid,userid1,retailerId,fornightDate,callback) {
        var query = {
            sql: 'call usp_insertExpenseforOther_rsandinr(?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,othertrip,otherFromDate,otherToDate,otherReason,otherCurrency,othertex,userid,userid1,retailerId,fornightDate]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       updateOtherExpense: function(travelexpensetypeid,othertrip,otherFromDate,otherToDate,otherReason,otherCurrency,othertex,userid,userid1,exthotel,extclaimhotel,callback) {
        var query = {
            sql: 'call usp_updateExpenseforOther_rsandinr(?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,othertrip,otherFromDate,otherToDate,otherReason,otherCurrency,othertex,userid,userid1,exthotel,extclaimhotel]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

 toRemarkAndCommentExpense: function(id,callback) {
        var query = {
            sql: 'call usp_ex_showremark(?)',
            values:[id]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    
     toCheckWbsDate: function(wbsid,startDate,endDate,callback) {
        var query = {
            sql: 'call usp_Ex_tocheckWbsDate(?,?,?)',
            values:[wbsid,startDate,endDate]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },


     toCheckExpenseSubmitOrNot: function(userid,retailerid,callback) {
        var query = {
            sql: 'call Ex_toCheckExpenseRaseOrNot(?,?)',
            values:[userid,retailerid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    tocheckFinancemanager: function(retailerid,callback) {
        var query = {
            sql: 'call Ex_tocheckFinancemanager(?)',
            values:[retailerid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

     toReSubmitExpenseforCopy: function(cid,callback) {
        var query = {
            sql: 'call Ex_toCopyTheExpense(?)',
            values: [cid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
<<<<<<< HEAD
    /*end expense jogendra singh*/
    //-------------------------------------------------------------------------------
=======
    
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
       setaddStatuss: function(userId,roleId,retailerId,  callback) {
  
        var query = {
            sql: 'call usp_masterGetStatus( ?)',
            values: [ retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
    settingdata : function(userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_mastersettingdata()'
       
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
    getothermaster : function(userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_getothermaster()'
       
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
    selectStatus : function(userId,roleId,retailerId, temp,callback) {
        var query = {
            sql: 'call usp_selectmasters(?)',
            values: [temp]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
    updateStatus : function( code,desc,userid,active,id,retailerId,crate,callback) {
<<<<<<< HEAD
 //////console.log("cccccccccccccc");
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        var query = {
            sql: 'call usp_updtMaster(?,?,?,?,?,?,?)',
            values: [code,desc,userid,active,id,retailerId,crate]
        };
<<<<<<< HEAD
        //console.log(query)
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
 addStatus : function(code,des,type,crate,userId,retailerId,callback) {
        var query = {
            sql: 'call usp_insMaster(?,?,?,?,?,?,?)',
            values: [code,des,type,crate,userId,userId,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },


 getAllVerticalValuesCustomRoles: function(userId,roleId,retailerId, callback) {
<<<<<<< HEAD
        ////console.log('user id--',userId,'--role id-- ',roleId,'--retailer id-- ',retailerId);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        var query = {
            sql: 'call usp_getAllCustomRoleVerticalValues(?,?,?)',
            values: [userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
},
      getRolesInfo: function(userId,roleId,retailerId,croleId, callback) {
        var query = {
            sql:'call usp_doc_getUserCRoles(?,?,?,?)',
            values: [userId,roleId,retailerId,croleId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
},

<<<<<<< HEAD
=======


/* project tree*/
  projectfortree : function (retailerId,flag,callback){       
     var q ={
          sql: 'call usp_projecttreeview(?,?)',
        values: [retailerId,flag]
       
        };
       // console.log(q,"query");
        mysql(q, function(err, result) {
            if (err) {
              //  console.log("error**",err);
            }
            else {
            callback(err,result);
            }
        });         
    }, 

     showassignment : function (retailerId,callback){       
     var q ={
          sql: 'call usp_assignmentbywbs(?)',
        values: [retailerId]
       
        };
        mysql(q, function(err, result) {
            if (err) {
               console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    }, 


 showclients : function (flag,retailerId,callback){       
     var q ={
          sql: 'call usp_clientByretailer(?,?)',
        values: [flag,retailerId]
       
        };
      
        mysql(q, function(err, result) {
            if (err) {
               console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },


 activeinactive : function (retailerId,actval,flag,callback){       
     var q ={
          sql: 'call usp_Inactiveproject(?,?,?)',
        values: [retailerId,actval,flag]
       
        };
     //   console.log(q);
        mysql(q, function(err, result) {
            if (err) {
              // console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    }, 


 showprojects : function (flag,retailerId,callback){       
     var q ={
          sql: 'call usp_projectbyclient(?,?)',
        values: [flag,retailerId]
       
        };
        ////console.log(q);assignmentedit
        mysql(q, function(err, result) {
            if (err) {
              // console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    }, 


 assignmentedit : function (retailerId,callback){       
     var q ={
          sql: 'call usp_editAssignment(?)',
        values: [retailerId]
       
        };
       // console.log("assignmentedit....",q);
        ////console.log(q);assignmentedit
        mysql(q, function(err, result) {
            if (err) {
               console.log(err);
            }
            else {
           //     console.log('assignmentres....',result);
            callback(err,result);
            }
        });         
    }, 

 showwbs : function (retailerId,callback){       
     var q ={
          sql: 'call usp_wbsByproject(?)',
        values: [retailerId]
       
        };
        ////console.log(q);showwbsProjectby
        mysql(q, function(err, result) {
            if (err) {
               console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    }, 

     updateProjectDate : function (retailerId,date,callback){       
     var q ={
          sql: 'call usp_projectplanedLastDate(?,?)',
        values: [retailerId,date]
       
        };
        ////console.log(q);showwbsProjectby
        mysql(q, function(err, result) {
            if (err) {
               console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },

        updatewbsDate : function (retailerId,date,callback){       
     var q ={
          sql: 'call usp_wbsdate(?,?)',
        values: [retailerId,date]
       
        };
        ////console.log(q);showwbsProjectby
        mysql(q, function(err, result) {
            if (err) {
               console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },

         updatewbsandproject : function (retailerId,date,callback){       
     var q ={
          sql: 'call usp_projectwbsplanedLastDate(?,?)',
        values: [retailerId,date]
       
        };
        ////console.log(q);showwbsProjectby
        mysql(q, function(err, result) {
            if (err) {
               console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },

     showwbsProjectby : function (retailerId,callback){       
     var q ={
          sql: 'call usp_wbsdetailsbyproject(?)',
        values: [retailerId]
       
        };
        ////console.log(q);showwbsProjectby
        mysql(q, function(err, result) {
            if (err) {
               console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },

     editwbsdetail : function (retailerId,callback){       
     var q ={
          sql: 'call usp_editwbsdetails(?)',
        values: [retailerId]
       
        };
        ////console.log(q);
        mysql(q, function(err, result) {
            if (err) {
               console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    }, 

      changeAssignmentDate : function (aasid,flag,assdate,callback){       
     var q ={
          sql: 'call usp_changeAssignmentdate(?,?,?)',
        values: [aasid,flag,assdate]
       
        };
        ////console.log(q);
        mysql(q, function(err, result) {
            if (err) {
               console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    }, 



     clientsedit : function (retailerId,callback){       
     var q ={
          sql: 'call usp_clientsedit(?)',
        values: [retailerId]
       
        };
      //console.log(q,'noteeretailerid....');
        mysql(q, function(err, result) {
            if (err) {
               console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },


 getprojectresource : function (retailerId,wbsid,callback){       
     var q ={
          sql: 'call usp_projectresource(?,?)',
        values: [retailerId,wbsid]
       
        };
        ////console.log(q);
        mysql(q, function(err, result) {
            if (err) {
               console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
/*--------------------------------------------------------------holiday part----------------------------------------------------------*/ 

     holidayhome: function(userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_te_holidaydetails_rs(?,?,?)',
            values: [userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {
<<<<<<< HEAD
            //console.log("holidayhome is--",result);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
        });

},

selectHolidaybyId: function(userId,roleId,retailerId,hid, callback) {
        var query = {
            sql: 'call usp_te_holidaydetailsById(?,?,?,?)',
            values: [userId,roleId,retailerId,hid]
        };
        mysql(query, function(err, result) {
<<<<<<< HEAD
            //console.log("selectHolidaybyId----",result);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
        });

},

updateHoliday: function(userId,roleId,retailerId,hid,h_name,h_date, callback) {
        var query = {
            sql: 'call usp_te_updateholidayById(?,?,?,?,?,?)',
            values: [userId,roleId,retailerId,hid,h_name,h_date]
        };
        mysql(query, function(err, result) {
<<<<<<< HEAD
            //console.log("this is imp :  ",query,result);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
        });

  },

<<<<<<< HEAD


  //------------------------------------------------------------------------------------------
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
  changeClientStatus: function(cid,flag,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_changeClientStatus(?,?,?,?,?)',
            values: [cid,flag,userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
getAllClientStatus: function(clientId, roleId, retailerId,status, callback) {
        if(clientId=='undefined'){
            clientId='0';
        }
        var query = {
            sql: 'call usp_getAllClientsByFlag(?,?,?)',
            values: [roleId,retailerId,status]
        };
        mysql(query, function(err,result) {
            if(err){
            }
            else{
            callback(err,result);
            }
        });
    },

    getAllRoles: function(userId, roleId, retailerId, callback) {
        var query = {
            sql: 'call usp_getAllRoles(?,?,?)',
            values: [userId, roleId, retailerId]
        };
<<<<<<< HEAD
=======
        
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
             getAllCustomRoles: function(userId,roleId,retailerId,userid,check,callback) {
        var query = {
            sql: 'call usp_doc_getCustomRoles(?,?,?,?,?)',
            values: [userId,roleId,retailerId,userid,check]
        };
<<<<<<< HEAD
=======
        
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },


addUser: function(time,isClient,clientId,isbill,expense,inNum,hdnid, firstName, lastName, emailId,contactNumber, 
    billingRate,userRole, manager, defaultModule, customRole, randomPassword,ecode,designation,level,modules,doj,dob,doc,rtype,userId,
<<<<<<< HEAD
     roleId, retailerId,crole,hrRole ,hodId,assRole,callback) {
        
        
        var query = {
            sql: 'call atemp_usp_createRetailerUser(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [time,isClient,clientId,isbill,expense,inNum,hdnid, firstName, lastName, emailId, contactNumber,
             billingRate, userRole, manager, defaultModule, customRole, randomPassword,
            ecode,designation,level,modules,doj,dob,doc,rtype,
             userId, roleId, retailerId,crole,hrRole,hodId,assRole]
        };
       console.log(query);
        mysql(query, function(err, result) { 
            console.log(err)
=======
     roleId, retailerId,crole,hrRole ,hodId,assRole,desDate,callback) {
        
        
        var query = {
            sql: 'call atemp_usp_createRetailerUser(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [time,isClient,clientId,isbill,expense,inNum,hdnid, firstName, lastName, emailId, contactNumber,
             billingRate, userRole, manager, defaultModule, customRole, randomPassword,
            ecode,designation,level,modules,doj,dob,doc,rtype,
             userId, roleId, retailerId,crole,hrRole,hodId,assRole,desDate]
        };
        mysql(query, function(err, result) { 
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
        });
    },

    getUserDetails: function(userId, roleId,retailerid, callback) {
        var query = {
            sql: 'call usp_getUserDetails(?,?,?)',
            values: [userId, roleId,retailerid]
        };
        mysql(query, function(err, result) {
            callback(err, result); 
        });
    },
 
<<<<<<< HEAD
////super admin code
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd

      userStatusbyretailer: function(retailerid ,callback) {
        var query = {
            sql: 'call usp_userStatusByRetailer(?)',
            values: [retailerid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
<<<<<<< HEAD
            console.log("error on admin page",result); 
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        });
    },

       blockretailer: function(retailerid , status,callback) {
        var query = {
            sql: 'call usp_blockretailer(?,?)',
            values: [retailerid,status]
        };
        mysql(query, function(err, result) {
            callback(err, result);
<<<<<<< HEAD
           console.log("error on admin page",query);  
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        });
    },

      getallretailersDetails: function(callback) {
        var query = {
            sql: 'call usp_getAllRetailerfordesboard()',
            values: []
        };
        mysql(query, function(err, result) {
            callback(err, result);
<<<<<<< HEAD
            console.log("error on admin page",result); 
        });
    },

 ///super admin code   
=======
        });
    },


>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd

    getModules : function(userId, roleId,retailerid, callback) {
        var query = {
            sql: 'call usp_getModules(?,?,?)',
            values: [userId, roleId,retailerid]
        };
<<<<<<< HEAD
        console.log("query is    ",query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
    getAllDepartment: function(userId, roleId, retailerId, callback) {
        var query = {
            sql: 'call usp_getAllDepartmentById(?,?,?)',
            values: [userId, roleId, retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

         getAllLevel: function(userId, roleId, retailerId, callback) {
        var query = {
            sql: 'call usp_getAllLevelById(?,?,?)',
            values: [userId, roleId, retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    getAllUsers: function(userId, roleId, retailerId, callback) {
        var query = {
            sql: 'call usp_getAllUsersById(?,?,?)',
            values: [userId, roleId, retailerId]
        };
<<<<<<< HEAD

        console.log(query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            
            callback(err, result);
        });
    },
    checkNextUser: function(flag1,userId, roleId, retailerId, callback) {
        var query = {
            sql: 'call usp_checkNextUser(?,?,?,?)',
            values: [flag1,userId, roleId, retailerId]
        };
<<<<<<< HEAD
        console.log("next USER***************************************",query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    calSetting: function(userId,roleId,retailerId,schedule,sDate,timespan,whours,callback){
    var query={
            sql: 'call usp_timesheet_schedule(?,?,?,?,?,?,?)',
            values:[userId,roleId,retailerId,schedule,sDate,timespan,whours]
    };
<<<<<<< HEAD
    //console.log("query g : ",query);
=======

>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    mysql(query,function(err,result){
        callback(err,result);
    });
  },

  checkShedule: function(userId,roleId,retailerId,callback){
    var query={
            sql: 'call usp_timesheet_checkSchedule(?,?,?)',
            values:[userId,roleId,retailerId]
    };
    mysql(query,function(err,result){
        callback(err,result);
    });
  },
   //--------------------------------TimeSheet-------------------------
      

      uploadattendance: function(userId,roleId,retailerId,result0,result1,callback){

        var finalresult=result0.concat(result1);
         var query={
          sql:'INSERT INTO t_stg_Attendance(empcode,logintime,attr1,attrr2,attr3,attr4)  VALUES ?;',
          values:[finalresult]
        };
        mysql(query, function(err, result) {
<<<<<<< HEAD
            //callback(err, result);
=======
      
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
     var query1={
          sql:'call usp_job_uploadAttendance(?)',
          values:[userId]
        };

        mysql(query1, function(err1, result1) {
            callback(err1, result1);
        });

        });
      },
getTimeSheetData: function(userId,roleId,retailerId,callback){
        var query={
          sql:'call usp_time_getTime(?,?)',
          values:[userId,retailerId]
        };
<<<<<<< HEAD
        console.log(query)
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
      },


      submitTimesheet: function(retailerId ,userId,fillDate,date,day,totalHours,status,supervisor,approvedOrRejectedBy,approvedOrRejectedDate,rejectionReason,callback){
        var query={
          sql:'call usp_time_submitTimesheet(?,?,?,?,?,?,?,?,?,?,?)',
          values:[retailerId ,
            userId,
            fillDate,
            date,
            day,
            totalHours,
            status,
            supervisor,
            approvedOrRejectedBy,
            approvedOrRejectedDate,
            rejectionReason]
        };
<<<<<<< HEAD
        console.log(query);
        //console.log(" in submit timesheet");
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
      },

<<<<<<< HEAD
       submitTimesheetAssignment: function(alluser,allcolumn,timesheetid,callback){
        var query={
          sql:'call usp_time_submitTimesheetAssignment(?,?,?)',
          values:[alluser,allcolumn,timesheetid]
        };

        //console.log("submitting hours ",query);
=======
       submitTimesheetAssignment: function(alluser,allcolumn,timesheetid,report_data,callback){
        var query={
          sql:'call usp_time_submitTimesheetAssignment(?,?,?,?)',
          values:[alluser,allcolumn,timesheetid,report_data]
        };

>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
      },

       checkUserTimesheet: function(userId,tdate,callback){
        var query={
          sql:'call usp_time_checkUserTimesheet(?,?)',
          values:[userId,tdate]
        };

<<<<<<< HEAD
        console.log(query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
      },
       getUserUnderSupervisor: function(cdate,userId,roleId,retailerId,callback){
        var query={
          sql:'call usp_time_getUserUnderSupervisor(?,?,?,?)',
          values:[userId,roleId,retailerId,cdate]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
      },
      otherTimeSheet: function(userId,retailerId,callback){

<<<<<<< HEAD
        ////console.log('gwerfgwrfwerfwefwrfwarf',userId,'------',retailerId);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
         var query={
          sql:'call usp_time_getTime(?,?)',
          values:[userId,retailerId]
        };

<<<<<<< HEAD
        //console.log(query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
      },
      ApprovedOrReject: function(appOrRejBy,status,id,ardate,appOrRejReason,retailerId,userEmail,callback){
         var query={
          sql:'call usp_time_approvedOrReject(?,?,?,?,?)',
          values:[status,id,ardate,appOrRejBy,appOrRejReason]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
      },
      
<<<<<<< HEAD
    userStatus: function(status,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_userStatus(?,?,?,?)',
            values: [status,userId,roleId,retailerId]
=======
    userStatus: function(status,userId,roleId,retailerId,start,length,search,sortstr,callback) {
        var query = {
            sql: 'call usp_userStatus(?,?,?,?,?,?,?,?)',
            values: [status,userId,roleId,retailerId,start,length,search,sortstr]
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    changeUserStatus: function(uid,flag,userId,roleId,retailerId, callback) {
<<<<<<< HEAD
        console.log("********************manuuuuuuuuuuuuuuGGGGGGGGGG");
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        var query = {

            sql: 'call usp_changeUserStatus(?,?,?,?,?)',
            values: [uid,flag,userId,roleId,retailerId]
        };
<<<<<<< HEAD
        console.log(query);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

     
   //- ---------------------Hr management system ------------------------------------------------------- -->

getHrRole:function(userId,roleId,retailerId,callback){
        var q={
            sql:'call usp_rms_getHrRole(?,?,?)',
            values:[userId,roleId,retailerId]
        };

        mysql(q, function(err, result) {
<<<<<<< HEAD
            //console.log(q,err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err, result);
        });
    },
    dashboardData:function(data,grid,time,hrRole,userId,roleId,retailerId,callback){
       var q = {
        sql: 'call usp_rms_dataForOpenRequistion(?,?,?,?,?,?)',
        values: [data,grid,time,hrRole,userId,retailerId]
        }
<<<<<<< HEAD
        //console.log("hey query 1 ",q);
        mysql(q, function(err, result) {
            //console.log("-----------",err);
=======
        mysql(q, function(err, result) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
              callback(err, result);
        });
    },
     raiseRequisition:function(userId,roleId,retailerId,callback){
        var q = {
                sql: 'call usp_rms_requisitionData(?,?)',
                values: ['0',retailerId]
        }
<<<<<<< HEAD
        ////console.log("hey query  2",q);
        mysql(q, function(err, result) {
            ////console.log("-----------",err);
=======
        mysql(q, function(err, result) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
              callback(err, result);
            });
     } ,
     raiseRequisition1:function(uid,JobTitle,NoOfPostions,skills,MinimumSalary,
        MaximumSalary,ExpiresOn,location,Description,designation,RecruiterName,
        YearsOfExp,adminhr,flag,id,mailPriority,jobType,hrRole,retailerId,callback){

            var q = {
                  sql: 'call usp_rms_addrequisition(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                 values: [uid,JobTitle,NoOfPostions,skills,
                          MinimumSalary,MaximumSalary,
                          ExpiresOn,location,Description,
                          designation,RecruiterName,
                          YearsOfExp,adminhr,flag,id,
                          mailPriority,jobType,hrRole,retailerId] 
            }  
<<<<<<< HEAD
            console.log('aaaaaaaaaaaalooooooooooooooooo',q);
            mysql(q,function(err, result) {             
             callback(err, result);
             ////console.log('aaaaaaaaaaaalooooooooooooooooo');
=======
            mysql(q,function(err, result) {             
             callback(err, result);
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            });

     
    },
    reqHod:function (userId,roleId,retailerId,callback){
         var q = {
                sql: 'call usp_rms_allRequisitionsHod(?,?)',
                values: [userId,retailerId]
         }
<<<<<<< HEAD
         //console.log(q);
         mysql(q, function(err, result) {
            //console.log("reqhod modal portal",err);
=======
         mysql(q, function(err, result) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                        callback(err, result);
         }); 
    },

    allrequisitions : function (userId,roleId,retailerId,callback){
         var q = {
                sql: 'call usp_rms_allrequisitions(?,?)',
                values: [userId,retailerId]
}
         mysql(q, function(err, result) {
<<<<<<< HEAD
         	 console.log("all requisition Error",err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                    callback(err, result);
         });

        
    },

    reqData: function (userId,roleId,retailerId,id,callback){
         var q = {
                sql: 'call usp_rms_requisitionData(?,?)',
                values: [id,retailerId]
}
         mysql(q, function(err, result) {
                    callback(err, result);
         });

        
    },
    deleteReq: function (userId,roleId,retailerId,id,callback){
         var q = {
               sql: 'call usp_rms_deleteReq(?)',
                values: [id]
}
         mysql(q, function(err, result) {
                    callback(err, result);
         });

        
    },

    viewCandidate: function (userId,roleId,retailerId,callback){
          var q = {
        sql: "call usp_rms_viewCandidate(?)",
        values: [retailerId]
    }
    mysql(q, function(err, result) {
        if (err) {
<<<<<<< HEAD
            ////console.log(err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        } else {
            callback(err,result);
            }
    });
    } ,
    viewCandidate1: function (userId,roleId,retailerId,callback){
        var q = {
            sql: "call usp_rms_viewCandidate(?)",
            values:[retailerId]
        }
    mysql(q, function(err, result) {
        if (err) {
<<<<<<< HEAD
            ////console.log(err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        } else {
            callback(err,result);
        }
    });         

    },
    getCandidate: function (userId,roleId,retailerId,id,callback){
       var q ={
        sql: "call usp_rms_getCandidate(?,?)",
        values: [id,retailerId]
        }
        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                ////console.log(err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         

    },
    editCandidate: function (userId,roleId,retailerId,hcid,name,phone,email,locationId,skills,clocation,months,years,qualification,institute,callback){
       var q = {
           sql: "call usp_rms_editCandidate(?,?,?,?,?,?,?,?,?,?,?)",
            values: [hcid, name, phone,email,locationId,skills,clocation, months, years,qualification,institute ]
        }
        mysql(q, function(err, result) {
<<<<<<< HEAD
             //console.log("---In Modal Portal of VIew Candidate----w1111111111",result);
            if (err) {
                ////console.log(err);
=======
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            } else {
                callback(err,result);
            }
        });         

    },
    getAllTag : function (id,retailerId,callback){
       var q = {
            sql: "call usp_rms_getAllTag(?,?)",
            values: [id,retailerId]
        } 
<<<<<<< HEAD
         console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                 console.log(err);
=======
        mysql(q, function(err, result) {
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            } else {  
                callback(err,result);
            }
        });         

    },
    upload :function (callback){
       var q = {
            sql: "call usp_rms_getResumeSource()",
        }
        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                ////console.log(err);
            } else {
                ////console.log("query---  ",q);
=======
            } else {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                callback(err,result);
            }
        });         

    },
    parserTable:function(count,countfiles,retid,callback){
    var q = {
  sql: 'call usp_rms_parseTableData(?,?,?)',
        values: [count,countfiles,retid]        
    }
    mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                ////console.log(q, err);
                //console.log(q,err);
            } else {
                //console.log(q);
=======
            } else {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err,result);
            }
        });
    },

 
  toSubmitParseData:function(callback){
    var q = {
        sql: 'call usp_rms_submitParsedData()',
        values: []
        
    }
    mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                ////console.log(q, err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            } else {
            callback(err,result);
            }
        });
    },
 

    upload_resume:function (userId,roleId,retailerId,callback){
       var q ={
        sql: 'call usp_rms_truncateTempTable(?,?,?)',
            values: [userId,roleId,retailerId]
        }
        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                ////console.log("-----------saurav upload_rsume------",err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         

    },

<<<<<<< HEAD
    //**add by Jogendra singh****//
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd

     toAddTag:function (tId,selectedtag,uId,callback){
       var q ={
        sql: "call usp_rms_addTag(?,?,?)",
            values: [tId,selectedtag,uId]
        }
<<<<<<< HEAD
        //console.log(q);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        mysql(q, function(err, result) {
            if (err) {
               
            }
            else {
            callback(err,result);
            }
        });         

    },

     scheduleInterview:function (cdtidint,schtaggedJd,intdatetime,schstate,schstatus,interviewer,intremark,mode,uid,rid,callback){
<<<<<<< HEAD
        ////console.log('dsdshv hrm hrm hrm');
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
       var q ={
        sql: "call usp_rms_scheduleInterview(?,?,?,?,?,?,?,?,?,?)",
        values:[cdtidint,schtaggedJd,intdatetime,schstate,schstatus,interviewer,intremark,mode,uid,rid]
        }
<<<<<<< HEAD
        //console.log(q);
        mysql(q, function(err, result) {

            if (err) {
             ////console.log('djdgjfdhf jhdgfj jhfdhfj jfgdhfj',err);   
            }
            else {
                ////console.log('djdgjfdhf jhdgfj jhfdhfj jfgdhfj');
=======
        mysql(q, function(err, result) {

            if (err) {
            }
            else {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err,result);
            }
        });         

    },
     
    upload_resumeaddcandidate : function(userId,roleId,retailerId,name,email,phone,skillarrId,permanentAddress,Qualification,currentlocation,years,                months,instititutes,targetPath,callback){
       var q ={
               sql: 'call usp_rms_addCandidate(?,?,?,?,?,?,?,?,?,?,?,?)',
                    values: [name,email,phone,skillarrId,permanentAddress,Qualification,currentlocation,years,months,
                        instititutes,targetPath,retailerId]
        }
<<<<<<< HEAD
        ////console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                ////console.log("-----------saurav upload_rsume------",err);
=======
        mysql(q, function(err, result) {
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         

    },
    deleteUploadRecords :function (userId,roleId,retailerId,id,callback){
       var q ={
        sql: 'call usp_rms_deleteRecordes(?)',
        values: [id]
        }
        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                ////console.log(err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         

    },
    viewReq : function (userId,roleId,retailerId,callback){
       var q ={
        sql: "call usp_rms_viewreq(?,?)",
        values: [userId,retailerId]
        }
        mysql(q, function(err, result) {
            if (err) {
 
            }
            else {
            callback(err,result);
            }
        });         

    },
       userHrViewReq : function (userId,roleId,retailerId,callback){
       var q ={
        sql: "call usp_rms_userHrViewReq(?,?)",
        values: [userId,retailerId]
        }
<<<<<<< HEAD
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                 //console.log(err);
=======
        mysql(q, function(err, result) {
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
 
            }
            else {
            callback(err,result);
            }
        });         

    },
     searchHr : function (userId,roleId,retailerId,str,callback){
       var q ={
        sql: "call usp_rms_bsearch(?,?)",
        values: [str,retailerId]
        }
<<<<<<< HEAD
         //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                ////console.log(err);
            }
            else {
                ////console.log("adv search",result);
=======
        mysql(q, function(err, result) {
            if (err) {
            }
            else {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err,result);
            }
        });         

    },
     advancesearchHr : function (userId,roleId,retailerId,name1,jdtitle,email1,location1,callback){
       var q ={
         sql: "call usp_rms_AdvancedSearch(?,?,?,?,?)",
        values: [name1,jdtitle,email1,location1,retailerId]
        }
<<<<<<< HEAD
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
=======
        mysql(q, function(err, result) {
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         

    },
     interviewerInfo : function (userId,roleId,retailerId,callback){
       var q ={
         sql: "call usp_rms_interviewerInfo(?,?)",
        values: [userId,retailerId]
        };
<<<<<<< HEAD
        ////console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                ////console.log(err);
=======
        mysql(q, function(err, result) {
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         

    },
    updateStatusReq : function (userId,roleId,retailerId,flag,jdid,approve,callback){
       var q ={
         sql: "call usp_rms_updateStatusReq(?,?,?,?)",
        values: [ flag,jdid,approve,userId]
        };
<<<<<<< HEAD
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
=======
        mysql(q, function(err, result) {
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },
    getReleventTag : function (userId,roleId,retailerId,id,callback){
       var q ={
          sql: "call usp_rms_getReleventTag(?,?)",
        values: [id,userId]
        };
<<<<<<< HEAD
        ////console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                ////console.log(err);
=======
        mysql(q, function(err, result) {
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },
     removeTag : function (userId,roleId,retailerId,tagid,cid,callback){
       var q ={
          sql: "call usp_rms_removeTag(?,?)",
        values: [tagid,cid]
        };
<<<<<<< HEAD
        ////console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                ////console.log(err);
=======
        mysql(q, function(err, result) {
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },
    getreleventState : function (userId,roleId,retailerId,jdid,cid,callback){
       var q ={
          sql: "call usp_rms_getreleventState(?,?)",
        values: [jdid,cid]
        };
<<<<<<< HEAD
        //console.log(q);
        mysql(q, function(err, result) {
            //console.log("get relevent state :",result);
            if (err) {
                ////console.log(err);
=======
        mysql(q, function(err, result) {
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },
    addQuickTag : function (userId,roleId,retailerId,jdid,cid,callback){
       var q ={
          sql: "call usp_rms_addQuickTag(?,?,?)",
        values: [jdid, cid,userId]
        };
<<<<<<< HEAD
         //console.log(q);
        mysql(q, function(err, result) {
            if (err) { 
                 console.log(err); 
=======
        mysql(q, function(err, result) {
            if (err) { 
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },

        quickdeletecandidate : function (userId,roleId,retailerId,cid,callback){
<<<<<<< HEAD
            console.log('sdddddddddddddddddddddddddddddddddddddd')
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
       var q ={
          sql: "call usp_rms_quickdeletecandidate(?,?,?)",
        values: [cid,userId,retailerId]
        };
<<<<<<< HEAD
         console.log(q);
        mysql(q, function(err, result) {
            if (err) { 
                 console.log(err); 
=======
        mysql(q, function(err, result) {
            if (err) { 
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },


     getallmanager : function (userId,roleId,retailerId,callback){
       var q ={
        sql: "call usp_rms_getAllManager(?)",
        values: [retailerId]
        }; 
        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
               console.log(err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },

getscheduleInfo : function (userId,roleId,retailerId,cid,callback){
       var q ={
        sql: "call usp_rms_scheduleIntInfo(?,?,?)",
        values: [cid,retailerId,userId]
       
        }; 
        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                console.log(err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },
    deletehistory : function (userId,retailerId,id,callback){
       var q ={
        sql: "call usp_rms_deletehistory(?)",
        values: [id]
       
        };
<<<<<<< HEAD
        ////console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                console.log(err);
=======
        mysql(q, function(err, result) {
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },

    selectAdminHr : function (userId,roleId,retailerId,selected,callback){
       var q ={
          sql: "call usp_rms_selectAdHr(?,?)",
        values: [selected,retailerId]
       
        };
<<<<<<< HEAD
        ////console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                console.log(err);
=======
        mysql(q, function(err, result) {
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },
 saveHrm: function (selected,reqId,callback){
       var q ={
        sql:"call usp_rms_savehrm(?,?)",
        values:[selected,reqId]
       
        };
 
        mysql(q, function(err, result) {
 
            if (err) {
<<<<<<< HEAD
               console.log(err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },
    updateCandidate : function (userId,roleId,retailerId,id,name,email,phone,years,months,location,address,skills,qualification,ins,callback){
       var q ={
         sql: "call usp_rms_updateCandidateinfo(?,?,?,?,?,?,?,?,?,?,?)",
        values: [id,name,email,phone,years,months,location,address,skills,qualification,ins]
       
        };
<<<<<<< HEAD
        //console.log(q);
        mysql(q, function(err, result) { 
            if (err) {
                console.log(err);
=======
        mysql(q, function(err, result) { 
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },

    interviewData : function (userId,roleId,retailerId,id,rating,status,time,remarks,stateId,cdtid,modeid,rounds,filename,jdid,callback){
       var q ={
         sql: "call usp_rms_interviewedData(?,?,?,?,?,?,?,?,?,?,?,?,?)",
        values: [id,rating,status,time,remarks,userId,stateId,
            cdtid,modeid,rounds,filename,jdid,retailerId]
       
        };
 
        mysql(q, function(err, result) {
  
            if (err) {
<<<<<<< HEAD
                console.log(err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    }, 
    interviewFeedback : function (userId,roleId,retailerId,id,cid,callback){
       var q ={
         sql: "call usp_rms_interviewerFeedbackInfo(?,?,?)",
        values: [id,cid,userId]
       
        }; 
        mysql(q, function(err, result) {
 
            if (err) {
<<<<<<< HEAD
                ////console.log(err);
            }
            else {
                console.log(result);
=======
            }
            else {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err,result);
            }
        });         
    },
     reqApprover : function (userId,roleId,retailerId,callback){
       var q ={
          sql: 'call usp_rms_allRequisitionsApprover(?)',
        values: [retailerId]
       
        }; 
        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                ////console.log(err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },
<<<<<<< HEAD
    //--------------------------------------End----------------
=======


    getClientContact : function (clientId,callback){
       var q ={
          sql: "call usp_clientconPerson(?)",
        values: [clientId]
       
        }; 
        mysql(q, function(err, result) {
            if (err) {
            }
            else {
            callback(err,result);
            }
        });         
    },


>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    getClientContacts : function (userId,roleId,retailerId,clientId,callback){
       var q ={
          sql: "call usp_getClientContacts(?,?)",
        values: [clientId,retailerId]
       
        }; 
        mysql(q, function(err, result) {
<<<<<<< HEAD
            console.log(result)
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            if (err) {
                ////console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },


    addeditClientContacts : function (userId,roleId,retailerId,body,callback){
       var q ={
          sql: "call usp_addeditClientContacts(?,?,?,?,?,?,?)",
        values: [body.cname,body.cemail,body.ccontact,body.clientId,body.id,retailerId,body.password]
       
        }; 
<<<<<<< HEAD
        mysql(q, function(err, result) {
            console.log(result)
            if (err) {
                ////console.log(err);
            }
            else {
=======

        mysql(q, function(err, result) {
           // console.log("sha....",q);
           
            if (err) {
                
                ////console.log(err);
            }
            else {
              //  console.log("sol....",result);
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err,result);
            }
        });         
    },
    updateClientPassword : function (userId,roleId,retailerId,body,callback){
       var q ={
          sql: "call usp_sendMailClient(?,?)",
        values: [body.id,body.password]
       
        };
<<<<<<< HEAD
        //console.log(q);
        mysql(q, function(err, result) {
            console.log(result)
            if (err) {
                ////console.log(err);
            }
            else { 
=======
      //  console.log('sendemail....',q);
        mysql(q, function(err, result) {
            if (err) {
            }
            else { 
          //      console.log("myresult",result);
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err,result);
            }
        });         
    },

    blockUser : function (body,callback){
       var q ={
          sql: "call usp_blockClientContact(?)",
        values: [body.id]
       
        }; 
        mysql(q, function(err, result) {
<<<<<<< HEAD
            console.log(result)
            if (err) {
                ////console.log(err);
=======
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },


    
    Docmaster : function (userId,roleId,retailerId,type,oldname,name,flag,crole_id,callback){
       var q ={
          sql: 'call usp_docmaster(?,?,?,?,?,?,?,?)',
          values: [userId,roleId,retailerId,type,oldname,name,flag,crole_id]
       
        };
        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                //console.log(err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });   
        },
<<<<<<< HEAD
        // adeed by saurav singh for asset master
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
        addeditComponent:function (info,callback){

            var q ={
              sql: 'call usp_asset_addeditComponent(?,?,?,?,?,?,?,?)',
              values: [info[0],info[1],info[2],info[3],info[4],info[5],info[6],info[7]]
           
            };
            
            mysql(q, function(err, result){
                if (err) {
<<<<<<< HEAD
                    //console.log("oop",err);
                }
                else {
                    //console.log("result is ",result);
=======
                }
                else {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                callback(err,result);
                }
            });   
        },
        addeditattribute:function (info,callback){
            var q ={
              sql: 'call usp_asset_addeditattribute(?,?,?,?,?,?)',
              values: [info[0],info[1],info[2],info[3],info[4],info[5]]
           
            };
            mysql(q, function(err, result){
                if (err) {
<<<<<<< HEAD
                    //console.log("oop",err);
                }
                else {
                    //console.log("result is ",result);
=======
                }
                else {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                callback(err,result);
                }
            });   
        },
       addeditvalue:function (info,callback){
            var q ={
              sql: 'call usp_asset_addeditvalue(?,?,?,?,?,?)',
              values: [info[0],info[1],info[2],info[3],info[4],info[5]]
           
            };
<<<<<<< HEAD
            //console.log(q);
            mysql(q, function(err, result){
                if (err) {
                    //console.log("oop",err);
                }
                else {
                    //console.log("result is ",result);
=======
            mysql(q, function(err, result){
                if (err) {
                }
                else {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                callback(err,result);
                }
            });   
        },
        addattrvaluemapping:function (info,callback){
            var q ={
              
              sql: 'call usp_asset_addattrvaluemapping(?,?,?,?,?,?)',
              values: [info[0],info[1],info[2],info[3],info[4],info[5]]
           
            };
<<<<<<< HEAD
            //console.log(q);
            mysql(q, function(err, result){
                if (err) {
                    //console.log("oop",err);
                }
                else {
                    //console.log("result is ",result);
=======
            mysql(q, function(err, result){
                if (err) {
                }
                else {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                callback(err,result);
                }
            });   
        },
        addComponentAttributemapping:function (info,callback){
            var q ={
              sql: 'call usp_asset_addComponentAttributemapping(?,?,?,?,?,?)',
              values: [info[0],info[1],info[2],info[3],info[4],info[5]]
           
            };
<<<<<<< HEAD
            //console.log(q);
            mysql(q, function(err, result){
                if (err) {
                    //console.log("oop",err);
                }
                else {
                    //console.log("result is ",result);
=======
            mysql(q, function(err, result){
                if (err) {
                }
                else {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                callback(err,result);
                }
            });   
        },
        deleteComponentAttributeMapping:function (info,callback){
            var q ={
              
              sql: 'call usp_asset_deleteComponentAttributeMapping(?,?,?,?)',
              values: [info[0],info[1],info[2],info[3]]
           
            };
<<<<<<< HEAD
            //console.log(q);
            mysql(q, function(err, result){
                if (err) {
                    //console.log("oop",err);
                }
                else {
                    //console.log("result is ",result);
=======
            mysql(q, function(err, result){
                if (err) {
                }
                else {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                callback(err,result);
                }
            });   
        },
        inactiveAssetMaster:function (info,callback){
            var q ={
              
              sql: 'call usp_asset_inactiveAssetMaster(?,?,?,?,?,?)',
              values: [info[0],info[1],info[2],info[3],info[4],info[5]]
           
            };
<<<<<<< HEAD
            //console.log(q);
            mysql(q, function(err, result){
                if (err) {
                    //console.log("oop",err);
                }
                else {
                    //console.log("result is ",result);
=======
            mysql(q, function(err, result){
                if (err) {
                }
                else {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                callback(err,result);
                }
            });   
        },
        addeditBrandName:function (info,callback){
            var q ={
              
              sql: 'call usp_asset_addeditBrandName(?,?,?,?,?,?)',
              values: [info[0],info[1],info[2],info[3],info[4],info[5]]
           
            };
<<<<<<< HEAD
            //console.log(q);
            mysql(q, function(err, result){
                if (err) {
                    //console.log("oop",err);
                }
                else {
                    //console.log("result is ",result);
=======
            mysql(q, function(err, result){
                if (err) {
                }
                else {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                callback(err,result);
                }
            });   
        },
        //----------------------------------------Project Management System------------------------------
<<<<<<< HEAD
        //----------------------------------------Project Management System------------------------------
=======

>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    getAllResources : function (userId,roleId,retailerId,callback){       
     var q ={
          sql: 'call usp_proj_getAllResources(?)',
        values: [retailerId]
       
        };
<<<<<<< HEAD
        ////console.log(q);
        mysql(q, function(err, result) {
            if (err) {
               console.log(err);
=======
        mysql(q, function(err, result) {
            if (err) {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    },  
        projectByResource : function (resId,callback){
       var q ={
          sql: 'call usp_pro_projectByResource(?)',
        values: [resId]
       
        };

        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                ////console.log(err);
=======
              
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
            callback(err,result);
            }
        });         
    }
     ,task : function (flag,retailerId,versionFlag,userId,callback){

       var q ={
          sql: 'call usp_proj_getAllTree(?,?,?,?)',
        values: [flag,retailerId,versionFlag,userId]
       
        };
 
        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                ////console.log(err);
            }
            else {
                ////console.log(q,result);

=======
               
            }
            else {
             
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                callback(err,result);
            }
        });         
    }, 
    emptyProj : function (projectId,version,callback){

       var q ={
          sql: 'call usp_proj_makeEmptyTree(?,?)',
        values: [projectId,version]
       
        };
        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                //console.log(err,q);
            }
            else {
                //console.log(q,result);
          
=======
              
            }
            else {
                         
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            callback(err,result);
            }
        });         
    },


saveTask : function (proId,version,updateQ,submitFlag,remarks,userId,commentString,collaborateId,callback){
                     commentString = commentString.split('$AK$');
                     
       var q ={
          sql: 'call usp_proj_updateInsert(?,?,?,?,?,?,?,?,?)',
        values: [proId,version,updateQ,submitFlag,userId,remarks,commentString[0],commentString[1],collaborateId]
       
        };
        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                //console.log(err,q);
            }
            else {
              console.log(q,result);
=======
                
            }
            else {
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
          
               callback(err,result);
            }
        });         
    },
<<<<<<< HEAD

    /*added by saurav*/    
=======
   
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    addNewModules : function (userid,roleid,retailerid,modules,callback){

       var q ={
          sql: 'call usp_addNewModules(?,?,?,?)',
        values: [userid,roleid,retailerid,modules]
        
        };
        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                //console.log(err,q);
            }
            else {
            //console.log(q,result);
          
=======
             
            }
            else {
        
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
               callback(err,result);
            }
        });         
       

    },

     projStatus :function(retailerId,callback){
    
    var q ={
          sql: 'call usp_proj_getProjStat(?)',
        values: [retailerId]
        };
        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                //console.log(err,q);
            }
            else {
            //console.log(q,result);
          
=======
    
            }
            else {
                  
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
               callback(err,result);
            }
        });         
    },                                


    getAllTreeForProjStatus: function(proId,callback){
    
    var q ={
          sql: 'call usp_getAllTreeForProjStatus(?)',
        values: [proId]
        };
        mysql(q, function(err, result) {
            if (err) {
<<<<<<< HEAD
                //console.log(err,q);
=======
              
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {
           
           callback(err,result);
          }
        });         
    },
     insNewVer : function (proId,version,updateQ,submitFlag,remarks,userId,changedEle,callback){

       var q ={
          sql: 'call usp_proj_insertNewVersion(?,?,?,?,?,?,?)',
        values: [proId,version,updateQ,submitFlag,userId,remarks,changedEle]
           };

        mysql(q, function(err, result) {
<<<<<<< HEAD
            console.log(q);
            if (err) {
                //console.log(err,q);
=======
            if (err) {
                
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            }
            else {

              callback(err,result);
                 }
        });         
    }


}


