'use strict';
  
var mysql = require('../lib/mysql').executeQuery;
var randomString = require('../lib/common').generateRandomString;
 
 
module.exports = {
     getEmpData:function(retId,emp_id,mgr_id,callback){
        if(emp_id==undefined){
            emp_id='';
        }
        if(mgr_id==undefined){
            mgr_id='';
        }
           var query = {
            sql: 'call usp_getEmpData(?,?,?)',
            values: [retId,emp_id,mgr_id]
        };
        
        mysql(query, function(err, result) {
            callback(err, result);
            console.log(err,result);
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
        var query = {
            sql: 'call usp_checkPassword(?,?)',
            values: [emailId,flag]
        };
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




    retailerRegistration: function(companyName, emailId, password, firstName, lastName, contactNo, choosedModule, callback) {
        var query = {
            sql: 'call usp_retailerRegistration(?,?,?,?,?,?,?)',
            values: [companyName, emailId, password, firstName, lastName, contactNo, choosedModule]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
    recoverPassword: function(emailId, callback) {
        var randomPassword = randomString(10);
        var query = {
            sql: 'call usp_recoverPassword(?,?)',
            values: [emailId, randomPassword]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
    changePass:function(userid,pass,oldpass,callback){
    var query={
            sql: "call usp_changePassword(?,?,?)",
            values:[userid, pass,oldpass]
        };
        console.log("query is ",query);
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

        mysql(query, function(err, result) {


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

    //---------------------------Portal----------------------
getProfile:function(userId,roleId,retailerId,callback){
        var query ={
                sql: 'call usp_master_profile(?,?)',
                values :[ userId,retailerId]
          };
        mysql(query, function(err, result){
            callback(err, result);
        });

},
    updateProfile:function(userId,roleId,retailerId,cname,fname,lname,cno,emailid,filename,callback){
        var query ={
                sql: 'call usp_master_updateprofile(?,?,?,?,?,?,?,?,?)',
                values :[userId,roleId,retailerId,cname,fname,lname,cno,emailid,filename]
          };
        mysql(query, function(err, result){
            callback(err, result);
        });

},


exportToCsv: function(type,userId, roleId,retailerid, callback){
        var query = {
            sql: 'call usp_exportToCsv(?,?,?,?)',
            values: [type,userId, roleId,retailerid]
        };
        console.log(query)
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

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
            callback(err, result);
        });
    },
    viewBug: function(userId, roleId,retailerid, callback){
        var query = {
            sql: 'call usp_bug_viewBug(?,?,?)',
            values: [userId, roleId,retailerid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
   
    raiseBug: function(userId, roleId,retailerid, callback){
        var query = {
            sql: 'call usp_bug_raiseBug(?,?,?)',
            values: [userId, roleId,retailerid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },



addBug: function(userId,project,status,assignedTo,priority,severity,technology,type,tclosure,title,description,targetpath,filename,origFname,detectedBy,cycle,retailerid,callback){
        var query = {
            sql: 'call usp_bug_addBug(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [userId,project,status,assignedTo,priority,
        severity,technology,type,tclosure,title,description,targetpath,filename,origFname,detectedBy,cycle,retailerid]
        };
        mysql(query, function(err, result) {
            callback(err, result); 
        });
    },

    bugDetails: function(bugid,callback){
        var query = {
            sql: 'call usp_bug_bugDetails(?)',
            values: [bugid]
        };
        mysql(query, function(err, result) {
          callback(err,result);            
        });
    }, 
    updateBugDetails: function(bugid,colname,value,userId,callback){
       
        var query = {
            sql: 'call usp_bug_updatebugdetails(?,?,?,?)',
            values: [bugid,colname,value,userId]
        };
        console.log(query);

        mysql(query, function(err, result) {
            if(err){
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
     getAlltech: function(projectId, callback){
        var query = {
            sql: 'call usp_bug_getAllTechnology(?)',
            values: [projectId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
    filterBug: function(statusis,status,priorityis,priority,severityis,severity,assingedtois,assingedto,technologyis,technology,projectis,project, userId, retailerId, roleId, callback){
        var query = {
            sql: 'call usp_bug_filterBug(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [statusis,status,priorityis,priority,severityis,severity,assingedtois,assingedto,technologyis,technology,projectis,project, userId, retailerId, roleId]
        };
        //console.log('filter bug---',query);
        mysql(query, function(err, result) {
           
            callback(err, result);
        });
    },

//---------------------------------------

    //------------------------------------------------Document---------------------------------------
    /*--------------------------------------------------Added By Sudhakar-----------------------------------------------------*/
    
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

    getAllFiles: function(userId,roleId,retailerId,croleid,callback){
        var query={
            sql: 'call usp_doc_getallFilesandFolder(?,?,?,?)',
            values: [userId,roleId,retailerId,croleid]
        };
        mysql(query,function(err,result){
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
        ////console.log('rejected files  query',query)
       mysql(query,function(err,result){
           // //console.log(result)
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
           // //console.log(result)
            callback(err, result);
     });
},

tableSearchBox: function(business,doc,industry,tech,restriction,searchitem,roleId,croleId,retailerid,callback){
    var query={
        sql: 'call usp_doc_searchFiles(?,?,?,?,?,?,?,?,?)',
        values:[business,doc,industry,tech,restriction,searchitem,roleId,croleId,retailerid]
    };
    mysql(query,function(err,result){
        callback(err, result);
    });
},

filterFiledata: function(business,doctype,industry,tec,roleid,croleId,callback){
    var query={
        sql: 'call usp_doc_filterFiledata(?,?,?,?,?,?)',
        values:[business,doctype,industry,tec,roleid,croleId]
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
            //console.log(result);
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

    projectStatus: function(status,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_projectStatus(?,?,?,?)',
            values: [status,userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
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
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    getWbsDetails: function(userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_getAllWbs(?,?,?)',
            values: [userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    wbsStatus: function(status,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_wbsStatus(?,?,?,?)',
            values: [status,userId,roleId,retailerId]
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
        var query = {
            sql: 'call usp_addEditWbsDetails(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [assign,flaghide,wbsidhide,wbsname,wbscode,proname,wbsowner,wbspsdate,
        wbspedate,wbsasdate,wbsaedate,wbsstatus,wbseffort,wbseffort1,wbslocation,typeVal,userId,roleId,retailerId]
        };
        console.log(query)
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
         var q='select companyName from t_retailer where id='+retailerId;

            mysql(q, function(e,r) {
                if(e){
                    //console.log('gedsgedgregesr');
                }
                else{
                    //console.log('gesrgtrjhntujnykmiyk,uihktujktujtfyr',r);
                    abc=r[0].companyName;
                }
                });

            console.log(query);
        mysql(query, function(err, result) {
            //console.log('projectAddEdit-----------',result);
           
        /*   result[0][0]={id:1 ,
      projectTitle: 'DummyProject'};*/
console.log(result);
            if(flag==1 && result[0][0].projectTitle=='DummyProject'){

                //console.log('i am in dummy project');
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

      result[3]=[{ id: 11, clientName: abc}];
    result[2]=[ { id: 383, description1: 'None' } ];
                
            }
            
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
        mysql(query, function(err, result) {

            if(err){}//console.log('errrrrrrrrrrrrrrrrr-------',err);}
            else{
            callback(err, result);
              }
        });
    },

    projectAddEditDetailsWithFlag: function(pid,pname, pcode, ptype, pclient, ptech,presource,
            pdescription, psdate,  pedate,  asdate,  aedate,
            pstatus,  pcomplexity,  plocation, pcommercialhead,
            paccounthead, pmanager,completed,isBillable,taxCode,poNumber,
            tab,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_addEditProWithFlag(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [pid, pname, pcode, ptype, pclient, ptech,presource,
            pdescription, psdate,  pedate,  asdate,  aedate,
            pstatus,  pcomplexity,  plocation, pcommercialhead,
            paccounthead, pmanager,completed,isBillable,taxCode,poNumber,tab,
            userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {

            if(err){}//console.log('errrrrrrrrrrrrrrrrr-------',err);}
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

            if(err){}//console.log('errrrrrrrrrrrrrrrrr-------',err);}
            else{
            callback(err, result);
              }
        });
    },
 
    //-------------------------------------------ASSIGNMENT---------------------------------------

getAllAssignment: function(userId,roleId,retailerId,callback) {
        var query = {
            sql: 'call usp_AssignmentData(?)',
            values:[retailerId]
            
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },


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


getFurniture: function(firstName,roleId,callback){
    var q={ 
      sql:'call usp_ast_viewStationary(?)',
      values: ['1']
    };
    mysql(q,function(err,result){
      callback(err, result);
    });
  },


addFurniture: function(acid,order,no,Deliverydate, vendor,invoiceNo,Invoicedate, invoiceAmt, typel, uprice, color,brand, flag,assettype, callback) {
    var query = {
        sql:'call usp_ast_addFurniture(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        values:[
        acid,
        order,no,Deliverydate,vendor,
        invoiceNo,Invoicedate,
        invoiceAmt,typel,
        uprice,color,
        brand,'1',assettype]
    };
    mysql(query, function(err, result) {
        callback(err, result);
    });
},

addStationary: function(acid,order,no,Deliverydate, vendor,invoiceAmt,Invoicedate,invoiceNo,typel,flag,assettype, callback) {
    var query = {
        sql:'call usp_ast_addstationary(?,?,?,?,?,?,?,?,?,?,?)',
        values:[
        acid,order,
        no,Deliverydate,
        vendor,invoiceAmt,
        Invoicedate,invoiceNo,
        typel,
        '1',assettype ]
    }
    mysql(query, function(err, result) {
        callback(err, result);
    });
},
addSoftware: function(acid,stype,vendor,Invoicedate,name,des,test5,key,users,edate,pdate,flag,assettype, callback) {
   if(test5==undefined){
    test5 = 'off';
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
    mysql(query, function(err, result) {
        callback(err, result);
    });
},
addHardware:function(type,invoiceNo,purchasedOrder,Quantity,invoiceDate,deliveryDate,vendor,invoiceAmt,userId,ides,callback){
    var q={
        sql:'call usp_ast_addHardware(?,?,?,?,?,?,?,?,?,?)',
        values:[type,invoiceNo,purchasedOrder,Quantity,invoiceDate,deliveryDate,vendor,invoiceAmt,userId,ides]
    }
    //console.log(q);
    mysql(q,function(err,result){
       
        callback(err,result);
    }); 
},

/******************jogendra singh ***********************************/
getlineid:function(id,callback){
    var q={
        sql:'call usp_ast_getlineid(?)',
        values:[id]
    };
    console.log(q);
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},

getlinevalue:function(id,callback){
    var q={
        sql:'call usp_ast_getsubHardware(?)',
        values:[id]
    };
    console.log(q);
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},

updateTag:function(tagNo,ides,callback){
    var q={
        sql:'call usp_ast_generateTagNo(?,?)',
        values:[tagNo,ides]
    };
    console.log(q);
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},

getsublinevalue:function(id,callback){
    var q={
        sql:'call usp_ast_viewsublineEntry(?)',
        values:[id]
    };
    console.log(q);
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},

addlineItem:function(type,serialno,attid,attrvalue,headerid,brand,warranty,ides,callback){
    var q={
        sql:'call usp_ast_addlineItem(?,?,?,?,?,?,?,?)',
        values:[type,serialno,attid,attrvalue,headerid,brand,warranty,ides]
    };
    console.log(q);
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},

addsublineItem:function(type,serialno,lineId,color,headerid,brand,warranty,ides,callback){
    var q={
        sql:'call usp_ast_addsublineItem(?,?,?,?,?,?,?,?)',
        values:[type,serialno,lineId,color,headerid,brand,warranty,ides]
    };
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},
/***********************end*****************************/
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
//new for hardware
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

getStationary: function(firstName,roleId,callback){
    var q={ 
      sql:'call usp_ast_viewStationary(?)',
      values: ['2']
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
},
getSoftware:function(firstName,roleId,callback){
    var q={
        sql:'call usp_ast_viewStationary(?)',
        values:['3']
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
},//for dynamic software
getType:function(tid,retailerid,callback){
    var q={
        sql:'call usp_ast_getComponentType(?,?)',
        values:[tid,retailerid]
    };
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
      mysql(q,function(err,result){
        callback(err,result);
    });
  },
  getUnassigned:function(atid,acid,callback){
    var q={
        sql:'call usp_ast_getUnassigned(?,?)',
        values:[atid,acid]
    };
    mysql(q,function(err,result){
        callback(err,result);
    }); 
},
 getAccessories:function(cid,callback){
    var q={
        sql:'call usp_ast_getUnassignedAcc(?)',
        values:[cid]
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

  descriptionforatr:function(id,callback){
    var q={
        sql:'call usp_ast_getAttrHardware(?)',
        values:[id]
    };
    mysql(q,function(err,result){
        callback(err,result);
    });
  },

   getAtt:function(tid,callback){ 
    var q={
        sql:'call usp_ast_getAcc(?)',
        values:[tid]
    };
mysql(q,function(err,result){
        callback(err,result);
    });
  },
  
  saveAssignment:function(cid,lid,uid,tid,aflag,adate,callback){
    var q={
        sql:'call usp_ast_assetAssignment(?,?,?,?,?,?)',
        values:[aflag,uid,tid,lid,cid,adate]
    };
mysql(q,function(err,result){
        callback(err);
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
getAssignedAssets:function(atid,uid,callback){
 var q={
        sql:'call usp_ast_getAssignedAsset(?,?)',
        values:[uid,atid]
    };
mysql(q,function(err,result){
        callback(err,result);
    });

},
//---------------------------------Expense------------------------------------------
/* expense jogendra Singh*/
    toReSubmitExpense: function(cid,callback) {
        var query = {
            sql: 'call usp_reSubmitrejectExpense(?)',
            values: [cid]
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
            //console.log(query);
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

       insertHotelExpense: function(hotelexpensetypeid,hoteltrip,fromDate,toDate,hotelName,hotelReason,hotelifOther,hotelperDayRate,hotelTotalDay,hotelCurrency,htex,userid,userid1,retailerId,callback) {
        var query = {
            sql: 'call usp_insertHotelExpense_rsandinr(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values:[hotelexpensetypeid,hoteltrip,fromDate,toDate,hotelName,hotelReason,hotelifOther,hotelperDayRate,hotelTotalDay,hotelCurrency,htex,userid,userid1,retailerId]
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

       insertTravelExpense: function( travelexpensetypeid,traveltrip,travelFromDate,travelToDate,travelType,travelReason,travelIfNot,travelRatePerDay,travelTotalDay,travelCurrency,travelex,userid,userid1,retailerId,callback) {
        var query = {
            sql:'call usp_insertExpenseforTravel_rsandinr(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,traveltrip,travelFromDate,travelToDate,travelType,travelReason,travelIfNot,travelRatePerDay,travelTotalDay,travelCurrency,travelex,userid,userid1,retailerId]
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

       insertFoodExpense: function( travelexpensetypeid,foodtrip,foodFromDate,foodToDate,foodReason,foodCurrency,foodtex,userid,userid1,retailerId,callback) {
        var query = {
            sql: 'call usp_insertExpenseforFood_rsandinr(?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,foodtrip,foodFromDate,foodToDate,foodReason,foodCurrency,foodtex,userid,userid1,retailerId]
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

       insertPhoneExpense: function(travelexpensetypeid,phonetrip,phoneFromDate,phoneToDate,phoneReason,phoneCurrency,phoneExp,userid,userid1,retailerId,callback) {
        var query = {
            sql: 'call usp_insertExpenseforPhone_rsandinr(?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,phonetrip,phoneFromDate,phoneToDate,phoneReason,phoneCurrency,phoneExp,userid,userid1,retailerId]
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

       insertRsdExpense: function( travelexpensetypeid,rsdtrip,rsdFromDate,rsdToDate,rsdvehicle,rsdReason,rsdifnot,rsdKmRate,rsdtotal,rsdCurrency,rsdtex,userid,userid1,retailerId,callback) {
        var query = {
            sql: 'call usp_insertExpenseforRSD_rsandinr(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,rsdtrip,rsdFromDate,rsdToDate,rsdvehicle,rsdReason,rsdifnot,rsdKmRate,rsdtotal,rsdCurrency,rsdtex,userid,userid1,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       updateRsdExpense: function( travelexpensetypeid,rsdtrip,rsdFromDate,rsdToDate,rsdvehicle,rsdReason,rsdifnot,rsdKmRate,rsdtotal,rsdCurrency,rsdtex,userid,userid1,exthotel,extclaimhotel,callback) {
        var query = {
            sql: 'call usp_updateExpenseforRSD_rsandinr(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,
            rsdtrip,rsdFromDate,rsdToDate,rsdvehicle,rsdReason,
            rsdifnot,rsdKmRate,rsdtotal,rsdCurrency,rsdtex,userid,
            userid1,exthotel,extclaimhotel]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

       insertPerdiemExpense: function( travelexpensetypeid,perdiemtrip,perdiemFromDate,perdiemToDate,perdiemHotelName,perdiemReason,perdiemIfNot,perdiemRate,perdiemtotal,perdiemCurrency,perdiemtex,userid,userid1,retailerId,callback) {
        var query = {
            sql: 'call usp_insertExpenseforPerDiem_rsandinr(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,perdiemtrip,perdiemFromDate,perdiemToDate,perdiemHotelName,perdiemReason,perdiemIfNot,perdiemRate,perdiemtotal,perdiemCurrency,perdiemtex,userid,userid1,retailerId]
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

       insertOtherExpense: function( travelexpensetypeid,othertrip,otherFromDate,otherToDate,otherReason,otherCurrency,othertex,userid,userid1,retailerId,callback) {
        var query = {
            sql: 'call usp_insertExpenseforOther_rsandinr(?,?,?,?,?,?,?,?,?,?)',
            values:[travelexpensetypeid,othertrip,otherFromDate,otherToDate,otherReason,otherCurrency,othertex,userid,userid1,retailerId]
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

     toReSubmitExpenseforCopy: function(cid,callback) {
        var query = {
            sql: 'call Ex_toCopyTheExpense(?)',
            values: [cid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
    /*end expense jogendra singh*/
    //-------------------------------------------------------------------------------
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
 ////console.log("cccccccccccccc");
        var query = {
            sql: 'call usp_updtMaster(?,?,?,?,?,?,?)',
            values: [code,desc,userid,active,id,retailerId,crate]
        };
        console.log(query)
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
        //console.log('user id--',userId,'--role id-- ',roleId,'--retailer id-- ',retailerId);
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

/*--------------------------------------------------------------holiday part----------------------------------------------------------*/ 

     holidayhome: function(userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_te_holidaydetails_rs(?,?,?)',
            values: [userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });

},

selectHolidaybyId: function(userId,roleId,retailerId,hid, callback) {
        var query = {
            sql: 'call usp_te_holidaydetailsById(?,?,?,?)',
            values: [userId,roleId,retailerId,hid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });

},

updateHoliday: function(userId,roleId,retailerId,hid,h_name,h_date, callback) {
        var query = {
            sql: 'call usp_te_updateholidayById(?,?,?,?,?,?)',
            values: [userId,roleId,retailerId,hid,h_name,h_date]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });

  },



  //------------------------------------------------------------------------------------------
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
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },
             getAllCustomRoles: function(userId,roleId,retailerId,userid,check,callback) {
        var query = {
            sql: 'call usp_doc_getCustomRoles(?,?,?,?,?)',
            values: [userId,roleId,retailerId,userid,check]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

addUser: function(time,isClient,clientId,isbill,expense,inNum,hdnid, firstName, lastName, emailId,contactNumber, 
    billingRate,userRole, manager, defaultModule, customRole, randomPassword,ecode,designation,level,modules,doj,dob,doc,rtype,userId,
     roleId, retailerId,crole,hrRole ,hodId,callback) {
        
        
        var query = {
            sql: 'call atemp_usp_createRetailerUser(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            values: [time,isClient,clientId,isbill,expense,inNum,hdnid, firstName, lastName, emailId, contactNumber,
             billingRate, userRole, manager, defaultModule, customRole, randomPassword,
            ecode,designation,level,modules,doj,dob,doc,rtype,
             userId, roleId, retailerId,crole,hrRole,hodId]
        };
       
        mysql(query, function(err, result) {
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
    getModules : function(userId, roleId,retailerid, callback) {
        var query = {
            sql: 'call usp_getModules(?,?,?)',
            values: [userId, roleId,retailerid]
        };
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
        mysql(query, function(err, result) {
            
            callback(err, result);
        });
    },
    calSetting: function(userId,roleId,retailerId,schedule,sDate,timespan,whours,callback){
    var query={
            sql: 'call usp_timesheet_schedule(?,?,?,?,?,?,?)',
            values:[userId,roleId,retailerId,schedule,sDate,timespan,whours]
    };
    console.log("query g : ",query);
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
      getTimeSheetData: function(userId,roleId,retailerId,callback){
        var query={
          sql:'call usp_time_getTime(?,?)',
          values:[userId,retailerId]
        };
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
        mysql(query, function(err, result) {
            callback(err, result);
        });
      },

       submitTimesheetAssignment: function(alluser,allcolumn,timesheetid,callback){
        var query={
          sql:'call usp_time_submitTimesheetAssignment(?,?,?)',
          values:[alluser,allcolumn,timesheetid]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
      },

       checkUserTimesheet: function(userId,tdate,callback){
        var query={
          sql:'call usp_time_checkUserTimesheet(?,?)',
          values:[userId,tdate]
        };
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
         var query={
          sql:'call usp_time_getTime(?,?)',
          values:[userId,retailerId]
        };
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
      
    userStatus: function(status,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_userStatus(?,?,?,?)',
            values: [status,userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

    changeUserStatus: function(uid,flag,userId,roleId,retailerId, callback) {
        var query = {
            sql: 'call usp_changeUserStatus(?,?,?,?,?)',
            values: [uid,flag,userId,roleId,retailerId]
        };
        mysql(query, function(err, result) {
            callback(err, result);
        });
    },

     
   //- ---------------------Hr management system ------------------------------------------------------- -->

getHrRole:function(userId,roleId,retailerId,callback){
        var q={
            sql:'call usp_getHrRole(?,?,?)',
            values:[userId,roleId,retailerId]
        };

        mysql(q, function(err, result) {
            console.log(q,err);
            callback(err, result);
        });
    },
    dashboardData:function(data,grid,time,hrRole,userId,roleId,retailerId,callback){
       var q = {
        sql: 'call dataForOpenRequistion(?,?,?,?,?,?)',
        values: [data,grid,time,hrRole,userId,retailerId]
        }
        //console.log("hey query 1 ",q);
        mysql(q, function(err, result) {
            //console.log("-----------",err);
              callback(err, result);
        });
    },
    raiseRequisition:function(userId,roleId,retailerId,callback){
        var q = {
                sql: 'call usp_requisitionData(?,?)',
                values: ['0',retailerId]
        }
        //console.log("hey query  2",q);
        mysql(q, function(err, result) {
            //console.log("-----------",err);
              callback(err, result);
            });
     } ,
     raiseRequisition1:function(uid,JobTitle,NoOfPostions,skills,MinimumSalary,
        MaximumSalary,ExpiresOn,location,Description,designation,RecruiterName,
        YearsOfExp,adminhr,flag,id,mailPriority,jobType,hrRole,retailerId,callback){

            var q = {
                  sql: 'call usp_addrequisition(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                 values: [uid,JobTitle,NoOfPostions,skills,
                          MinimumSalary,MaximumSalary,
                          ExpiresOn,location,Description,
                          designation,RecruiterName,
                          YearsOfExp,adminhr,flag,id,
                          mailPriority,jobType,hrRole,retailerId]
            }  
            console.log('aaaaaaaaaaaalooooooooooooooooo',q);
            mysql(q,function(err, result) {
            //    console.log('--------------yes-------',result);
                         callback(err, result);
                         //console.log('aaaaaaaaaaaalooooooooooooooooo');
            });

     
    },
    reqHod:function (userId,roleId,retailerId,callback){
         var q = {
                sql: 'call usp_allRequisitionsHod(?,?)',
                values: [userId,retailerId]
         }
         console.log(q);
         mysql(q, function(err, result) {
            console.log("reqhod modal portal",err);
                        callback(err, result);
         }); 
    },

    allrequisitions : function (userId,roleId,retailerId,callback){
         var q = {
                sql: 'call usp_allrequisitions(?,?)',
                values: [userId,retailerId]
         }
         console.log("lollllll",q);
         mysql(q, function(err, result) {
         	console.log("all reqsnerr",err);
                    callback(err, result);
         });

        
    },

    reqData: function (userId,roleId,retailerId,id,callback){
         var q = {
                sql: 'call usp_requisitionData(?,?)',
                values: [id,retailerId]
         }
         //console.log("lollllll",q);
         mysql(q, function(err, result) {
                    callback(err, result);
         });

        
    },
    deleteReq: function (userId,roleId,retailerId,id,callback){
         var q = {
               sql: 'call usp_deleteReq(?)',
                values: [id]
         }
         //console.log("lollllll",q);
         mysql(q, function(err, result) {
                    callback(err, result);
         });

        
    },

    viewCandidate: function (userId,roleId,retailerId,callback){
          var q = {
        sql: "call usp_viewCandidate(?)",
        values: [retailerId]
    }
    mysql(q, function(err, result) {
        if (err) {
            //console.log(err);
        } else {
            callback(err,result);
            }
    });
    } ,
    viewCandidate1: function (userId,roleId,retailerId,callback){
        var q = {
            sql: "call usp_viewCandidate(?)",
            values:[retailerId]
        }
    mysql(q, function(err, result) {
        if (err) {
            //console.log(err);
        } else {
            callback(err,result);
        }
    });         

    },
    getCandidate: function (userId,roleId,retailerId,id,callback){
       var q ={
        sql: "call usp_getCandidate(?,?)",
        values: [id,retailerId]
        }
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         

    },
    editCandidate: function (userId,roleId,retailerId,hcid,name,phone,email,locationId,skills,clocation,months,years,qualification,institute,callback){
       var q = {
           sql: "call usp_editCandidate(?,?,?,?,?,?,?,?,?,?,?)",
            values: [hcid, name, phone,email,locationId,skills,clocation, months, years,qualification,institute ]
        }
        mysql(q, function(err, result) {
             console.log("---In Modal Portal of VIew Candidate----w1111111111",result);
            if (err) {
                //console.log(err);
            } else {
                callback(err,result);
            }
        });         

    },
    getAllTag : function (id,retailerId,callback){
       var q = {
            sql: "call usp_getAllTag(?,?)",
            values: [id,retailerId]
        }
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            } else {
                //console.log("query---  ",q,"---rsult----",result);
                callback(err,result);
            }
        });         

    },
    upload :function (callback){
       var q = {
            sql: "call usp_getResumeSource()",
        }
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            } else {
                //console.log("query---  ",q);
                callback(err,result);
            }
        });         

    },
    parserTable:function(count,countfiles,callback){
    var q = {
        sql: 'call usp_parseTableData(?,?)',
        values: [count,countfiles]
        
    }
    mysql(q, function(err, result) {
            if (err) {
                //console.log(q, err);
                console.log(q,err);
            } else {
                console.log(q);
            callback(err,result);
            }
        });
    },

/***jogendra singh**/
  toSubmitParseData:function(callback){
    var q = {
        sql: 'call usp_submitParsedData()',
        values: []
        
    }
    mysql(q, function(err, result) {
            if (err) {
                //console.log(q, err);
            } else {
            callback(err,result);
            }
        });
    },
/*****end*****/

    upload_resume:function (userId,roleId,retailerId,callback){
       var q ={
        sql: 'call usp_truncateTempTable',
            values: []
        }
        mysql(q, function(err, result) {
            if (err) {
                //console.log("-----------saurav upload_rsume------",err);
            }
            else {
            callback(err,result);
            }
        });         

    },

    //**add by Jogendra singh****//

     toAddTag:function (tId,selectedtag,uId,callback){
       var q ={
        sql: "call usp_addTag(?,?,?)",
            values: [tId,selectedtag,uId]
        }
        mysql(q, function(err, result) {
            if (err) {
               
            }
            else {
            callback(err,result);
            }
        });         

    },

     scheduleInterview:function (cdtidint,schtaggedJd,intdatetime,schstate,schstatus,interviewer,intremark,mode,uid,rid,callback){
        //console.log('dsdshv hrm hrm hrm');
       var q ={
        sql: "call usp_scheduleInterview(?,?,?,?,?,?,?,?,?,?)",
        values:[cdtidint,schtaggedJd,intdatetime,schstate,schstatus,interviewer,intremark,mode,uid,rid]
        }
        console.log(q);
        mysql(q, function(err, result) {

            if (err) {
             //console.log('djdgjfdhf jhdgfj jhfdhfj jfgdhfj',err);   
            }
            else {
                //console.log('djdgjfdhf jhdgfj jhfdhfj jfgdhfj');
            callback(err,result);
            }
        });         

    },
    //*****end******//
    upload_resumeaddcandidate : function(userId,roleId,retailerId,name,email,phone,skillarrId,permanentAddress,Qualification,currentlocation,years,                months,instititutes,targetPath,callback){
       var q ={
               sql: 'call usp_addCandidate(?,?,?,?,?,?,?,?,?,?,?,?)',
                    values: [name,email,phone,skillarrId,permanentAddress,Qualification,currentlocation,years,months,
                        instititutes,targetPath,retailerId]
        }
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log("-----------saurav upload_rsume------",err);
            }
            else {
            callback(err,result);
            }
        });         

    },
    deleteUploadRecords :function (userId,roleId,retailerId,id,callback){
       var q ={
        sql: 'call usp_deleteRecordes(?)',
        values: [id]
        }
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         

    },
    viewReq : function (userId,roleId,retailerId,callback){
       var q ={
        sql: "call usp_viewreq(?,?)",
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
        sql: "call usp_hrm_userHrViewReq(?,?)",
        values: [userId,retailerId]
        }
        console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                 console.log(err);
 
            }
            else {
            callback(err,result);
            }
        });         

    },
     searchHr : function (userId,roleId,retailerId,str,callback){
       var q ={
        sql: "call bsearch(?,?)",
        values: [str,retailerId]
        }
         console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
                //console.log("adv search",result);
            callback(err,result);
            }
        });         

    },
     advancesearchHr : function (userId,roleId,retailerId,name1,jdtitle,email1,location1,callback){
       var q ={
         sql: "call usp_AdvancedSearch(?,?,?,?,?)",
        values: [name1,jdtitle,email1,location1,retailerId]
        }
        console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                console.log(err);
            }
            else {
            callback(err,result);
            }
        });         

    },
     interviewerInfo : function (userId,roleId,retailerId,callback){
       var q ={
         sql: "call usp_interviewerInfo(?,?)",
        values: [userId,retailerId]
        };
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         

    },
    updateStatusReq : function (userId,roleId,retailerId,flag,jdid,approve,callback){
       var q ={
         sql: "call usp_updateStatusReq(?,?,?,?)",
        values: [ flag,jdid,approve,userId]
        };
        console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },
    getReleventTag : function (userId,roleId,retailerId,id,callback){
       var q ={
          sql: "call usp_getReleventTag(?)",
        values: [id]
        };
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },
     removeTag : function (userId,roleId,retailerId,tagid,cid,callback){
       var q ={
          sql: "call usp_removeTag(?,?)",
        values: [tagid,cid]
        };
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },
    getreleventState : function (userId,roleId,retailerId,jdid,cid,callback){
       var q ={
          sql: "call getreleventState(?,?)",
        values: [jdid,cid]
        };
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },
    addQuickTag : function (userId,roleId,retailerId,jdid,cid,callback){
       var q ={
          sql: "call usp_addQuickTag(?,?,?)",
        values: [jdid, cid,userId]
        };
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },
     getallmanager : function (userId,roleId,retailerId,callback){
       var q ={
        sql: "call usp_getAllManager(?)",
        values: [retailerId]
        };
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },

getscheduleInfo : function (userId,roleId,retailerId,cid,callback){
       var q ={
        sql: "call usp_scheduleIntInfo(?,?)",
        values: [cid,retailerId]
       
        };
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },

    selectAdminHr : function (userId,roleId,retailerId,selected,callback){
       var q ={
          sql: "call usp_selectAdHr(?,?)",
        values: [selected,retailerId]
       
        };
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },

    getClientContacts : function (userId,roleId,retailerId,clientId,callback){
       var q ={
          sql: "call usp_getClientContacts(?,?)",
        values: [clientId,retailerId]
       
        };
        console.log(q);
        mysql(q, function(err, result) {
            console.log(result)
            if (err) {
                //console.log(err);
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
        console.log(q);
        mysql(q, function(err, result) {
            console.log(result)
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },
    updateClientPassword : function (userId,roleId,retailerId,body,callback){
       var q ={
          sql: "call usp_sendMailClient(?,?)",
        values: [body.id,body.password]
       
        };
        console.log(q);
        mysql(q, function(err, result) {
            console.log(result)
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },

    blockUser : function (body,callback){
       var q ={
          sql: "call usp_blockClientContact(?)",
        values: [body.id]
       
        };
        console.log(q);
        mysql(q, function(err, result) {
            console.log(result)
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },


     saveHrm: function (selected,reqId,callback){
       var q ={
        sql:"call usp_savehrm(?,?)",
        values:[selected,reqId]
       
        };
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },
    updateCandidate : function (userId,roleId,retailerId,id,name,email,phone,years,months,location,address,skills,qualification,ins,callback){
       var q ={
         sql: "call usp_updateCandidateinfo(?,?,?,?,?,?,?,?,?,?,?)",
        values: [id,name,email,phone,years,months,location,address,skills,qualification,ins]
       
        };
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },

    interviewData : function (userId,roleId,retailerId,id,rating,status,time,remarks,stateId,cdtid,modeid,rounds,filename,jdid,callback){
       var q ={
         sql: "call usp_interviewedData(?,?,?,?,?,?,?,?,?,?,?,?)",
        values: [id,rating,status,time,remarks,userId,stateId,
            cdtid,modeid,rounds,filename,jdid]
       
        };
 
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },
    interviewFeedback : function (userId,roleId,retailerId,id,cid,callback){
       var q ={
         sql: "call usp_interviewerFeedbackInfo(?,?,?)",
        values: [id,cid,userId]
       
        };
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    },
     reqApprover : function (userId,roleId,retailerId,callback){
       var q ={
          sql: 'call usp_allRequisitionsApprover(?)',
        values: [retailerId]
       
        };
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
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
                console.log(err);
            }
            else {
            callback(err,result);
            }
        });   
        },
        // adeed by saurav singh for asset master
        addeditComponent:function (info,callback){

            var q ={
              sql: 'call usp_asset_addeditComponent(?,?,?,?,?,?,?,?)',
              values: [info[0],info[1],info[2],info[3],info[4],info[5],info[6],info[7]]
           
            };
            
            mysql(q, function(err, result){
                if (err) {
                    console.log("oop",err);
                }
                else {
                    console.log("result is ",result);
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
                    console.log("oop",err);
                }
                else {
                    console.log("result is ",result);
                callback(err,result);
                }
            });   
        },
       addeditvalue:function (info,callback){
            var q ={
              sql: 'call usp_asset_addeditvalue(?,?,?,?,?,?)',
              values: [info[0],info[1],info[2],info[3],info[4],info[5]]
           
            };
            console.log(q);
            mysql(q, function(err, result){
                if (err) {
                    console.log("oop",err);
                }
                else {
                    console.log("result is ",result);
                callback(err,result);
                }
            });   
        },
        addattrvaluemapping:function (info,callback){
            var q ={
              
              sql: 'call usp_asset_addattrvaluemapping(?,?,?,?,?,?)',
              values: [info[0],info[1],info[2],info[3],info[4],info[5]]
           
            };
            console.log(q);
            mysql(q, function(err, result){
                if (err) {
                    console.log("oop",err);
                }
                else {
                    console.log("result is ",result);
                callback(err,result);
                }
            });   
        },
        addComponentAttributemapping:function (info,callback){
            var q ={
              sql: 'call usp_asset_addComponentAttributemapping(?,?,?,?,?,?)',
              values: [info[0],info[1],info[2],info[3],info[4],info[5]]
           
            };
            console.log(q);
            mysql(q, function(err, result){
                if (err) {
                    console.log("oop",err);
                }
                else {
                    console.log("result is ",result);
                callback(err,result);
                }
            });   
        },
        deleteComponentAttributeMapping:function (info,callback){
            var q ={
              
              sql: 'call usp_asset_deleteComponentAttributeMapping(?,?,?,?)',
              values: [info[0],info[1],info[2],info[3]]
           
            };
            console.log(q);
            mysql(q, function(err, result){
                if (err) {
                    console.log("oop",err);
                }
                else {
                    console.log("result is ",result);
                callback(err,result);
                }
            });   
        },
        inactiveAssetMaster:function (info,callback){
            var q ={
              
              sql: 'call usp_asset_inactiveAssetMaster(?,?,?,?,?,?)',
              values: [info[0],info[1],info[2],info[3],info[4],info[5]]
           
            };
            console.log(q);
            mysql(q, function(err, result){
                if (err) {
                    console.log("oop",err);
                }
                else {
                    console.log("result is ",result);
                callback(err,result);
                }
            });   
        },
        //----------------------------------------Project Management System------------------------------
        //----------------------------------------Project Management System------------------------------
    getAllResources : function (userId,roleId,retailerId,callback){       
     var q ={
          sql: 'call usp_pro_getAllResources(?)',
        values: [retailerId]
       
        };
        //console.log(q);
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
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
                //console.log(err);
            }
            else {
            callback(err,result);
            }
        });         
    }
     ,task : function (flag,retailerId,callback){

       var q ={
          sql: 'call usp_proj_getAllTree(?,?)',
        values: [flag,retailerId]
       
        };
 
        mysql(q, function(err, result) {
            if (err) {
                //console.log(err);
            }
            else {
                console.log(q,result);
          
            callback(err,result);
            }
        });         
    }, 
    emptyProj : function (projectId,callback){

       var q ={
          sql: 'call usp_proj_makeEmptyTree(?)',
        values: [projectId]
       
        };
        mysql(q, function(err, result) {
            if (err) {
                console.log(err,q);
            }
            else {
                console.log(q,result);
          
            callback(err,result);
            }
        });         
    },
    saveTask : function (updateQ,submitFlag,prId,callback){

       var q ={
          sql: 'call usp_proj_updateInsert(?,?,?)',
        values: [prId,updateQ,submitFlag]
       
        };
        mysql(q, function(err, result) {
            if (err) {
                console.log(err,q);
            }
            else {
            console.log(q,result);
          
               callback(err,result);
            }
        });         
    }                                    
}
