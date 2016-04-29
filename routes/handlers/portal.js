 'use strict';
   
 var modelPortal = require('../../model/modelPortal');
 var mailTemplates = require('../../lib/mailtemplates');
 var randomString = require('../../lib/common').generateRandomString;
 var flag = require('../../config/config').flagUsed;
 var path = require('path');
 var fs = require('fs');
  var textract = require('textract');
var config = {

    preserveLineBreaks: true,
    tesseract: {
        lang: "eng"
    }

}
var options = {
    type: 'text' // extract the actual text in the pdf file 
}
var pdf_extract = require('pdf-extract');
 var skillsIdfromdb = [];
var skillsfromdb = [];
var location = [];
var institituefromdb = [];
var instititueIdfromdb = [];
var locationId = [],
    countFiles = [],
   totalFiles = [],
  parsing = [],done =0;
 
//var xlsx = require('node-xlsx');

/*var obj = xlsx.parse(__dirname + '/holiday.xlsx'); // parses a file

var obj = xlsx.parse(fs.readFileSync(__dirname + '/holiday.xlsx')); */
//  var form=require('reformed');

// var xlsx = require('node-xlsx');
//var converter = require("xls-to-json");  
 
 module.exports = {
    customRolesExist: function(req, res, next) {
         modelPortal.customRolesExist(req.session.userId,req.session.roleId, req.session.retailerId,req.body.roleName,function(err, result) {
             if (err) {
                 next(err);

             } else { 
                        console.log('aaaaaaaaaaaaaaaaaa');
                }
         });
     } ,

 getModules: function(req, res, next) {
         modelPortal.getModules(req.session.userId,req.session.roleId, req.session.retailerId, function(err, result) {
             if (err) {
                 next(err);

             } else { 
            req.result=result;
            console.log('aaaaaaaaaaaaaaaaaa');
            req.session.url = req.url;
             next();
             }
         });
     } ,
    
 
     registration: function(req, res, next) {
        console.log("just entered portal registration");
         modelPortal.retailerRegistration(
             req.body.compname,
             req.body.email,
             req.body.pass,
             req.body.fname,
             req.body.lname,
             req.body.cno,
             req.body.modules,
             function(err, result) {
                 if (err) {
                     console.log("Error in portal registration",error);
                     next(err);
                 } else {
                     if (result[0] && result[0][0].flag == flag.inserted) {
                         mailTemplates.retailerRegistration(req.body.fname, req.body.email, req.body.pass, function(error, resultMail) {
                             if (error) {
                                console.log("Error in portal else --- if registration",error);
                                 result[0].flag = flag.mailFailed;
                             }
                         });
                     }
                     console.log("Mail sent.......and data brought is : ",result);
                     res.json(result);
                 }
             });
     },
    /* validateUser: function(req, res, next) {

        console.log('cccccccccccccccccccccccccccccccccccccccc',req.query.validateid);
         modelPortal.validateUser(
             req.query.validateid,             
             function(err, result) {
                 if (err) {
                     next(err);
                 } else {   
                     req.session.firstName = result[0][0].firstName;
                     req.session.userName = result[0][0].userEmail;
                     req.session.password = result[0][0].userPassword;
                     req.session.userId = result[0][0].id;
                     req.session.roleId = result[0][0].roleId;
                     req.session.retailerId = result[0][0].retailerId;
                     req.session.logo = result[0][0].logo;
                     req.session.isVerified = true;
                     req.session.croleId=result[0][0].crole_id;  
                     req.session.isRetailer=result[0][0].isRetailer;   
                     req.session.modules=result[1].map(function(v){
                        return v.id;
                     });        
                     res.redirect('/portal');
                 }
             });
     },*/
       validateUser: function(req, res, next) {
        console.log("invslidstewr dautasbda portal");
         modelPortal.validateUser(
             req.query.v123v45,             
             function(err, result) {
                 if (err) {
                     next(err);
                 } else {   
                     req.session.firstName = result[0][0].firstName;
                     req.session.userName = result[0][0].userEmail;
                     req.session.password = result[0][0].userPassword;
                     req.session.userId = result[0][0].id;
                     req.session.roleId = result[0][0].roleId;
                     req.session.retailerId = result[0][0].retailerId;
                     req.session.logo = result[0][0].logo;
                     req.session.isVerified = true;
                     req.session.croleId=result[0][0].crole_id;  
                     req.session.isRetailer=result[0][0].isRetailer; 
                     req.session.hrRole=result[0][0].hrRole;  
                     req.session.modules=result[1].map(function(v){
                        return v.id;
                     });        
                     res.redirect('/portal');
                 }
             });
     },

     recoverPassword: function(req, res, next) {
         modelPortal.recoverPassword(req.body.femail, function(err, result) {

             if (err) {
                 next(err);
             } else {
                 if (result[0] && result[0][0].flag == flag.updated) {

                           mailTemplates.recoverPassword(result[1][0].firstName, result[1][0].userEmail, result[1][0].userPassword, function(error, resultMail) {
                             if (error) {
                                 result[0][0].flag = flag.mailFailed;
                             }
                         });

                 }
                 res.json(result);
             }
         });
     },
     changePass: function(req,res,next){
        modelPortal.changePass(req.session.userId,req.body.pass,req.body.oldpass,function(err, result){
            if(err){
                next(err);
            } else
            { console.log('jj------',result[0][0].i);
                res.json(result[0]);
            }
        });
     },
 getClient: function(req, res, next) {
  
         modelPortal.getAllClient(req.clientid, req.session.roleId, req.session.retailerId,req.statusflag, function(err, resultClient) {
             if (err) {
                 next(err);
                 return;
             }
             req.resultClient = resultClient;   
  console.log(req.statusflag,"Client Id",req.clientid,'getClient----------portal------result from modal----------',req.resultClient);          
             next();
         });
     },
     addEditClient: function(req, res, next) {
         console.log('----addEditClient---body data----------------',req.body)
         var hid=req.body.hiddenid;
         if(req.body.hiddenid.length==0){hid=-1;}
         modelPortal.addEditClient(
                    hid, 
                    req.body.hiddeneditflag,
                    req.body.ccode,
                    req.body.cname,
                    req.body.cabbname,                    
                    req.body.category,
                    req.body.cal,
                    req.body.location,
                    req.body.address,
                    req.body.ccontactperson,
                    req.body.ccperemail,
                    req.body.clconphone,
                     req.body.active,
                    req.session.userId,
                    req.session.userId, 
                    req.session.retailerId,                    
                     function(err, resultClient) {
                     if (err) {
                        console.log("Add Edit Client in Portal  Error:",err);
                         next(err);
                         return;
                     }
                     req.resultClient = resultClient;
                     next();
         });
     },

addEditClientAjax : function(req, res, next) {
                var hid=req.body.id;
                modelPortal.addEditClientAjax( req.session.userId,req.session.roleId,req.session.retailerId , req.body.id,req.body.name,req.body.id1,function(err, resultClient) {
                     if (err) {
                        console.log("Add Edit Client in Portal  Error:",err);
                         next(err);
                         return;
                     }
                          console.log("-------------------------------------hellloooooo",resultClient);
                          res.json(resultClient);
                  
         });
     },


mailServerInfo: function(req,res,next){
        console.log('@@@@@@@@@@@@@@mail server info in previous portal');
  modelPortal.mailServerInfo(req.session.retailerId,function(error,mailServerresult){
     if(error)
     {
        next(error);
        return;
     }
     console.log('mail server info in portal',mailServerresult);
     req.mailServerresult=mailServerresult;
     next();
  });
},
mailServerConfigure: function(req,res,next){
        console.log('@@@@@@@@@@@@@@mail server configure in previous portal');
         var domain;
         var port;
         console.log(req.body);
         domain=req.body.domain;
         port=req.body.port;
     
  modelPortal.mailServerConfigure(req.session.retailerId,domain,req.body.uname,req.body.smtppass,port,function(error,result){
     if(error)
     {
        next(error);
        return;
     }
     console.log('mail server info in portal',result);
          next();
  });
},
   

//------------------Profile---------------------
profile: function(req, res, next) {               
        console.log('Profile  in Portal');
        modelPortal.getProfile(req.session.userId,req.session.roleId,req.session.retailerId,function(error,result) {
              if (error) {
                 next(error);
                 return;
             }
            console.log("Bug Details portal",result);
            req.resultProfile=result;
            next();
              });
    },
    updateProfile:function(req,res,next){
console.log("req.file ",req.file);
 var filename;
        var targetPath;
        var fname;
        if(req.file!=undefined)
        {
            var now = Date.now();;
            fname=req.file.originalname;
            var exet= fname.split('.');
            var exe= exet[exet.length-1];
            var ch=exet[0]+'_'+now;
            var tempPath = req.file.path,
            filename=ch+'.'+exe;
            targetPath = path.resolve('./public/attach/'+filename);
        // console.log("Target Path:"+targetPath);
            //console.log("Temp Path:"+tempPath);
            if(1)
            {
          fs.rename(tempPath, targetPath, function(err){
            if (err) 
                next(err)
                //throw err;
            console.log("Upload completed!");
          });
        }
        }

console.log("Filename : ",filename);
console.log("tempPath : ",tempPath);
console.log("targetPath : ",targetPath);

if(typeof(filename)=='undefined')
{
filename=req.session.logo;
}

  
        console.log("update profile in portal BOY",req.body);
        modelPortal.updateProfile(req.session.userId,req.session.roleId,
            req.session.retailerId,req.body.cname,req.body.fname,req.body.lname,req.body.cno,
            req.body.emailid,filename,function(error,result) {
              if (error) {
                 next(error);
                 return;
             }
            console.log("update profile  in portal",result);
               next();
              });
    },


     //-----------------------------------BUG---------------------------------------------------
      bugHome: function(req, res, next) {    
      console.log('bugHome: ')           
       modelPortal.bugHomeData(req.session.userId,req.session.roleId,req.session.retailerId, function(errorActivity, resultActivity) {
                    if (errorActivity) {
                 next(errorActivity);
                 return;
             }
                 console.log("View Bug",resultActivity);
            req.resultActivity=resultActivity;
             next();
                  });
    },
    exportBug: function(req, res, next) {               
       modelPortal.exportBug(req.session.userId,req.session.roleId,req.session.retailerId, function(errorActivity, resultActivity) {
                    if (errorActivity) {
                 next(errorActivity);
                 return;
             }
             var data = resultActivity[0].map(function(o, i) {
        var arr = Object.keys(o).map(function(_o, _i) {
          return o[_o];
        });
        return arr;
      });
      res.json(data);

                  });
    },
       viewBug: function(req, res, next) {               
     //   console.log('View Bug portal');
        modelPortal.viewBug(req.session.userId,req.session.roleId,req.session.retailerId, function(errorActivity,resultViewBug) {
              if (errorActivity) {
                 next(errorActivity);
                 return;
             }
          //  console.log("------------View Bug-------------",req.resultViewBug);
            req.resultViewBug=resultViewBug;
            next();
                  });
    },
     raiseBug: function(req, res, next) {               
        
        modelPortal.raiseBug(req.session.userId,req.session.roleId,req.session.retailerId, function(errorActivity,resultRaiseBug) {
              if (errorActivity) {
                console.log("Error in Raise Bug ---- ");
                 next(errorActivity);
                 return;
             }
            req.resultRaiseBug=resultRaiseBug;
         //   console.log("Raise Bug result in Portal",req.resultRaiseBug);
            next();
                  });
    },

    addBug :function(req, res, next) {               
        console.log("Add Bug in Portal.js ------File------:",req.file);
        var filename;
        var targetPath;
        var fname;
        if(req.file!=undefined)
        {
            var now = Date.now();;
            fname=req.file.originalname;
            var exet= fname.split('.');
            var exe= exet[exet.length-1];
            var ch=exet[0]+'_'+now;
            var tempPath = req.file.path,
            filename=ch+'.'+exe;
            targetPath = path.resolve('./public/attach/'+filename);
        // console.log("Target Path:"+targetPath);
            //console.log("Temp Path:"+tempPath);
            if(1)
            {
          fs.rename(tempPath, targetPath, function(err){
            if (err) 
                next(err)
                //throw err;
            console.log("Upload completed!");
          });
        }
        }
      
        modelPortal.addBug(req.session.userId,req.body.project,req.body.status,req.body.assingedto,req.body.priority,
            req.body.severity, req.body.technology, req.body.type,  req.body.tentativeclouser,req.body.titlebox,
            req.body.description,  targetPath, filename, fname,(req.body.detectedBy||0),(req.body.cycle||0),req.session.retailerId,function(error,result){
            if (error) {
                console.log("errorrrrrr");
             }
             else{ 
                console.log("successfulllly",result[0][0],result[0][0].emailId);

           
           console.log("Add Bug Post result in Portal successfully");      
          }
           mailTemplates.addBug(result[0][0].emailId,result[0][0].pass,function(error, resultMail) {
             if (error) {
                console.log("errorrrrrr",req.session.userId,error);
             }
             else 
                console.log("successful",resultMail);
        }); 
          next();    
           }); 
            
    },


   bugDetails: function(req, res, next) {               
        console.log('bugdetails Bug in Portal');
        modelPortal.bugDetails(req.body.bugid,function(errorActivity,resultBugDetails) {
              if (errorActivity) {
                 next(errorActivity);
                 return;
             }
          //  console.log("Bug Details portal",req.resultBugDetails);
            req.resultBugDetails=resultBugDetails;
            next();
              });
    },
    updateBugDetails: function(req, res, next) {               
     //   console.log('Update Bug details in Portal',req.body);
        modelPortal.updateBugDetails(req.body.bugid,req.body.colname,req.body.value,
                                        req.session.userId,
                                        function(errorActivity,resultBugDetails) {
                                          if (errorActivity) {
                                             next(errorActivity);
                                             return;
                                         }
            console.log("Bug Details portal aafter update Portal----",req.resultBugDetails);
            req.resultBugDetails=resultBugDetails;
            req.body.titlebox=resultBugDetails[0][0].bugTitle;
            req.body.description=resultBugDetails[0][0].bugDescription;
            req.body.status= resultBugDetails[0][0].description1;

            if(req.body.colname=="assingedToUserId")
            {   console.log("hello assignedto mailer");
                //nmailer(req,res,req.body.titlebox,result[0][0].userEmail,"bugraised");
            }

            if(req.body.colname=="status")
            {
            console.log("hello status mailer");
            //nmailer(req,res,req.body.titlebox,result[0][0].userEmail,"statusChanged",result[0][0].description1);
            //nmailer(req,res,req.body.titlebox,result[1][0].userEmail,"statusChanged",result[0][0].description1);//
            }
            next();
              });
    },
     addComment: function(req, res, next) {               
        console.log('add comment in Portal');
        modelPortal.addComment(req.body.bugid,req.body.comment,req.session.userId,req.session.retailerId, function(errorActivity,resultAddComment) {
              if (errorActivity) {
                console.log("Error while adding Comment",errorActivity);
                 next(errorActivity);
                 return;
             }            
            req.resultAddComment=resultAddComment;
            console.log("Add Coment result in Portal",req.resultAddComment);
            next();
                  });
    },


    bugAttachment: function(req, res, next) {  
    var filename;
    var targetPath;
    var fname;
    var fileSize;
    console.log(req.file);
    console.log(req.file.originalname);
    var targetPath='./public/'+req.file.path+req.file.originalname;
    if(1){
        fs.rename(req.file.path,targetPath,function(err){
            if(err)
            throw err;
        });
    }
    var targetPath=req.file.path+req.file.originalname;             
        console.log('add comment in Portal');
        modelPortal.bugAttachment(
            req.body.id,
            req.session.userId,
            targetPath,
            req.file.filename,
            req.file.originalname,            
            req.session.retailerId,
            function(errorActivity,resultAddAttachment) {
              if (errorActivity) {
                console.log("Error while adding Attachment",errorActivity);
                 next(errorActivity);
                 return;
             }            
            req.resultAddAttachment=resultAddAttachment[0];
            console.log("Add Attachment result in Portal",req.resultAddAttachment);
            next();
                  });
    },
    getAlltech: function(req, res, next) {                       
        modelPortal.getAlltech(req.body.projectId, function(errorActivity,resultAllTech) {
              if (errorActivity) {
                console.log("Error in GEtting all tech ---- ");
                 next(errorActivity);
                 return;
             }
            req.resultAllTech=resultAllTech;
            console.log("Get all Tech result in Portal",req.resultAllTech);
            next();
                  });
    },
       filterBug: function(req, res, next) { 
var tempstatus='';
    var tempseverity='';
    var temppriority='';
    var tempassingedto='';
    var temptechnology='';
    var status=req.body.status;
    var priority=req.body.priority;
    var severity=req.body.severity;
    var assingedto=req.body.assingedto;
    var technology=req.body.technology;
    if( status==null)
    status='';
    if( priority==null)
    priority='';
    if( severity==null)
    severity='';
    if( assingedto==null)
    assingedto='';
    if( technology==null)
    technology='';
    if(status.constructor === Array){
        status.forEach(function(v,i) {
            if(i!=status.length-1)
                tempstatus=tempstatus+v+',';
            else
                tempstatus=tempstatus+v;
        });
        status=tempstatus;
    }

    if(priority.constructor === Array)
    {
        priority.forEach(function(v,i){
            if(i!=status.length-1)
                temppriority=temppriority+v+',';
            else
                temppriority=temppriority+v;
        });
        priority=temppriority;
    }

    if(severity.constructor === Array)
    {
        severity.forEach(function(v,i) {
            if(i!=status.length-1)
                tempseverity=tempseverity+v+',';
            else
                tempseverity=tempseverity+v;
        });
        severity=tempseverity;
    }

    if(assingedto.constructor === Array)
    {
        assingedto.forEach(function(v,i) {
            if(i!=status.length-1)
                tempassingedto=tempassingedto+v+',';
            else
                tempassingedto=tempassingedto+v;
        });
        assingedto=tempassingedto;
    }

    if(technology.constructor === Array)
    {
        technology.forEach(function(v,i) {
        if(i!=status.length-1)
            temptechnology=temptechnology+v+',';
        else
            temptechnology=temptechnology+v;
        });
        technology=temptechnology;
    }
        modelPortal.filterBug(req.body.statusis,status,req.body.priorityis,priority,req.body.severityis,severity,req.body.assingedtois,assingedto,req.body.technologyis,technology,req.session.userId,req.session.retailerId,req.session.roleId, function(errorActivity,resultFilterBug) {
              if (errorActivity) {
                console.log("Error in Filtered Bug  result in Portal ---- ",errorActivity);
                 next(errorActivity);
                 return;
             }
            req.resultFilterBug=resultFilterBug;
          //  console.log("Filtered Bug  result in Portal",req.resultFilterBug);
            next();
                  });
    },

     //--------------------------------------Bug End-------------------------------------------------

     logout: function(req,res,next){
        req.session.destroy();
           req.page = 'index';             
             next();
     },


     //---------------------------------------Document--------------------------------------------------


    getCustomRoleById:function(req,res,next){
      //  console.log('getCustomRoleById');
        modelPortal.getCustomRoleById(req.body.rid,function(errorCustomRoles, resultCustomRoles){
            if(errorCustomRoles){
                next(errorCustomRoles);
                    return;
            }
            console.log(resultCustomRoles)
            res.json(resultCustomRoles);
        });
    },

    getIndustry:function(req, res, next) {
      //  console.log('getIndustry')
         modelPortal.getIndustry(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultIndustry){
                    if (error) {
                 next(error);
                 return;
             }
           //  console.log(resultIndustry)
            req.resultIndustry=resultIndustry;
             next();
             });
    },

    getBusiness:function(req, res, next) {
           //     console.log('getBusiness')

         modelPortal.getBusiness(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultBusiness) {
                    if (error) {
                 next(error);
                 return;
             }
          //   console.log(resultBusiness)
            req.resultBusiness=resultBusiness;
             next();
             });
    },

    getDocument:function(req, res, next) {
            //    console.log('getDocument')
         modelPortal.getDocument(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultDocument) {
                    if (error) {
                 next(error);
                 return;
             }
          //   console.log(resultDocument)
            req.resultDocument=resultDocument;
             next();
             });
    },

    getTechnology:function(req, res, next) {
           // console.log('getTechnology')
         modelPortal.getTechnology(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultTechnology) {
                    if (error) {
                 next(error);
                 return;
             }
           //  console.log(resultTechnology)
            req.resultTechnology=resultTechnology;
             next();
             });
    },

    getRestriction:function(req, res, next) {
          //  console.log('getRestriction')
         modelPortal.getRestriction(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultRestriction) {
                    if (error) {
                 next(error);
                 return;
             }
            // console.log(resultRestriction)
            req.resultRestriction=resultRestriction;
             next();
             });
    },

    addCustomRole: function(req, res, next){
        modelPortal.addCustomRole(req.session.retailerId,req.body.rname,req.body.industry,req.body.business,
              req.body.doctypes,req.body.technology,req.body.rLevel,
              req.body.industryhide,req.body.businesshide,req.body.doctypehide,req.body.newTechide,req.body.rLevelhide, function(err, result) {
                if (err) { 
                 next(err);
                 return;
             }
            // console.log(result)
             //res.json(result);
             next();
             
             });
    },
 updateCustomRole: function(req,res,next){
     
  modelPortal.updateCustomRole(req.session.retailerId,req.body.editRoleId,req.body.rname,req.body.industry,req.body.business,
    req.body.doctypes,req.body.technology, req.body.rLevel,req.body.industryhide,req.body.businesshide,
    req.body.doctypehide,req.body.newTechide,req.body.rLevelhide,req.body.isActive,function(err, result){
                if(err){
                    next(err);
                    return;
                }
                //console.log(result);
                 
                res.json(result);
               // next();
               // window.location.href="/customRoles";
              });
          },


    getAllFiles: function(req,res,next){
       // console.log('getAllFiles')
       // console.log('get all Files',req.body)
        modelPortal.getAllFiles(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId,function(err,resultFiles){
            if(err){
                next(err);
                return;
            }
          //  console.log(resultFiles);
            req.resultFiles=resultFiles;
            next();
        })
    },

    setFilePermission: function(req,res,next){
  // console.log('permission in portal',req.body)
   modelPortal.setFilePermission(req.session.userId,req.session.roleId,req.session.retailerId,function(err,permissionResult){
    if(err){
        next(err);
        return;
    }
  
    req.permissionResult=permissionResult;
    next();
   });

 },

 /*confirmedFilePermission: function(req,res,next){

    modelPortal.confirmedFilePermission(req.session.userId,req.session.roleId,req.session.retailerId,req.body.status,function(err,result){
    if(err){
        next(err);
        return;
    }

        /*mailTemplates.confirmFile(req.session.firstName,req.session.userName,function(error, resultMail) {
             if (error) {
             }
             else 
                console.log("successful",resultMail);
        });  next();
   });

 },*/

 confirmedFilePermission: function(req,res,next){

    modelPortal.confirmedFilePermission(req.session.userId,req.session.roleId,req.session.retailerId,req.body.status,function(err,result){
    if(err){
        next(err);
        return;
        console.log(result[0][0].userEmail);
    }

        mailTemplates.confirmFile(req.session.firstName,result[0][0].userEmail,function(error, resultMail) {
             if (error) {
             }
             else 
                console.log("successful",resultMail);
        });
    next();
   });

 },
deleteFileByIdPermanentely: function(req,res,next){
  //  console.log('deleteFileById Permanentely portal',req.body)
  console.log("path is ",path);
   var delPath = path.resolve('./public/attach/');
   console.log("delete path is ",delPath);
    modelPortal.deleteFileByIdPermanentely(req.session.userId,req.session.roleId,req.session.retailerId,req.body.status,req.body.status1,function(err,result){
    if(err){
        next(err);
        return;
    }
  console.log(result[0][0].fpath);
  delPath = path.resolve('./public/attach/'+result[0][0].fpath);
  console.log("finally",delPath);
  fs.unlinkSync(delPath);
  res.json('succs');
   });
        
 },
 /*rejectFileById: function(req,res,next){
   // console.log('rejectFileById in portal',req.body)
    modelPortal.rejectFileById(req.session.userId,req.session.roleId,req.session.retailerId,req.body.status,req.body.status1,function(err,result){
    if(err){
        next(err);
        return;
    }

    mailTemplates.rejectFile(req.session.firstName,req.session.userId,req.body.status1,function(error, resultMail) {
             if (error) {
                console.log("errorrrrrr",req.session.userId,error);
             }
             else 
                console.log("successful",resultMail);
        });
   // console.log(result);
    next();
   });
        
 },

 showRejectedFiles:function(req,res,next){
   // console.log("rejecTed portel",req.body);
    modelPortal.showRejectedFiles(req.session.userId,req.session.roleId,req.session.retailerId,function(err,resultRejectedFile){
        if(err){
            next(err);
            return ;
       }//console.log("ch");
      // console.log(resultRejectedFile);
       req.resultRejectedFile=resultRejectedFile;
       next();
    }

 );
},*/


rejectFileById: function(req,res,next){
   // console.log('rejectFileById in portal',req.body)
    modelPortal.rejectFileById(req.session.userId,req.session.roleId,req.session.retailerId,req.body.status,req.body.status1,function(err,result){
    if(err){
        next(err);
        return;
    }

    mailTemplates.rejectFile(req.session.firstName,result[0][0].userEmail,req.body.status1,function(error, resultMail) {
             if (error) {
                console.log("errorrrrrr",req.session.userId,error);
             }
             else 
                console.log("successful",resultMail);
        });
   // console.log(result);
    next();
   });
        
 },

 showRejectedFiles:function(req,res,next){
   // console.log("rejecTed portel",req.body);
    modelPortal.showRejectedFiles(req.session.userId,req.session.roleId,req.session.retailerId,function(err,resultRejectedFile){
        if(err){
            next(err);
            return ;
       }//console.log("ch");
      // console.log(resultRejectedFile);
       req.resultRejectedFile=resultRejectedFile;
       next();
    }

 );
},

attachDocFile: function(req,res,next){
      //  console.log('set Page Insert Document---- Portal',req.body)
      var parsedData = null;
         if (req.file != undefined) {
         var currfolder = req.body.currfolder;
       // console.log('inside reached');
        var now = Date.now();
        var fname = req.file.originalname;
       // console.log('fname is',fname);
        var exet = fname.split('.');
        var exe = exet[exet.length - 1];
        var tempPath = req.file.path,
            targetPath = path.resolve('./public/attach/' +exet[0] + '_' +now+'.' + exe);
           // console.log("path is  :" , targetPath);
 //           console.log("delete Path is :",deletePath);
            var strname =   exet[0]+'_'+now+ '.' + exe;
            fs.rename(tempPath, targetPath, function(err) {
                if (err) {
                   // console.log(err+' Index.JS   Router: attfile(Post) function:fs.rename ');
                       res.redirect('/breakdown');
                }
                else {

                    if (exe.toLowerCase() == 'doc' || exe.toLowerCase() == 'docx') {

                         var newpath = './public/attach/' + exet[0] + '_' + now + '.' + exe;
                            textract.fromFileWithPath(newpath, config, function(error, text) {

                                if (error) {
                                  //  blankentry(newpath, req);
                                    console.log(error);

                                } else {
                                    if (typeof text != undefined) {
                                        //console.log(text);
                                        var textLowerCase = text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g,'').replace(/ +/g, ' ').replace(/'/g,'').replace(/"/g,'').split(' ');
                         
                                        //  console.log(textLowerCase);
                                      

                                     parseAll(textLowerCase,req,strname,next);
                                                     next();
  // console.log(parsedData);

                                    } else {
                                        console.log('file cannot be parsed');
                                    }


                                }
                            });
                 }

                      else if (exe.toLowerCase() == 'pdf') { 
                                   var newpath = './public/attach/' + exet[0] + '_' + now + '.' + exe;
                        targetPath = path.resolve('./public/attach/' + exet[0] + '_' + now + '.' + exe);
                   
                          // res.redirect('/upload');


                            //console.log(absolute_path);
                            var processor = pdf_extract(targetPath, options, function(err) {
                                if (err) {
                                    console.log(err);
                                }
                            });
                            processor.on('complete', function(data) {
                                // console.log('start*************',data.text_pages[0],'*********',Date.now());
                                var text = '';
                                for (var i = 0; i < data.text_pages.length; i++) {
                                    text = text.concat(data.text_pages[i]);
                                }
                                //console.log(text);
                                        var textLowerCase = text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/ +/g, ' ').replace(/'/g,'').replace(/"/g,'').split(' ');
                                //  console.log(textLowerCase);
                            
                                 parseAll(textLowerCase,req,strname,next);
                                          next();



                  // console.log(parsedData);


                            });

                            processor.on('error', function(err) {

                              //  blankentry(newpath, req)
                                console.log(err);
                                //return callback(err);
                            });


                        }



                   else {
                        var industry=req.body.industry==null? '':req.body.industry.toString();
                        var business=req.body.business==null? '':req.body.business.toString();
                        var doctype=req.body.doctype==null? '':req.body.doctype.toString();
                        var tec=req.body.newTec==null? '':req.body.newTec.toString();
                        var restriction=req.body.rLevel==null? '':req.body.rLevel.toString();
                    
        modelPortal.attachDocFile(req.session.userId,req.session.retailerId,
                             strname,req.body.currfolder,fname,req.body.descbox,req.body.authname,
                            industry,business,req.body.title,doctype,tec,req.session.roleId,restriction,
                            req.body.industryhide,req.body.businesshide,req.body.doctypehide,req.body.newTechide,
                            req.body.rLevelhide,parsedData,function(err,result){
                                     //   console.log('set Page Insert Document---- model in Portal')

                          if(err){
                   next(err);
                    return;
                      }
         else{
          next(); 
              }
          });

             

                 }
 



    }

     });
   }
 },
  
    /* attachDocFile: function(req,res,next){
      //  console.log('set Page Insert Document---- Portal',req.body)
         if (req.file != undefined) {
         var currfolder = req.body.currfolder;
       // console.log('inside reached');
        var now = Date.now();
        var fname = req.file.originalname;
       // console.log('fname is',fname);
        var exet = fname.split('.');
        var exe = exet[exet.length - 1];
        var tempPath = req.file.path;
        console.log("saurav",tempPath);
        var targetPath = path.resolve('./public/attach/' +exet[0] + '_' +now+'.' + exe);
            console.log("path is  :" , targetPath);
 //           console.log("delete Path is :",deletePath);
            var strname =   exet[0]+'_'+now+ '.' + exe;
            fs.rename(tempPath, targetPath, function(err) {
                if (err) {
                   // console.log(err+' Index.JS   Router: attfile(Post) function:fs.rename ');
                       res.redirect('/breakdown');
                }
                else {
                        var industry=req.body.industry==null? '':req.body.industry.toString();
                        var business=req.body.business==null? '':req.body.business.toString();
                        var doctype=req.body.doctype==null? '':req.body.doctype.toString();
                        var tec=req.body.newTec==null? '':req.body.newTec.toString();
                        var restriction=req.body.rLevel==null? '':req.body.rLevel.toString();
                      //  console.log('successfully placed :',doctype,industry,business,tec);
                      //  console.log('hideeeeee :',req.body.industryhide,req.body.businesshide);

        
        modelPortal.attachDocFile(req.session.userId,req.session.retailerId,
                             strname,req.body.currfolder,fname,req.body.descbox,req.body.authname,
                            industry,business,req.body.title,doctype,tec,req.session.roleId,restriction,
                            req.body.industryhide,req.body.businesshide,req.body.doctypehide,req.body.newTechide,
                            req.body.rLevelhide,function(err,result){
                                     //   console.log('set Page Insert Document---- model in Portal')

                          if(err){
                next(err);
                return;
            }
        //   console.log(result);
           next();  
          });
       }
     })
   }
 },
*/

tableSearchBox: function(req,res,next){



req.body.searchbox = req.body.searchbox.replace(/ +/g,' ');

    console.log('tableSearchBox-----req.body',req.body,'--------',req.session.croleId)
   modelPortal.tableSearchBox((req.body.nb ||' '),(req.body.nd || ' '),(req.body.ni ||' '),(req.body.nt || ' '),(req.body.nr || ' '),req.body.searchbox.trim(),req.session.roleId,req.session.croleId,req.session.retailerId,function(err,resultSearchFile){
        if(err){
            next(err);
            return ;
       }
    


       var idarr = [];
resultSearchFile[0].forEach(function(element,index){
       idarr.push(element.id);

});

        resultSearchFile[1].forEach(function(element,index){

           if(idarr.indexOf(element.id)==-1){
              resultSearchFile[0].push(element);
       
        }
   });
       console.log('tableSearchBox in portal',resultSearchFile);


     // req.resultSearchFile=resultSearchFile;
       res.json(resultSearchFile[0]);
       //next();
    }

 );
 },





 /*tableSearchBox: function(req,res,next){
    console.log('tableSearchBox-----req.body',req.body,'--------',req.session.croleId)
   modelPortal.tableSearchBox((req.body.nb ||' '),(req.body.nd || ' '),(req.body.ni ||' '),(req.body.nt || ' '),(req.body.nr || ' '),req.body.searchbox.trim(),req.session.roleId,req.session.croleId,req.session.retailerId,function(err,resultSearchFile){
        if(err){
            next(err);
            return ;
       }console.log("ch");
       console.log('tableSearchBox in portal');
     // req.resultSearchFile=resultSearchFile;
       res.json(resultSearchFile[0]);
       //next();
    }

 );
 },*/

 filterFiledata: function(req,res,next){
                        var industry=req.body.ni==null? '':req.body.ni.toString();
                        var business=req.body.nb==null? '':req.body.nb.toString();
                        var doctype=req.body.nd==null? '':req.body.nd.toString();
                        var tec=req.body.nt==null? '':req.body.nt.toString();
    modelPortal.filterFiledata(business,doctype,industry,tec,req.session.roleId,req.session.croleId,function(err,result){
         if(err){
            next(err);
            return;
         }


console.log('***********************',result,'*********************************');



         res.json(result);
         next();
    });
 },
 viewFileDetails:function(req,res,next){
 
      console.log("edibuttom111--------------------------");
      modelPortal.viewFileDetails(req.session.userId,req.session.roleId,req.session.retailerId,req.body.id,function(err,result){
        if(err){
            next(err);
            return ;
        }
        console.log("ch");
        console.log(result);
        res.json(result);
        
    });
},
getAllVerticalValuesCustomRoles: function(req,res,next){
  modelPortal.getAllVerticalValuesCustomRoles(req.session.userId,req.session.roleId,req.session.retailerId,function(err,allCustomVerticalresult){
        if(err){
            next(err);
            return ;
        }
        console.log(allCustomVerticalresult);
      req.allCustomVerticalresult=allCustomVerticalresult;
      next();
    });
},
getRolesInfo : function(req,res,next){
      modelPortal.getRolesInfo(req.session.userId,req.session.roleId,req.session.retailerId,req.body.c_id,function(err,allRoleresult){
        if(err){
            next(err);
            return ;
        }
        console.log(allRoleresult);
       res.json(allRoleresult);
    });
},
 /*-------------------End Doc-----------------------------------------------------------*/
//--------------------------Project-WBS-------------------
 projectDetails: function(req, res, next) {
         modelPortal.getProjectDetails(req.session.userId,req.session.roleId,req.session.retailerId,
             function(err, result) {
                 if (err) {
                     next(err);
                 } else { //console.log('projectDetails --',result[0]);
                     req.projectResults=result[0];
              console.log('projectDetails --',req.projectResults);
             next();
                 }
             });
     },

     projectStatus: function(req, res, next) {
          
           modelPortal.projectStatus(req.body.status,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {

                     console.log('projects acc to status are ----',result);
                     res.json(result);
             }
         });
     },

     changeProjectStatus: function(req, res, next) {
          
           modelPortal.changeProjectStatus(req.body.pid,req.body.flag,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {

                     console.log('change project status are ----',result);
                     res.json('result');
             }
         });
     },

     addEditProject: function(req, res, next) {
        var query = require('url').parse(req.url, true).query;
        req.projectId=query.projectId;
        req.flagForProject=query.flag;
         
           modelPortal.addEditProject(req.projectId,req.flagForProject,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
                if(flag==1){
                    req.projectResults=result;
              console.log(req.projectResults)
             next();
                     
                 }
                 else{
req.projectResults=result;
              console.log(req.projectResults)
             next();


                 }
             }
         });
     },

      addEditPro: function(req, res, next) {
        
        var flag=req.body.flaghide;
        console.log('flaggggggggggggggggg------------',flag);

    var pid=req.body.idhide;
     console.log('piddddddddddddddd------------',pid);
    var pclient=req.body.pclient.toString();
    var ptech=req.body.ptech.toString();
    req.pname=req.body.pname;
    req.pcode=req.body.pcode;
    req.pdescription=req.body.pdescription;
    req.psdate=req.body.psdate;
    req.pedate=req.body.pedate;
    req.asdate=req.body.asdate;
    req.aedate=req.body.aedate;
    req.ptype=req.body.ptype;
    req.pstatus=req.body.pstatus;
    req.pcomplexity=req.body.pcomplexity;
    req.plocation=req.body.plocation;
    req.pcommercialhead=req.body.pcommercialhead;
    req.paccounthead=req.body.paccounthead;
    req.pmanager=req.body.pmanager;
    req.pteamlead=req.body.pteamlead;

           modelPortal.addEditPro(pid,req.pname, req.pcode, req.ptype, pclient, ptech,
            req.pdescription, req.psdate,  req.pedate,  req.asdate,  req.aedate,
            req.pstatus,  req.pcomplexity,  req.plocation, req.pcommercialhead,
            req.paccounthead, req.pmanager, req.pteamlead,
            req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {console.log('hi hi');
                next();
             }
         });
     },

     wbsDetails: function(req, res, next) {
         modelPortal.getWbsDetails(req.session.userId,req.session.roleId,req.session.retailerId,
             function(err, result) {
                 if (err) {
                     next(err);
                 } else { //console.log('projectDetails --',result[0]);
                     req.wbsResults=result[0];
              console.log('wbsDetails --',req.wbsResults);
             next();
                 }
             });
     },

     wbsStatus: function(req, res, next) {
          
           modelPortal.wbsStatus(req.body.status,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {

                     console.log('WBS acc to status are ----',result);
                     res.json(result);
             }
         });
     },

     changeWbsStatus: function(req, res, next) {
          
           modelPortal.changeWbsStatus(req.body.wbsid,req.body.flag,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {

                     console.log('change Wbs status are ----',result);
                     res.json('result');
                    next();
             }
         });
     },

     addEditWbs: function(req, res, next) {
        var query = require('url').parse(req.url, true).query;
        req.wbsid=query.wbsid;
        req.flagForProject=query.flag;
         
           modelPortal.addEditWbs(req.wbsid,req.flagForProject,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
                
                    req.wbsResults=result;
              console.log('addEditWbs----------------',req.wbsResults);
             next();
                     
             }
         });
     },

addEditWbsDetails: function(req, res, next) {
        req.proname=req.body.proname;
       // console.log('flag ',req.body.flaghide,' wbs id ',req.body.wbsidhide,' proname id ',req.body.proname);
        console.log('ddddddddd',req.body);
        req.wbshidden=req.body.wbshidden;
           modelPortal.addEditWbsDetails(req.body.assign,req.body.flaghide,req.body.wbsidhide,req.body.wbsname,req.body.wbscode,
            req.body.proname,
        req.body.wbsowner,req.body.wbspsdate,
        req.body.wbspedate,req.body.wbsasdate,req.body.wbsaedate,req.body.wbsstatus,req.body.wbseffort,req.body.wbseffort1,
        req.body.wbslocation,req.body.wbsType,req.body.typeValue,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {console.log('hi hi');
                next();
             }
         });
     },

     projectAddEdit: function(req, res, next) {
        console.log('piddddddd---',req.pid,'---flag----------',req.flag);
         
           modelPortal.projectAddEdit(req.pid,req.flag,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
                if(flag==1){
                    req.projectResults=result;
              console.log('qqqqqqqqqqqqqqqq',req.projectResults)
             next();
                     
                 }
                 else{
                req.projectResults=result;
              console.log('qqqqqqqqqqqqqqqq',req.projectResults)
             next();


                 }
             }
         });
     },

     projectAddEditDetails: function(req, res, next) {
        
        var flag=req.body.hdnId;
        console.log('flaggggggggggggggggg------------',flag);

    var pid=req.body.pid;
     console.log('piddddddddddddddd------------',pid);
     console.log('tax code------------',req.body.taxCode);
     console.log('poNumber------------',req.body.poNumber);
     console.log('manager------------',req.body.pmanager);
     console.log('teamlead------------',req.body.pteamlead);
    var pclient=req.body.pclient==null?'':req.body.pclient;console.log('client-----------',pclient);
    var ptech=req.body.ptech==null?'':req.body.ptech;console.log('tech-----------',ptech);
    var plocation=req.body.plocation==null?'':req.body.plocation;
    var pcomplexity=req.body.pcomplexity==null?'':req.body.pcomplexity;
    req.pname=req.body.completed;
  

           modelPortal.projectAddEditDetails(pid,req.body.pname, req.body.pcode, req.body.ptype, pclient, ptech,
            req.body.pdescription, req.body.psdate,  req.body.pedate,  req.body.asdate,  req.body.aedate,
            req.body.pstatus,pcomplexity,plocation, req.body.pcommercialhead,
            req.body.paccounthead, req.body.pmanager, req.body.pteamlead,
             req.body.completed,req.body.isBillable,req.body.taxCode,req.body.poNumber,

            req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {console.log('hi hi new projectttttttttttttttt');
             res.json(result);
                
             }
         });
     },


     projectWbs: function(req, res, next) {

        var query = require('url').parse(req.url, true).query;
        req.pid=query.pid;
        
        
     console.log('pid project WBS------------',req.pid);
   
           modelPortal.projectWbs(req.pid,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {console.log('project wbs');
             req.projectWbs=result;
                next();
             }
         });
     },

     projectAddEditDetailsWithFlag: function(req, res, next) {
        
        var flag=req.body.hdnId;
        console.log('whole data---',req.body);
        console.log('flaggggggggggggggggg------------',flag);
var tab=req.body.tabDetail;
        console.log('tabyyyyyyyyyyyyyyyyyyyyyyy------------',tab);

    var pid=req.body.pid;
     console.log('piddddddddddddddd------------',pid);
     console.log('tax code------------',req.body.taxCode);
     console.log('poNumber------------',req.body.poNumber);
     console.log('manager------------',req.body.pmanager);
     console.log('teamlead------------',req.body.pteamlead);
     console.log('status------------',req.body.pstatus);
    var pclient=req.body.pclient==null?'':req.body.pclient;console.log('client-----------',pclient);
    var ptech=req.body.ptech==null?'':req.body.ptech;console.log('tech-----------',ptech);
     var presource=req.body.presource==null?'':req.body.presource;
     var plocation=req.body.plocation==''?'0':req.body.plocation;console.log('plocation-----------',plocation);
     var pcomplexity=req.body.pcomplexity==''?'0':req.body.pcomplexity;console.log('pcomplexity-----------',pcomplexity);
     console.log('presource-----------',presource);
    req.pname=req.body.completed;
  

           modelPortal.projectAddEditDetailsWithFlag(pid,req.body.pname, req.body.pcode, req.body.ptype, pclient, ptech,presource,
            req.body.pdescription, req.body.psdate,  req.body.pedate,  req.body.asdate,  req.body.aedate,
            req.body.pstatus,pcomplexity, plocation, req.body.pcommercialhead,
            req.body.paccounthead, req.body.pmanager,
             req.body.completed,req.body.isBillable,req.body.taxCode,req.body.poNumber,tab,

            req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {console.log('hi hi new projectttttttttttttttt',result);
             res.json(result);
                
             }
         });
     },

     getAllWbsForProject: function(req, res, next) {

        var pid=req.body.pid;
        
        
     console.log('pid for getAllWbs------------',req.body.pid);
   
           modelPortal.getAllWbs(req.body.pid,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {console.log('project wbs');
             res.json(result);
             }
         });
     },

    //----------------------------------ASSIGNMENT---------------------------------------
getAssignment:  function(req, res, next) {
console.log('getAssignment')
         modelPortal.getAllAssignment(req.session.userId,req.session.roleId,req.session.retailerId, function(err, resultAssignment) {
            console.log('portal ki jai-----',resultAssignment);
             if (err) {

                console.log("error");
                 next(err);
                 return; 
             }

             else{
   console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
                req.allinfo1=resultAssignment;
                next();
             }
        
         });
     },

createEditAssignment:  function(req, res, next) {
console.log('createAssignment');
 var query = require('url').parse(req.url,true).query;
    var assignmentId=query.assignmentId;
      req.assignmentId=assignmentId;
    var flag=query.flag;
      req.flag=flag;

      console.log("assignmentId id ",assignmentId,"flag",flag);
         modelPortal.createEditAssignment(assignmentId,flag,req.session.retailerId, function(err, resultCreateAssignment){
            console.log('portal ki jai-----',resultCreateAssignment);
             if (err) {               
                console.log("error");
                 next(err);
                 return;
             }
             else{
                req.allinfo=resultCreateAssignment;         
                }
                next();
             
        
         });
     },

submitAssignment: function(req, res, next) {
         
          console.log("inside assignment adding ")
           modelPortal.submitAssignment(
            req.body.flag,
            req.body.assignmentId,
            req.body.procode,
            req.body.wbs,
            req.body.user,
            req.body.status,
            req.body.asdate,
            req.body.aedate,
             req.body.curdat,
            req.body.retailerid,
         function(err, result) {

            if(err){

                 next(err);
             } else {

          console.log("Added is done");
           next();
             }
         });
     },

changeAssignmentStatus: function(req, res, next) {
        

         var query = require('url').parse(req.url,true).query;
    var assignmentId=query.assignmentId;
    var flag=query.flag;
    req.flag=flag;
          console.log("inside change assignmnet status ",assignmentId);
           modelPortal.changeAssignmentStatus(
            flag,
            assignmentId,
         function(err, result) {
             if (err) {
                 next(err);
             } else {

          console.log("staus has been changed");
           next();
             }
         });
     },

     //------------------------------------------Asset----------------------------------------------
     

     getViewFurniture:function(req, res, next){
      modelPortal.getFurniture(req.session.firstname,req.session.roleid,function(error, resultFurniture){
            if(error){
              next(error);
                return;
            }
            req.resultFurniture=resultFurniture;
            next();
        });
    },
    //new for hardware
    editHardware:function(req,res,next){
        console.log('---------in editHArdware');
        modelPortal.editHardware(req.body.id,function(error,result){
            if(error){
                next(error);
            }
            req.resulteditHardware=result;
            next();
        });
    },
//new 4 hardware
    updateHardware:function(req,res,next){
        console.log('----------Hardware in update',req.body);
        modelPortal.updateHardware('null',req.body.order,
    req.body.qty,req.body.Deliverydate,
    req.body.vendor,req.body.invoiceAmt,
    req.body.Invoicedate,req.body.invoiceNo,
    req.body.type,
    req.body.id,function(error,result){
            if(error){ 
                console.log ('error');
                next(error);
            }
            console.log("",result)
            req.resultupdatehardware=result;
            next();
        });
    },
//new4hardware
getViewHardware:function(req,res,next){
    modelPortal.getHardware(req.session.firstname,req.session.roleid,function(error,resultHardware){
        if(error){
            next(error);
            return;
        }
        req.resultHardware=resultHardware;
        next();
    });
},
    getViewSoftware: function(req,res,next){
        modelPortal.getSoftware(req.session.firstname,req.session.roleid,function(error, resultSoftware){
            if(error){
                next(error);
                return;
            }
            req.resultSoftware=resultSoftware;
            next();
        });
    },
    addFurniture: function(req, res, next) { console.log('in submit bvalues', req.body);
        modelPortal.addFurniture('null',req.body.order,
            req.body.no,
            req.body.Deliverydate,req.body.vendor,
            req.body.invoiceNo,req.body.Invoicedate,
            req.body.invoiceAmt,req.body.typel,
            req.body.uprice,
            req.body.color,req.body.brand,'1','furniture', function(error, result) {
                if (error) {
                    next(error);
                } else 
                {
                    req.resultFurniture=result;
                    next();
                }
         });
     },
     addHardware:function(req,res,next){
        modelPortal.addHardware(req.body.htype,req.body.order,req.body.no,
            req.body.Deliverydate,req.body.vendor,req.body.invoiceAmt,
            req.body.Invoicedate,req.body.invoiceNo,
        req.body.lineString,req.body.compString,req.body.comps,'0',function(error){
             if(error){
            console.log('errorrrrrr'+error)
              next(error);
            return;}
            next();
        });
    },

     addSoftware: function(req, res, next) { console.log('in add Software', req.body.des);
        modelPortal.addSoftware('null',req.body.stype,
            req.body.vendor,req.body.Invoicedate,
            req.body.name,
            req.body.des,
            req.body.test5,
            req.body.key,req.body.users,
            req.body.edate,req.body.pdate,          
            '1','software', function(error, result) {
                if (error) {
                    next(error);
                } else 
                {console.log('add soft--------portal',result);
                    req.resultSoft=result;
                    next();
                }
         });
     },

    addStation: function(req,res,next){
        modelPortal.addStationary('null',req.body.order, req.body.no,req.body.Deliverydate,
            req.body.vendor,
            req.body.invoiceAmt,req.body.Invoicedate,
            req.body.invoiceNo,req.body.typel,
            '1','stationary',  function(error, result) {
                if (error) {
                    next(error);
                } else 
                {
                    req.resultstation=result;
                    next();
                }
         });
     },

    deleteData: function(req,res,next){
        console.log('in delete');
        modelPortal.deleteData(req.body.id,function(error,result){
            if(error){
                next(error);
            }else{
            req.resultdelete=result;
            next();}
        });
    },

    updateFurniture:function(req,res,next){
        console.log('in update',req.body);
        modelPortal.updateData('null',req.body.order,
    req.body.qty,req.body.Deliverydate,
    req.body.vendor,req.body.invoiceAmt,
    req.body.Invoicedate,req.body.invoiceNo,
    req.body.typel,
    req.body.uprice,
    req.body.color,
    req.body.brand,
    '1',req.body.id,function(error,result){
            if(error){ 
                console.log ('error');
                next(error);
            }
            console.log("finallllllll",result)
            req.resultupdatedata=result;
            next();
        });
    },

    updateStation:function(req,res,next){
        console.log('in update station',req.body);
        modelPortal.updatest('null',req.body.order,
    req.body.quantity,req.body.Deliverydate,
    req.body.vendor,req.body.invoiceAmt,
    req.body.Invoicedate,req.body.invoiceNo,
    req.body.typel,
    '2',req.body.id,function(error,result){
            if(error){ 
                console.log ('error');
                next(error);
            }
            console.log("finallllllll",result)
            req.resultupdatest=result;
            next();
        });
    },

    updateSoft:function(req,res,next){
        console.log('in update software',req.body);
        modelPortal.updatesoft('null',
            req.body.htype,
    req.body.vendor,req.body.Invoicedate,
    req.body.name,req.body.test5,
    req.body.des,req.body.key,
    req.body.users,
    req.body.pdate, req.body.edate,
    '4',req.body.id,function(error,result){
      if(error){ 
        console.log ('error');
        next(error);
      }
        console.log("software updated------------",result)
        req.resultupdatesoft=result;
        next();
      });
    },

    editData:function(req,res,next){
        console.log('in edit');
        modelPortal.editData(req.body.id,function(error,result){
            if(error){
                next(error);
            }
            req.resultedit=result;
            next();
        });
    },

    getViewStationary: function(req,res,next){
      modelPortal.getStationary(req.session.firstname,req.session.roleid,function(error,resultStationary){
        if (error){
          next(error);
          return;
        }
        req.resultStationary=resultStationary;
        next();
      });
    },

    getComp:function(req,res,next){
      console.log('tid'+req.body.atid);
      modelPortal.getType(req.body.atid,function(error, resultHardwareType){
        console.log(resultHardwareType);
        if(error){
          console.log('errorrrrrr'+error)
          next(error);
          return;
        }
        console.log('Reslult is ',resultHardwareType[0])
        req.resultType=resultHardwareType;
        next();
      });
    },
    
    getDataAsset:function(req,res,next){
      modelPortal.getTypeAndSubtype(function(error,resultTypeSubtype){
        if(error){
          console.log('errorrrrrr'+error)
          next(error);
          return;
        }
          req.resultTypeSubtype=resultTypeSubtype;
          next();
      });
    },
    getMap:function(req,res,next){
      modelPortal.getMap(req.body.acid,function(error,resultMap){
        if(error){
          next(error);
          return;
        }
          req.resultMap=resultMap;
          next();
      });
    },
    getAttribute:function(req,res,next){
        modelPortal.getAttribute(req.body.acid,function(error,resultAttribute){
            if(error){
              next(error);
            return;}
            req.resultAttribute=resultAttribute;
            next();
        });
    },
    getAccessories:function(req,res,next){
        modelPortal.getAccessories(req.body.cid,function(error,resultType){
           if(error){
              next(error);
            return;}
            req.resultType=resultType;
            next();   
        });
    },
    getAtt:function(req,res,next){
        console.log('getAtttttttttt');
        modelPortal.getAtt(req.body.atid,function(error,result){
             if(error){
              next(error);
            return;}
            req.resultType=result;
            next();  
        });
    }, saveAssignment:function(req,res,next){
        modelPortal.saveAssignment(req.body.cid,req.body.lid
            ,req.body.uid,req.body.tid,req.body.aflag,req.body.adate,
            function(error){
               if(error){
              next(error);
            return;}
            next();   
            });
    },
getUnassigned:function(req,res,next){
        modelPortal.getUnassigned(req.body.atid,req.body.acid,function(error,resultUnassigned){
           if(error){
              next(error);
            return;}
            req.resultType=resultUnassigned;
            next(); 
        });
    },
    saveAssetMap:function(req,res,next){
modelPortal.saveAssetMap(req.body.ACID,req.body.pri,req.body.priAtt,req.body.sec,req.body.secAtt,function(error){
if(error){
              next(error);
            return;}
            next(); 
        });
},
getAssignedAssets:function(req,res,next){
modelPortal.getAssignedAssets(req.body.atid,req.body.uid,function(error,resultAssigned){
if(error){
              next(error);
            return;}
            req.resultAssigned=resultAssigned;
            next(); 
});
},
//--------------------------------------asset end---------------------------------
    //---------------------------------Expense------------------------------------------
   getExpenseWeekBy: function(req, res, next) {
         modelPortal.getExpenseWeekBy(req.session.userId,req.body.date, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result);
             res.json(result);
             next();
         });
     },

      selectExpensebyId: function(req, res, next) {
         modelPortal.toSelectExpensebyId(req.body.id,req.body.codeId,req.session.retailerId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result);
             res.json(result);
             next();
         });
     },

      ShowExpenseapprover: function(req, res, next) {
         modelPortal.toShowExpenseapprover(req.body.expclaimId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
            console.log(result); 
             res.json(result);
             next();
         });
     },

        selectByExpenseUser: function(req, res, next) {
            console.log(req.body);
         modelPortal.toSelectByExpenseUser(req.body.userId,req.session.roleId,req.body.date1,req.session.userId ,function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
            console.log(result); 
             res.json(result);
             next();
         });
     },

        insertExpenseAttachment: function(req, res, next) {
        console.log('eeeeeeeeeeeeeeeeeee')
            var filename;
    var targetPath;
    var fname;
    if(req.file!=undefined)
    {
        var now = Date.now();
    fname=req.file.originalname;
        var exet= fname.split('.');
    var exe= exet[exet.length-1];
        var ch=exet[0]+'_'+now;
    var tempPath = req.file.path,
        filename=ch+'.'+exe;
        targetPath = path.resolve('./public/attach/'+filename);
        if(1)
        {
      fs.rename(tempPath, targetPath, function(err){
        if (err) throw err;
        console.log("Upload completed!");
      });
    }
    }
         modelPortal.insertAttachmentExpense(  req.body.claimedid,
            targetPath,
            filename,
            fname,
            req.session.userid,
            req.session.userid, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result)
             req.resultExpensenew = result;
             next();
         });
     },

        getNewExpense: function(req, res, next) {
        console.log('eeeeeeeeeeeeeeeeeee')
         modelPortal.getAllNewExpense(req.session.userId,req.session.retailerId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result)
             req.resultExpensenew = result;
             next();
         });
     },

     submitExpense: function(req, res, next) {
        console.log('eeeeeeeeeeeeeeeeeee',req.body.expClaim);
         modelPortal.tosubmitExpense(req.body.expClaim,req.body.comments, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result)
            // req.resultExpensenew = result;
            res.json('suceess');
             next();
         });
     },

      selectExpense: function(req, res, next) {
        console.log('eeeeeeeeeeeeeeeeeee');
         modelPortal.toSelectExpense(parseInt(req.body.typeid),parseInt(req.body.id),parseInt(req.body.expensecid), function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result)
            // req.resultExpensenew = result;
            res.json(result);
             next();
         });
     },

        deleteExpense: function(req, res, next) {
        console.log('eeeeeeeeeeeeeeeeeee');
         modelPortal.toDeleteExpense(req.body.typeid,req.body.id,req.body.expclid,req.session.userId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result)
            //req.resultExpensenew = result;
            res.json('suceess');
             next();
         });
     },

        approveExpense: function(req, res, next) {
        console.log('eeeeeeeeeeeeeeeeeee',req.body.transId);
         var status=req.body.status1;
         if(status==0){
         var reason=req.body.remark;
         mailTemplates.rejectExpense(req.body.expemail,reason,function(error, resultMail){});
         }
        if(status==1){
         var reason=req.session.firstname;
         mailTemplates.approveExpense(req.body.toemail,req.session.firstName,function(error, resultMail){});
       }
         modelPortal.toApproveExpense(req.body.claimarray,req.session.roleId,req.session.userId,req.body.status1,req.body.transId,req.body.remark, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result)
            // req.resultExpensenew = result;
            res.json('suceess');
             next();
         });
     },

       getMaxBillExpense: function(req, res, next) {
        console.log('eeeeeeeeeeeeeeeeeee',req.body.Id);
         modelPortal.togetMaxBillExpense(req.body.Id,req.session.retailerId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result)
            // req.resultExpensenew = result;
            res.json(result);
             next();
         });
     },

        selectMasterExpense: function(req, res, next) {
        console.log('eeeeeeeeeeeeeeeeeee',req.body.expClaim);
         modelPortal.toSelectMasterExpense(req.body.expclaimId,req.session.retailerId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result)
            // req.resultExpensenew = result;
            res.json(result);
             next();
         });
     },

      getExpense: function(req, res, next) {
        console.log('eeeeeeeeeeeeeeeeeee')
         modelPortal.getAllExpense(req.session.userId,req.session.retailerId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result)
             req.resultExpense = result;
             next();
         });
     },

      reSubmitExpense: function(req, res, next) {
        console.log('eeeeeeeeeeeeeeeeeee');
        console.log(req.body.expclaimId);
         modelPortal.toReSubmitExpense(req.body.expclaimId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result)
             res.json('suceess');
             next();
         });
     },

insertExpense: function(req, res, next) {
    var query = require('url').parse(req.url,true).query;
    var exp =query.expid;
    var flag=req.body.edit;
    console.log(req.body);
    if((exp==1)&&(flag==0)){
    modelPortal.insertHotelExpense(req.body.hotelexpensetypeid,req.body.hoteltrip,req.body.fromDate,req.body.toDate,req.body.hotelName,req.body.hotelReason,req.body.hotelifOther,req.body.hotelperDayRate,req.body.hotelTotalDay,req.body.hotelCurrency,req.body.htex,req.session.userId,req.session.userId,req.session.retailerId,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpensenew = result;
             next();
    });
}

    if((exp==1)&&(flag==1)){
    modelPortal.updateHotelExpense(req.body.hotelexpensetypeid,req.body.hoteltrip,req.body.fromDate,req.body.toDate,req.body.hotelName,req.body.hotelReason,req.body.hotelifOther,req.body.hotelperDayRate,req.body.hotelTotalDay,req.body.hotelCurrency,req.body.htex,req.session.userId,req.session.userId,req.body.exthotel,req.body.extclaimhotel,function(errorRoles, result){
    if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpense = result;
             next();
    });
}

  if((exp==2)&&(flag==0)){
    modelPortal.insertTravelExpense(req.body.travelexpensetypeid,req.body.traveltrip,req.body.travelFromDate,req.body.travelToDate,req.body.travelType,req.body.travelReason,req.body.travelIfNot,req.body.TravelRatePerDay,req.body.travelTotalDay,req.body.travelCurrency,req.body.travelex,req.session.userId,req.session.userId,req.session.retailerId,function(errorRoles, result){
    if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpense = result;
             next();
    });
  }

    if((exp==2)&&(flag==1)){
    modelPortal.updateTravelExpense(req.body.travelexpensetypeid,req.body.traveltrip,req.body.travelFromDate,req.body.travelToDate,req.body.travelType,req.body.travelReason,req.body.travelIfNot,req.body.TravelRatePerDay,req.body.travelTotalDay,req.body.travelCurrency,req.body.travelex,req.session.userId,req.session.userId,req.body.exthotel,req.body.extclaimhotel,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpense = result;
             next();
    });
  }

   if((exp==3)&&(flag==0)){
   modelPortal.insertFoodExpense(req.body.travelexpensetypeid,req.body.foodtrip,req.body.foodFromDate,req.body.foodToDate,req.body.foodReason,req.body.foodCurrency,req.body.foodtex,req.session.userId,req.session.userId,req.session.retailerId,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpense = result;
             next();
    });
  }

    if((exp==3)&&(flag==1)){
   modelPortal.updateFoodExpense(req.body.travelexpensetypeid,req.body.foodtrip,req.body.foodFromDate,req.body.foodToDate,req.body.foodReason,req.body.foodCurrency,req.body.foodtex,req.session.userId,req.session.userId,req.body.exthotel,req.body.extclaimhotel,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpense = result;
             next();
    });
  }

   if((exp==4)&&(flag==0)){
   modelPortal.insertPhoneExpense(req.body.travelexpensetypeid,req.body.phonetrip,req.body.phoneFromDate,req.body.phoneToDate,req.body.phoneReason,req.body.phoneCurrency,req.body.phoneExp,req.session.userId,req.session.userId,req.session.retailerId,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpense = result;
             next();
    });
  }

    if((exp==4)&&(flag==1)){
   modelPortal.updatePhoneExpense(req.body.travelexpensetypeid,req.body.phonetrip,req.body.phoneFromDate,req.body.phoneToDate,req.body.phoneReason,req.body.phoneCurrency,req.body.phoneExp,req.session.userId,req.session.userId,req.body.exthotel,req.body.extclaimhotel,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpense = result;
             next();
    });
  }

    if((exp==5)&&(flag==0)){
    modelPortal.insertRsdExpense(req.body.travelexpensetypeid,req.body.rsdtrip,req.body.rsdFromDate,req.body.rsdToDate,req.body.rsdvehicle,req.body.rsdReason,req.body.rsdifnot,req.body.rsdKmRate,req.body.rsdtotal,req.body.rsdCurrency,req.body.rsdtex,req.session.userId,req.session.userId,req.session.retailerId,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpense = result;
             next();
    });
  }

    if((exp==5)&&(flag==1)){
    modelPortal.updateRsdExpense(
        req.body.travelexpensetypeid,
        req.body.rsdtrip,req.body.rsdFromDate,
        req.body.rsdToDate,req.body.rsdvehicle,
        req.body.rsdReason,req.body.rsdifnot,req.body.rsdKmRate,
        req.body.rsdtotal,req.body.rsdCurrency,req.body.rsdtex,
        req.session.userId,req.session.userId,parseInt(req.body.exthotel),
        parseInt(req.body.extclaimrsd),function(errorRoles, result){
    if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpense = result;
             next();
    });
  }

    if((exp==6)&&(flag==0)){
   modelPortal.insertPerdiemExpense(req.body.travelexpensetypeid,req.body.perdiemtrip,req.body.perdiemFromDate,req.body.perdiemToDate,req.body.perdiemHotelName,req.body.perdiemReason,req.body.perdiemIfNot,req.body.perdiemRate,req.body.perdiemtotal,req.body.perdiemCurrency,req.body.perdiemtex,req.session.userId,req.session.userId,req.session.retailerId,function(errorRoles, result){
    if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpense = result;
             next();
    });
  }

   if((exp==6)&&(flag==1)){
   modelPortal.updatePerdiemExpense(req.body.travelexpensetypeid,req.body.perdiemtrip,req.body.perdiemFromDate,req.body.perdiemToDate,req.body.perdiemHotelName,req.body.perdiemReason,req.body.perdiemIfNot,req.body.perdiemRate,req.body.perdiemtotal,req.body.perdiemCurrency,req.body.perdiemtex,req.session.userId,req.session.userId,req.body.exthotel,req.body.extclaimhotel,function(errorRoles, result){
    if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpense = result;
             next();
    });
  }

  if((exp==7)&&(flag==0)){
    modelPortal.insertOtherExpense(req.body.travelexpensetypeid,req.body.othertrip,req.body.otherFromDate,req.body.otherToDate,req.body.otherReason,req.body.otherCurrency,req.body.othertex,req.session.userId,req.session.userId,req.session.retailerId,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpense = result;
             next();
    });
  }

    if((exp==7)&&(flag==1)){
    modelPortal.updateOtherExpense(req.body.travelexpensetypeid,req.body.othertrip,req.body.otherFromDate,req.body.otherToDate,req.body.otherReason,req.body.otherCurrency,req.body.othertex,req.session.userId,req.session.userId,req.body.exthotel,req.body.extclaimhotel,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpense = result;
             next();
    });
  }


   /*b(q,function(err,result){
        if (err) {
                console.log("Error in /choosemodules",err);
                res.render('/error',{message:"Error in Retriving Bugs and Details from Database"});
            } else {
                res.redirect('/expenseIndex/expensenew?expin=0');
        //res.render('expense/expenseHome',{user:req.session.firstname,roleid:req.session.roleid,logo:req.session.logo,expenseType:result[0],expenseDetails:result[1],currency:result[2],totalExpense:result[3],bilableusers:result[4],Ex:1});      
                    }   
    })*/
         /**/
},

       insert_Expense: function(req, res, next) {
            var master=req.body.edit;
             if(master==0){
         modelPortal.toInsert_ExpenseType(req.body.code1,req.body.desc,req.body.billM,req.body.billa,req.session.userId,req.session.userId,req.session.retailerId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
            result=result[0];
              res.json(result);
             next();
         });
    }
    else{
         modelPortal.toUpdate_ExpenseType(req.body.code1,req.body.desc,req.body.billM,req.body.billa,req.session.userId,req.body.active,req.body.idmaster,req.session.retailerId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             result=result[0];
              res.json(result);
             next();
         });
     }
     },

     select_ExpenseMaster: function(req, res, next) {
         modelPortal.toSelect_ExpenseMaster(req.session.retailerId,function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultExpensemaster = result;
             console.log(req.resultExpensemaster);
             next();
         });
     },

     remarkAndCommentExpense: function(req, res, next) {
         modelPortal.toRemarkAndCommentExpense( req.body.ids ,function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
              console.log(result);
             res.json(result);
             next();
         });
     },

          checkWbsDate: function(req, res, next) {
        console.log(req.body);
         modelPortal.toCheckWbsDate(req.body.wbsId,req.body.startDate,req.body.endDate, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result[0]);
             res.json(result[0]);
             next();
         });
     },

       checkExpenseSubmitOrNot: function(req, res, next) {
        console.log(req.body);
         modelPortal.toCheckExpenseSubmitOrNot(req.session.userId,req.session.retailerId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result[0]);
             res.json(result[0]);
             next();
         });
     },


      reSubmitExpenseforCopy: function(req, res, next) {
        console.log('eeeeeeeeeeeeeeeeeee');
        console.log(req.body.expclaimId);
         modelPortal.toReSubmitExpenseforCopy(req.body.expclaimId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             console.log(result)
             res.json('suceess');
             next();
         });
     },
/*end*/
//-------------------------------------------------------------------
setaddStatuss: function(req, res, next) {
       // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",req.body.tablen);
         modelPortal.setaddStatuss(req.session.userId,req.session.roleId, req.session.retailerId,function(err, result) {
             if (err) {
                 next(err);

             } else {
                //  console.log("bugMasterSub d ata  ---  ",result[0]);
                req.bugMasterSubData=result[0];
                next();
             }
         });
     },
    
     settingdata: function(req, res, next) {
        
         modelPortal.settingdata(req.session.userId,req.session.roleId, req.session.retailerId,function(err, result) {
             if (err) {
                 next(err);

             } else {
             //    console.log("master setting data portal",result);
               req.bugMaster=result[0];
               req.otherMaster=result[1]
               next();
             }
         });

     },
     getothermaster:function(req, res, next) {
        
         modelPortal.getothermaster(req.session.userId,req.session.roleId, req.session.retailerId,function(err, result) {
             if (err) {
                 next(err);

             } else {
               //  console.log("getothermaster",result);
                //res.json(result[0]);
             }
         });
     },
     selectStatus: function(req, res, next) {
        console.log("qwer");
         modelPortal.selectStatus(req.session.userId,req.session.roleId,req.session.retailerId,req.body.id,function(err, result) {
             if (err) {
                 next(err);

             } else {
                // console.log("qwerty",result);
                res.json(result[0]);
             }
         });
     },
     updateStatus: function(req, res, next) {
        console.log("Update master : Body Data : ",req.body);
         modelPortal.updateStatus(req.body.code, req.body.desc,req.session.userId,req.body.active,req.body.id,req.session.retailerId,req.body.crate,function(err, result) {
             if (err) {
                 next(err);

             } else {
                 console.log("Update Status Portal result",result);
                res.json(result);
             }
         });
     },
     addStatus: function(req, res, next) {
        console.log("addstatus is req.body data ",req.body);
         modelPortal.addStatus(req.body.code, req.body.desc,req.body.currType,req.body.crate,req.session.userId,req.session.retailerId ,function(err, result) {
             if (err) {
                 next(err);

             } else {
                console.log("fddsfsdfsdf[[[");
                 console.log("add ststus is ",result);
                res.json(result);
             }
         });
     },


/*-----------------------------------------------------holiday------------------------------------------------------------------------*/
holidayhome: function(req,res,next){
      console.log(req.body);
      modelPortal.holidayhome(req.session.userId,req.session.roleId, req.session.retailerId,function(err, resultHoliday) {
             if (err) {
                 next(err);

             } else {
               //  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbb",resultHoliday);
                 req.resultHoliday = resultHoliday;
                 next();
             }
         });
      },
selectHolidaybyId: function(req,res,next){
      modelPortal.selectHolidaybyId(req.session.userId,req.session.roleId, req.session.retailerId,req.body.id,function(err,result){
          if(err){
            next(err);
          }
          else
          {
             res.json(result[0]);
          }
      });

   },

updateHoliday: function(req,res,next){
    modelPortal.updateHoliday(req.session.userId,req.session.roleId, req.session.retailerId,req.body.id,req.body.hname,req.body.hdate,function(err,result){
          if(err){
            next(err);
          }
          else
          {
             res.json(result);
          }
      });
   },

   attachExcelfile: function(req,res,next){
    console.log("attachExcelfile=================portral",req.busboy);
 form({
      BuHrMap: {
        filename: true,
    required: true
      }   
    }),function(req, res, next) {
      var filename = req.files.BuHrMap.path;
      console.log("Filename````````````````",req.file);
      excelParser.parse({
      inFile: filename,
      worksheet: 1
    }, function(err, results) {
     if (err)
        {
         console.log("Error in excelfile");        
          res.redirect('/manager/uploadBuHrMap?errorMsg=1');
        }
      else {
  var Excelheader=results[0];
            var dbHeader=['Present LOB','Present BU','Zone','BU HR Code','BU HR Name'];
            console.log(dbHeader)
                   console.log(Excelheader)
    var is_same = Excelheader.length == dbHeader.length && Excelheader.every(function(element, index) {
       console.log(element)
                   console.log(dbHeader[index])
    return element.trim() === dbHeader[index].trim();
    });
console.log("---------result -------------------",result);
   }
  });

    };
  },

 
/*    busboy(),
    form({
        template: {
            filename: true,
            required: true
        },
        selected_template: {
            required: true
        },
        sheet_number: {
            required: true
        },
        header_row_number: {
            required: true
        },
        merchant_id: {
            required: true
        }
    }),
    function(req, res, next) {
        if (req.body.path == undefined) {
            req.body.path = '';
        } else {
            req.body.path = req.body.path;
        }
          console.log("in Attach Excel File Portal-----------in function");
        var d = new Date();
        var currentTime = new Date();

        var currentOffset = currentTime.getTimezoneOffset();

        var ISTOffset = 330;   // IST offset UTC +5:30 

        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

        req.session.stime=ISTTime;
        console.log('req.session.stime',req.session.stime)

        var filename = req.files.template.path;
        console.log("file name data -------------",filename);
        req.session.flnm = req.body.oname;


        var sheetNumber = parseInt(req.body.sheet_number);
        var headerRowNumber = parseInt(req.body.header_row_number) - 1;
        req.session.selectedTemplate = req.body.selected_template;
        req.body.id = parseInt(req.body.id, 10);
        if (sheetNumber) {
            excelParser(filename, sheetNumber, headerRowNumber, req, res);
        }

    };
}

    
    /*console.log('----------------',req.body,req.file);
    if (req.file != undefined) {
        excelParser.worksheets({
  inFile: req.file
}, function(err, worksheets){
  if(err) console.error(err);
  consol.log(worksheets);
});*/
/*        var res = {};  
converter({  
  input: req.file, 
  output: null
}, function(err, result) {
  if(err) {
    console.error(err);
  } else {
    for (var key = 1; key >= result.length; key++) {
res[result[key]["Symbol"]] = result[key]["Currency"];  
    };

    for(var i in res) {
      if(res.hasOwnProperty(i)) {
        console.log("<option value=\"" + i + "\">" + res[i] + "</option>");
      }
    }
  }
});}}
       /*var obj = xlsx.parse(__dirname + '/myFile.xlsx');
 
        var obj = xlsx.parse(fs.readFileSync(__dirname + '/holiday.xlsx'));
       var data = [];
       var buffer = xlsx.build([{name: "mySheetName", data: data}]);
        function convertToJSON(array) {
                 var first = array[0].join()
                 var headers = first.split(',');
  
                 var jsonData = [];
                 for ( var i = 1, length = array.length; i < length; i++ )
                    {
   
                         var myRow = array[i].join();
                         var row = myRow.split(',');
    
                         var data = {};
                 for ( var x = 0; x < row.length; x++ )
                    {
                       data[headers[x]] = row[x];
                    }
                jsonData.push(data);
 
        }
       return jsonData;*/
  
       /* var sheet_name_list = workbook.SheetNames;
        sheet_name_list.forEach(function(y) { 
        var worksheet = workbook.Sheets[y];
        for (z in worksheet) {
                 if(z[0] === '!') continue;
                }
              });
        XLSX.writeFile('./public/attach/', 'out.xlsx');
        xls('holiday.xlsx', function(err, data) {
               if(err) throw err;
        });*/
     
 
/*  modelPortal.attchExcelfile(req.session.userId,req.session.roleId, req.session.retailerId,function(err,result){

    });
*/   
 changeClientStatus: function(req, res, next) {
          
           modelPortal.changeClientStatus(req.body.cid,req.body.flag,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {

                     console.log('change client status are ----',result);
                     res.json('result');
             }
         });
     },
 getClientStatus: function(req, res, next) {
        req.clientid=0;
  
         modelPortal.getAllClientStatus(req.clientid, req.session.roleId, req.session.retailerId,
            req.body.status, function(err, resultClient) {
             if (err) {
                 next(err);
                 return;
             }
             //result=resultClient[2];
             res.json(resultClient[0]);
         });
     },
     getUser: function(req, res, next) {
         modelPortal.getAllUsers(req.userid,req.session.roleId,req.session.retailerId,function(err, resultUsers) {
             if (err) {
                 next(err);
                 return;
             }
             req.resultUsers = resultUsers;
             next();
         });
     },


     getRole: function(req, res, next) {
         modelPortal.getAllRoles(req.session.userId, req.session.roleId, req.session.retailerId, function(errorRoles, resultRoles) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             req.resultRoles = resultRoles;
             next();
         });
     },
      getCustomRoleforUser:function(req, res, next) {
         modelPortal.getAllCustomRoles(req.session.userId, req.session.roleId, req.session.retailerId,req.userid,1, function(errorCustomRoles, resultCustomRoles) {
             if (errorCustomRoles) {
                 next(errorCustomRoles);
                 return;
             }
             req.resultCustomRoles = resultCustomRoles;
             next();
         });
     },

     getCustomRole: function(req, res, next) {
         modelPortal.getAllCustomRoles(req.session.userId, req.session.roleId, req.session.retailerId,req.userid,0, function(errorCustomRoles, resultCustomRoles) {
             if (errorCustomRoles) {
                 next(errorCustomRoles);
                 return;
             }
             req.resultCustomRoles = resultCustomRoles;
             next();
         });
     },

     getDepartment: function(req, res, next) {
        console.log('getDepartment')
         modelPortal.getAllDepartment(req.depId, req.session.roleId, req.session.retailerId, function(err, resultDepartment) {
             if (err) {
                 next(err);
                 return;
             }
             console.log(resultDepartment)
             req.resultDepartment = resultDepartment;
             next();
         });
     },

     getLevel: function(req, res, next) {
         modelPortal.getAllLevel(req.levelId, req.session.roleId, req.session.retailerId, function(err, resultLevel) {
             if (err) {
                 next(err);
                 return;
             }
             req.resultLevel = resultLevel;
             next();
         });
     },
      home: function(req, res, next) {
         modelPortal.getUserDetails(req.session.userId,req.session.roleId, req.session.retailerId, function(err, result) {
             if (err) {
                 next(err);

             } else {
                req.result1=result;
            console.log("resultttttttttttttttt",req.result1);
             req.session.url = req.url;
             next();
             }
         });
     },  
     
     userStatus: function(req, res, next) {
          
           modelPortal.userStatus(req.body.status,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {

                     console.log('Users status are ----',result);
                     res.json(result);
             }
         });
     },
         changeUserStatus: function(req, res, next) {
          
           modelPortal.changeUserStatus(req.body.uid,req.body.flag,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {

                     console.log('change user status are ----',result);
                     res.json('result');
             }
         });
     },


addUser: function(req, res, next) {
        console.log('details to add user is---');
        var modules=req.body.modules==null?'':req.body.modules;
        console.log('desfrgresgfresfgvreswfgv',modules);
      var inNum=req.body.inNum==''?'0':req.body.inNum;
      var billingRate=req.body.billingRate==''?'0':req.body.billingRate;
      var rtype=req.body.rtype==''?'':req.body.rtype;
        console.log('all modules--',modules);
         var randomPassword = randomString(10);

         modelPortal.addUser(req.body.timesheet,req.body.isClient,req.body.clientId,req.body.isbill,req.body.expense,inNum,
            req.body.hdnUserId, req.body.firstName, req.body.lastName, req.body.emailId, req.body.contactNumber, billingRate,
             req.body.userRole, req.body.manager, req.body.defaultModule, req.body.customRole, randomPassword,
            req.body.ecode,req.body.designation,req.body.level,modules,req.body.doj,req.body.dob,req.body.doc,rtype,
          req.session.userId, req.session.roleId, req.session.retailerId,req.body.crole,req.body.hrRole,function(err, result) {
             if (err) {
                console.log("lollllllllllllll");
                 next(err);
             } else {
                //console.log("mail result is ", result,result[0][0].flag,flag.inserted);
                 if (result[0][0].flag == flag.inserted) {
                  //   console.log("lollllllllllllll  success");
                     mailTemplates.retailerRegistration(req.body.firstName, req.body.emailId, randomPassword, function(error, resultMail) {
                         if (error) {
                             result[0][0].flag = flag.mailFailed;
                             console.log("Error :    ",error);
                         }
                         else{  
                                 console.log("Success :    ",result);
                         }
                     });
                 }
                  
                 res.json(result);
             }
         });
     },
     calSetting: function(req,res,next){
    console.log("in portal cal setting",req.body);
      modelPortal.calSetting(req.session.userId,req.session.roleId,req.session.retailerId,req.body.schedule,req.body.date,function(err,result){
          if(err){
            next(err);
          }
          else
          {
             console.log(result)
             res.json(result);
          }
      });

   },

   checkShedule: function(req,res,next){
    console.log("in portal checkShedule");
    modelPortal.checkShedule(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
        if(err){
            next(err);
          }
          else
          {
             console.log(result)
             res.json(result);
          }
    });
   },
    //--------------------------------------TimeSheet--------------------
     getTimeSheetData: function(req,res,next){
       console.log("I am in timesheet potal.js");
       modelPortal.getTimeSheetData(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
        if(err){
            next(err)
        }else{
            console.log("Result Box in POrtal for timesheet");
            req.timeinfo = result;
            console.log("timeinfo----",req.timeinfo);
            next();
        }
       });

     },
     submitTimesheet: function(req,res,next){
       console.log("I am in timesheet potal.js for submitting timesheet");
       modelPortal.submitTimesheet(req.body.retailerId ,
            req.body.userId,
            req.body.fillDate,
            req.body.date,
            req.body.day,
            req.body.totalHours,
            req.body.status,
            req.body.supervisor,
            req.body.approvedOrRejectedBy,
            req.body.approvedOrRejectedDate,
            req.body.rejectionReason,function(err,result){
        if(err){
            next(err)
        }else{
            console.log("Result Box in POrtal for timesheet after submit");
             res.json(result[0]);
            console.log("timeSheetId is",result);
       
        }
       });

     },
      submitTimesheetAssignment: function(req,res,next){
       console.log("I am in timesheet potal.js for submitting timesheet Assignment data");
       var a=req.body.temp;

        console.log("a is "+a+"this is timesheet id "+req.body.timesheetid);
        if(a==15)
        var allcolumn="timeAssignmentId,wbsId,timeSheetId,Day1,Day2,Day3,Day4,Day5,Day6,Day7,Day8,Day9,Day10,Day11,Day12,Day13,Day14,Day15,Day16,total";
        else
        if(a==14)
        var allcolumn="timeAssignmentId,wbsId,timeSheetId,Day1,Day2,Day3,Day4,Day5,Day6,Day7,Day8,Day9,Day10,Day11,Day12,Day13,Day14,Day15,total";
        else
        if(a==12)
        var allcolumn="timeAssignmentId,wbsId,timeSheetId,Day1,Day2,Day3,Day4,Day5,Day6,Day7,Day8,Day9,Day10,Day11,Day12,Day13,total";
        else
        if(a==13)
        var allcolumn="timeAssignmentId,wbsId,timeSheetId,Day1,Day2,Day3,Day4,Day5,Day6,Day7,Day8,Day9,Day10,Day11,Day12,Day13,Day14,total";
//var alluser="1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,30";
        console.log("submit various result");
        console.log("information from backend",req.body.wbsid,
           req.body.alluser);
       modelPortal.submitTimesheetAssignment(req.body.alluser,allcolumn,req.body.timesheetid,function(err,result){
                         if(err){
                                 next(err)
                                  }
                                  else
                                  {
            console.log("Result Box in POrtal for timesheet after submit");
            // res.json(result[0]);
           console.log("back after submitting timesheet assignment data");
       
        }
       });

     },
     checkUserTimesheet: function(req,res,next){
       console.log("I am in timesheet potal.js for User Check Time sheet details for time");
       modelPortal.checkUserTimesheet(req.body.userId,req.body.tdate,function(err,result){
        if(err){
            next(err)
        }else{
            console.log("Result Box in POrtal for check User result");
            
            console.log("user Timesheet information",result);
            res.json(result);
        }
       });

     },
      getUserUnderSupervisor: function(req,res,next){

       console.log("I am going for taking other users under a supervisor or admin");
       modelPortal.getUserUnderSupervisor(req.body.cdate,req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
        if(err){
            next(err)
        }else{
            console.log("Result Box in POrtal for check User result");
            
            console.log("user other information",result);
            res.json(result[0]);
        }
       });

     },
      otherTimeSheet: function(req,res,next){
        var query = require('url').parse(req.url,true).query;
        console.log(query);
        var usid=query.id;
         req.userid=usid;
       console.log("I am going for showing other timesheet",usid);
       modelPortal.otherTimeSheet(usid,req.session.retailerId,function(err,result){
        if(err){console.log("this is an error");
            next(err)
        }else{
            console.log("Result Box in POrtal for check User result");
             req.timeinfo = result;
            console.log("timeinfo----",req.timeinfo);
            
            

            next();
        }
       });

     },
 ApprovedOrReject: function(req,res,next){
        
       console.log("I am going for approving  other timesheet",req.body.id,"ApprovedOrRejectREaaons",req.body.appOrRejReason);
       modelPortal.ApprovedOrReject(req.body.appOrRejBy,req.body.status,req.body.id,req.body.ardate,req.body.appOrRejReason,req.session.retailerId,req.body.userEmail,function(err,result){
        if(err){console.log("this is an error");
            next(err)
        }else{
            console.log("RAfter approving or rejecting");
            console.log("this is staus",result);
             res.json(result);
        }
       });

       if(req.body.status==3)
        {
            var reason='Your timesheet has been  Approved.';
        }
    else
       {
       console.log("mail for reject ",req.body.userEmail,"reason is ",req.body.appOrRejReason); 
        var reason='Your timesheet has been Rejected due to reason-'+req.body.appOrRejReason;
    }
       mailTemplates.timesheetStatus('',req.body.userEmail,reason,function(error, resultMail) {
             if (error) {
                console.log("errorrrrrr",req.session.userId,error);
             }
             else 
                console.log("successful",resultMail);
        });
        
     },
     SubmitRejectReason: function(req,res,next){
        
       console.log("i am going for retecting a timesheet with reason");
       modelPortal.SubmitRejectReason(req.body.RejReason,req.body.id,req.body.ardate,req.session.retailerId,function(err,result){
        if(err){console.log("this is an error");
            next(err)
        }else{
            console.log("RAfter approving or rejecting");
            console.log("this is staus",result);
             res.json(result);
        }
       });

     },



//----------------------------------------------------------hr management----------------------------------------------------


 getHrRole:function(req,res,next){
        console.log("----------------");
        modelPortal.getHrROle(req.session.userId,req.session.roleId, req.session.retailerId,function(err,result){
            if(err){
                
                next(err);
            }
            else{
                req.hrRole=result;
                next();
            }

        });
     },

     dashboardData:function(req,res,next){
        modelPortal.dashboardData(req.body.data,req.body.grid,req.body.time,req.session.hrRole,req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){

            if(err){
                console.log("error ");
            }
            else{
                console.log("successfull f");
                res.json(result);
            }
        });
     },
    raiseRequisition:function(req,res,next){
        modelPortal.raiseRequisition(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
            if(err){
                console.log("error ");
            }
            else{
                
                req.hrRequisition=result;
                console.log("successfull f",req.hrRequisition);
                next();  
            }
        });

    },
    raiseRequisition1:function(req,res,next){
            if(req.body.locationName!=undefined&&req.body.locationName!=null){
                 req.body.locationName = req.body.locationName.trim();
            }
            console.log("POST raise requisition data",req.body);
            if(req.body.flag!=undefined){
                    var flag=req.body.flag;
                    var id=req.body.ide;
                    console.log("Flag and ID-------",flag,id);
                    if(flag=='copy'){
                        flag=0;
                    }
                    else if(flag=='edit'){
                        flag=1;
                    }
            }
            else
            {
                flag = 0;id = 0;
            }
            var skills = '';
            if(req.body.YearsOfExp=='')
            {
                req.body.YearsOfExp = 0;
            }
            if(req.body.MinimumSalary=='')
            {
                req.body.MinimumSalary = 0;
            }

            if(req.body.MaximumSalary=='')
            {
                req.body.MaximumSalary = 0;
            }

            if(req.body.NoOfPostions=='')
            {
                req.body.NoOfPostions = 0;
            }
            if(req.body.Location=='')
            {
                req.body.Location = 0;
            }

            if(req.body.skills != undefined){
                if(req.body.skills.length!=0){
                     skills = JSON.stringify(req.body.skills).replace(']','')
                     skills = skills.replace('"','').replace("'","").replace("[","");
                    skills = skills.replace(/['"]+/g, '');
                }
            }

            modelPortal.raiseRequisition1(
              req.session.userId,req.body.JobTitle,req.body.NoOfPostions,skills,
              req.body.MinimumSalary,req.body.MaximumSalary,
              req.body.ExpiresOn,req.body.Location,req.body.Description,
              req.body.designation,req.body.RecruiterName,
              req.body.YearsOfExp,req.body.adminhr,flag,id,
              req.body.mailPriority,req.body.jobType,req.session.hrRole,function(err,result){
                if(err){
                    console.log(err);
                }
                else{
                     req.body.Location =req.body.locationName; 
                     console.log('saurau ----------- ',result);
                     if(req.session.hrRole==3){
                             var email = result[3][0].userEmail; 
                             if(flag==0){ 
                            // nmailer(0,email,req,result[0][0].id,'0',skills,req.session.role,req.session.uid);
                              res.redirect('allrequisitions?flag=1');
                              }
                              else if(flag==1){
                                var mailCounter = result[2][0].mailCounter;

                               // nmailer(1,email,req,result[0][0].id,mailCounter,skills,req.session.role,req.session.uid);
                                res.redirect('/allrequisitions?flag=0'); 
                            } 
                     }
                    else if(req.session.hrRole==5){
                        var email = [];
                        for(var i =0;i<result[3].length;i++){
                              email.push(result[3][i].email);
                            }
                        email = email.join(','); 
                        if(flag==0){            
                     // nmailer(flag,email,req,result[0][0].id,'0',skills,req.session.role,req.session.uid);
                            res.redirect('/reqHod?flag=1');
                        }
                        else if(flag==1){
                            console.log('************here',req.body);
                            var mailCounter = result[2][0].mailCounter;
                           //     nmailer(1,email,req,result[0][0].id,mailCounter,skills,req.session.role,req.session.uid);
                            res.redirect('/reqHod?flag=0'); 
                        }
                    }   
                }
            });

    },
    reqHod:function(req,res,next){
        var query = require('url').parse(req.url, true).query;
        var flag = query.flag;
        if (flag == undefined) flag = -1;
        modelPortal.reqHod(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                req.hodResult=result;
                next();
            }    

        });
    },
    allrequisitions :function(req,res,next){
       var query = require('url').parse(req.url,true).query;
        var flag = query.flag;
        if (flag==undefined) flag = -1;
        req.fl1=flag;
        console.log("shubham ",req.fl1);
        modelPortal.allrequisitions(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                req.allrequisitions=result;
               
                next();
            }    

        });
    },
     
    reqData : function(req,res,next){

            modelPortal.reqData(req.session.userId,req.session.roleId,req.session.retailerId,req.body.id,function(err,result){
                    if(err){
                        console.log("there is an error",err);
                    }   
                    else{
                        req.session.count = result[4][0].mailCounter;
                   req.session.count++;
                     res.json({result:result});
                    }    

            });

    },

    deleteReq : function(req,res,next){

            modelPortal.deleteReq(req.session.userId,req.session.roleId,req.session.retailerId,req.body.id,function(err,result){
                    if(err){
                        console.log("there is an error",err);
                    }   
                    else{
                        
                     res.json('success');
                    }    

            });

    },

    viewCandidate : function(req,res,next){
    req.session.skillsfromdb = [];
    req.session.skillsIdfromdb = [];
    modelPortal.viewCandidate(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                    for (var i = 0; i < result[1].length; i++) {
                      var skillkeywords = result[1][i].keyword;
                        skillkeywords = skillkeywords.split(',');
                        for (var k = 0; k < skillkeywords.length; k++) {
                            (req.session.skillsIdfromdb).push(result[1][i].id);
                            (req.session.skillsfromdb).push(skillkeywords[k]);
                        }
                    }        

             req.viewCandidate=result;

             next();
            }    

    });
    },

    viewCandidate1 : function(req,res,next){
          modelPortal.viewCandidate1(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
                    if(err){
                        console.log("there is an error",err);
                    }   
                    else{
                        
                     res.json(result[0]);
                    }    

            });

    },
    getCandidate:function(req,res,next){
        modelPortal.getCandidate(req.session.userId,req.session.roleId,req.session.retailerId,req.body.id,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                    res.json(result);
            }    
         });
    },

    editCandidate:function(req,res,next){
        console.log("Form Submit Edit Candidate", req.body);
        if (req.body.skills.length == 0) req.body.skills = '';
         else if (req.body.skills.length == 1) req.body.skills = req.body.skills;
        else req.body.skills = req.body.skills.join(',');
        modelPortal.editCandidate(req.session.userId,req.session.roleId,req.session.retailerId,
            req.body.hcid, req.body.name,req.body.phone,req.body.email,req.body.locationId,req.body.skills,
            req.body.clocation,req.body.months,req.body.years,req.body.qualification,req.body.institute,function(err,result){
                    if(err){
                        console.log("there is an error",err);
                    }   
                    else{
                        
                    res.redirect("/viewCandidate");
                    }    

    });

    },
    getAllTag : function(req,res,next){
       
        modelPortal.getAllTag(req.body.id,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                res.json(result);                         
            }    

        });

    },
    upload :function(req,res,next){

        req.session.skillsfromdb = [];
        req.session.skillsIdfromdb = [];
        req.session.institituefromdb = [];
        req.session.instititueIdfromdb = [];
        req.session.location = [];
        req.session.locationId = [];
        req.session.instititueNamefromdb = [];
        req.session.nameExclusions = [];
        req.session.nameArrForFile = [];
        modelPortal.upload(function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                    for (var i = 0; i < result[1].length; i++) {
                        var skillkeywords = result[1][i].keyword;
                        skillkeywords = skillkeywords.split(',');
                        for (var k = 0; k < skillkeywords.length; k++) {
                            (req.session.skillsIdfromdb).push(result[1][i].id);
                            (req.session.skillsfromdb).push(skillkeywords[k].toLowerCase().trim());
                        }
                    }
                    for (var i = 0; i < result[2].length; i++) {
                        var newlocation = result[2][i].location;
                        req.session.location.push(newlocation.toLowerCase());
                        req.session.locationId.push(result[2][i].id);
                    }

                    for (var i = 0; i < result[3].length; i++) {
                        req.session.instititueNamefromdb[result[3][i].id] = result[3][i].Name;
                        var instititueKeywords = result[3][i].keywords;
                        instititueKeywords = instititueKeywords.split(',');
                        for (var k = 0; k < instititueKeywords.length; k++) {
                            (req.session.instititueIdfromdb).push(result[3][i].id);
                            (req.session.institituefromdb).push(instititueKeywords[k].toLowerCase().trim());

                        }
                    }

                    for (var i = 0; i < result[4].length; i++) {
                        req.session.nameExclusions.push(result[4][i].Exclusions);
                    }
                    for (var i = 0; i < result[5].length; i++) {
                        req.session.nameArrForFile.push(result[5][i].Exclusions)
                    }

                    if (skillsfromdb != req.session.skillsfromdb) {
                        skillsIdfromdb = req.session.skillsIdfromdb;
                        skillsfromdb = req.session.skillsfromdb;
                    }
                    if (req.session.location != location) {
                        location = req.session.location;
                        // console.log(location);
                        locationId = req.session.locationId;
                    }
                    if (req.session.institituefromdb != institituefromdb) {
                        institituefromdb = req.session.institituefromdb;
                        instititueIdfromdb = req.session.instititueIdfromdb;
                    }            
            }    
            req.uploadData=result;
            next();
        });


    },
    parserTable:function(req,res,next){
        var flagCompleted = 1;
        var parseResult = [];

        if (!parsing[req.session.uid]) {
            flagCompleted = -1;

        }
        if (countFiles[req.session.uid] == totalFiles[req.session.uid]) {
            flagCompleted = 0;
            parsing[req.session.uid] = false;
            totalFiles[req.session.uid] = 0;

        }
        console.log("----- "+req.body.count+"   --------  "+parseInt(req.body.count));
         modelPortal.parserTable(parseInt(req.body.count),countFiles[req.session.userId],function(err,result){
            if(err){

            }
            else{
                 parseResult[0] = result[0];
                parseResult[1] = flagCompleted;
                res.json(parseResult);
            }

         });
    },
    upload_resume:function(req,res,next){
        res.redirect('/upload');
        req.session.flag = true;
        req.session.emailArr = [];
        countFiles[req.session.uid] = 0;
        var now = Date.now();
        /*modelPortal.upload_resume(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
            if(err){

            }
            else{
                
            }

         });*/
         if (req.file != undefined) {
        console.log("Uploading Resume.............", req.file);
        req.session.name = '';
        req.session.emailId = '';
        req.session.phoneno = '';
        req.session.flag = true;
        req.session.skills = '';
        var fname = req.file.originalname;
        var exet = fname.split('.');
        var exe = exet[exet.length - 1];
        var ffname = exet[0] + "_" + now;
        var tempPath = req.file.path;
        /*var q = {
            sql: 'call usp_truncateTempTable',
            values: []
        }*/
        modelPortal.upload_resume(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
                if (err) console.log(err)
                else {

                    if (exe.toLowerCase() == 'doc' || exe.toLowerCase() == 'docx') {
                         parsing[req.session.uid] = true;
                       totalFiles[req.session.uid] = 1;
                        targetPath = path.resolve('./public/attach/' + exet[0] + '_' + now + '.' + exe);

                        fs.rename(tempPath, targetPath, function(err) {
                            //                    res.redirect('/upload');
                         var newpath = './public/attach/' + exet[0] + '_' + now + '.' + exe;
                            textract.fromFileWithPath(newpath, config, function(error, text) {

                                if (error) {
                                    blankentry(newpath, req);
                                    console.log(error);

                                } else {
                                    if (typeof text != undefined) {
                                        //console.log(text);
                                        var textLowerCase = text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g, ' ');
                                        textLowerCase = textLowerCase.replace(/ +/g, ' ').replace(/\+/g, '');
                                        //  console.log(textLowerCase);
                                        text = text.replace(/:/g, ' ').replace(/-/g, ' ').replace(/,/g, ' ').replace(/ +/g, ' ').replace(/\+/g, '');
                                        var textarr = text.split('\n');
                                        textarr.forEach(function(element, index) {
                                            textarr[index] = element.concat(' EOL');

                                        });


                                        parseAllHr(textLowerCase, textarr, newpath, req);

                                    } else {
                                        console.log('file cannot be parsed');
                                    }


                                }
                            });

                        });

                    }


                    if (exe.toLowerCase() == 'pdf') {
                    parsing[req.session.uid] = true;

                        totalFiles[req.session.uid] = 1;
                        targetPath = path.resolve('./public/attach/' + exet[0] + '_' + now + '.' + exe);

                        fs.rename(tempPath, targetPath, function(err) {

                          // res.redirect('/upload');

                            var namefile = zipEntry["name"];

                            //console.log(absolute_path);
                            var processor = pdf_extract(absolute_path, options, function(err) {
                                if (err) {
                                    console.log(err);
                                }
                            });
                            processor.on('complete', function(data) {
                                // console.log('start*************',data.text_pages[0],'*********',Date.now());
                                var text = '';
                                for (var i = 0; i < data.text_pages.length; i++) {
                                    text = text.concat(data.text_pages[i]);
                                }
                                //console.log(text);
                                var textLowerCase = text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g, ' ');
                                textLowerCase = textLowerCase.replace(/ +/g, ' ').replace(/\+/g, '');
                                //  console.log(textLowerCase);
                                text = text.replace(/:/g, ' ').replace(/-/g, ' ').replace(/,/g, ' ').replace(/ +/g, ' ').replace(/\+/g, '');
                                var textarr = text.split('\n');
                                textarr.forEach(function(element, index) {
                                    textarr[index] = element.concat(' EOL');

                                });
                                parseAllHr(textLowerCase, textarr, newpath, req);




                            });

                            processor.on('error', function(err) {

                                blankentry(newpath, req)
                                console.log(err);
                                //return callback(err);
                            });


                        });

                    }


                    if (exe.toLowerCase() == 'zip') {
                        var zip = new AdmZip(req.file.path);
                        var zipEntries = zip.getEntries();
                        zip.extractAllTo( path.join(__dirname, '../public/attach/' + ffname), false);
                        console.log('***********path join**************', path.join(__dirname, '../public/attach/' + ffname));
                        totalFiles[req.session.uid] = zipEntries.length;
                        parsing[req.session.uid] = true;

                          

                        zipEntries.forEach(function(zipEntry) {
                            //console.log(zipEntry["name"]);
                            var namefile = zipEntry["name"];
                            var namearr = namefile.split('.');

                            var exet = (namearr[namearr.length - 1]).toLowerCase();
                            var newpath = './public/attach/' + ffname + '/' + namefile;

                            //         parseResume(req,newpath);

                            if (exet == 'doc' || exet == 'docx') {
                                /*  if(exet=="rtf")
                                  {
                                    namearr.pop();
                                    namefile = namearr.join(".") + ".docx";
                                    var newpath2='./public/attach/'+ffname+'/'+namefile;
                                    fs.renameSync(newpath,newpath2);

                                  }*/
                                textract.fromFileWithPath(newpath, config, function(error, text) {

                                    if (error) {
                                        blankentry(newpath, req);
                                        console.log(error);

                                    }
                                    // console.log('start**********************',Date.now(),newpath);
                                    //console.log('hi');
                                    // console.log(text);
                                    else {
                                        if (typeof text != undefined) {
                                            //console.log(text);
                                            var textLowerCase = text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g, ' ');
                                            textLowerCase = textLowerCase.replace(/ +/g, ' ').replace(/\+/g, '');
                                            //  console.log(textLowerCase);
                                            text = text.replace(/:/g, ' ').replace(/-/g, ' ').replace(/,/g, ' ').replace(/ +/g, ' ').replace(/\+/g, '');
                                            var textarr = text.split('\n');
                                            textarr.forEach(function(element, index) {
                                                textarr[index] = element.concat(' EOL');

                                            });


                                            parseAllHr(textLowerCase, textarr, newpath, req);

                                        } else {
                                            console.log('file cannot be parsed');
                                        }


                                    }
                                });


                            } else if (exet == 'pdf') {
                            
                                var namefile = zipEntry["name"];
                                var absolute_path = path.join(__dirname, '../public/attach/' + ffname + '/' + namefile); // parseResume(req,newpath);

                                //console.log(absolute_path);
                                var processor = pdf_extract(absolute_path, options, function(err) {
                                    if (err) {
                                        console.log(err);
                                    }
                                });
                                processor.on('complete', function(data) {
                                    // console.log('start*************',data.text_pages[0],'*********',Date.now());
                                    var text = '';
                                    for (var i = 0; i < data.text_pages.length; i++) {
                                        text = text.concat(data.text_pages[i]);
                                    }
                                    //console.log(text);
                                    var textLowerCase = text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g, ' ');
                                    textLowerCase = textLowerCase.replace(/ +/g, ' ').replace(/\+/g, '');
                                    //  console.log(textLowerCase);
                                    text = text.replace(/:/g, ' ').replace(/-/g, ' ').replace(/,/g, ' ').replace(/ +/g, ' ').replace(/\+/g, '');
                                    var textarr = text.split('\n');
                                    textarr.forEach(function(element, index) {
                                        textarr[index] = element.concat(' EOL');

                                    });
                                    parseAllHr(textLowerCase, textarr, newpath, req);




                                });

                                processor.on('error', function(err) {

                                    blankentry(newpath, req)
                                    console.log(err);
                                    //return callback(err);
                                });




                            } else {


                                blankentry(newpath, req);


                            }

                        });



                    }
                          } //else
        }); //db usp_clearalldata


                }

    },
    deleteUploadRecords:function(req,res,next){
      
        modelPortal.deleteUploadRecords(req.session.userId,req.session.roleId,req.session.retailerId,req.body.delete,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                res.json('suceess');
            }    

        });
    },
    viewReq:function(req,res,next){
        modelPortal.viewReq(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                    req.viewReq=result;
                    next() ;
                }    



        });
    },
     searchHr:function(req,res,next){
        var str = req.body.search;
        modelPortal.searchHr(req.session.userId,req.session.roleId,req.session.retailerId,str,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                     res.json(result[0]);
                }    



        });
    },
    advancesearchHr:function(req,res,next){
        modelPortal.advancesearchHr(req.session.userId,req.session.roleId,req.session.retailerId,
            req.body.name1, req.body.jdtitle, req.body.email1, req.body.location1,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                    
                }    



        });
    },
    interviewerInfo:function(req,res,next){
        modelPortal.interviewerInfo(req.session.userId,req.session.roleId,req.session.retailerId,
            function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                     res.json(result);
                }    



        });
    },
    updateStatusReq:function(req,res,next){
        modelPortal.updateStatusReq(req.session.userId,req.session.roleId,req.session.retailerId,
            req.body.flag,req.body.jdid,req.body.approve,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                     res.json('');
                }    



        });
    },
    getReleventTag:function(req,res,next){
        console.log("getReleventTag portal");
        modelPortal.getReleventTag(req.session.userId,req.session.roleId,req.session.retailerId,
            req.body.id,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                     res.json(result[0]);
                }    



        });
    },
    removeTag:function(req,res,next){
        console.log("removeTag portal");
        modelPortal.removeTag(req.session.userId,req.session.roleId,req.session.retailerId,
            req.body.tagid,req.body.cid,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                     res.json(result);
                }    



        });
    },
    getreleventState:function(req,res,next){
        console.log("getreleventState portal");
        modelPortal.getreleventState(req.session.userId,req.session.roleId,req.session.retailerId,
           req.body.jdid,req.body.cid,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                     res.json(result);
                }    



        });
    },
    addQuickTag:function(req,res,next){
        console.log("addQuickTag portal");
        modelPortal.addQuickTag(req.session.userId,req.session.roleId,req.session.retailerId,
           req.body.jdid,req.body.allcdid,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                     res.json(result);
                }    



        });
    },
    getallmanager:function(req,res,next){
        console.log("addQuickTag portal");
        modelPortal.getallmanager(req.session.userId,req.session.roleId,req.session.retailerId,
           function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                     res.json(result);
                }    



        });
    },
    getscheduleInfo:function(req,res,next){
        console.log("addQuickTag portal");
        modelPortal.getscheduleInfo(req.session.userId,req.session.roleId,req.session.retailerId,req.body.cid,
           function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                     res.json(result);
                }    



        });
    },
    selectAdminHr:function(req,res,next){
        console.log("addQuickTag portal");
        modelPortal.selectAdminHr(req.session.userId,req.session.roleId,req.session.retailerId,req.body.selected,
           function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                    res.json(result[0]);
                }    



        });
    },
    updateCandidate:function(req,res,next){
        console.log("addQuickTag portal");
        modelPortal.updateCandidate(req.session.userId,req.session.roleId,req.session.retailerId,
            req.body.id, req.body.name, req.body.email, req.body.phone,
            req.body.years, req.body.months, req.body.location, req.body.address,
            req.body.skills, req.body.qualification, req.body.ins,function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                    res.json('success');
                }    



        });
    },
    interviewData:function(req,res,next){
        console.log("interview date-------------", req.body);
        var filename;
        var targetPath;
        var fname;

        if (req.file != undefined) {
                var now = Date.now();;
                fname = req.file.originalname;
                var exet = fname.split('.');
                var exe = exet[exet.length - 1];
                var ch = exet[0] + '_' + now;
                var tempPath = req.file.path,
                    filename = ch + '.' + exe;
                targetPath = path.resolve('./public/attach/feedback/' + filename);
                console.log("tpath---" + targetPath + "---");
                if (1) {
                        fs.rename(tempPath, targetPath, function(err) {
                            if (err) throw err;
                            console.log("Upload completed!");
                        });
                }
        }
        console.log("Filename : ", filename);

        if (typeof(filename) == 'undefined') {
            filename = '';
        }

        console.log("File-------------", req.file);
        modelPortal.interviewData(req.session.userId,req.session.roleId,req.session.retailerId,req.body.id,
                req.body.rating,req.body.status,req.body.time,req.body.remarks,req.body.stateId,
                req.body.cdtid, req.body.modeid,req.body.rounds,filename,req.body.jdid,function(err,result){
            if (err) {
                console.log("Error is ", err);
                res.redirect("/error");
            } else {
                console.log("data saved successfully");
                res.redirect('/rms');
            }
        });
        
    },

    interviewFeedback:function(req,res,next){
        var query = require('url').parse(req.url, true).query;
        var cid = query.cid;
        var id = query.id;
        var flag = query.flag;
        rq.feedbackflag=flag;
        modelPortal.interviewFeedback(req.session.userId,req.session.roleId,req.session.retailerId,
           id, cid, function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                        req.interviewFeedback=result;
                        next();
                }    



        });
    },
      reqApprover:function(req,res,next){
       
        modelPortal.reqApprover(req.session.userId,req.session.roleId,req.session.retailerId,
           function(err,result){
            if(err){
                console.log("there is an error",err);
            }   
            else{
                        req.reqApprover=result;
                        next();
                }     



        });
    }

     

 }





 //-------------------------------------SEPERATE FUNCTION-------------------------------------->

 function  parseAll(textLowerCase,req,strname,next){
var parsedData ;
var largeArr = [];
var conjunctionArr = ['if','and','the','is','because','on','in','above','be','would','for','each','at','under','by','been','no','my','upon','been','will','there','that','this'];
for(var i =0;i<textLowerCase.length;i++){

if(largeArr.indexOf(textLowerCase[i])==-1&&conjunctionArr.indexOf(textLowerCase[i])==-1&&textLowerCase[i].length>1){

largeArr.push(textLowerCase[i]);

}


}

if(!largeArr.length){

    parsedData = null;
}

else{

          parsedData = largeArr.join(',');

  }

  var industry=req.body.industry==null? '':req.body.industry.toString();
                        var business=req.body.business==null? '':req.body.business.toString();
                        var doctype=req.body.doctype==null? '':req.body.doctype.toString();
                        var tec=req.body.newTec==null? '':req.body.newTec.toString();
                        var restriction=req.body.rLevel==null? '':req.body.rLevel.toString();
                    
        modelPortal.attachDocFile(req.session.userId,req.session.retailerId,
                             strname,req.body.currfolder,req.file.originalname,req.body.descbox,req.body.authname,
                            industry,business,req.body.title,doctype,tec,req.session.roleId,restriction,
                            req.body.industryhide,req.body.businesshide,req.body.doctypehide,req.body.newTechide,
                            req.body.rLevelhide,parsedData,function(err,result){
                                     //   console.log('set Page Insert Document---- model in Portal')

                          if(err){
                        next(err);
                         return;
                            }


});

}




function parseAllHr(textLowerCase, textarrNewLine, targetPath, req) {
    var longnumber ;
   // console.log(textLowerCase);
    var dateForYear = new Date();
    var yearForYear = dateForYear.getFullYear();
    yearForYear = yearForYear + '';
    var CurrentYearArr = [yearForYear, yearForYear[0] + 'k' + yearForYear.slice(2, 3), yearForYear.slice(2, 3), "'" + yearForYear.slice(2, 3)];
    var textarr = [];
    textarrNewLine.forEach(function(eachElement) {
        var array = eachElement.split(' ');
        array.forEach(function(element) {
            element = element.replace(/ /g, '');
            if (element != '') textarr.push(element.trim());
        });
    });
    var targetPathArr = targetPath.split('/');
    var nameFromFile = targetPathArr[targetPathArr.length - 1];
    nameFromFile = nameFromFile.split('.');
    nameFromFile.pop();
    nameFromFile = nameFromFile.join('.');

    var FresherFlag = false;
    var nameFromFile = nameFromFile.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g, ' ').replace(/ +/g, ' ').replace(/\+/g, ' ').replace("(", " ").replace(")", " ").replace(/_/g, ' ').replace(/\d/g, ' ').replace(/]/g, ' ').replace(/[\[\]']+/g, ' ').replace(/'/,' ').replace(/"/,' ');;
    while (nameFromFile.indexOf("(") != -1 || nameFromFile.indexOf(")") != -1) nameFromFile = nameFromFile.replace("(", '').replace(")", '');
    if (nameFromFile.indexOf('fresher') != -1 || nameFromFile.indexOf('freshr') != -1) {
        FresherFlag = true;
    }


    var nameArrForFile = req.session.nameArrForFile;
    var Qualification = ['bca', 'b.c.a', 'bachelor of computer application', 'bsc', 'b.s.c', 'b.sc', 'bachelor of science', 'btech', 'b.tech', 'b.tech.', 'b. tech ', 'b tech', 'b. tech.', 'bachelor of technology', 'b.e', 'bachelor of engineering', 'bachelors of engineering ', 'bachelor of information technology', 'mca', 'm.c.a', 'master of computer application', 'masters of computer application', 'masters in computer applications', 'mtech', 'm.tech', 'm.tech.', 'm. tech', 'm.tech ', 'msc', 'mba', 'pgp', 'm.sc', 'm.s.c'];
    var numberGrid = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];
    var name = '';
    var email = '';
    var phone = '';
    var skillarr = [];
    var skillarrId = [];
    var qualIndex = -1;
    var allLocationInResume = [];
    var currentlocation = -1;
    var instititutes = 'other';
    var permanentAddress = '';
    var permanentAddress2 = '';
    var countAddr = 0;
    var years = 0;
    var months = 0;
    var addressIndexForName = [];




    /**********************Skills***********************************/

    skillsfromdb.forEach(function(element, index) {
        var startIndex = 0,
            elementFlag = true;
        while (textLowerCase.indexOf(element, startIndex) != -1 && elementFlag) {
            var textindex = textLowerCase.indexOf(element, startIndex);
            startIndex = textindex;
       
            if (textLowerCase[textindex - 1] == ' ' && (textLowerCase[textindex + element.length] == ' ' || textLowerCase[textindex + element.length] == '.') && skillarrId.indexOf(skillsIdfromdb[index]) == -1) { //After skills could be a full stop
               //console.log('****skills*****',element);
                skillarrId.push(skillsIdfromdb[index]);
                elementFlag = false;
            } else startIndex++;
        }

    });
    textLowerCase = textLowerCase.replace(/\+/g, ' '); //I need '+' sign for skills as in c++;


    /**********************Qualification***********************************/
    Qualification.forEach(function(element, index) {
        if (textLowerCase.indexOf(element) != -1) {
            var textindex = textLowerCase.indexOf(element);
            if (textLowerCase[textindex - 1] == ' ') //In case resume is written as b tech(ECE) 
                qualIndex = index;
        }


    });
    textLowerCase = textLowerCase.replace(/\./g, ''); //I need dot(.)  for skills like .net

    /***********************Institute*************************************/

for(var i = 0;i<institituefromdb.length;i++){
       // console.log('***',countFiles[req.session.uid],institituefromdb[i]);
        if (textLowerCase.indexOf(institituefromdb[i]) != -1) {

            var textindex = textLowerCase.indexOf(institituefromdb[i]);
            if (textLowerCase[textindex - 1] == ' ' && textLowerCase[textindex + institituefromdb[i].length] == ' '){

                instititutes = req.session.instititueNamefromdb[instititueIdfromdb[i]];
              break;
          }

        }
}



    /**********************Location*********************************/

    for(var i = 0;i<location.length;i++){
//console.log('***',countFiles[req.session.uid],location[i]);
 if (textLowerCase.indexOf(location[i]) != -1) {
            var textindex = textLowerCase.indexOf(location[i]);
            if (textLowerCase[textindex - 1] == ' ' && textLowerCase[textindex + location[i].length] == ' '){
                allLocationInResume.push(locationId[i]);
            
            }
        }

    }

              if(allLocationInResume.length){
                    currentlocation = allLocationInResume[0];

              }


    /******************************To improve the efficiency of name*****************************************/
    var nameflag = true;
    var kIncName = 0;
    var countName = 0;
    while (textarr[kIncName] == 'EOL' && textarr.length > kIncName) kIncName++;
    while (nameflag && textarr.length > kIncName) {

        try {
            if (textarr[kIncName].toLowerCase() == 'name') {
                var kinc = 2;
                while (textarr[kIncName + kinc] == 'EOL') kinc++;

                name = textarr[kIncName + 1] + ' ' + textarr[kIncName + kinc];
            }
        } catch (err) {
            console.log(err);
            return;
        }


        if (textarr[kIncName] == 'EOL') {
            countName++;

        }

        if (countName == 3) nameflag = false;

        kIncName++;

    }
    console.log('parser1');
    /***************************************Name From File and large Array For Name***************************************************/
    if (name.trim() == '') {

        var largeArrayForNameFromFile = allLocationInResume.concat(nameArrForFile).concat(Qualification);
        var skillArrForName = [];
        var currIndex = 0;
        skillarrId.forEach(function(element, index) {
            currIndex = skillsIdfromdb.indexOf(element);
            while (skillsIdfromdb[currIndex] == element && currIndex < skillsIdfromdb.length) {
                skillArrForName.push(skillsfromdb[currIndex]);
                currIndex++;
            }

        });
       // console.log('parser2');


        // console.log(skillArrForName,nameFromFile);
        largeArrayForNameFromFile = largeArrayForNameFromFile.concat(skillArrForName);
        largeArrayForNameFromFile.sort(function(a, b) {
            return b.length - a.length; // ASC -> a - b; DESC -> b - a
        });

        largeArrayForNameFromFile.forEach(function(element, index) {
            //console.log('from for each',element);
            while (nameFromFile.indexOf(element) != -1) {
                nameFromFile = nameFromFile.replace(element, '');

            }
        });


    // console.log('parser3');
        var nameFromFileArr;
        var nameFromFileArr2 = [];
        nameFromFile = nameFromFile.replace(/ +/g, ' ');
        nameFromFileArr = nameFromFile.split(' ');

        //console.log('*******name***',nameFromFileArr,nameFromFile,'*******');

        for (var i = 0; i < nameFromFileArr.length; i++) {
            if (nameFromFileArr[i].length > 2 && nameFromFileArr[i].indexOf('@') == -1) {
                nameFromFileArr2.push(nameFromFileArr[i]);
            }
        }
        //console.log('*******Output***',nameFromFileArr2)
        var newNameFromFile = [];
        var incrementerFor3 = 0
            /*  //Code for selecting the first 3 names from the left over file name;

            while(incrementerFor3<3||incrementerFor3<nameFromFileArr.length){

            newNameFromFile.push(nameFromFileArr[incrementerFor3]);
            incrementerFor3++;

            }
            nameFromFile = newNameFromFile.join(' ');*/

        nameFromFile = nameFromFileArr2.join(' ');

        //console.log(nameFromFile);
        name = nameFromFile.trim();
                //console.log('parser4');


    }
        //console.log('parser2');

    /***************************************Name From Text and large Array For Name  ***************************************************/
    if (name.trim() == '') {
        var nameArrForText = req.session.nameExclusions;
        var largeArrayForNameFromText = allLocationInResume.concat(nameArrForText).concat(Qualification).concat(skillArrForName);
  //   console.log(largeArrayForNameFromText);
    }
           // console.log('parser3');

    var wordLength = [];
    var  countForWordLength = 0;
    var longNumber = '',
        phoneLongnumber = '';

    /***************To pick and parse individual words**********************/

    for (var k = 0; k < textarr.length; k++) {
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+(\.)?$/.test(textarr[k])) {
            if (email == '')
                email = textarr[k];
        }
        if (/^\d{10,}$/.test(textarr[k])) {
            if (phone == '') {
                phone = textarr[k];
            }

        }


        if (/^\d{2,}$/.test(textarr[k]) && phone == '' && phoneLongnumber == '') {
            longNumber = longNumber.concat(textarr[k]);
        }
        if (longNumber.length >= 10 && !(/^\d{2,}$/.test(textarr[k]))) {
            phoneLongnumber = longnumber;
        } else if (!(/^\d{2,}$/.test(textarr[k]))) {
            longnumber = '';
        }



        // if()

        /*
                if (namearr.indexOf(textarr[k].toLowerCase()) == -1 && textarr[k].length >= 3 && name == '') {

                    var kinc = 1;
                    while (textarr[k + kinc] == 'EOL') kinc++;

                    name = textarr[k] + ' ' + textarr[k + kinc];

                }*/
        //console.log('parser4');

        if (textarr[k].toLowerCase() == 'address' && permanentAddress2 == '') {
            var k1 = k - 1;
            if (k == 0) k1 = 0;
            if (textarr[k - 1].toLowerCase() != 'virtual' && textarr[k - 1].toLowerCase() != 'email') {
                var kIncAddress = k + 1;
                addressIndexForName.push(kIncAddress);
                while (isSuitableAdd(kIncAddress) && kIncAddress < textarr.length - 1) {

                    permanentAddress2 = permanentAddress2.concat(textarr[kIncAddress]).concat(' ');
                    kIncAddress++;
                }
                addressIndexForName.push(kIncAddress);
                permanentAddress2 = permanentAddress2.concat(textarr[kIncAddress])

                permanentAddress2 = permanentAddress2.replace(/EOL/g, '');

            }

        }


        if (/^[1-9]{1}\d{5}$/.test(textarr[k]) && permanentAddress == '') {

            while (textarr[k - 1] == 'EOL') k = k - 1;
            if (textarr[k - 1].toLowerCase() == 'code') k = k - 2;
            if (textarr[k - 1].toLowerCase() == 'pincode' || textarr[k - 1].toLowerCase() == 'pin') k = k - 1;
            while (textarr[k - 1] == 'EOL') k = k - 1;
            if (textarr[k - 1].length <= 2) {

                if (textarr[k - 2].toLowerCase() == 'nagar' || textarr[k - 2].toLowerCase() == 'pradesh' || textarr[k - 2].toLowerCase() == 'garh' || textarr[k - 2].toLowerCase() == 'nadu') {
                    while (textarr[k - 1] == 'EOL') k = k - 1;

                    permanentAddress = textarr[k - 3] + ' ' + textarr[k - 2];
                } else {
                    while (textarr[k - 1] == 'EOL') k = k - 1;
                    permanentAddress = textarr[k - 2];
                }
            } else {
                while (textarr[k - 1] == 'EOL') k = k - 1;

                if (textarr[k - 1].toLowerCase() == 'nagar' || textarr[k - 1].toLowerCase() == 'pradesh' || textarr[k - 1].toLowerCase() == 'garh' || textarr[k - 1].toLowerCase() == 'nadu') {
                    while (textarr[k - 1] == 'EOL') k = k - 1;

                    permanentAddress = textarr[k - 2] + ' ' + textarr[k - 1];
                } else {
                    while (textarr[k - 1] == 'EOL') k = k - 1;
                    permanentAddress = textarr[k - 1];
                }

            }

        }




        /*************Experience*************/


        /*************Experience*************/

        if ((/month/i).test(textarr[k]) || (/mnth/i).test(textarr[k]) && months == 0) {


            if ((/\d{1,2}/gi).test(textarr[k - 1]) || numberGrid.indexOf(textarr[k - 1].toLowerCase()) != -1) {

                months = textarr[k - 1];
            }


        }


        if ((/^year/i).test(textarr[k]) || (/^yr/i).test(textarr[k]) && years == 0) {



            if ((/^\d+(\.\d{1,4})?$/i).test(textarr[k - 1]) || numberGrid.indexOf(textarr[k - 1].toLowerCase()) != -1) {
                years = textarr[k - 1];

                var j = k;
                while (textarr[j].indexOf('EOL') != -1) {

                    if ((/month/i).test(textarr[j]) || (/mnth/i).test(textarr[j])) {


                        if ((/\d{1,2}/gi).test(textarr[j - 1]) || numberGrid.indexOf(textarr[j - 1].toLowerCase()) != -1) {

                            months = textarr[j - 1];
                        }


                    }


                    j++;

                }



            }




        }




    }
            console.log('parser5');


    var emailDotless = email.replace(/\./g, '');

    if (req.session.emailArr.indexOf(emailDotless) != -1 && email != '') {
        countFiles[req.session.uid]++;
 console.log('parser Return', countFiles[req.session.uid], emailDotless);

        return;
    } else {
        req.session.emailArr.push(emailDotless);

    }


    var kIncNameNew = 0;
    /********************Name from text****************************/
    while (kIncNameNew < 50 && name == '' && kIncNameNew < textarr.length - 2) {
   // console.log('in text finder',textarr[kIncNameNew]);
        if (ifSuitableName(kIncNameNew) && ifSuitableName(kIncNameNew + 1)) {
            name = textarr[kIncNameNew] + ' ' + textarr[kIncNameNew + 1];
        }
        kIncNameNew++;

    }
                console.log('parser6');

    /********************Fresher Flag****************************/
    if (qualIndex != -1 && !FresherFlag) {
        var QualForFresher = Qualification[qualIndex];
        var kIncQualNew = textarr.indexOf(QualForFresher);
        while (textarr[kIncQualNew] != 'EOL' && kIncQualNew > 0) kIncQualNew--
            while (textarr[kIncQualNew] != 'EOL' && kIncQualNew < textarr.length) {
                if (textarr[kIncQualNew] == undefined) break;
                if (CurrentYearArr.indexOf(textarr[kIncQualNew].toLowerCase()) != -1) {
                    FresherFlag = true;
                    break;
                }

                kIncQualNew++;
            }
    }
                   console.log('parser7');

    /**************************Phone Flag*************************************/
    if (phone == '' && phoneLongnumber != '') {
        phone = phoneLongnumber;
    }


    if (numberGrid.indexOf(years) != -1) {
        years = numberGrid.indexOf(years) + 1;

    }
    if (numberGrid.indexOf(months) != -1) {
        months = numberGrid.indexOf(months) + 1;

    }
    if (permanentAddress2 != '') {
        permanentAddress = permanentAddress2;
    }


    if ((/^\d+(\.\d{1,4})$/i).test(years)) {

        var value = years.split('.');
        value[1] = (value[1] / (10 * (value[1].length))) * 12;
        months = value[1] + parseInt(months);
        years = parseInt(value[0]);


    }

    if (months > 12) {
        years = years + parseInt(months / 12);
        months = months % 12;

    }

    months = parseInt(months);
    if (FresherFlag) {
        years = '-1';
        months = '-1'
    }



    skillarrId = skillarrId.join(',');
    years = years + '';
    months = months + '';
    if (skillarrId == '') skillarrId = '0';
   

    modelPortal.upload_resumeaddcandidate(req.session.userId,req.session.roleId,req.session.retailerId,
        name,email,phone,skillarrId,permanentAddress,Qualification[qualIndex],currentlocation,years,
                months,instititutes,targetPath,function(err,result){
    if (err) {
            console.log(q, err);
            countFiles[req.session.uid]++;
            console.log('parser failure', countFiles[req.session.uid], req.session.uid);

            // res.redirect('/error');
        } else {

            countFiles[req.session.uid]++;
            console.log('parser Success', countFiles[req.session.uid], req.session.uid);

        }

    });




    function isSuitableAdd(cCounter) {

        var locationFlag = true;
        if (textarr[cCounter] == undefined)
            return false;


        for (var i = 0; i < allLocationInResume.length; i++) {
            if (textarr[cCounter].toLowerCase() == location[parseInt(allLocationInResume[i])] && !/^[1-9]{1}\d{5}$/.test(textarr[cCounter + 1])) {
                locationFlag = false;
                break;
            }
        }
        if (!locationFlag) {
            return false;
        }



        if (/^[1-9]{1}\d{5}$/.test(textarr[cCounter]))
            return false;

        countAddr++;
        if (countAddr >= 25) {
            return false
        }

        return true;
    }

    function ifSuitableName(cCounter) {
        var lArrFlag = true;
        wordLength[cCounter] = textarr[cCounter].length;
        var indexVar = ((textarr[cCounter].search(/\d/) != -1) || (textarr[cCounter].indexOf('_') != -1) || (textarr[cCounter].indexOf('-') != -1) || (textarr[cCounter].indexOf('@') != -1))
        if (indexVar)
            return false;
        if (wordLength[cCounter] < 3)
            countForWordLength++;
        else
            countForWordLength = 0;
        if(countForWordLength>=2){
         //   console.log('from here',textarr[cCounter]);
            countForWordLength = 0;
            return false
        }

        if (addressIndexForName.length > 0) {
            if (addressIndexForName[0] <= cCounter && cCounter <= addressIndexForName[1]) {
              //  console.log('from here address',textarr[cCounter]);
                return false;
            }

        }


        for (var i = 0; i < largeArrayForNameFromText.length; i++) {
            var textTemp = textarr[cCounter].toLowerCase();
            if (textTemp.indexOf(largeArrayForNameFromText[i]) != -1) {
          //  console.log('from here largeArrayForNameFromText',textarr[cCounter]);

                lArrFlag = false;
                break;
            }

        }

        if (!lArrFlag) {
            return false;
        }

        return true;


    }




}

function blankentry(targetPath, req) {
   /* var q = {
        sql: "call usp_addCandidate(?,?,?,?,?,?,?,?,?,?,?)",
        values: ["",
            "",
            "",
            "0",
            "",
            "",
            "0",
            "0",
            "0",
            "",
            targetPath
        ]
    }*/
    /*console.log("Query------------------------------", q);*/
     /*db(q, function(err, result) {*/
    modelPortal.upload_resumeaddcandidate(req.session.userId,req.session.roleId,req.session.retailerId,
       "",
            "",
            "",
            "0",
            "",
            "",
            "0",
            "0",
            "0",
            "",
            targetPath,function(err,result){
   
        if (err) {
            console.log(q, err);
            countFiles[req.session.uid]++;
            console.log('parser failure', countFiles[req.session.uid], req.session.uid);
            // res.redirect('/error');
        } else {
            req.session.empty = -1;
            countFiles[req.session.uid]++;
            console.log('parser Success', countFiles[req.session.uid], req.session.uid);

        }

    });




}