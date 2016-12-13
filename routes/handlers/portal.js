 'use strict';
   
var modelPortal = require('../../model/modelPortal');
var mailTemplates = require('../../lib/mailtemplates');
var randomString = require('../../lib/common').generateRandomString;
var flag = require('../../config/config').flagUsed;
var configEmail=require('../../config/config').mailconfig;
var schedulers=require('../../lib/schedulers');
var xlsxparser = require('excel-parser');
var path = require('path');
var fs = require('fs');
var _ = require('underscore');

var textract = require('textract');
 var crypto = require('crypto'),
    key = 'efghabcdijklmnop',
    iv = '0123456789654321',
    cipher = crypto.createCipheriv('aes-128-cbc', key, iv)
    , decipher = crypto.createDecipher('aes-128-cbc', key,iv);
var idarr = [];
var loggedinarr = [];
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(3);
var config = {

    preserveLineBreaks: true,
    tesseract: {
        lang: "eng"    
    }
 
}

var encrypt = function (input, password) {
    var m = crypto.createHash('md5');
    m.update(password)
    var key = m.digest('hex');

    m = crypto.createHash('md5');
    m.update(password + key)
    var iv = m.digest('hex');

    var data = new Buffer(input, 'utf8').toString('binary');

    var cipher = crypto.createCipheriv('aes-256-cbc', key, iv.slice(0,16));
    var nodev = process.version.match(/^v(\d+)\.(\d+)/);
    var encrypted;

    if( nodev[1] === '0' && parseInt(nodev[2]) < 10) {
        encrypted = cipher.update(data, 'binary') + cipher.final('binary');
    } else {
        encrypted = cipher.update(data, 'utf8', 'binary') + cipher.final('binary');
    }

    var encoded = new Buffer(encrypted, 'binary').toString('base64');

    return encoded;
};

var options = {
    type: 'text' 
};  
var AdmZip = require('adm-zip');
var config  = {

preserveLineBreaks : true,
tesseract: { lang:"eng" } 

}; 
var idarr = [];
var loggedinarr = [];
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(3);

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

 var PPT = require('ppt');
 var holidayArrDateTimeArr = [];
 var saturdayOffFlag      = 1;


 module.exports = {
    getEmpData: function(req,res,next){
        modelPortal.getEmpData(req.session.retailerId,req.emp_id,req.mgr_id,function(err,result){
            if (err) {
                 next(err);

             } else { 
            res.json(result);
             }
        });
    },

    notification: function(req, res, next) {
       
        var flag=0;
        var notification=0,type,assignedTo=0,edit=0,notificationForApproveReject=0;

         if(typeof(req.body.editNotification)=='undefined'){ edit=0; }
        else{edit=req.body.editNotification; }

        if(edit==0){
            if(typeof(req.body.moduleType)=='undefined'){ 
             type='home';  assignedTo=0; notification=0; flag=0; 
        }
        else{
             type=req.body.moduleType;
            if(type=='bug'){
                 if(typeof(req.body.assingedto)=='undefined'){  assignedTo=0; }
                else{ assignedTo=req.body.assingedto; }

                if(typeof(req.session.notification)=='undefined'){ notification=0; }
                else{ notification=req.session.notification.bug_notification; }

                flag=req.body.flagNotification;
            }

            if(type=='timesheet'){ 
                assignedTo=req.body.supervisor; flag=0;
                if(typeof(req.session.notification)=='undefined'){ notification=0; }
                else{ notification=req.session.notification.bug_notification; }

                 if(typeof(req.body.notificationForApproveReject)=='undefined'){ notificationForApproveReject=0; }
                else{ notificationForApproveReject=req.body.notificationForApproveReject;
                    assignedTo=req.body.id;
                 }

            }
         }
        }
        else{
            notification=0;assignedTo=0;flag=0; type=req.body.moduleType;
        }

	if( typeof(req.body.status) == 'string'  && (req.body.status == 0 || req.body.status == 1)){
        notificationForApproveReject=111;
     }


        modelPortal.notification(edit,notificationForApproveReject,type,notification,assignedTo,flag,req.session.userId, req.session.retailerId,function(err, result) {
             if (err) {
                 return res.json('0');

             } else {              
                req.session.notification=null;

                req.session.notification=result[0][0];

               var aa = req.body.editNotification;
               var bb = req.body.moduleTypeIndex;

                if(aa==0){
                    if(bb=='index'){
                        res.json('0');
                    }
                    else{
                        next();
                    }
                }
                else if(aa == undefined){
                    next();
                }
                else{
                    res.json('0');
                  
                }
                    
             }
         });
     },



    timesheetdragreport: function(req, res, next) {
        var tempStr = [];


          if(req.body.isemployeeName =="true"){
            tempStr.push("l.employeeName");
        }

         if(req.body.isemployeecode =="true"){
            tempStr.push("l.employeecode");
        }

        if(req.body.isWbsName =="true"){
            tempStr.push("l.wbsName");
        }
        if(req.body.isprojectName =="true"){
            tempStr.push("l.projectName");
        }
        if(req.body.isfortNightDate =="true"){
            tempStr.push("l.fortNightDate");
        }
        if(req.body.isDATEs =="true"){
            tempStr.push("l.DATEs");
        }
        if(req.body.isyearmonth =="true"){
            tempStr.push("l.yearmonth");
        }

        var startPoint = req.body.start;
        var endPoint = req.body.length;
        var searchString = req.body.search.value || '';

        if(req.body.order){
            if(req.body.order[0].column){
                var tempsortIndex = parseInt(req.body.order[0].column);
                var sortString = req.body.columns[tempsortIndex].data +" "+req.body.order[0].dir;
            }
            else{
                var sortString = 'employeeName asc';
            }
        }
        else{
            var sortString = 'employeeName asc';
        }
        tempStr = tempStr.toString();
        modelPortal.timesheetdragreport(req.session.retailerId,tempStr,startPoint,endPoint,searchString,sortString,req.body.employeeName,req.body.employeecode,req.body.WbsName,req.body.projectName,req.body.hours,req.body.Thumbhours,req.body.DATEs,req.body.fortNightDate,req.body.billable,req.body.yearmonth,function(error,result) {  
              
            if (error) {
                 next(error);
                 return;
            }
            var tempobj = JSON.stringify(result[0]);
            var desiredObj = JSON.parse(tempobj);
           // console.log("result[0]----",result[0]);
            if(desiredObj[0]){
                desiredObj[0].project = JSON.parse(JSON.stringify(result[2]));
                desiredObj[0].wbs = JSON.parse(JSON.stringify(result[1]));
                desiredObj[0].monthyearArr = JSON.parse(JSON.stringify(result[3]));
                desiredObj[0].fortnightDate = JSON.parse(JSON.stringify(result[4]));
            }
            if(desiredObj[0]){
                return res.json({"sEcho": parseInt(req.body.draw),
                "iTotalRecords": JSON.parse(JSON.stringify(result[5][0])).totalRecord,
                "iTotalDisplayRecords": JSON.parse(JSON.stringify(result[5][0])).totalRecord,
                "aaData": desiredObj});
             }
             else{
              res.json({"sEcho": parseInt(req.body.draw),
                "iTotalRecords": 0,
                "iTotalDisplayRecords": 0,
                "aaData": desiredObj});
            }
           
              });
    },


    filterTimeSheetReport:function(req,res,next){

        modelPortal.filterTimeSheetReport(req.body.EmpName,req.body.wbsName,req.body.hours,req.body.fDate,req.body.Empcode,req.body.proName,req.body.thumbhours,req.body.Billable,req.body.fortNightDate,req.body.YearMonth,req.session.retailerId,function(error,result){
            if(error){
                next(error);
            }
           res.json(result);
        });
    },


FilterDataForSelect:function(req,res,next){

        modelPortal.FilterDataForSelect(req.session.retailerId,function(error,result){
            if(error){
                next(error);
            }
           res.json(result);
        });
    },


 resetNotification: function(req, res, next) {

        var flag=0;
        var notification=0,type,assignedTo=0,edit=10,notificationForApproveReject=0;

            if(typeof(req.body.moduleType)=='undefined'){ 
             type='home';  assignedTo=0; notification=0; flag=0; 
        }
        modelPortal.notification(edit,notificationForApproveReject,type,notification,assignedTo,flag,req.session.userId, req.session.retailerId,function(err, result) {
             if (err) {
                 next(err);
                 res.json('0');
             } else {
                
                req.session.notification=result[0][0];
               
                next();  
             }
         });
     },

    customRolesExist: function(req, res, next) {
         modelPortal.customRolesExist(req.session.userId,req.session.roleId, req.session.retailerId,req.body.roleName,function(err, result) {
             if (err) {
                 next(err);

             } 
         });
     } ,

    getModules: function(req, res, next) {
         modelPortal.getModules(req.session.userId,req.session.roleId, req.session.retailerId, function(err, result) {
             if (err) {
                 next(err);

             } else { 
            req.result=result;
            req.session.url = req.url;
             next();
             }

         });
     } ,
        
    checkPassword: function(req, res, next) {
    
         modelPortal.checkPassword(req.body.userid,req.body.password,0,function(err, result) {
             if (err) {
                 next(err);

             } else { 
                 if(result[0][0].isActive==0){
                   res.json("2");
                 }
                 else{
                   var hash=result[0][0].userPassword.toString();
                   if((bcrypt.compareSync(req.body.password,hash))&&(hash!=0)){
                    if(result.length >=2 && result[1] !="")
                    req.session.daysRemaining=result[1][0].daysremaining; 
                    else 
                    req.session.daysRemaining=-1;    
                    res.json("1");
                   }
                   else{
                     res.json("0");
                   }
                  }  
             }

         });
     } ,
   
     addNewModules:function(req, res, next) {
         modelPortal.addNewModules(req.session.userId,req.session.roleId,req.session.retailerId,req.body.modules,function(err, result) {
             if (err) {
                 next(err);

             } else { 
                   
                    req.session.modules=req.session.modules.concat(JSON.parse("["+req.body.modules+"]"));        
                     res.json("0");
                   }
                    
             
             });
     } ,
   
     dayRemaining:function(req, res, next) {
        if (req.session) {
                 res.json(req.session.daysRemaining);   
             }else { 
                 res.json(-1);
        }
     } ,   
     EmailVerification:function(req, res, next) {
         modelPortal.EmailVerification(req.body.userid, function(err, result) {
             if (err) {
                 next(err);

             }else { 
                 res.json(result);
             }
         });
     },   
     registration: function(req, res, next) {
       var encriptPass=bcrypt.hashSync(req.body.pass,salt);
         modelPortal.retailerRegistration(
             req.body.compname,
             req.body.email,
             encriptPass,
             req.body.fname,
             req.body.lname,
             req.body.cno,
             req.body.modules,
             function(err, result) {
                 if (err) {
                     next(err);
                 } else {
                     if (result[0] && result[0][0].flag == flag.inserted) {
                         mailTemplates.retailerRegistration(req.body.fname, req.body.email, req.body.pass, function(error, resultMail) {
                             if (error) {
                                 result[0].flag = flag.mailFailed;
                             }
                         });
                     }
                     res.json(result);
                 }
             });
     },
    
       validateUser: function(req, res, next) {
         modelPortal.validateUser(
             req.query.v123v45,             
             function(err, result) {
                 if (err) {
                     next(err);
                 } else {   
                  
                        if( result[2].length>0){
                            configEmail.service= result[2][0].domailUserName;
                            configEmail.user=result[2][0].smtpMail,
                            configEmail.password= result[2][0].domailUserName,
                            configEmail.port= result[2][0].domailUserName;  
                           } 
                    if(result[5][0].isValidate==0){
                    
                     req.session.allSupervisors=result[3];
                     req.session.mySupervisor=result[4][0].managerid;
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
                     req.session.hrRole=result[5]; 
                     req.session.documentalert=0;
                     req.session.loginIdUser=result[0][0].lastinsert; 
                     req.session.defaultModule = result[0][0].defaultModuleId;
                     req.session.modules=result[1].map(function(v){
                        return v.id;
                     }); 
                     if(req.session.isRetailer)  
                     {
                        res.redirect('/mailServerInfo');
                     }     
                     
                     else{
                       
                        res.redirect('/changePassWordPage');
                  
                     } 

                    }
                    else{
                        res.redirect('/');
                    }

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
      submitUserPassword: function(req, res, next) {
      
         modelPortal.submitUserPassword(bcrypt.hashSync(req.body.pass,salt),req.session.userId,req.session.roleId,req.session.retailerId, function(err, result) {

             if (err) {
                 next(err);
             } else {
                 
                 }
                 res.json('success');
             
         });
     },
    changePass: function(req,res,next){
         modelPortal.checkPassword(req.session.userId,req.body.pass,1,function(err, result) {
             if (err) {
                 next(err);
             }
            else{ 
         
                var hash=result[0][0].userPassword;
                if(bcrypt.compareSync(req.body.oldpass,hash)){
                 
                    modelPortal.changePass(req.session.userId,bcrypt.hashSync(req.body.pass,salt),req.body.oldpass,
                        function(err, result){
                        if(err){
                            next(err);
                        } else
                        { 
                            res.json(1);
                        }
                    });
               }
               else{
                    res.json(0);
               }
                    
            }

         }); 
    },
    changeSupervisor : function(req, res, next) { 
                modelPortal.changeSupervisor( req.session.userId,req.session.retailerId ,
                    req.body.supervisorId,function(err, result) {
                     if (err) { 
                         next(err);
                         return;
                     }  
                     req.session.mySupervisor= req.body.supervisorId;
                     res.json(result); 
         });
     },

   



 getClient: function(req, res, next) {
  
         modelPortal.getAllClient(req.clientid, req.session.roleId, req.session.retailerId,req.statusflag, function(err, resultClient) {
             if (err) {
                 next(err);
                 return;
             }
             req.resultClient = resultClient;   
           
             next();
         });
     },
     addEditClient: function(req, res, next) {
         
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
                       
                         next(err);
                         return;
                     }
                     req.resultClient = resultClient;
                     next();
         });
     },


      addEditClient111: function(req, res, next) {
         
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
                       
                         next(err);
                         return;
                     }
                    res.json(resultClient);
         });
     },

 submitAssignmenttree: function(req, res, next) {

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
            req.session.retailerId,
         function(err, result) {

            if(err){

                 next(err);
             } else {
          res.json(result);
             }
         });
     }, 

addEditClientAjax : function(req, res, next) {
                var hid=req.body.id;
                modelPortal.addEditClientAjax( req.session.userId,req.session.roleId,req.session.retailerId , req.body.id,req.body.name,req.body.id1,function(err, resultClient) {
                     if (err) {
                        
                         next(err);
                         return;
                     }
                         
                          res.json(resultClient);
                  
         });
     },


mailServerInfo: function(req,res,next){
       
  modelPortal.mailServerInfo(req.session.retailerId,function(error,mailServerresult){
     if(error)
     {
        next(error);
        return;
     }
     
     req.mailServerresult=mailServerresult;
     next();
  });
},
mailServerConfigure: function(req,res,next){
    var service= req.body.service;
    var username= req.body.username;
    var password= req.body.password;
    var port= req.body.port;
    var enc_password;
    enc_password=encrypt(password,key);
     
  modelPortal.mailServerConfigure(req.session.retailerId,service,username,enc_password,port,function(error,result){
     if(error)
     {
        next(error);
        return;
     } else {
            res.json("Successfully Updated");

     }
  });
},
   
mailTest: function(req,res,next){
            mailTemplates.mailTest(req.body.to,req.body.subject,req.body.message,req.session.retailerId,function(error, resultMail) {
             if (error){
                  res.json(1);
             }
             else{
                  res.json(2);
             }
        });
 
    },
//------------------Profile---------------------
profile: function(req, res, next) {               
      
        modelPortal.getProfile(req.session.userId,req.session.roleId,req.session.retailerId,function(error,result) {
              if (error) {
                 next(error);
                 return;
             }
          
            req.resultProfile=result;
            next();
              });
    },
    updateProfile:function(req,res,next){
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

            if(1)
            {
          fs.rename(tempPath, targetPath, function(err){
            if (err) 
                next(err)

          });
        }
        }


if(typeof(filename)=='undefined')
{
filename=req.session.logo;
}

        modelPortal.updateProfile(req.session.userId,req.session.roleId,
            req.session.retailerId,req.body.cname,req.body.fname,req.body.lname,req.body.cno,
            req.body.emailid,filename,function(error,result) {
              if (error) {
                 next(error);
                 return;
             }
               next();
              });
    },


    exportToCsv: function(req, res, next) {               
       modelPortal.exportToCsv(req.body.type,req.body.status,req.session.userId,req.session.roleId,req.session.retailerId, function(errorCsv, resultCsv) {
                    if (errorCsv) {
                 next(errorCsv);
                 return;
             }
             var data = resultCsv[0].map(function(o, i) {
        var arr = Object.keys(o).map(function(_o, _i) {
          return o[_o];
        });
        return arr;
      });
      res.json(data);

        });
    },




     //-----------------------------------BUG---------------------------------------------------
      bugHome: function(req, res, next) {    
     
       modelPortal.bugHomeData(req.session.userId,req.session.roleId,req.session.retailerId, function(errorActivity, resultActivity) {
                    if (errorActivity) {
                 next(errorActivity);
                 return;
             }
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
   
        modelPortal.viewBug(req.session.userId,req.session.roleId,req.session.retailerId, function(errorActivity,resultViewBug) {
              if (errorActivity) {
                 next(errorActivity);
                 return;
             }
            req.resultViewBug=resultViewBug;
            next();
                  });
    },
     raiseBug: function(req, res, next) {               
        
        modelPortal.raiseBug(req.session.userId,req.session.roleId,req.session.retailerId, function(errorActivity,resultRaiseBug) {
              if (errorActivity) {
             
                 next(errorActivity);
                 return;
             }
            req.resultRaiseBug=resultRaiseBug;
     
            next();
                  });
    },

addBug :function(req, res, next) {

        var filenames ='';
        var targetPaths = '';
        var fnames ='';
        if(req.body.fileUrls){
            var tempurlArr = req.body.fileUrls.split('amit');
           
            var async = require("async");
            var nameArr =[];
            var urlArr =[];
            var fnameArr =[];
            async.eachSeries(tempurlArr, function iteratee(item, callback) {
                var currentDate = Date.now();
                var extension = 'png';
                var fileName = 'screenshot_' + currentDate;
                var fileUrl = item.replace(/^data:image\/\w+;base64,/, "");
                var myBuffer = new Buffer(fileUrl, 'base64');
                var dir = './public/attach';
                var uploadDir = path.resolve(dir);
                if (!fs.existsSync(uploadDir)){
                    fs.mkdirSync(uploadDir);
                }
                fs.writeFile(uploadDir+"/"+fileName, myBuffer,function(err){
                    if(err) 
                    {
                        
                    }
                    else{
                        fnameArr.push(fileName);
                        nameArr.push(fileName);
                        urlArr.push('attach'+"/"+fileName);
                        callback();
                    }

                });
            }, function done(err) {
                if(err){
                }
                else{
                    filenames = nameArr.toString();
                    fnames = fnameArr.toString();
                    targetPaths = urlArr.toString();
                    if(req.files.length){
                        filenames = filenames + ','+ _.pluck(req.files,'originalname').toString(); 
                        fnames = fnames + ','+ _.pluck(req.files,'filename').toString();
                        targetPaths = targetPaths + ','+ _.pluck(req.files,'path').toString().replace(new RegExp('public/', 'g'),'');
                    }
                    modelPortal.addBug(req.body.estimatedEffort,req.body.actualEffort,req.body.linkTo,req.session.userId,req.body.project,req.body.status,req.body.assingedto,req.body.priority,
                        req.body.severity, req.body.technology, req.body.type,  req.body.tentativeclouser,req.body.titlebox,
                        req.body.description,  targetPaths, filenames, fnames,(req.body.detectedBy||0),(req.body.cycle||0),req.session.retailerId,function(error,result){
                        if (error) {
                        
                         }
                         else{ 
                            mailTemplates.addBug(result[0][0].emailId,result[0][0].pass,req.body.titlebox,function(error, resultMail) {
                                 if (error) {
                                   
                                 }
                             }); 
                        }
                        next();    
                    });
                }
            });
        }
        else{
            if(req.files.length){
                filenames = _.pluck(req.files,'originalname').toString(); 
                fnames = _.pluck(req.files,'filename').toString();
                targetPaths = _.pluck(req.files,'path').toString().replace(new RegExp('public/', 'g'),'');
            }
            modelPortal.addBug(req.body.estimatedEffort,req.body.actualEffort,req.body.linkTo,req.session.userId,req.body.project,req.body.status,req.body.assingedto,req.body.priority,
                req.body.severity, req.body.technology, req.body.type,  req.body.tentativeclouser,req.body.titlebox,
                req.body.description,  targetPaths, filenames, fnames,(req.body.detectedBy||0),(req.body.cycle||0),req.session.retailerId,function(error,result){
                if (error) {
                
                 }
                 else{ 
                    mailTemplates.addBug(result[0][0].emailId,result[0][0].pass,req.body.titlebox,function(error, resultMail) {
                         if (error) {
                           
                         }
                     }); 
                }
                next();    
            });
        }
       
            
    },

   bugDetails: function(req, res, next) {               
      
        modelPortal.bugDetails(req.body.bugid,function(errorActivity,resultBugDetails) {
              if (errorActivity) {
                 next(errorActivity);
                 return;
             }
     
            req.resultBugDetails=resultBugDetails;
            next();
              });
    },
    updateBugDetails: function(req, res, next) {               
     
        modelPortal.updateBugDetails(req.body.bugid,req.body.colname,req.body.value,
                                        req.session.userId,
                                        function(errorActivity,resultBugDetails) {
                                          if (errorActivity) {
                                             next(errorActivity);
                                             return;
                                         }


if(req.body.colname == 'assingedToUserId'){
   mailTemplates.addBug(resultBugDetails[2][0].emailId,resultBugDetails[2][0].pass,resultBugDetails[3][0].bugTitle,function(error, resultMail) {
             if (error) {
               
             }   
        }); 
}

            req.resultBugDetails=resultBugDetails;
            req.body.titlebox=resultBugDetails[0][0].bugTitle;
            req.body.description=resultBugDetails[0][0].bugDescription;
            req.body.status= resultBugDetails[0][0].description1;

            if(req.body.colname=="assingedToUserId")
            { 
            }

            if(req.body.colname=="status")
            {
          
            }
            next();
              });
    },
    updatebugdescription:function(req, res, next){
       
        modelPortal.updatebugdescription(req.body.bugid,req.body.description,req.body.linkedTo,req.session.userId,req.session.retailerId,function(error,result) {
              if (error) {
                 next(error);
                 return;
             }            
            res.json(result);
                  });
    }, 
     addComment: function(req, res, next) {               
      
        modelPortal.addComment(req.body.bugid,req.body.comment,req.session.userId,req.session.retailerId, function(errorActivity,resultAddComment) {
              if (errorActivity) {
               
                 next(errorActivity);
                 return;
             }            
            req.resultAddComment=resultAddComment;
          
            next();
                  });
    },


    bugAttachment: function(req, res, next) {  
    var filename;
    var targetPath;
    var fname;
    var fileSize;
   
    var targetPath='./'+req.file.path+req.file.originalname;
    if(1){
        fs.rename(req.file.path,targetPath,function(err){
            if(err)
            throw err;
        });
    }
    var targetPath=(req.file.path+req.file.originalname).replace('public/','');             
       
        modelPortal.bugAttachment(
            req.body.id,
            req.session.userId,
            targetPath,
            req.file.filename,
            req.file.originalname,            
            req.session.retailerId,
            function(errorActivity,resultAddAttachment) {
              if (errorActivity) {
              
                 next(errorActivity);
                 return;
             }     
            req.resultAddAttachment=resultAddAttachment[0]; 
            next();
                  });
    },
     deleteBugAttach: function(req, res, next) {   
        modelPortal.deleteBugAttach( req.body.aatachId,req.session.userId,req.session.retailerId, function(error,result) {
              if (error) { 
                 next(error);
                 return;
             }      
            res.json(result);
        });
    },
    getAlltech: function(req, res, next) {                       
        modelPortal.getAlltech(req.body.projectId,req.session.userId,req.session.retailerId,  function(errorActivity,resultAllTech) {
              if (errorActivity) {
              
                 next(errorActivity);
                 return;
             }
            req.resultAllTech=resultAllTech;
           
            next();
                  });
    },
        filterBug: function(req, res, next) {
    
    var tempstatus='';
    var tempseverity='';
    var temppriority='';
    var tempassingedto='';
    var temptechnology='';
    var tempproject='';
    var status=req.body.status;
    var priority=req.body.priority;
    var severity=req.body.severity;
    var assingedto=req.body.assingedto;
    var technology=req.body.technology;
    var project=req.body.project;

    var bugId=req.body.bugId;
    var title=req.body.title;
    var estefforts=req.body.esteffort;
    var acteffort=req.body.acteffort;
    var crtdate=req.body.createdate;
    var closedate=req.body.closedate;
    var searchString = req.body.search.value || '';
    if(req.body.order){
        if(req.body.order[0].column){
            var tempsortIndex = parseInt(req.body.order[0].column);
            var sortString = req.body.columns[tempsortIndex].data +" "+req.body.order[0].dir;
        }
        else{
            var sortString = 'lastModifiedDate desc';
        }
    }
    else{
        var sortString = 'lastModifiedDate desc';
    }
    




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
    
  
    if( bugId==''|| bugId==null)
    bugId='0';
    if( title==''|| title==null)
    title='0';
    if( estefforts==''||estefforts==null)
    estefforts='0';
    if( acteffort==''||acteffort==null)
    acteffort='0';
    if( crtdate==''||crtdate==null)
    crtdate='00/00/0000';
    if( closedate==''||closedate==null)
    closedate='00/00/0000';


project=project?project:'';

 var query = require('url').parse(req.url, true).query;
        
        if(query.status){
            req.body.statusis="in";
            req.body.priorityis="in";
            req.body.severityis="in";
            req.body.assingedtois="in";
            req.body.technologyis="in";
            req.body.projectis="in";
        
            status=query.status;
            project=query.pid;
        }




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


        if(project.constructor === Array)
    {
        project.forEach(function(v,i) {
        if(i!=status.length-1)
            tempproject=tempproject+v+',';
        else
            tempproject=tempproject+v;
        });
        project=tempproject;
    }
        modelPortal.filterBug(req,res,req.body.statusis,status,req.body.priorityis,priority,req.body.severityis,severity,req.body.assingedtois,assingedto,req.body.technologyis,technology,req.body.projectis,project,bugId,title,estefforts,acteffort,crtdate,closedate,req.session.userId,req.session.retailerId,req.session.roleId,req.body.start,req.body.length,searchString,sortString, function(errorActivity,resultFilterBug) {
              if (errorActivity) {
               
                 next(errorActivity);
                 return;
             }
            req.resultFilterBug=resultFilterBug;
            req.showSelect=req.body.showSelect;
             next();
                   });
    },

     //--------------------------------------Bug End-------------------------------------------------

     logout: function(req,res,next){
        modelPortal.logout(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId,req.session.loginIdUser,function(error, result){
            if(error){
                req.session.destroy();
                req.page = 'index';           
                next();
            }
            else{
                req.session.destroy();
                req.page = 'index';           
                next();
 
            }
        });
        
     },


     //---------------------------------------Document--------------------------------------------------
    
         myUploads:function(req,res,next){
        modelPortal.myUploads(req.session.userId,req.session.retailerId,function(err, result){
            if(err){
                next(err);
                    return;
            }
            req.myUploads=result;
          next()
        });
    },


    verifyCustomRole: function(req,res,next){
        modelPortal.verifyCustomRole(req.session.userId,function(error,result){
            if(error){
                next(error);
                
            }
            req.session.croleId=result[0][0].crole_id ;
            if(req.session.croleId==null){

                res.json(0);
            }
            else{
              res.json(1);
           }

       });
    },
    setdocalert:function(req,res,next){
            req.session.documentalert=0;
            res.json('hi');
       
    },
     getCustomRoleById:function(req,res,next){
        modelPortal.getCustomRoleById(req.body.rid,function(errorCustomRoles, resultCustomRoles){
            if(errorCustomRoles){
                next(errorCustomRoles);
                    return;
            }
            res.json(resultCustomRoles);
        });
    },

    getIndustry:function(req, res, next) {
         modelPortal.getIndustry(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultIndustry){
                    if (error) {
                 next(error);
                 return;
             }
            req.resultIndustry=resultIndustry;
             next();
             });
    },

    getBusiness:function(req, res, next) {

         modelPortal.getBusiness(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultBusiness) {
                    if (error) {
                 next(error);
                 return;
             }
            req.resultBusiness=resultBusiness;
             next();
             });
    },

    getDocument:function(req, res, next) {
         modelPortal.getDocument(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultDocument) {
                    if (error) {
                 next(error);
                 return;
             }
            req.resultDocument=resultDocument;
             next();
             });
    },

    getTechnology:function(req, res, next) {
         modelPortal.getTechnology(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultTechnology) {
                    if (error) {
                 next(error);
                 return;
             }
            req.resultTechnology=resultTechnology;
             next();
             });
    },

    getind:function(req, res, next) {
         modelPortal.getIndustry(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultIndustry){
                    if (error) {
                 next(error);
                 return;
             }
     
            res.json(resultIndustry);
             });
    },

    getbus:function(req, res, next) {

         modelPortal.getBusiness(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultBusiness) {
                    if (error) {
                 next(error);
                 return;
             }
             res.json(resultBusiness);
             });
    },

    getdoc:function(req, res, next) {

         modelPortal.getDocument(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultDocument) {
                    if (error) {
                 next(error);
                 return;
             }

           res.json(resultDocument);
         
             });
    },

    gettec:function(req, res, next) {
         modelPortal.getTechnology(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultTechnology) {
                    if (error) {
                 next(error);
                 return;
             }
            res.json(resultTechnology);
          
             });
    },

    getRestriction:function(req, res, next) {
         modelPortal.getRestriction(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultRestriction) {
                    if (error) {
                 next(error);
                 return;
             }
            req.resultRestriction=resultRestriction;
             next();
             });
    },


     getres:function(req, res, next) {
         modelPortal.getRestriction(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId, function(error, resultRestriction) {
                    if (error) {
                 next(error);
                 return;
             }
           res.json(resultRestriction);
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
               
                res.json(result);
              
              });
          },
fileDetialsUpdate: function(req,res,next){
     
  modelPortal.fileDetialsUpdate(req.session.retailerId,req.body.fileid,req.body.fileTitle,req.body.fileAuthor,req.body.description,req.body.industry,req.body.business,
    req.body.doctypes,req.body.technology, req.body.rLevel,req.body.industryhide,req.body.businesshide,
    req.body.doctypehide,req.body.newTechide,req.body.rLevelhide,function(err, result){
                if(err){
                    next(err);
                    return;
                }
               
                res.json('success');
              
              });
          },
 docActiveInactive:function(req,res,next){
     
  modelPortal.docActiveInactive(req.session.retailerId,req.body.croleid,req.body.flag,function(err, result){
                if(err){
                    next(err);
                    return;
                }
               
                res.json(result);
              
              });
          },         
    getAllFiles: function(req,res,next){
     
        modelPortal.getAllFiles(req.session.userId,req.session.roleId,req.session.retailerId,req.session.croleId,function(err,resultFiles){
            if(err){
                next(err);
                return;
            }  
        var  selectVariableStar=["*****","****","***","**","*"];
        for(var i=0,len=resultFiles[1].length;i<len;i++){
         resultFiles[1][i].value=selectVariableStar[i];
            }      
            req.resultFiles=resultFiles;
            next();
        })
    },

    setFilePermission: function(req,res,next){
 
   modelPortal.setFilePermission(req.session.userId,req.session.roleId,req.session.retailerId,function(err,permissionResult){
    if(err){
        next(err);
        return;
    }
  
    req.permissionResult=permissionResult;
    next();
   });

 },
 confirmedFilePermission: function(req,res,next){

    modelPortal.confirmedFilePermission(req.session.userId,req.session.roleId,req.session.retailerId,req.body.status,function(err,result){
    if(err){
        next(err);
        return;
    
    }

        mailTemplates.confirmFile(req.session.firstName,result[0][0].userEmail,function(error, resultMail) {
             if (error) {
             }
             
        });
    next();
   });

 },
deleteFileByIdPermanentely: function(req,res,next){
 
   var delPath = path.resolve('./public/attach/');

    modelPortal.deleteFileByIdPermanentely(req.session.userId,req.session.roleId,req.session.retailerId,req.body.status,req.body.status1,function(err,result){
    if(err){
        next(err);
        return;
    }
 
  delPath = path.resolve('./public/attach/'+result[0][0].fpath);
 
  fs.unlinkSync(delPath);
  res.json('succs');
   });
        
 },

 downloadFileCount : function(req,res,next){
 
  

    modelPortal.downloadFileCount(req.session.userId,req.session.roleId,req.session.retailerId,req.body.fileid,req.body.rating,req.body.flag,function(err,result){
    if(err){
        next(err);
        return;
    }
 

  res.json(result);
   });
        
 },


rejectFileById: function(req,res,next){
  
    modelPortal.rejectFileById(req.session.userId,req.session.roleId,req.session.retailerId,req.body.status,req.body.status1,function(err,result){
    if(err){
        next(err);
        return;
    }

    mailTemplates.rejectFile(req.session.firstName,result[0][0].userEmail,req.body.status1,function(error, resultMail) {
             if (error) {
               
             }
            
                
        });
 
    next();
   });
        
 },

 showRejectedFiles:function(req,res,next){
  
    modelPortal.showRejectedFiles(req.session.userId,req.session.roleId,req.session.retailerId,function(err,resultRejectedFile){
        if(err){
            next(err);
            return ;
       }
       req.resultRejectedFile=resultRejectedFile;
       next();
    }

 );
},


attachDocFile: function(req, res, next) {
    var parsedData = null;
    if (req.file != undefined) {
        var currfolder = req.body.currfolder;
        var fname = req.file.originalname;
        var now = Date.now();
        var exet = fname.split('.');
        var exe = exet[exet.length - 1];

        var tempPath = req.file.path,
        targetPath = path.resolve('./public/attach/' + exet[0] + '_' + now + '.' + exe);
        var strname = exet[0] + '_' + now + '.' + exe;
        fs.rename(tempPath, targetPath, function(err) {
            if (err) {

                res.redirect('/breakdown');
            } else {
                if (exe == 'doc' || exe == 'docx' || exe == 'rtf' || exe == 'txt' || exe == 'csv') {
                    textract.fromFileWithPath(targetPath, config, function(error, text) {
                        if (error) {

                        } 
                        else if (typeof text != undefined){
                               var textLowerCase = text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g, '').replace(/ +/g, ' ').replace(/'/g, '').replace(/"/g, '').split(' ');

                                textLowerCase=union_arrays(textLowerCase,[]);
                                parseAll(textLowerCase, req, strname, 1, next);
                        }
                        
                    });
                } 
                else if (exe.toLowerCase() == 'pdf'){
                    var processor = pdf_extract(targetPath, options, function(err){
                        if (err) {
                        }
                    });
                    processor.on('complete', function(data) {
                        var text = '';
                        for (var i = 0; i < data.text_pages.length; i++){
                            text = text.concat(data.text_pages[i]);
                        }
                        var textLowerCase = text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/ +/g, ' ').replace(/'/g, '').replace(/"/g, '').split(' ');

                        textLowerCase=union_arrays(textLowerCase,[]);

                        parseAll(textLowerCase, req, strname, 1, next);
                       
                    });
                    processor.on('error', function(err) {
                    });
                }
                else if (exe == 'pptx') {
                    textract.fromFileWithMimeAndPath("application/vnd.openxmlformats-officedocument.presentationml.presentation", targetPath, function(error, text) {
                        if (error) {

                        } else if (typeof text != undefined) {
                                var textLowerCase = text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g, '').replace(/ +/g, ' ').replace(/'/g, '').replace(/"/g, '').split(' ');

                                textLowerCase=union_arrays(textLowerCase,[]);

                                parseAll(textLowerCase, req, strname, 1, next);
                        }
                    });

                }
                else if (exe.toLowerCase() == 'zip') {
                    var newpath = './public/attach/' + exet[0] + '_' + now + '.' + exe;
                    var folderpath = './public/attach/' + exet[0] + '_' + now;
                    var foldername = exet[0] + '_' + now;
                    var zip = new AdmZip(targetPath);
                    zip.extractAllTo(path.join(__dirname, '../../public/attach/' + exet[0] + '_' + now), false);
                    var zipEntries = zip.getEntries();
                     var textLowerCase="";
                     var count=1;
                    zipEntries.forEach(function(zipEntry){
                        var namefile = zipEntry["name"];
                        var namearr = namefile.split('.');
                        var now = Date.now();
                        var exe = namearr[namearr.length - 1].toLowerCase();
                        var newpath = folderpath + '/' + namefile;
                        if (exe == 'doc' || exe == 'docx' || exe == 'rtf' || exe == 'txt' || exe == 'csv') {
                            textract.fromFileWithPath(newpath, config, function(error, text) {
                                if (error) {
                                   
                                    if(count==zipEntries.length){
                                        parseAll(textLowerCase, req,strname,1, next);
                                    }
                                        count++;
    
                                } else if(typeof text != undefined) {
                                        var textLowerCase1 =text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g, '').replace(/ +/g, ' ').replace(/'/g, '').replace(/"/g, '').split(' ');
                                        textLowerCase= union_arrays(textLowerCase,textLowerCase1);
                                       
                                         if(count==zipEntries.length){
                                            parseAll(textLowerCase, req,strname,1, next);
                                         } 
                                         count++;
  
                                }
                                
                            });
                        }
                        else if (exe == 'pptx') {
                            textract.fromFileWithMimeAndPath("application/vnd.openxmlformats-officedocument.presentationml.presentation", newpath, function(error, text) {

                                if (error) {
                                     
                                     if(count==zipEntries.length){
                                             parseAll(textLowerCase, req,strname,1, next);
                                         }
                                          count++; 

                                } else if (typeof text != undefined) {
                                       var textLowerCase1 =text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g, '').replace(/ +/g, ' ').replace(/'/g, '').replace(/"/g, '').split(' ');
                                          textLowerCase= union_arrays(textLowerCase,textLowerCase1);
                                       if(count==zipEntries.length){
                                         parseAll(textLowerCase, req,strname,1, next);
                                       } 
                                        count++;
                                }
                                 
                            });

                        }
                        else if (exe == 'pdf') {
                            var processor = pdf_extract(newpath, options, function(err) {
                                if (err) {
                                  
                                    if(count==zipEntries.length){
                                             parseAll(textLowerCase, req,strname,1, next);
                                    } 
                                     count++;
                                }
                            });
                            processor.on('complete', function(data){
                                var text = '';
                                for (var i = 0; i < data.text_pages.length; i++) {
                                    text = text.concat(data.text_pages[i]);
                                }
                               var textLowerCase1 =text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/ +/g, ' ').replace(/'/g, '').replace(/"/g, '').split(' ');

                                  textLowerCase= union_arrays(textLowerCase,textLowerCase1);
                                if(count==zipEntries.length){
                                   
                                     parseAll(textLowerCase, req,strname,1, next);
                                } 
                                 count++;
                            });

                            processor.on('error', function(err) {
                                
                                 if(count==zipEntries.length){
                                    
                                     parseAll(textLowerCase, req,strname,1, next);
                                } 
                                 count++;
                                blankentry(newpath, req);
                            });

                        }
                        else if (exe == 'exe'){
                           fs.unlinkSync(newpath);
                            if(count==zipEntries.length){
                                 parseAll(textLowerCase, req,strname,1, next);
                             } 
                             count++;
                        }
                        else {
                            if(count==zipEntries.length){
                                   
                                     parseAll(textLowerCase, req,strname,1, next);
                            } 
                             count++;
                        }
                    });
                   
                } else {
                    var industry = req.body.industry == null ? '' : req.body.industry.toString();
                    var business = req.body.business == null ? '' : req.body.business.toString();
                    var doctype = req.body.doctype == null ? '' : req.body.doctype.toString();
                    var tec = req.body.newTec == null ? '' : req.body.newTec.toString();
                    var restriction = req.body.rLevel == null ? '' : req.body.rLevel.toString();

                    modelPortal.attachDocFile(req.session.userId, req.session.retailerId,
                        strname, req.body.currfolder, fname, req.body.descbox, req.body.authname,
                        industry, business, req.body.title, doctype, tec, req.session.roleId, restriction,
                        req.body.industryhide, req.body.businesshide, req.body.doctypehide, req.body.newTechide,
                        req.body.rLevelhide, parsedData,
                        function(err, result) {
                            if (err) {
                                next(err);
                                return;
                            } else {
                                next();
                            }
                        });
                }
            }

        });
    }

},  
   

tableSearchBox: function(req,res,next){

req.body.searchbox = req.body.searchbox.replace(/ +/g,' ');
   modelPortal.tableSearchBox((req.body.nb ||' '),(req.body.nd || ' '),(req.body.ni ||' '),(req.body.nt || ' '),(req.body.nr || ' '),req.body.searchbox.trim(),req.session.roleId,req.session.croleId,req.session.retailerId,req.session.userId,function(err,resultSearchFile){
        if(err){
            next(err);
            return ;
       }

var idarr = [];
resultSearchFile[0].forEach(function(element,index){
       idarr.push(element.id);

});

  if(resultSearchFile.length==3){
        resultSearchFile[1].forEach(function(element,index){
              if(idarr.indexOf(element.id)==-1){
                  resultSearchFile[0].push(element);
       }
   });
}
       res.json(resultSearchFile[0]);
    }

 );
 },



 filterFiledata: function(req,res,next){
                        var industry=req.body.ni==null? '':req.body.ni.toString();
                        var business=req.body.nb==null? '':req.body.nb.toString();
                        var doctype=req.body.nd==null? '':req.body.nd.toString();
                        var tec=req.body.nt==null? '':req.body.nt.toString();
    modelPortal.filterFiledata(business,doctype,industry,tec,req.session.roleId,req.session.croleId,req.session.userId,function(err,result){
         if(err){
            next(err);
            return;
         }




         res.json(result);
         next();
    });
 },
 viewFileDetails:function(req,res,next){
 
      modelPortal.viewFileDetails(req.session.userId,req.session.roleId,req.session.retailerId,req.body.id,function(err,result){
        if(err){
            next(err);
            return ;
        }

        res.json(result);
        
    });
},
getAllVerticalValuesCustomRoles: function(req,res,next){
  modelPortal.getAllVerticalValuesCustomRoles(req.session.userId,req.session.roleId,req.session.retailerId,function(err,allCustomVerticalresult){
        if(err){
            next(err);
            return ;
        }

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

       res.json(allRoleresult);
    });
},


Docmaster:function(req,res,next){
        modelPortal.Docmaster(req.session.userId,req.session.roleId,req.session.retailerId,req.body.type,req.body.oldname,req.body.name,req.body.flag,req.session.croleId,function(err,result){
            if(err){
                
            }   
            else{
                        
                        res.json(result);
                }     



        });
    },
    addeditComponent :function(req,res,next){
        var parameter=[req.session.userId,req.session.roleId,req.session.retailerId];
        parameter.push(req.body.name);
        parameter.push(req.body.oldname);
        parameter.push(req.body.type);
        parameter.push(req.body.compOldType);
        parameter.push(req.body.flag);
        modelPortal.addeditComponent(parameter,function(err,result){
            if(err){
            }   
            else{
                   res.json(result);
            }   

        });   

    },
    addeditattribute :function(req,res,next){
        var parameter=[req.session.userId,req.session.roleId,req.session.retailerId];
        parameter.push(req.body.name);
        parameter.push(req.body.oldname);
        parameter.push(req.body.flag);
        modelPortal.addeditattribute(parameter,function(err,result){
            if(err){
            }   
            else{
                   res.json(result);
            }   

        });   

    },
    addeditvalue :function(req,res,next){
        var parameter=[req.session.userId,req.session.roleId,req.session.retailerId];
        parameter.push(req.body.name);
        parameter.push(req.body.oldname);
        parameter.push(req.body.flag);
        modelPortal.addeditvalue(parameter,function(err,result){
            if(err){
            }   
            else{
                   res.json(result);
            }   

        });   

    },
    addattrvaluemapping :function(req,res,next){
        var parameter=[req.session.userId,req.session.roleId,req.session.retailerId];
        parameter.push(req.body.name);
        parameter.push(req.body.val);
        parameter.push(req.body.flag);
        modelPortal.addattrvaluemapping(parameter,function(err,result){
            if(err){
            }   
            else{
                   res.json(result);
            }   

        });   

    },
    getAttrAndValForAsset:function(req,res,next){
      modelPortal.getTypeAndSubtype(req.session.userId,req.session.roleId,req.session.retailerId,1,function(error,resultTypeSubtype){
        if(error){
          next(error);
         
        }
          res.json(resultTypeSubtype);
         
      });
    
    },
    addComponentAttributemapping :function(req,res,next){
        var parameter=[req.session.userId,req.session.roleId,req.session.retailerId];
        parameter.push(req.body.componentId);
        parameter.push(req.body.attributeId);
        parameter.push(req.body.flag);
        modelPortal.addComponentAttributemapping(parameter,function(err,result){
            if(err){
            }   
            else{
                   res.json(result);
            }   

        });   

    },
    deleteComponentAttributeMapping :function(req,res,next){
        var parameter=[req.session.userId,req.session.roleId,req.session.retailerId];
        parameter.push(req.body.name);
        modelPortal.deleteComponentAttributeMapping(parameter,function(err,result){
            if(err){
            }   
            else{
                   res.json(result);
            }   

        });   

    },
    inactiveAssetMaster :function(req,res,next){
        var parameter=[req.session.userId,req.session.roleId,req.session.retailerId];
        parameter.push(req.body.tableid);
        parameter.push(req.body.id);
        parameter.push(req.body.flag);
        modelPortal.inactiveAssetMaster(parameter,function(err,result){
            if(err){
            }   
            else{
                   res.json(result);
            }   

        });   

    },
    addeditBrandName :function(req,res,next){
        var parameter=[req.session.userId,req.session.roleId,req.session.retailerId];
        parameter.push(req.body.brandName);
        parameter.push(req.body.brandId);
        parameter.push(req.body.flag);
        modelPortal.addeditBrandName(parameter,function(err,result){
            if(err){
            }   
            else{
                   res.json(result);
            }   

        });   

    },


     /***** tree*****/
   projectfortree:function(req,res,next){
      
modelPortal.projectfortree(req.session.retailerId,req.body.flag ,function(err,result){
            if(err){
                ////console.log("there is an error",err);
            }   
            else{
               // console.log("project tree view",result);
                 res.json(result);
                } 
        });
   },

      showclients:function(req,res,next){
      
modelPortal.showclients(req.body.flag,req.session.retailerId ,function(err,result){
            if(err){
                ////console.log("there is an error",err);
            }   
            else{
               // console.log("project tree view",result);
                 res.json(result);
                } 
        });
   },


      showprojects:function(req,res,next){
      
modelPortal.showprojects(req.body.flag,req.body.clientid ,function(err,result){
            if(err){
                ////console.log("there is an error",err);
            }   
            else{
               // console.log("project tree view",result);
                 res.json(result);
                } 
        });
   },

         assignmentedit:function(req,res,next){
      
modelPortal.assignmentedit(req.body.clientid ,function(err,result){
            if(err){
                ////console.log("there is an error",err);
            }   
            else{
               // console.log("project tree view",result);
                 res.json(result);
                } 
        });
   },

         activeinactive:function(req,res,next){
      
modelPortal.activeinactive(req.body.clientid,req.body.actval,req.body.flag ,function(err,result){
            if(err){
                ////console.log("there is an error",err);
            }   
            else{
               // console.log("project tree view",result);
                 res.json(result);
                } 
        });
   },

      showwbs:function(req,res,next){
      
modelPortal.showwbs(req.body.projectid ,function(err,result){
            if(err){
                ////console.log("there is an error",err);
            }   
            else{
               // console.log("project tree view",result);
                 res.json(result);
                } 
        });
   },  

        updateProjectDate:function(req,res,next){
      
modelPortal.updateProjectDate(req.body.proid,req.body.penddate ,function(err,result){
            if(err){
                ////console.log("there is an error",err);
            }   
            else{
               // console.log("project tree view",result);
                 res.json(result);
                } 
        });
   },

           updatewbsDate:function(req,res,next){
      
modelPortal.updatewbsDate(req.body.proid,req.body.penddate ,function(err,result){
            if(err){
                ////console.log("there is an error",err);
            }   
            else{
               // console.log("project tree view",result);
                 res.json(result);
                } 
        });
   },

   updatewbsandproject:function(req,res,next){
      
modelPortal.updatewbsandproject(req.body.proid,req.body.penddate ,function(err,result){
            if(err){
                ////console.log("there is an error",err);
            }   
            else{
               // console.log("project tree view",result);updatewbsandproject
                 res.json(result);
                } 
        });
   },

         editwbsdetail:function(req,res,next){
      
modelPortal.editwbsdetail(req.body.wbsid ,function(err,result){
            if(err){
                ////console.log("there is an error",err);
            }   
            else{
               // console.log("project tree view",result);clientseditgetprojectresource showwbsProjectby
                 res.json(result);
                } 
        });
   },

            showwbsProjectby:function(req,res,next){
      
modelPortal.showwbsProjectby(req.body.clientid ,function(err,result){
            if(err){
                ////console.log("there is an error",err);
            }   
            else{
               // console.log("project tree view",result);clientseditgetprojectresource 
                 res.json(result);
                } 
        });
   },


            getprojectresource:function(req,res,next){
      
modelPortal.getprojectresource(req.body.ids ,req.body.wbsid,function(err,result){
            if(err){
                ////console.log("there is an error",err);
            }   
            else{
               // console.log("project tree view",result);clientsedit
                 res.json(result);
                } 
        });
   },

      clientsedit:function(req,res,next){
      
modelPortal.clientsedit(req.body.clientid ,function(err,result){
            if(err){
                ////console.log("there is an error",err);
            }   
            else{
               // console.log("project tree view",result);
                 res.json(result);
                } 
        });
   },

      showassignment:function(req,res,next){
      
modelPortal.showassignment(req.body.wbsid ,function(err,result){
            if(err){
                ////console.log("there is an error",err);
            }   
            else{
               // console.log("project tree view",result);
                 res.json(result);
                } 
        });
   },


//--------------------------Project-WBS-------------------
 projectDetails: function(req, res, next) {
         modelPortal.getProjectDetails(req.session.userId,req.session.roleId,req.session.retailerId,
             function(err, result) {
                 if (err) {
                     next(err);
                 } else { 

                     req.projectResults=result[0];

             next();
                 }
             });
     },

     projectStatus: function(req, res, next) {
          if(req.body.order){
            if(req.body.order[0].column){
                var tempsortIndex = parseInt(req.body.order[0].column);
                var sortstr = req.body.columns[tempsortIndex].data +" "+req.body.order[0].dir;
            }
            else{
                var sortstr = '';
            }
        }
        else{
            var sortstr = '';
        }

          
           modelPortal.projectStatus(req.body.status,req.session.userId,req.session.roleId,req.session.retailerId,req.body.start,req.body.length,req.body.search.value,sortstr,
            function(err, result) {

             if (err) {
                
                 next(err);
             } else {

        var tempobj = JSON.stringify(result[0]);
               
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

     changeProjectStatus: function(req, res, next) {
          
           modelPortal.changeProjectStatus(req.body.pid,req.body.flag,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {


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

             next();
                     
                 }
                 else{
req.projectResults=result;

             next();


                 }
             }
         });
     },

      addEditPro: function(req, res, next) {
        
        var flag=req.body.flaghide;
    
    var pid=req.body.idhide;
  
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
             } else {
                next();
             }
         });
     },



     wbsDetails: function(req, res, next) {
         modelPortal.getWbsDetails(req.session.userId,req.session.roleId,req.session.retailerId,
             function(err, result) {
                 if (err) {
                     next(err);
                 } else { 
                     req.wbsResults=result[0];

             next();
                 }
             });
     },

     wbsStatus: function(req, res, next) {
        if(req.body.order){
            if(req.body.order[0].column){
                var tempsortIndex = parseInt(req.body.order[0].column);
                var sortstr = req.body.columns[tempsortIndex].data +" "+req.body.order[0].dir;
            }
            else{
                var sortstr = '';
            }
        }
        else{
            var sortstr = '';
        }

           modelPortal.wbsStatus(req.body.status,req.session.userId,req.session.roleId,req.session.retailerId,req.body.start,req.body.length,req.body.search.value,sortstr,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
                var tempobj = JSON.stringify(result[0]);
               
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

     changeWbsStatus: function(req, res, next) {
          
           modelPortal.changeWbsStatus(req.body.wbsid,req.body.flag,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {

                     res.send('ok');
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

             next();
                     
             }
         });
     },

addEditWbsDetails: function(req, res, next) {
        req.proname=req.body.proname;
        req.wbshidden=req.body.wbshidden;
           modelPortal.addEditWbsDetails(req.body.assign,req.body.flaghide,req.body.wbsidhide,req.body.wbsname,req.body.wbscode,
            req.body.proname,
        req.body.wbsowner,req.body.wbspsdate,
        req.body.wbspedate,req.body.wbsasdate,req.body.wbsaedate,req.body.wbsstatus,req.body.wbseffort,req.body.wbseffort1,
        req.body.wbslocation,req.body.typeValue,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
/*
                if(req.wbshidden==13){*/

                    res.json(result);
/*                        
                        }*/
                        // else{
                            
                        //     next();
                        // }

             }
         });
     },

     wbsAssignmentInProjectWbs: function(req, res, next) {
        req.proname=req.body.proname;
    
        req.wbshidden=req.body.wbshidden;

           modelPortal.wbsAssignmentInProjectWbs(req.body.assign,req.body.flaghide,req.body.wbsidhide,req.body.wbsname,req.body.wbscode,
            req.body.proname,
        req.body.wbsowner,req.body.wbspsdate,
        req.body.wbspedate,req.body.wbsasdate,req.body.wbsaedate,req.body.wbsstatus,req.body.wbseffort,req.body.wbseffort1,
        req.body.wbslocation,req.body.typeValue,
            req.body.flag1,
            req.body.assignmentId,
            req.body.procode,
            req.body.wbs,
            req.body.user,
            req.body.status,
            req.body.asdate,
            req.body.aedate,
             req.body.curdat,
             req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {


                    res.json(result);
                       

             }
         });
     },

    /* projectAddEdit: function(req, res, next) {
       
           modelPortal.projectAddEdit(req.pid,req.flag,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
                if(flag==1){
                    req.projectResults=result;
             
             next();
                     
                 }
                 else{
                req.projectResults=result;
             

             next();


                 }
             }
         });
     },*/

         projectAddEdit: function(req, res, next) {
         var pids,flags;
        if(req.pid!=undefined){
            pids=req.pid;
        }
        else{
              pids=0;
        }

           if(req.flag!=undefined){
            flags=req.flag;
        }
        else{
              flags=0;
        }
       
           modelPortal.projectAddEdit(pids,flags,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
                if(flag==1){
                    req.projectResults=result;
              //console.log("project data on edit flag 1",result);
             next();
                     
                 }
                 else{
                req.projectResults=result;
             //console.log("project data on edit flag not 1",result);
             next();


                 }
             }
         });
     },

     projectAddEditDetails: function(req, res, next) {
        
        var flag=req.body.hdnId;
       

    var pid=req.body.pid;
    
    var pclient=req.body.pclient==null?'':req.body.pclient;
    var ptech=req.body.ptech==null?'':req.body.ptech;
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
             } else {
             res.json(result);
                
             }
         });
     },


     projectWbs: function(req, res, next) {

        var query = require('url').parse(req.url, true).query;
        req.pid=query.pid;
        
        
  
           modelPortal.projectWbs(req.pid,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
             req.projectWbs=result;
                next();
             }
         });
     },


     checkUsersInProject: function(req, res, next) {

        req.pid=req.body.pid;
           modelPortal.projectWbs(req.pid,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

                 if (err) {
                     next(err);
                 } else {
   
                 res.json(result[5]);
                 }
         });
     },




    projectAddEditDetailsWithFlag: function(req, res, next) {
        var flag=req.body.hdnId;
       
var tab=req.body.tabDetail;
       

    var pid=req.body.pid;
   
    var pclient=req.body.pclient==null?'':req.body.pclient;
    var ptech=req.body.ptech==null?'':req.body.ptech;
     var presource=req.body.presource==null?'':req.body.presource;
     var ccontact=req.body.ccontact==null?'':req.body.ccontact;
     var plocation=req.body.plocation==''?'0':req.body.plocation;
     var pcomplexity=req.body.pcomplexity==''?'0':req.body.pcomplexity;
    req.pname=req.body.completed;
  

           modelPortal.projectAddEditDetailsWithFlag(pid,req.body.pname,req.body.planReq, req.body.pcode, req.body.ptype,req.body.pcat,
            pclient, ptech,presource,ccontact,
            req.body.pdescription, req.body.psdate,  req.body.pedate,  req.body.asdate,  req.body.aedate,
            req.body.pstatus,pcomplexity, plocation, req.body.pcommercialhead,
            req.body.paccounthead, req.body.pmanager,req.body.isBillable,req.body.taxCode,req.body.poNumber,tab,

            req.session.userId,req.session.roleId,req.session.retailerId,req.body.assigntoallforproject,
            function(err, result) {
             if (err) {
                 next(err);
             } else {

             res.json(result);
                
             }
         });
     },

     getAllWbsForProject: function(req, res, next) {

        var pid=req.body.pid;
        
          
           modelPortal.getAllWbs(req.body.pid,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
                  res.json(result);
             }
         });
     },


     AssignmentWBSForProject: function(req, res, next) {

           modelPortal.AssignmentWBSForProject(req.body.flag,req.body.pid,req.body.wbsid,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
        
             res.json(result);
             }
         });
     },

     updateAssignmentWBSForProject: function(req, res, next) {

           modelPortal.updateAssignmentWBSForProject(req.body.pid,
            req.body.psdate1,req.body.pedate1,
            req.body.asdate1,req.body.aedate1,req.body.assignmentid,
            req.body.wbsid,req.body.wbsname,req.body.wpsdate,
            req.body.wpedate,req.body.wasdate,req.body.waedate,req.body.asdate,
            req.body.aedate,req.body.flag,
            req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
             res.json(result);
             }
         });
     },


     getProjectAssignment: function(req, res, next) {

        var pid=req.body.pid;
        
 
           modelPortal.getProjectAssignment(req.body.wbsid,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
             res.json(result);
             }
         });
     },


      changeProjectAssignment: function(req, res, next) {

           modelPortal.changeProjectAssignment(req.body.wid,req.body.wbsname,req.body.wpsdate,req.body.wpedate,
            req.body.wasdate,req.body.waedate,
            req.body.pid,req.body.pname,req.body.psdate,req.body.pedate,
            req.body.asdate,req.body.aedate,req.body.aid,req.body.assignname,req.body.assigndate,
            req.body.assignedate,req.body.flag,
            req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
             res.json(result);
             }
         });
     },

     projectWbsForAssignment: function(req, res, next) {

 
           modelPortal.projectWbsForAssignment(req.body.aid,
            req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
             res.json(result);
             }
         });
     },


changeProjectWbs: function(req, res, next) {

           modelPortal.changeProjectWbs(req.body.wid,req.body.wbsname,req.body.wpsdate,req.body.wpedate,
            req.body.wasdate,req.body.waedate,
            req.body.pid,req.body.pname,req.body.psdate,req.body.pedate,
            req.body.asdate,req.body.aedate,req.body.flag,
            req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
             res.json(result);
             }
         });
     },

     clientContactAccToClient: function(req, res, next) {

           modelPortal.clientContactAccToClient(req.body.cid,
            req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
             res.json(result);
             }
         });
     },

     checkProjectWbsDate: function(req, res, next) {

           modelPortal.checkProjectWbsDate(req.body.pid,req.body.wid,
            req.body.psdate,req.body.pedate,req.body.wpsdate,req.body.wpedate,
            req.body.flag,
            req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
             
             res.json(result);
             }
         });
     },

    //----------------------------------ASSIGNMENT---------------------------------------



getAssignment:  function(req, res, next) {
      var sortstr=req.body.columns[parseInt(req.body.order[0].column)].data + ' ' + req.body.order[0].dir ;
         modelPortal.getAllAssignment(req.session.userId,req.session.roleId,req.session.retailerId,req.body.start,req.body.length,req.body.status,req.body.search.value,sortstr,function(err, resultAssignment) {
             if (err) {

                 next(err);
                 return; 
             }

             else{
               var tempobj = JSON.stringify(resultAssignment[0]);
          var desiredObj = JSON.parse(tempobj);
            res.send({"data":desiredObj});
              
             }
        
         });
     },

createEditAssignment:  function(req, res, next) {

 var query = require('url').parse(req.url,true).query;
    var assignmentId=query.assignmentId;
      req.assignmentId=assignmentId;
    var flag=query.flag;
      req.flag=flag;


         modelPortal.createEditAssignment(assignmentId,flag,req.session.retailerId, function(err, resultCreateAssignment){

             if (err) {               

                 next(err);
                 return;
             }
             else{
                req.allinfo=resultCreateAssignment;         
                }
                next();
             
        
         });
     },


changeAssignmentDate:function(req,res,next){
modelPortal.changeAssignmentDate(req.body.assid,req.body.flag,req.body.assgnDate ,function(err,result){
            if(err){
                console.log(err);
            }   
            else{
                 res.json(result);
                } 
        });
   },

submitAssignment: function(req, res, next) {

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

           next();
             }
         });
     },

changeAssignmentStatus: function(req, res, next) {
        

         var query = require('url').parse(req.url,true).query;
    var assignmentId=query.assignmentId;
    var flag=query.flag;
    req.flag=flag;

           modelPortal.changeAssignmentStatus(
            flag,
            assignmentId,
         function(err, result) {
             if (err) {
                 next(err);
             } else {


           next();
             }
         });
     },

     //------------------------------------------Asset----------------------------------------------




     
   inventory:function(req,res,next){ 
        req.type=-1;
           modelPortal.inventory(req.type,req.session.userId,req.session.retailerId,
            function(error, result){
            if(error){
              next(error);
                return;
            }
            req.assetType=result[0];
            req.tableData=result[1];

            next();
        }); 
    },
     inventoryAjax:function(req,res,next){ 
           modelPortal.inventory(req.body.type,req.session.userId,req.session.retailerId,
            function(error, result){
            if(error){
              next(error);
                return;
            }
            req.assetType=result[0];
            req.tableData=result[1];

            res.json(result[1]);
        }); 
    },
     getViewFurniture:function(req, res, next){
      modelPortal.getFurniture(req.session.firstname,req.session.roleid,req.session.retailerId,function(error, resultFurniture){
            if(error){
              next(error);
                return;
            }
            req.resultFurniture=resultFurniture;
            next();
        });
    },
    editHardware:function(req,res,next){

        modelPortal.editHardware(req.body.id,function(error,result){
            if(error){
                next(error);
            }
            req.resulteditHardware=result;
            next();
        });
    },

     getlineid:function(req,res,next){

        modelPortal.getlineid(req.body.id,function(error,result){
            if(error){
                next(error);
            }
           res.json(result);
        });
    },

      getlinevalue:function(req,res,next){

        modelPortal.getlinevalue(req.body.id,function(error,result){
            if(error){
                next(error);
            }
           res.json(result);
        });
    },
 
  deletesubline:function(req,res,next){

        modelPortal.deletesubline(req.body.ids,function(error,result){
            if(error){
                next(error);
            }
           res.json('success');
        });
    },


  updateTag:function(req,res,next){

        modelPortal.updateTag(req.body.tagNo,req.body.ides,function(error,result){
            if(error){
                next(error);
            }
           res.json(result);
        });
    },


      getsublinevalue:function(req,res,next){

        modelPortal.getsublinevalue(req.body.id,function(error,result){
            if(error){
                next(error);
            }
           res.json(result);
        });
    },

  showinfoOfInventory:function(req,res,next){

        modelPortal.showinfoOfInventory(req.body.flag,req.body.astId,req.body.coid,function(error,result){
            if(error){
                next(error);
            }
           res.json(result[0]);

        });
    },

    updateHardware:function(req,res,next){

        modelPortal.updateHardware('null',req.body.order,
    req.body.qty,req.body.Deliverydate,
    req.body.vendor,req.body.invoiceAmt,
    req.body.Invoicedate,req.body.invoiceNo,
    req.body.type,
    req.body.id,function(error,result){
            if(error){ 
   
                next(error);
            }

            req.resultupdatehardware=result;
            next();
        });
    },
getViewHardware:function(req,res,next){
    modelPortal.getHardware(req.session.firstname,req.session.roleid,req.session.retailerId,function(error,resultHardware){
        if(error){
            next(error);
        }

 
 
 
        req.resultHardware = resultHardware;

      next();
    });
},
    getViewSoftware: function(req,res,next){
        modelPortal.getSoftware(req.session.firstname,req.session.roleid,req.session.retailerId,function(error, resultSoftware){
            if(error){
                next(error);
                return;
            }
            req.resultSoftware=resultSoftware;
            next();
        });
    },
    addFurniture1: function(req, res, next) {
     modelPortal.addFurniture1(req.session.firstname,req.session.roleid,req.session.retailerId,function(error, result){
            if(error){
                next(error);
                return;
            }
            req.brandName=result;
            next();
        });
    },
    addFurniture: function(req, res, next) { 
        modelPortal.addFurniture('null',req.body.order,
            req.body.no,
            req.body.Deliverydate,req.body.vendor,
            req.body.invoiceNo,req.body.Invoicedate,
            req.body.invoiceAmt,req.body.typel,
            req.body.uprice,
            req.body.color,req.body.brand,'1','furniture',req.session.userId, function(error, result) {
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
        var datastring=req.body.attr;
       
        var line=req.body.Quantity;
        modelPortal.addHardware(req.body.type,req.body.invoiceNo,req.body.purchasedOrder,req.body.Quantity,req.body.invoiceDate,req.body.deliveryDate,req.body.vendor,req.body.invoiceAmt,req.session.userId,req.body.ides,function(error,result){
             if(error){

            }
            else{
              
              res.json(result[0][0].headerId); 

          }
      });
    },
   
    addline:function(req,res,next){

             modelPortal.addlineItem(req.body.ctype,req.body.t1,req.body.t2,req.body.t3,req.body.hdId,req.body.t6,req.body.t7,req.body.t8,req.body.ides,function(error,result){
                 if(error){
               
              
           }
            else{
                
              res.json(result[0][0].lineId);
              
             

            }
        });
        },
         
            subaddline:function(req,res,next){  
             modelPortal.addsublineItem(req.body.st1,req.body.lineid,req.body.st5,req.body.hdId,req.body.st2,req.body.st3,req.body.st4,req.body.st6,req.body.ides,function(error,result){
                 if(error){
              
              
            return;}
            else{
                 
              res.json('success');
                
            }
               }); 
    
    },

      addSoftware: function(req, res, next) {
        modelPortal.addSoftware(req.body.stype,req.body.stype,
            req.body.vendor,req.body.Invoicedate,
            req.body.name,
            req.body.des,
            req.body.test5,
            req.body.alllicensekey.toString(),req.body.users,
            req.body.edate,req.body.pdate,          
            '1','software', function(error, result) {
                if (error) {
                    next(error);
                } else 
                {
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
            '1','stationary', req.session.userId, function(error, result) {
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

        modelPortal.deleteData(req.body.id,function(error,result){
            if(error){
                next(error);
            }else{
            req.resultdelete=result;
            next();}
        });
    },

     deletesoft: function(req,res,next){
        modelPortal.deletesoft(req.body.id,function(error,result){
            if(error){
                next(error);
            }else{
                res.json(result[0][0].delflag);
            }
        });
    },

    deletehardware: function(req,res,next){

        modelPortal.deletehardware(req.body.id,function(error,result){
            if(error){
                next(error);
            }else{
                res.json(result[0][0].delflag);
            }
        });
    },


    getsubComponent: function(req,res,next){

        modelPortal.getsubComponent(req.body.lineId,function(error,result){
            if(error){
                next(error);
            }else{
                res.json(result);
            }
        });
    },

    updateFurniture:function(req,res,next){

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

                next(error);
            }

            req.resultupdatedata=result;
            next();
        });
    },

    updateStation:function(req,res,next){

        modelPortal.updatest('null',req.body.order,
    req.body.quantity,req.body.Deliverydate,
    req.body.vendor,req.body.invoiceAmt,
    req.body.Invoicedate,req.body.invoiceNo,
    req.body.typel,
    '2',req.body.id,function(error,result){
            if(error){ 

                next(error);
            }

            req.resultupdatest=result;
            next();
        });
    },

    updateSoft:function(req,res,next){

        modelPortal.updatesoft(req.body.htype,
            req.body.htype,
    req.body.vendor,req.body.Invoicedate,
    req.body.name,req.body.test5,
    req.body.des,req.body.key,
    req.body.users,
    req.body.pdate, req.body.edate,
    '4',req.body.id,function(error,result){
      if(error){ 

        next(error);
      }

        req.resultupdatesoft=result;
        next();
      });
    },

    editData:function(req,res,next){

        modelPortal.editData(req.body.id,function(error,result){
            if(error){
                next(error);
            }
            req.resultedit=result;
            next();
        });
    },

     descriptionforatr:function(req,res,next){

        modelPortal.descriptionforatr(req.body.id,function(error,result){
            if(error){
                next(error);
            }
            res.json(result);
        });
    },

    getViewStationary: function(req,res,next){
      modelPortal.getStationary(req.session.firstname,req.session.roleid,req.session.retailerId,function(error,resultStationary){
        if (error){
          next(error);
          return;
        }
        req.resultStationary=resultStationary;
        next();
      });
    },

    getComp:function(req,res,next){

      modelPortal.getType(req.body.atid,req.session.retailerId,function(error, resultHardwareType){

        if(error){

          next(error);
          return;
        }

        req.resultType=resultHardwareType;
        next();
      });
    },
    
    getDataAsset:function(req,res,next){
      modelPortal.getTypeAndSubtype(req.session.userId,req.session.roleId,req.session.retailerId,0,function(error,resultTypeSubtype){
        if(error){
         
          next(error);
         
        }
          req.resultTypeSubtype=resultTypeSubtype;
         
      });
       next();
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
        modelPortal.getAttribute(req.body.acid,req.session.retailerId,function(error,resultAttribute){
            if(error){
              next(error);
            return;}
            res.json(resultAttribute);
           
     
        });
    },

    getbrand:function(req,res,next){
        modelPortal.getbrand(req.session.retailerId,function(error,result){
            if(error){
              next(error);
            }
            else{
            res.json(result);}
        });
    },

    getAccessories:function(req,res,next){
        modelPortal.getAccessories(req.body.cid,req.session.retailerId,req.body.uid,function(error,resultType){
           if(error){
              next(error);
            return;}
            req.resultType=resultType;
            next();   
        });
    },
    getAtt:function(req,res,next){

        modelPortal.getAtt(req.body.atid,req.session.retailerId,function(error,result){
             if(error){
              next(error);
            return;}
            req.resultType=result;
            next();  
        });
    },
     saveAssignment:function(req,res,next){
        modelPortal.saveAssignment(req.body.cid,req.body.lid
            ,req.body.uid,req.body.tid,req.body.aflag,req.body.adate,req.body.assignHdwrid,
            function(error,result){
               if(error){
              
          }
          else{
             res.json('sucess');
          }
             
            });
    },
getUnassigned:function(req,res,next){
        modelPortal.getUnassigned(req.body.atid,req.body.acid,req.session.userId,req.session.retailerId,function(error,resultUnassigned){
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
modelPortal.getAssignedAssets(req.body.atid,req.body.uid,req.body.flag,function(error,resultAssigned){
if(error){
              next(error);
            return;}
            req.resultAssigned=resultAssigned;
            next(); 
});
},


assignedAssets:function(req,res,next){  
modelPortal.assignedAssets(req.session.userId,function(error,resultAssigned){
if(error){
              next(error);
            return;}
            req.resultAssigneds=resultAssigned;
            next(); 
});
},

getAssignedAssetsHome:function(req,res,next){
modelPortal.getAssignedAssetsHome(req.session.userId,req.session.retailerId,function(error,resultAssigned){
if(error){
              next(error);
            return;}
            req.resultAssignedHome=resultAssigned;
            next(); 
});
},


getAllEmpLeaveHours: function(req, res, next) {               
       modelPortal.getAllEmpLeaveHours(req.session.retailerId,req.body.dates, function(errorCsv, resultCsv) {
                    if (errorCsv) {
                 next(errorCsv);
                 return;
             }
             var data = resultCsv[0].map(function(o, i) {
        var arr = Object.keys(o).map(function(_o, _i) {
          return o[_o];
        });
        return arr;
      });
      res.json(data);
       });
    },



getFortnightDate:function(req,res,next){

       modelPortal.getFortnightDate(req.session.retailerId,function(error,result){

            if(error){
            }
            else{
           res.json(result[0]);
       }
        });
    },


 selectAdminData:function(req,res,next){

        modelPortal.selectAdminData(req.session.retailerId,function(error,result){
            if(error){
                next(error);
            }
           res.json(result[0]);
        });
    },

sendmailtouser:function(req,res,next){

        modelPortal.sendmailtouser(req.body.userdetail,function(error,result){
            if(error){
                next(error);
            }
            if(req.body.flag==1)
            {
              mailTemplates.sendmailtouserabouttranscation(result[0][0].name,result[0][0].mail,function(error, resultMail) { 
             });
          }
          else
          {
            mailTemplates.acknowledgeassetunassignment(result[0][0].name,result[0][0].mail,function(error, resultMail) { 
             });
          }
        
          });
    },


 

    sendmailtoadmin:function(req,res,next){
        modelPortal.getsoftwareexpirtdetails(req.session.retailerId,function(error,result){
            if(error){
                next(error);
            }
             var str1='';
            for(var i=0;i<result[1].length;i++)
            {
              str1=str1+result[1][i].softname+',';
            }
            for(var i=0;i<result[0].length;i++)
          {
              mailTemplates.sendmailtoadminaboutsoftexpiry(result[0][i].name,result[0][i].mail,str1,function(error, resultMail) { 
             });
          }

          });
    },


    sendemail:function(req,res,next){
        
mailTemplates.sendemailforassetissue(req.session.firstName,req.session.empcode,req.body.Subject,req.body.adminemailid,req.body.assetname,req.body.msg ,function(error, resultMail) {
 
            if(error){
                next(error);
            }
           res.json('success');
        });
    },


    //---------------------------------Expense------------------------------------------
   getExpenseWeekBy: function(req, res, next) {
         modelPortal.getExpenseWeekBy(req.session.userId,req.body.date, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

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

             res.json(result);
             next();
         });
     },

        selectByExpenseUser: function(req, res, next) {
         modelPortal.toSelectByExpenseUser(req.body.userId,req.session.roleId,req.body.date1,req.session.userId ,function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

             res.json(result);
             next();
         });
     },

        approverHome: function(req, res, next) {
         modelPortal.approverHome(req.body.userId,req.session.roleId,req.body.date1,req.session.userId ,function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                
             }

             res.json(result);
            
         });
     },

     

        selectByExpenseAdmin: function(req, res, next) {
         modelPortal.toSelectByExpenseAdmin(req.body.userId,req.body.date1,req.session.retailerId ,function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

             res.json(result);
       
             next();
         });
     },

       updatesencationAmount: function(req, res, next) {

              modelPortal.updatesencationAmount(req.body.samount,req.body.sdate,req.body.clid, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 
             }

            res.json("success");
             
           });
         },


        insertExpenseAttachment: function(req, res, next) {

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

      });
    }
    }
         modelPortal.insertAttachmentExpense(  req.body.claimedid,
            targetPath,
            filename,
            fname,
            req.session.userId,
            req.session.userId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                
                
             }

           res.json('success');
         });
     },

        getNewExpense: function(req, res, next) {

         modelPortal.getAllNewExpense(req.session.userId,req.session.retailerId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

             req.resultExpensenew = result;
             next();
         });
     },

     submitExpense: function(req, res, next) {

         modelPortal.tosubmitExpense(req.body.expClaim,req.body.comments, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

            res.json(result[0]);
            if(result[0][0].ng==1){
            mailTemplates.submitExpense(result[1][0].emailid,result[2][0].name10,function(error, resultMail){});    
            }
            
         });
     },

      selectExpense: function(req, res, next) {

         modelPortal.toSelectExpense(parseInt(req.body.typeid),parseInt(req.body.id),parseInt(req.body.expensecid), function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

            res.json(result);
             next();
         });
     },

        deleteExpense: function(req, res, next) {

         modelPortal.toDeleteExpense(req.body.typeid,req.body.id,req.body.expclid,req.session.userId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

            res.json('suceess');
             next();
         });
     },
           approveExpense: function(req, res, next) {

         var status=req.body.status1;
         if(status==0){
         var reason=req.body.remark;
         mailTemplates.rejectExpense(req.body.expemail,reason,function(error, resultMail){});
         }
        if(status==1){
         var reason=req.session.firstname;
         mailTemplates.approveExpense(req.body.toemail,req.session.firstName,function(error, resultMail){});
       }
       if(req.session.roleId==5 && status==1)
       {
        mailTemplates.approveExpenseByFm(req.body.toemail,req.session.firstName,function(error, resultMail){});
       }
         modelPortal.toApproveExpense(req.body.claimarray,req.session.roleId,req.session.userId,req.body.status1,req.body.transId,req.body.remark, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

            res.json(result);
            if(status!=0){
                     mailTemplates.submitExpenseandapprove(result[0][0].emailid,result[1][0].name10,req.session.firstName,function(error, resultMail){});
               }
         });
     },
       getMaxBillExpense: function(req, res, next) {

         modelPortal.togetMaxBillExpense(req.body.Id,req.session.retailerId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

            res.json(result);
             next();
         });
     },

        selectMasterExpense: function(req, res, next) {

         modelPortal.toSelectMasterExpense(req.body.expclaimId,req.session.retailerId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

            res.json(result);
             next();
         });
     },

      getExpense: function(req, res, next) {

         modelPortal.getAllExpense(req.session.userId,req.session.retailerId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

             req.resultExpense = result;
             next();
         });
     },

      reSubmitExpense: function(req, res, next) {

         modelPortal.toReSubmitExpense(req.body.expclaimId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

             res.json(result[0][0].flag2);
         });
     },

      getBillableUsers: function(req, res, next) {

         modelPortal.togetBillableUsers(req.session.userId,req.body.fortnightDate, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

             res.json(result[0]);
         });
     },


       printexpense: function(req, res, next) {
         modelPortal.toprintexpense(req.body.data,req.session.userId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);

             }
             res.json(result);
             
         });
     },

insertExpense: function(req, res, next) {
    var query = require('url').parse(req.url,true).query;
    var exp =query.expid;
    
    var a=req.body;
    var formdata=a.data;
    var form=JSON.parse(formdata);
    var flag=form.edit;
    if((exp==1)&&(flag==0)){
    modelPortal.insertHotelExpense(form.hotelexpensetypeid,form.hoteltrip,form.fromDate,form.toDate,form.hotelName,form.hotelReason,form.hotelifOther,form.hotelperDayRate,form.hotelTotalDay,form.hotelCurrency,form.htex,req.session.userId,req.session.userId,req.session.retailerId,form.fortnightDate,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                return;
             }
            
              res.json('success');
    });
}

    if((exp==1)&&(flag==1)){
    modelPortal.updateHotelExpense(form.hotelexpensetypeid,form.hoteltrip,form.fromDate,form.toDate,form.hotelName,form.hotelReason,form.hotelifOther,form.hotelperDayRate,form.hotelTotalDay,form.hotelCurrency,form.htex,req.session.userId,req.session.userId,form.exthotel,form.extclaimhotel,function(errorRoles, result){
    if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             res.json('success');
    });
}

  if((exp==2)&&(flag==0)){
    modelPortal.insertTravelExpense(form.travelexpensetypeid,form.traveltrip,form.travelFromDate,form.travelToDate,form.travelType,form.travelReason,form.travelIfNot,form.TravelRatePerDay,form.travelTotalDay,form.travelCurrency,form.travelex,req.session.userId,req.session.userId,req.session.retailerId,form.fortnightDate,function(errorRoles, result){
    if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             res.json('success');
    });
  }

    if((exp==2)&&(flag==1)){
    modelPortal.updateTravelExpense(form.travelexpensetypeid,form.traveltrip,form.travelFromDate,form.travelToDate,form.travelType,form.travelReason,form.travelIfNot,form.TravelRatePerDay,form.travelTotalDay,form.travelCurrency,form.travelex,req.session.userId,req.session.userId,form.exthotel,form.extclaimhotel,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             res.json('success');
    });
  }

   if((exp==3)&&(flag==0)){
   modelPortal.insertFoodExpense(form.travelexpensetypeid,form.foodtrip,form.foodFromDate,form.foodToDate,form.foodReason,form.foodCurrency,form.foodtex,req.session.userId,req.session.userId,req.session.retailerId,form.fortnightDate,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
            res.json('success');
    });
  }

    if((exp==3)&&(flag==1)){
   modelPortal.updateFoodExpense(form.travelexpensetypeid,form.foodtrip,form.foodFromDate,form.foodToDate,form.foodReason,form.foodCurrency,form.foodtex,req.session.userId,req.session.userId,form.exthotel,form.extclaimhotel,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
            res.json('success');
    });
  }

   if((exp==4)&&(flag==0)){
   modelPortal.insertPhoneExpense(form.travelexpensetypeid,form.phonetrip,form.phoneFromDate,form.phoneToDate,form.phoneReason,form.phoneCurrency,form.phoneExp,req.session.userId,req.session.userId,req.session.retailerId,form.fortnightDate,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
              res.json('success');
    });
  }

    if((exp==4)&&(flag==1)){
   modelPortal.updatePhoneExpense(form.travelexpensetypeid,form.phonetrip,form.phoneFromDate,form.phoneToDate,form.phoneReason,form.phoneCurrency,form.phoneExp,req.session.userId,req.session.userId,form.exthotel,form.extclaimhotel,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
            res.json('success');
    });
  }

    if((exp==5)&&(flag==0)){
    modelPortal.insertRsdExpense(form.travelexpensetypeid,form.rsdtrip,form.rsdFromDate,form.rsdToDate,form.rsdvehicle,form.rsdReason,form.rsdifnot,form.rsdKmRate,form.rsdtotal,form.rsdCurrency,form.rsdtex,req.session.userId,req.session.userId,req.session.retailerId,form.fortnightDate,form.rsddes,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
              
             }
            res.json('success');
    });
  }

    if((exp==5)&&(flag==1)){
    modelPortal.updateRsdExpense(
        form.travelexpensetypeid,
        form.rsdtrip,form.rsdFromDate,
        form.rsdToDate,form.rsdvehicle,
        form.rsdReason,form.rsdifnot,form.rsdKmRate,
        form.rsdtotal,form.rsdCurrency,form.rsdtex,
        req.session.userId,req.session.userId,parseInt(form.exthotel),
        parseInt(form.extclaimrsd,form.rsddes),function(errorRoles, result){
    if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             res.json('success');
    });
  }

    if((exp==6)&&(flag==0)){
   modelPortal.insertPerdiemExpense(form.travelexpensetypeid,form.perdiemtrip,form.perdiemFromDate,form.perdiemToDate,form.perdiemHotelName,form.perdiemReason,form.perdiemIfNot,form.perdiemRate,form.perdiemtotal,form.perdiemCurrency,form.perdiemtex,req.session.userId,req.session.userId,req.session.retailerId,form.fortnightDate,function(errorRoles, result){
    if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             res.json('success');
    });
  }

   if((exp==6)&&(flag==1)){
   modelPortal.updatePerdiemExpense(form.travelexpensetypeid,form.perdiemtrip,form.perdiemFromDate,form.perdiemToDate,form.perdiemHotelName,form.perdiemReason,form.perdiemIfNot,form.perdiemRate,form.perdiemtotal,form.perdiemCurrency,form.perdiemtex,req.session.userId,req.session.userId,form.exthotel,form.extclaimhotel,function(errorRoles, result){
    if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             res.json('success');
    });
  }

  if((exp==7)&&(flag==0)){
    modelPortal.insertOtherExpense(form.travelexpensetypeid,form.othertrip,form.otherFromDate,form.otherToDate,form.otherReason,form.otherCurrency,form.othertex,req.session.userId,req.session.userId,req.session.retailerId,form.fortnightDate,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
              res.json('success');
    });
  }

    if((exp==7)&&(flag==1)){
    modelPortal.updateOtherExpense(form.travelexpensetypeid,form.othertrip,form.otherFromDate,form.otherToDate,form.otherReason,form.otherCurrency,form.othertex,req.session.userId,req.session.userId,form.exthotel,form.extclaimhotel,function(errorRoles, result){
     if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             res.json('success');
    });
  }

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

             next();
         });
     },

     remarkAndCommentExpense: function(req, res, next) {
         modelPortal.toRemarkAndCommentExpense( req.body.ids ,function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

             res.json(result);
             next();
         });
     },

          checkWbsDate: function(req, res, next) {

         modelPortal.toCheckWbsDate(req.body.wbsId,req.body.startDate,req.body.endDate, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }

             res.json(result[0]);
             next();
         });
     },

       checkExpenseSubmitOrNot: function(req, res, next) {
         modelPortal.toCheckExpenseSubmitOrNot(req.session.userId,req.session.retailerId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             res.json(result[0]);
             next();
         });
     },

       checkFinancemanager: function(req, res, next) {
         modelPortal.tocheckFinancemanager(req.session.retailerId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             res.json(result[0]);
             next();
         });
     },


      reSubmitExpenseforCopy: function(req, res, next) {
         modelPortal.toReSubmitExpenseforCopy(req.body.expclaimId, function(errorRoles, result) {
             if (errorRoles) {
                 next(errorRoles);
                 return;
             }
             res.json('suceess');
             next();
         });
     },
setaddStatuss: function(req, res, next) {
         modelPortal.setaddStatuss(req.session.userId,req.session.roleId, req.session.retailerId,function(err, result) {
             if (err) {
                 next(err);

             } else {
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
             }
         });
     },
     selectStatus: function(req, res, next) {
         modelPortal.selectStatus(req.session.userId,req.session.roleId,req.session.retailerId,req.body.id,function(err, result) {
             if (err) {
                 next(err);

             } else {
                res.json(result[0]);
             }
         });
     },
     updateStatus: function(req, res, next) {
         modelPortal.updateStatus(req.body.code, req.body.desc,req.session.userId,req.body.active,req.body.id,req.session.retailerId,req.body.crate,function(err, result) {
             if (err) {
                 next(err);

             } else {
                res.json(result);
             }
         });
     },
     addStatus: function(req, res, next) {
         modelPortal.addStatus(req.body.code, req.body.desc,req.body.currType,req.body.crate,req.session.userId,req.session.retailerId ,function(err, result) {
             if (err) {
                 next(err);

             } else {
                res.json(result);
             }
         });
     },


/*-----------------------------------------------------holiday------------------------------------------------------------------------*/
holidayhome: function(req,res,next){
      modelPortal.holidayhome(req.session.userId,req.session.roleId, req.session.retailerId,function(err, resultHoliday) {
             if (err) {
                 next(err);

             } else {
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
 form({
      BuHrMap: {
        filename: true,
    required: true
      }   
    }),function(req, res, next) {
      var filename = req.files.BuHrMap.path;
      excelParser.parse({
      inFile: filename,
      worksheet: 1
    }, function(err, results) {
     if (err)
        {
          res.redirect('/manager/uploadBuHrMap?errorMsg=1');
        }
      else {
  var Excelheader=results[0];
            var dbHeader=['Present LOB','Present BU','Zone','BU HR Code','BU HR Name'];
    var is_same = Excelheader.length == dbHeader.length && Excelheader.every(function(element, index) {
    return element.trim() === dbHeader[index].trim();
    });
   }
  });

    };
  },


 changeClientStatus: function(req, res, next) {
          
           modelPortal.changeClientStatus(req.body.cid,req.body.flag,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {

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
             res.json(resultClient[0]);
         });
     },
     getUser: function(req, res, next) {

        if(! req.body.tab){
            req.tab=1;
        }
        else{
            req.tab=req.body.tab;
        }

         modelPortal.getAllUsers(req.userid,req.session.roleId,req.session.retailerId,function(err, resultUsers) {
             if (err) {
                 next(err);
                 return;
             }
             req.resultUsers = resultUsers;

             next();
         });
     },

     checkNextUser: function(req, res,next) {
            modelPortal.checkNextUser(req.body.flag1,req.userid,req.session.roleId,req.session.retailerId,function(err, resultUsers) {
             if (err) {
                 next(err);
                 return;
             }
             req.userid=resultUsers[0][0].id;
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
         modelPortal.getAllDepartment(req.depId, req.session.roleId, req.session.retailerId, function(err, resultDepartment) {
             if (err) {
                 next(err);
                 return;
             }
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
             req.session.url = req.url;
             next();
             }
         });
     },


    userStatusbyretailer: function(req, res, next) { 
                modelPortal.userStatusbyretailer( req.body.retailerId ,
                   function(err, result) {
                     if (err) { 
                         next(err);
                         return;
                     }  
                   
                     res.json(result); 
         });
     },

      retailerfordesboard: function(req, res, next) { 
              modelPortal.getallretailersDetails(function(err, result){
                     if (err) {    
                     }  
                   
                     res.json(result); 
         });
     },

         blockretailer: function(req, res, next) { 
                modelPortal.blockretailer( req.body.retailerId ,req.body.status,
                   function(err, result) {
                     if (err) {    
                     }  
                   
                     res.json("success"); 
         });
     },

  superAdmin: function(req, res, next) {
         modelPortal.getallretailersDetails(function(err, result) {
             if (err) {
                 next(err);

             } else {
                req.resultretailer=result;
                next();
             }
         });
     },

     
     userStatus: function(req, res, next) {

 var sortstr=req.body.columns[parseInt(req.body.order[0].column)].data + ' ' + req.body.order[0].dir ;

           modelPortal.userStatus(req.body.status,req.session.userId,req.session.roleId,req.session.retailerId,req.body.start,req.body.length,req.body.search.value,sortstr,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
        var tempobj = JSON.stringify(result[0]);
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
         changeUserStatus: function(req, res, next) {
          
           modelPortal.changeUserStatus(req.body.uid,req.body.flag,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {

                     res.json('result');
             }
         });
     },


addUser: function(req, res, next) {
        var modules=req.body.modules==null?'':req.body.modules;
      var inNum=req.body.inNum;
      var billingRate=req.body.billingRate;
      var rtype=req.body.rtype==''?'':req.body.rtype;
      var randomPassword = randomString(10);
      var encriptPass=bcrypt.hashSync(randomPassword,salt);
    
         modelPortal.addUser(req.body.timesheet,req.body.isClient,req.body.clientId,req.body.isbill,req.body.expense,inNum,
            req.body.hdnUserId, req.body.firstName, req.body.lastName, req.body.emailId, req.body.contactNumber, billingRate,
             req.body.userRole, req.body.manager, req.body.defaultModule, req.body.customRole,encriptPass,
            req.body.ecode,req.body.designation,req.body.level,modules,req.body.doj,req.body.dob,req.body.doc,rtype,
          req.session.userId, req.session.roleId, req.session.retailerId,req.body.crole,req.body.hrRole,req.body.hodId,req.body.assetrole,req.body.levelchangeDate,function(err, result) {
             if (err) {
                 next(err);
             } else {
                 if (result[0][0].flag == flag.inserted) {
                     mailTemplates.retailerRegistration(req.body.firstName, req.body.emailId,randomPassword,function(error, resultMail) {
                         if (error) {
                             result[0][0].flag = flag.mailFailed;
                         }
                         
                     });
                 }
                  
                 res.json(result);
             }
         });
     },
     calSetting: function(req,res,next){
      modelPortal.calSetting(req.session.userId,req.session.roleId,req.session.retailerId,req.body.schedule,req.body.date,req.body.timespan,req.body.whours,function(err,result){
          if(err){
            next(err);
          }
          else
          {
             res.json(result);
          }
      });

   },

   checkShedule: function(req,res,next){
    modelPortal.checkShedule(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
        if(err){
            next(err);
          }
          else
          {
             res.json(result);
          }
    });
   },
    //--------------------------------------TimeSheet--------------------
 
uploadattendance: function(req, res, next) {
         var absolute_path = [];
         for (var i = 0; i < req.files.length; i++) {

             absolute_path[i] = path.join(__dirname, '../../public/attach/' + req.files[i].originalname);

         }

         fs.rename(req.files[0].path, absolute_path[0], function(err) {
             xlsxparser.parse({
                 inFile: absolute_path[0],
                 worksheet: 1
             }, function(err, results1) {
                 if (err) {
                  
                 } else {
                     fs.rename(req.files[1].path, absolute_path[1], function(err) {


                         xlsxparser.parse({
                             inFile: absolute_path[1],
                             worksheet: 1
                         }, function(err, results) {
                             if (err) {
                               
                             } else {

                                    modelPortal.uploadattendance(req.session.userId,req.session.roleId,req.session.retailerId,results1,results,function(err,result){
                                        if(err){
                                            next(err)
                                        }else{
                                           
                                        res.redirect('/timesheet?flag=0')
                                        }
                                       });
                             }

                         });

                     });


                 }

             });

         });

    },
    getTimeSheetData: function(req,res,next){

        var query = require('url').parse(req.url, true).query;
         req.session.flag_owntimesheet = query.flag;
       modelPortal.getTimeSheetData(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
        if(err){
            next(err)
        }else{
            req.timeinfo = result;
            next();
        }
       });

     },
     submitTimesheet: function(req,res,next){
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
            if(result[3][0].already_submit ==2){
                mailTemplates.timesheetToSupervisorForApproval(result[1][0].firstName, result[2][0].userDetails,result[1][0].userEmail,function(error, resultMail) {
                     if (error) {
                     }
                });

            }
             res.json(result[0]);
       
        }
       });

     },
      submitTimesheetAssignment: function(req,res,next){
       var a=req.body.temp;

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
        else
        if(a==6)
        var allcolumn="timeAssignmentId,wbsId,timeSheetId,Day1,Day2,Day3,Day4,Day5,Day6,Day7,total";
        else
        if(a==27)
        var allcolumn="timeAssignmentId,wbsId,timeSheetId,Day1,Day2,Day3,Day4,Day5,Day6,Day7,Day8,Day9,Day10,Day11,Day12,Day13,Day14,Day15,Day16,Day17,Day18,Day19,Day20,Day21,Day22,Day23,Day24,Day25,Day26,Day27,Day28,total";
        else
        if(a==28)
        var allcolumn="timeAssignmentId,wbsId,timeSheetId,Day1,Day2,Day3,Day4,Day5,Day6,Day7,Day8,Day9,Day10,Day11,Day12,Day13,Day14,Day15,Day16,Day17,Day18,Day19,Day20,Day21,Day22,Day23,Day24,Day25,Day26,Day27,Day28,Day29,total";
        else
        if(a==29)
        var allcolumn="timeAssignmentId,wbsId,timeSheetId,Day1,Day2,Day3,Day4,Day5,Day6,Day7,Day8,Day9,Day10,Day11,Day12,Day13,Day14,Day15,Day16,Day17,Day18,Day19,Day20,Day21,Day22,Day23,Day24,Day25,Day26,Day27,Day28,Day29,Day30,total";
        else
        if(a==30)
        var allcolumn="timeAssignmentId,wbsId,timeSheetId,Day1,Day2,Day3,Day4,Day5,Day6,Day7,Day8,Day9,Day10,Day11,Day12,Day13,Day14,Day15,Day16,Day17,Day18,Day19,Day20,Day21,Day22,Day23,Day24,Day25,Day26,Day27,Day28,Day29,Day30,Day31,total";
        
        modelPortal.submitTimesheetAssignment(req.body.alluser,allcolumn,req.body.timesheetid,req.body.report_data,function(err,result){
                         if(err){
                                 next(err)
                                  }
                                  else{
                                    res.json(result);
                                  }
                                  
       });

     },
     checkUserTimesheet: function(req,res,next){
       modelPortal.checkUserTimesheet(req.body.userId,req.body.tdate,function(err,result){
        if(err){
            next(err)
        }else{
            if(result[1].length==0){
                
                result[1]=[{status:0}];
            }

            res.json(result);
        }
       });

     },
      getUserUnderSupervisor: function(req,res,next){

       modelPortal.getUserUnderSupervisor(req.body.cdate,req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
        if(err){
            next(err)
        }else{
            
            res.json(result[0]);
        }
       });

     },
      otherTimeSheet: function(req,res,next){

       
         req.userid=req.session.timeshhetuserid;
       

     },

     otherTimeSheet_setPage: function(req,res,next){
        req.session.timeshhetuserid=req.body.id;
        req.session.othertime_checkdate=req.body.time_date;


            modelPortal.otherTimeSheet(req.session.timeshhetuserid,req.session.retailerId,function(err,result){
        if(err){
            next(err)
        }else{
             req.session.timeinfo = result;
            
            
           res.json(1);
        }
       });
        

     },


 ApprovedOrReject: function(req,res,next){
        
       modelPortal.ApprovedOrReject(req.body.appOrRejBy,req.body.status,req.body.id,req.body.ardate,req.body.appOrRejReason,req.session.retailerId,req.body.userEmail,function(err,result){
        if(err){
            next(err)
        }else{
             res.json(result);
        }
       });

       if(req.body.status==3)
        {
            var reason='<h3 style="color:green">Your timesheet has been  Approved.</h3>';
        }
    else
       {
        
        var reason='<div style="text-align:left;line-height:14px;"><h3 style="color:red;margin-bottom:8px" >Your timesheet has been Rejected.</h3>\n <span style="display:block;font-size:12px ;font-weight:bold"> Reason: </span>\n <span style="display:block;font-size:12px;">'+req.body.appOrRejReason+'</span></div>';
    }
       mailTemplates.timesheetStatus('',req.body.userEmail,reason,function(error, resultMail) {
             if (error) {
             }
            
        });
        
     },
     SubmitRejectReason: function(req,res,next){        
       modelPortal.SubmitRejectReason(req.body.RejReason,req.body.id,req.body.ardate,req.session.retailerId,function(err,result){
        if(err){
            next(err)
        }else{
             res.json(result);
        }
       });

     },




//----------------------------------------------------------hr management----------------------------------------------------


 
 getHrRole:function(req,res,next){
        modelPortal.getHrRole(req.session.userId,req.session.roleId, req.session.retailerId,function(err,result){
            if(err){
                
                next(err);
            }
            else{
                req.hrRole=result[0];
                req.hodList=result[1];
                next();
            }

        });
     },

 

     dashboardData:function(req,res,next){
           countFiles[req.session.userId] = 10000;
   totalFiles[req.session.userId] = 0;
  parsing[req.session.userId] = false; 
     var hrArrS=req.session.hrRole;
            var hrarr=[];
            for(var i=0;i<hrArrS.length;i++){
                hrarr[i]=hrArrS[i].hrRoleId;
            }
            var hrRoleArray=hrarr.toString();
            
        modelPortal.dashboardData(req.body.data,req.body.grid,req.body.time,hrRoleArray,req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){


            if(err){
            }
            else{
           

                res.json(result);
            }
        });
     },
    raiseRequisition:function(req,res,next){
        modelPortal.raiseRequisition(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
            if(err){ 
            }
            else{ 
                req.hrRequisition=result; 
                next();  
            }
        });

    },

    raiseRequisition1:function(req,res,next){
             if(req.body.Location!=undefined&&req.body.Location!=null){
                 req.body.Location = req.body.Location.trim();
            }
            var flag=req.body.flag;
            if(req.body.flag!=undefined){
                    
                    var id=req.body.ide;
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
         
            if(req.body.skills != undefined){
                if(req.body.skills.length!=0){
                     skills = JSON.stringify(req.body.skills).replace(']','')
                     skills = skills.replace('"','').replace("'","").replace("[","");
                    skills = skills.replace(/['"]+/g, '');
                }
            }
            var hrArrS=req.session.hrRole;
            var hrarr=[];
            for(var i=0;i<hrArrS.length;i++){
                hrarr[i]=hrArrS[i].hrRoleId;
            }
            var hrRoleArray=hrarr.toString();
            
   modelPortal.raiseRequisition1(
              req.session.userId,req.body.JobTitle,req.body.NoOfPostions,skills,
              req.body.MinimumSalary,req.body.MaximumSalary,
              req.body.ExpiresOn,req.body.Location,req.body.Description,
              req.body.designation,req.body.RecruiterName,
              req.body.YearsOfExp,req.body.adminhr,flag,id,
              req.body.mailPriority,req.body.jobType,hrRoleArray,req.session.retailerId,function(err,result){
              if(err){
                }
    else{
       
        var recEmail = [];
            for(var i =0;i<result[4].length;i++){
                    recEmail.push(result[4][i].userEmail);
                }
         recEmail = recEmail.join(','); 
         req.body.Location =req.body.Location;

         if(hrarr.indexOf(3)!=-1){            
          if(flag==0){ 

              mailTemplates.hrMailer(0,recEmail,result[5][0],result[1][0].id,'0',skills,hrarr,req.session.userId,"--",function(err,result){});
            res.redirect('/allrequisitions?flag=1');
              }
              else if(flag==1){
                var mailCounter = result[3][0].mailCounter;
                mailTemplates.hrMailer(1,recEmail,result[5][0],result[1][0].id,mailCounter,skills,hrarr,req.session.userId,"--",function(err,result){});
                res.redirect('/allrequisitions?flag=0'); 
            } 
         }
        else if(hrarr.indexOf(5)!=-1){        
             if(flag==0){            
           mailTemplates.hrMailer(flag,recEmail,result[5][0],result[1][0].id,'0',skills,hrarr,req.session.userId,"--",function(err,result){});
                res.redirect('/allrequisitions?flag=1');
            }
            else if(flag==1){
                var mailCounter = result[3][0].mailCounter;
                  mailTemplates.hrMailer(1,recEmail,result[5][0],result[1][0].id,mailCounter,skills,hrarr,req.session.userId,"--",function(err,result){});
                res.redirect('/allrequisitions?flag=0'); 
            }
        }   
       }
      });

    },
    updateStatusReq:function(req,res,next){ 
         var hrArrS=req.session.hrRole;
         var approve;
            var hrarr=[];
            for(var i=0;i<hrArrS.length;i++){
                hrarr[i]=hrArrS[i].hrRoleId;
            }
            if(hrarr.indexOf(5)>=0){
                approve='hod';
            }
            if(hrarr.indexOf(6)>=0){
                approve='approver';
            }
        modelPortal.updateStatusReq(req.session.userId,req.session.roleId,req.session.retailerId,
            req.body.flag,req.body.jdid,approve,function(err,result){
            if(err){
            }   
            else{
                 var recEmail = [];
                        for(var i =0;i<result[2].length;i++){
                                recEmail.push(result[2][i].userEmail);
                            }
                     recEmail = recEmail.join(',');
                     var skills;
          
            var hrRoleArray=hrarr.toString();
                if(req.body.flag==1){ 
                      mailTemplates.hrMailer(2,recEmail,result[0][0],result[0][0].id,'0',skills,hrarr,req.session.userId,req.approve,function(err,result){});
                }
                else{ 
                   mailTemplates.hrMailer(3,recEmail,result[0][0],result[0][0].id,'0',skills,hrarr,req.session.userId,req.approve,function(err,result){});
                }   
                   if(req.isMail){   
                    next();
                     }
                     else{ 
                        res.json(result); 
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
        
        modelPortal.allrequisitions(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
            if(err){
            }   
            else{
                var arr=[];
                for(var i=0;i<result[6].length;i++){
                     arr.push(result[6][i].hrRoleId);
                }
                req.myRmsRoles=arr;
                req.allrequisitions=result;
                next();
            }  
        });
    }, 
    reqData : function(req,res,next){
            modelPortal.reqData(req.session.userId,req.session.roleId,req.session.retailerId,req.body.id,function(err,result){
                    if(err){
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
                    }   
                    else{
                        
                     res.json(result);
                    }    

            });

    },

    viewCandidate : function(req,res,next){
    req.session.skillsfromdb = [];
    req.session.skillsIdfromdb = [];
    modelPortal.viewCandidate(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
            if(err){
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
                    }   
                    else{

                     res.json(result[0]);
                    }    

            });

    },
    getCandidate:function(req,res,next){
        modelPortal.getCandidate(req.session.userId,req.session.roleId,req.session.retailerId,req.body.id,function(err,result){
            if(err){
            }   
            else{
                    res.json(result);
            }    
         });
    },

    editCandidate:function(req,res,next){
            if (req.body.skills.length == 0){
                 req.body.skills = '';
             }
             else if (req.body.skills.length == 1){
                req.body.skills = req.body.skills;
            }
            else {
                req.body.skills = req.body.skills.join(',');
            }
        modelPortal.editCandidate(req.session.userId,req.session.roleId,req.session.retailerId,
            req.body.hcid, req.body.name,req.body.phone,req.body.email,req.body.locationId,req.body.skills,
            req.body.clocation,req.body.months,req.body.years,req.body.qualification,req.body.institute,function(err,result){
                    if(err){
                    }   
                    else{
                        
                    res.redirect("/viewCandidate");
                    }    

    });

    },
    getAllTag : function(req,res,next){
        modelPortal.getAllTag(req.body.id,req.session.retailerId,function(err,result){
            if(err){
            }   
            else{
                res.json(result);                         
            }    

        });

    },
        addTag : function(req,res,next){
        modelPortal.toAddTag( req.body.tcid,
                req.body.selecttag,
                 req.session.userId,function(err,result){
            if(err){
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
    parserTable :function(req,res,next){
        var flagCompleted = 1;
        var parseResult = [];

        if (!parsing[req.session.userId]) {
            flagCompleted = -1;

        }
        if (countFiles[req.session.userId] == totalFiles[req.session.userId]) {
            flagCompleted = 0;
            parsing[req.session.userId] = false;
            totalFiles[req.session.userId] = 0;

        }
        modelPortal.parserTable(parseInt(req.body.count),countFiles[req.session.userId],req.session.retailerId,function(err,result){
            if(err){

            }
            else{
                 parseResult[0] = result[0];
                parseResult[1] = flagCompleted;
                res.json(parseResult);
            }

         });
    },


 

  submitParseData : function(req,res,next){
        modelPortal.toSubmitParseData(function(err,result){
            if(err){
            }   
            else{
               req.uploadData=result;
            next();                         
            }    

        });

    },
 
upload_resume:function(req,res,next){
        res.redirect('/upload');
        req.session.flag = true;
        req.session.emailArr = [];
        countFiles[req.session.userId] = 0;
        var now = Date.now();
      
         if (req.file != undefined) {
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
       
        modelPortal.upload_resume(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
                if (err) {}
                else {

                     if(exe == 'doc' || exe == 'docx'  || exe == 'rtf' ){

                         parsing[req.session.userId] = true;
                       totalFiles[req.session.userId] = 1;
                        var targetPath = path.resolve('./public/attach/' + exet[0] + '_' + now + '.' + exe);
                        fs.rename(tempPath, targetPath, function(err) {
                         var newpath = './public/attach/' + exet[0] + '_' + now + '.' + exe;
                            textract.fromFileWithPath(newpath, config, function(error, text) {

                                if (error) {
                                    blankentry(newpath, req);

                                } else {
                                    if (typeof text != undefined) {
                                        var textLowerCase = text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g, ' ');
                                        textLowerCase = textLowerCase.replace(/ +/g, ' ').replace(/\+/g, '');
                                        text = text.replace(/:/g, ' ').replace(/-/g, ' ').replace(/,/g, ' ').replace(/ +/g, ' ').replace(/\+/g, '');
                                        var textarr = text.split('\n');
                                        textarr.forEach(function(element, index) {
                                            textarr[index] = element.concat(' EOL');

                                        });


                                        parseAllHr(textLowerCase, textarr, newpath, req);

                                    } else {
                                    }


                                }
                            });

                        });

                    }


                    else if (exe.toLowerCase() =='pptx') {
                         parsing[req.session.userId] = true;
                       totalFiles[req.session.userId] = 1;
                        var targetPath = path.resolve('./public/attach/' + exet[0] + '_' + now + '.' + exe);
                        fs.rename(tempPath, targetPath, function(err) {
                         var newpath = './public/attach/' + exet[0] + '_' + now + '.' + exe;
                            textract.fromFileWithMimeAndPath("application/vnd.openxmlformats-officedocument.presentationml.presentation",newpath, function(error, text) {

                                if (error) {
                                    blankentry(newpath, req);

                                } else {
                                    if (typeof text != undefined) {
                                        var textLowerCase = text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g, ' ');
                                        textLowerCase = textLowerCase.replace(/ +/g, ' ').replace(/\+/g, '');
                                        text = text.replace(/:/g, ' ').replace(/-/g, ' ').replace(/,/g, ' ').replace(/ +/g, ' ').replace(/\+/g, '');
                                        var textarr = text.split('\n');
                                        textarr.forEach(function(element, index) {
                                            textarr[index] = element.concat(' EOL');

                                        });


                                        parseAllHr(textLowerCase, textarr, newpath, req);

                                    } else {
                                    }


                                }
                            });

                        });

                    }


                    if (exe.toLowerCase() == 'pdf') {
                    parsing[req.session.userId] = true;
                          var namefile = exet[0];
                        totalFiles[req.session.userId] = 1;
                         var absolute_path =path.join(__dirname, '../../public/attach/'+ exet[0] + '_' + now + '.' + exe);
                        var targetPath = path.resolve('./public/attach/' + exet[0] + '_' + now + '.' + exe);
                       var newpath = './public/attach/' + exet[0] + '_' + now + '.' + exe;

                        fs.rename(tempPath, targetPath, function(err) {


                        

                            var processor = pdf_extract(absolute_path, options, function(err) {
                                if (err) {
                                }
                            });
                            processor.on('complete', function(data) {
                                var text = '';
                                for (var i = 0; i < data.text_pages.length; i++) {
                                    text = text.concat(data.text_pages[i]);
                                }
                                var textLowerCase = text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g, ' ');
                                textLowerCase = textLowerCase.replace(/ +/g, ' ').replace(/\+/g, '');
                                text = text.replace(/:/g, ' ').replace(/-/g, ' ').replace(/,/g, ' ').replace(/ +/g, ' ').replace(/\+/g, '');
                                var textarr = text.split('\n');
                                textarr.forEach(function(element, index) {
                                    textarr[index] = element.concat(' EOL');

                                });
                                parseAllHr(textLowerCase, textarr, newpath, req);




                            });

                            processor.on('error', function(err) {

                                blankentry(newpath, req)
                               
                            });


                        });

                    }


                    if (exe.toLowerCase() == 'zip') {
                        var zip = new AdmZip(req.file.path);
                        var zipEntries = zip.getEntries();
                        zip.extractAllTo( path.join(__dirname, '../../public/attach/' + ffname), false);
                        totalFiles[req.session.userId] = zipEntries.length;
                        parsing[req.session.userId] = true;

                          

                        zipEntries.forEach(function(zipEntry) {
                            var namefile = zipEntry["name"];
                            var namearr = namefile.split('.');

                            var exet = (namearr[namearr.length - 1]).toLowerCase();
                            var newpath = './public/attach/' + ffname + '/' + namefile;

                            if (exet == 'doc' || exet == 'docx' || exet == 'rtf') {
                                
                                textract.fromFileWithPath(newpath, config, function(error, text) {

                                    if (error) {
                                        blankentry(newpath, req);

                                    }
                                   
                                    else {
                                        if (typeof text != undefined) {
                                            var textLowerCase = text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g, ' ');
                                            textLowerCase = textLowerCase.replace(/ +/g, ' ').replace(/\+/g, '');
                                            text = text.replace(/:/g, ' ').replace(/-/g, ' ').replace(/,/g, ' ').replace(/ +/g, ' ').replace(/\+/g, '');
                                            var textarr = text.split('\n');
                                            textarr.forEach(function(element, index) {
                                                textarr[index] = element.concat(' EOL');

                                            });


                                            parseAllHr(textLowerCase, textarr, newpath, req);

                                        } else {
                                        }


                                    }
                                });


                            } else if (exet == 'pdf') {
                            
                                var namefile = zipEntry["name"];
                                var absolute_path = path.join(__dirname, '../../public/attach/' + ffname + '/' + namefile); // parseResume(req,newpath);

                                var processor = pdf_extract(absolute_path, options, function(err) {
                                    if (err) {
                                    }
                                });
                                processor.on('complete', function(data) {
                                    var text = '';
                                    for (var i = 0; i < data.text_pages.length; i++) {
                                        text = text.concat(data.text_pages[i]);
                                    }
                                    var textLowerCase = text.toLowerCase().replace(/,/g, ' ').replace(/-/g, ' ').replace(/:/g, ' ').replace(/\n/g, ' ').replace(/\./g, ' ');
                                    textLowerCase = textLowerCase.replace(/ +/g, ' ').replace(/\+/g, '');
                                    text = text.replace(/:/g, ' ').replace(/-/g, ' ').replace(/,/g, ' ').replace(/ +/g, ' ').replace(/\+/g, '');
                                    var textarr = text.split('\n');
                                    textarr.forEach(function(element, index) {
                                        textarr[index] = element.concat(' EOL');

                                    });
                                    parseAllHr(textLowerCase, textarr, newpath, req);




                                });

                                processor.on('error', function(err) {

                                    blankentry(newpath, req)
                                    
                                });




                            } else { 
                                blankentry(newpath, req); 

                            }

                        });



                    }
                          } 
        }); 


                }

    },
    deleteUploadRecords:function(req,res,next){
      
        modelPortal.deleteUploadRecords(req.session.userId,req.session.roleId,req.session.retailerId,req.body.delete,function(err,result){
            if(err){
         
            }   
            else{
                res.json('suceess');
            }    

        });
    },
    viewReq:function(req,res,next){
        modelPortal.viewReq(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
            if(err){
              
            }   
            else{
                    req.viewReq=result;
                    next() ;
                }
        });
    },
    userHrViewReq:function(req,res,next){
        modelPortal.userHrViewReq(req.session.userId,req.session.roleId,req.session.retailerId,function(err,result){
            if(err){
            }   
            else{
                    req.userHrViewReq=result;
                    next() ;
                }
        });
    },
     searchHr:function(req,res,next){
        var str = req.body.search;
        modelPortal.searchHr(req.session.userId,req.session.roleId,req.session.retailerId,str,function(err,result){
            if(err){
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
            }   
            else{

                     res.json(result[0]); 
                }    



        });
    },
    interviewerInfo:function(req,res,next){
        modelPortal.interviewerInfo(req.session.userId,req.session.roleId,req.session.retailerId,
            function(err,result){
            if(err){
            }   
            else{
                     res.json(result);
                } 
        });
    },

    getReleventTag:function(req,res,next){
        modelPortal.getReleventTag(req.session.userId,req.session.roleId,req.session.retailerId,
            req.body.id,function(err,result){
            if(err){
            }   
            else{
                     res.json(result[0]);
                } 
        });
    },
    removeTag:function(req,res,next){
        modelPortal.removeTag(req.session.userId,req.session.roleId,req.session.retailerId,
            req.body.tagid,req.body.cid,function(err,result){
            if(err){
            }   
            else{
                     res.json(result);
                } 
        });
    },
    getreleventState:function(req,res,next){
        modelPortal.getreleventState(req.session.userId,req.session.roleId,req.session.retailerId,
           req.body.jdid,req.body.cid,function(err,result){
            if(err){
            }   
            else{
                     res.json(result);
                } 
        });
    },
    addQuickTag:function(req,res,next){
        modelPortal.addQuickTag(req.session.userId,req.session.roleId,req.session.retailerId,
           req.body.jdid,req.body.allcdid,function(err,result){
            if(err){
            }   
            else{
                     res.json(result);
                } 
        });
    },

        quickdeletecandidate:function(req,res,next){
        modelPortal.quickdeletecandidate(req.session.userId,req.session.roleId,req.session.retailerId,req.body.allcdid,function(err,result){
            if(err){
            }   
            else{
                     res.json(result);
                } 
        });
    },


    getallmanager:function(req,res,next){
        modelPortal.getallmanager(req.session.userId,req.session.roleId,req.session.retailerId,
           function(err,result){
            if(err){
            }   
            else{
                result=result[0];
                     res.json(result);
                }  
        });
    },
    getscheduleInfo:function(req,res,next){
        modelPortal.getscheduleInfo(req.session.userId,req.session.roleId,req.session.retailerId,req.body.cid,
           function(err,result){
            if(err){
            }   
            else{
                     res.json(result);
                }  
        });
    },
      deletehistory:function(req,res,next){
        modelPortal.deletehistory(req.session.userId,
            req.session.retailerId,req.body.id,
           function(err,result){
            if(err){
            }   
            else{
                     res.json(result);
                }  
        });
    },
      scheduleInterview:function(req,res,next){
 
        modelPortal.scheduleInterview(req.body.cdtidint,
                req.body.schtaggedJd,
                req.body.intdatetime,
                req.body.schstate,
                req.body.allStatus,
                req.body.interviewer,
                req.body.intremark,
                req.body.mode,req.session.userId,req.session.retailerId,function(err,result){
            if(err){
            }   
            else{
                    req.scheduleInterview=result;
                    next() ;
                }
        });
    },
    selectAdminHr:function(req,res,next){
        modelPortal.selectAdminHr(req.session.userId,req.session.roleId,req.session.retailerId,req.body.selected,
           function(err,result){
            if(err){
            }   
            else{
                    res.json(result[0]);
                }    



        });
    },

 getClientContact:function(req,res,next){
        modelPortal.getClientContact(req.body.ids,
           function(err,result){
            if(err){
            }   
            else{
                    res.json(result[0]);
                }    



        });
    },



    getClientContacts:function(req,res,next){
        modelPortal.getClientContacts(req.session.userId,req.session.roleId,req.session.retailerId,req.body.clientid,
           function(err,result){
            if(err){
            }   
            else{
                    res.json(result[0]);
                }    



        });
    },



    addeditClientContacts:function(req,res,next){
        var randomPassword = randomString(10);
        var encriptPass=bcrypt.hashSync(randomPassword,salt);
        req.body.password=encriptPass;
        req.body.randomPassword=randomPassword;

        modelPortal.addeditClientContacts(req.session.userId,req.session.roleId,req.session.retailerId,req.body,
           function(err,result){
            if(err){
            }   
            else{
                    res.json(result);
                }    



        });
    },

    updateClientPassword:function(req,res,next){
      var randomPassword = randomString(10);
      var encriptPass=bcrypt.hashSync(randomPassword,salt);
    req.body.password=encriptPass;
    req.body.randomPassword=randomPassword;

        modelPortal.updateClientPassword(req.session.userId,req.session.roleId,req.session.retailerId,req.body,
           function(err,result){
            if(err){
            }   
            else{
                req.body.emailId=result[0][0].userEmail;
                req.body.firstName=result[0][0].firstName;
                   next();
                }  
        });
    },


    sendMailClient:function(req,res,next){
           mailTemplates.retailerRegistration(req.body.firstName, req.body.emailId,req.body.randomPassword,function(error, result) {
                         if (error) {
                         }

                         res.json(result);
                         
                     });

    },

        blockUser:function(req,res,next){
           modelPortal.blockUser(req.body,function(error, result) {
                         if (error) {
                         }

                         res.json(result);
                         
                     });

    },


 saveHrm:function(req,res,next){
        modelPortal.saveHrm(req.body.selected,req.body.reqId,
           function(err,result){
            if(err){
            }   
            else{
                    res.json('suceess');
                }    



        });
    },

    updateCandidate:function(req,res,next){
        modelPortal.updateCandidate(req.session.userId,req.session.roleId,req.session.retailerId,
            req.body.id, req.body.name, req.body.email, req.body.phone,
            req.body.years, req.body.months, req.body.location, req.body.address,
            req.body.skills, req.body.qualification, req.body.ins,function(err,result){
            if(err){
            }   
            else{
                    res.json('success');
                }    



        });
    },
    interviewData:function(req,res,next){
 
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
                if (1) {
                        fs.rename(tempPath, targetPath, function(err) {
                            if (err) throw err;
                        });
                }
        }

        if (typeof(filename) == 'undefined') {
            filename = '';
        }

        modelPortal.interviewData(req.session.userId,req.session.roleId,req.session.retailerId,req.body.id,
                req.body.rating,req.body.status,req.body.time,req.body.remarks,req.body.stateId,
                req.body.cdtid, req.body.modeid,req.body.rounds,filename,req.body.jdid,function(err,result){
            if (err) {
                res.redirect("/error");
            } else {
                res.redirect('/rms');
            }
        });
        
    },

    interviewFeedback:function(req,res,next){
        var query = require('url').parse(req.url, true).query;
  
        var cid = query.cid;
        var id = query.id;
        var flag = query.flag;
        req.feedbackflag=flag;
        modelPortal.interviewFeedback(req.session.userId,req.session.roleId,req.session.retailerId,
           id, cid, function(err,result){
            if(err){
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
            }   
            else{
                        req.reqApprover=result;
                        next();
                }     



        });
    },
     //----------------------------------Project Management System----------------------------
      getAllResources:function(req,res,next){
        modelPortal.getAllResources(req.session.userId,req.session.roleId,req.session.retailerId,
           function(err,result){
            if(err){
            }   
            else{
                        req.reqResources=result;
                        next();
                } 
        });
    },
    projectByResource:function(req,res,next){       
        modelPortal.projectByResource(req.body.resId,
           function(err,result){
            if(err){
            }   
            else{
                        res.json(result);
                } 
        });
    },


    task :function(req,res,next){

       var query = require('url').parse(req.url, true).query;
        var flag = query.flag;
        var versionFlag = query.versionFlag;
        if(flag==undefined){
            flag = -1;
        }

        if(versionFlag==undefined){
            versionFlag = 1;
        }
      
     modelPortal.task(flag,req.session.retailerId,versionFlag,req.session.userId,function(err,result){
            if(err){
            }   
            else{
            req.treeComponent = result[0];
            req.maxid         = result[1][0].endId;
            req.minid         = result[1][0].startId;
            req.flag          = flag;
            req.ultimateEndId = result[2][0].ultimateendid;
            req.projectDetails= result[3];
            req.prId          = result[1][0].prId; 
            req.Resources     =  result[4];
            req.versionFlag   =  versionFlag;
            req.userId       = req.session.userId;
            if(!!result[5][0].version){
                req.versionArr = result[5][0].version.split(',');
            }
            else{
                req.versionArr = [1];
                versionFlag  =  1;
               }

            req.projectAndVersions = result[6];
              

       req.submittedProject = result[8];
       req.submittedVersion = result[9];

     if(req.submittedVersion.length==0){
            req.submittedVersion  = [];
         }

         if(req.submittedProject.length==0){
            req.submittedProject = [];
         }
            for(var i = 0;i<req.projectDetails.length;i++){
                if(req.prId==req.projectDetails[i].id){
                    req.prStartDate = req.projectDetails[i].newPlannedStartDate;
                    req.prEndDate   = req.projectDetails[i].newPlannedEndDate;
                     if(req.prStartDate){
                        var temp = '';
                        req.prStartDate = req.prStartDate.split('/');
                        temp = req.prStartDate[0];
                        req.prStartDate[0] = req.prStartDate[1];
                        req.prStartDate[1] = temp;
                        req.prStartDate = req.prStartDate.join('/');
                        }
                       if(req.prEndDate){
                         req.prEndDate = req.prEndDate.split('/');
                         temp = req.prEndDate[0];
                        req.prEndDate[0] = req.prEndDate[1];
                        req.prEndDate[1] = temp;
                        req.prEndDate = req.prEndDate.join('/');
                           }
                            break;
                      }
                   

                }


                    if(result[12].length){
                        req.isManagerFlag = true;
                        req.isCreaterFlag = false;
                        req.userFlag = false;
                            req.collFlag = false;

                                         }

                else if(result[7].length){
                        req.isCreaterFlag = true;
                        req.isManagerFlag = false;
                           req.userFlag = false;
                    req.collFlag = false;

                                          }
                else if(result[10].length){
                           req.userFlag = true;
                        req.isCreaterFlag = false;
                        req.isManagerFlag = false;
                            req.collFlag = false;

                      var submitted;
                          
if(!req.treeComponent.length) {
            submitted = 0;
                              } 
                        else {
                   submitted = req.treeComponent[0].isSubmit;
                             }
          if(submitted != 2) {
       req.treeComponent = [];
                             }
                        else {
     
                  req.treeComponent = findDataFromUserFlag(result[0],req.session.userId);
                             }
                                      }
                                      else if(result[16].length){
                        req.userFlag = false;
                        req.isCreaterFlag = false;
                        req.isManagerFlag = false;
                        req.collFlag = true;

                                      }
                                  else{

                        req.userFlag = false;
                   req.isCreaterFlag = false;
                  req.isManagerFlag = false;
                    req.collFlag = false;

                    req.treeComponent = [];

                                     }
     
                   req.holidayArr = [];
                for(var i=0;i<result[11].length;i++){
                   req.holidayArr.push(result[11][i].holidayDate);
                                                    }
            var allcommentsArrComment = [];
            var allcommentsArrId     =  [];
               req.allcommentsSet = result[13]; 
            for(var i =0;i<result[13].length;i++) {
             allcommentsArrId[i] =    result[13][i].treeId;
             allcommentsArrComment[i] = result[13][i].comment;
            }       
            req.allcommentsArrComment = allcommentsArrComment;   
            req.allcommentsArrId      = allcommentsArrId;  
             req.usersAll    = result[14]; 
             if(!result[15].length){
                req.collaborateId = '';
             }
             else{
              req.collaborateId       =  result[15][0].collaborateIds;          
                 }
                 req.changedEle = result[17];
             next();
                } 
        });
                        

   },

   emptyProj :function(req,res,next){
      
modelPortal.emptyProj(req.body.projectid,req.body.version,function(err,result){
            if(err){
            }   
            else{
        
                 res.json('smile');
                } 
        });
   },


saveTask :function(req,res,next){
      modelPortal.saveTask(req.body.projectId,req.body.version,req.body.updateQ,req.body.submitFlag,req.body.remarks,req.body.userId,req.body.commentString,req.body.collaborateId,function(err,result){
            if(err){
            }   
            else{
                   if(result.length>2){
                     var project   = result[0][0].projectTitle;
                       if(req.body.submitFlag==2){
                          for(var i = 0 ;i<result[1].length;i++){
                        var email = result[1][i].email;
                          mailTemplates.projectApprovedRes(email,project,function(err,result1){

                          });    
                          }
                       for(var i = 0 ;i<result[2].length;i++){
                        var email = result[2][i].email;
                          mailTemplates.projectApprovedMan(email,project,req.session.firstName,function(err,result1){

                          });    
                          }

                      }
                      else if(req.body.submitFlag==3){
                             for(var i = 0 ;i<result[1].length;i++){
                        var email = result[1][i].email;
                          mailTemplates.projectRejectMan(email,project,req.session.firstName,req.body.remarks,function(err,result1){

                          });    
                          }
 

                      }

                      else if(req.body.submitFlag==1){
                             for(var i = 0 ;i<result[1].length;i++){
                        var email = result[1][i].email;
                          mailTemplates.projectSubmitMan(email,project,req.session.firstName,req.body.remarks,function(err,result1){

                          });    
                          }
 

                      }
                    

                        }
        
                 res.json('smile');
                } 
        });


},
	

projStatus :function(req,res,next){

modelPortal.projStatus(req.session.retailerId,function(err,result){
            if(err){
            }   
            else{
                  var maxid = 1;
                  if(result[0].length!=0){
                          maxid =  result[0][result[0].length-1].id + 1;
                  }
                  req.result  = result;


   next();

                 
                } 
        });


},

editproject: function(req, res, next) {
      
     
           modelPortal.projectAddEdit(req.body.pid,req.body.flag,req.session.userId,req.session.roleId,req.session.retailerId,
            function(err, result) {

             if (err) {
                 next(err);
             } else {
               res.json(result);
                     
                 }
                      
         });
     },



getAllTreeForProjStatus:function(req,res,next){

modelPortal.getAllTreeForProjStatus(req.body.proId,function(err,result){
            if(err){
            }   
            else{
        
                  res.json(result[0]);

                 
            } 
        });



},


insNewVer :function(req,res,next){

modelPortal.insNewVer(req.body.projectId,req.body.version,req.body.updateQ,req.body.submitFlag,req.body.remarks,req.session.userId,req.body.changedEle,function(err,result){
            if(err){
                    }   
            else{
                 res.json('success');
                } 
        });


},




      gantt:function(req,res,next){
  var query = require('url').parse(req.url, true).query;
        var flag = query.flag;
        var versionFlag = query.versionFlag;
        if(flag==undefined){
            flag = -1;
        }

        if(versionFlag==undefined){
            versionFlag = 1;
        }
     

     modelPortal.task(flag,req.session.retailerId,versionFlag,req.session.userId,function(err,result){
            if(err){
            }   
            else{
            req.treeComponent = result[0];
            req.maxid         = result[1][0].endId;
            req.minid         = result[1][0].startId;
            req.flag          = flag;
            req.ultimateEndId = result[2][0].ultimateendid;
            req.projectDetails= result[3];
            req.prId          = result[1][0].prId; 
            req.Resources     =  result[4];
            req.versionFlag   =  versionFlag;
            req.userId       = req.session.userId;
            if(!!result[5][0].version){
                req.versionArr = result[5][0].version.split(',');
            }
            else{
                req.versionArr = [1];
                versionFlag  =  1;
               }

            req.projectAndVersions = result[6];
              

       req.submittedProject = result[8];
       req.submittedVersion = result[9];

     if(req.submittedVersion.length==0){
            req.submittedVersion  = [];
         }

         if(req.submittedProject.length==0){
            req.submittedProject = [];
         }
            for(var i = 0;i<req.projectDetails.length;i++){
                if(req.prId==req.projectDetails[i].id){
                    req.prStartDate = req.projectDetails[i].newPlannedStartDate;
                    req.prEndDate   = req.projectDetails[i].newPlannedEndDate;
                     if(req.prStartDate){
                        var temp = '';
                        req.prStartDate = req.prStartDate.split('/');
                        temp = req.prStartDate[0];
                        req.prStartDate[0] = req.prStartDate[1];
                        req.prStartDate[1] = temp;
                        req.prStartDate = req.prStartDate.join('/');
                        }
                       if(req.prEndDate){
                         req.prEndDate = req.prEndDate.split('/');
                         temp = req.prEndDate[0];
                        req.prEndDate[0] = req.prEndDate[1];
                        req.prEndDate[1] = temp;
                        req.prEndDate = req.prEndDate.join('/');
                           }
                            break;
                      }
                   

                }


                    if(result[12].length){
                        req.isManagerFlag = true;
                        req.isCreaterFlag = false;
                        req.userFlag = false;
                            req.collFlag = false;

                                         }

                else if(result[7].length){
                        req.isCreaterFlag = true;
                        req.isManagerFlag = false;
                           req.userFlag = false;
                    req.collFlag = false;

                                          }
                else if(result[10].length){
                           req.userFlag = true;
                        req.isCreaterFlag = false;
                        req.isManagerFlag = false;
                            req.collFlag = false;

                      var submitted;
                          
if(!req.treeComponent.length) {
            submitted = 0;
                              } 
                        else {
                   submitted = req.treeComponent[0].isSubmit;
                             }
          if(submitted != 2) {
       req.treeComponent = [];
                             }
                        else {
     
                  req.treeComponent = findDataFromUserFlag(result[0],req.session.userId);
                             }
                                      }
                                      else if(result[16].length){
                        req.userFlag = false;
                        req.isCreaterFlag = false;
                        req.isManagerFlag = false;
                        req.collFlag = true;

                                      }
                                  else{

                        req.userFlag = false;
                   req.isCreaterFlag = false;
                  req.isManagerFlag = false;
                    req.collFlag = false;

                    req.treeComponent = [];

                                     }
     
                   req.holidayArr = [];
                for(var i=0;i<result[11].length;i++){
                   req.holidayArr.push(result[11][i].holidayDate);
                                                    }
            var allcommentsArrComment = [];
            var allcommentsArrId     =  [];
               req.allcommentsSet = result[13]; 
            for(var i =0;i<result[13].length;i++) {
             allcommentsArrId[i] =    result[13][i].treeId;
             allcommentsArrComment[i] = result[13][i].comment;
            }       
            req.allcommentsArrComment = allcommentsArrComment;   
            req.allcommentsArrId      = allcommentsArrId;  
             req.usersAll    = result[14]; 
             if(!result[15].length){
                req.collaborateId = '';
             }
             else{
              req.collaborateId       =  result[15][0].collaborateIds;          
                 }
                 req.changedEle = result[17];
             next();
                } 
        });
                        
    },


createExcelProj:function(req,res,next){

createExcelHere(res,JSON.parse(req.body.projData),JSON.parse(req.body.bigArr),req.body.mailFlag,JSON.parse(req.body.receiverMail));
},

     

 }





 //-------------------------------------SEPERATE FUNCTION-------------------------------------->
function union_arrays (x, y) {
  var obj = {};
  for (var i = x.length-1; i >= 0; -- i)
     obj[x[i]] = x[i];
  for (var i = y.length-1; i >= 0; -- i)
     obj[y[i]] = y[i];
  var res = []
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) 
      res.push(obj[k]);
  }
  return res;
}
function parseAll(textLowerCase, req, strname, temp, next) {
    var parsedData;
    var largeArr = [];
    var conjunctionArr = ['if', 'and', 'the', 'is', 'because', 'on', 'to', 'in', 'from', 'of', 'above', 'be', 'would', 'for', 'each', 'at', 'under', 'by', 'been', 'no', 'my', 'upon', 'been', 'it0', 'will', 'there', 'that', 'this', 'has', 'have', 'had', 'up', 'with', 'own', 'are', 'any', 'may', 'about', 'used', 'can', 'into', 'as', 'not', 'we', 'or', 'than', 'also', 'using', 'see', 'its', 'more', 'such', 'what', 'us', 'there', 'so', 'them', 'Your', 'just', 'our', 'why', 'but', 'am', '//', '>=', '<=', 'over', 'per', '#1', '#2', '#3', '#4', '#5', '#6', 'etc)', 'recent', 'due', '(the', 'an', 'out', 'here'];
    for (var i = 0, len = textLowerCase.length; i < len; i++) {
        if ((largeArr.indexOf(textLowerCase[i]) < 0) && (conjunctionArr.indexOf(textLowerCase[i]) < 0) && (textLowerCase[i].length > 1) && (isNaN(textLowerCase[i]))) {
            largeArr.push(textLowerCase[i]);

        }
    }
    if (!largeArr.length) {
        parsedData = null;
    } else {
        parsedData = largeArr.join(',');
    }
    var filenamedemo;
    if (temp == 1) {
        filenamedemo = req.file.originalname;
    } else if (temp == 2) {
        var arr = strname.split("/");
        filenamedemo = arr[arr.length - 1];
    }
    var industry = req.body.industry == null ? '' : req.body.industry.toString();
    var business = req.body.business == null ? '' : req.body.business.toString();
    var doctype = req.body.doctype == null ? '' : req.body.doctype.toString();
    var tec = req.body.newTec == null ? '' : req.body.newTec.toString();
    var restriction = req.body.rLevel == null ? '' : req.body.rLevel.toString();


    modelPortal.attachDocFile(req.session.userId, req.session.retailerId,
        strname, req.body.currfolder, filenamedemo, req.body.descbox, req.body.authname,
        industry, business, req.body.title, doctype, tec, req.session.roleId, restriction,
        req.body.industryhide, req.body.businesshide, req.body.doctypehide, req.body.newTechide,
        req.body.rLevelhide, parsedData,
        function(err, result) {
            if (err) {
                next(err);
                return;
            } else {
                next();
            }


        });

}




function parseAllHr(textLowerCase, textarrNewLine, targetPath, req) {
    var longnumber = '' ;
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
       
            if (textLowerCase[textindex - 1] == ' ' && (textLowerCase[textindex + element.length] == ' ' || textLowerCase[textindex + element.length] == '.') && skillarrId.indexOf(skillsIdfromdb[index]) == -1) { 
                skillarrId.push(skillsIdfromdb[index]);
                elementFlag = false;
            } else startIndex++;
        }

    });
    textLowerCase = textLowerCase.replace(/\+/g, ' '); 


    /**********************Qualification***********************************/
    Qualification.forEach(function(element, index) {
        if (textLowerCase.indexOf(element) != -1) {
            var textindex = textLowerCase.indexOf(element);
            if (textLowerCase[textindex - 1] == ' ')  
                qualIndex = index;
        }


    });
    textLowerCase = textLowerCase.replace(/\./g, ''); 

    /***********************Institute*************************************/

for(var i = 0;i<institituefromdb.length;i++){
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
            return;
        }


        if (textarr[kIncName] == 'EOL') {
            countName++;

        }

        if (countName == 3) nameflag = false;

        kIncName++;

    }
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

        largeArrayForNameFromFile = largeArrayForNameFromFile.concat(skillArrForName);
        largeArrayForNameFromFile.sort(function(a, b) {
            return b.length - a.length; 
        });

        largeArrayForNameFromFile.forEach(function(element, index) {
            while (nameFromFile.indexOf(element) != -1) {
                nameFromFile = nameFromFile.replace(element, '');

            }
        });


        var nameFromFileArr;
        var nameFromFileArr2 = [];
        nameFromFile = nameFromFile.replace(/ +/g, ' ');
        nameFromFileArr = nameFromFile.split(' ');


        for (var i = 0; i < nameFromFileArr.length; i++) {
            if (nameFromFileArr[i].length > 2 && nameFromFileArr[i].indexOf('@') == -1) {
                nameFromFileArr2.push(nameFromFileArr[i]);
            }
        }
        var newNameFromFile = [];
        var incrementerFor3 = 0
       

        nameFromFile = nameFromFileArr2.join(' ');

        name = nameFromFile.trim();


    }

    /***************************************Name From Text and large Array For Name  ***************************************************/
    if (name.trim() == '') {
        var nameArrForText = req.session.nameExclusions;
        var largeArrayForNameFromText = allLocationInResume.concat(nameArrForText).concat(Qualification).concat(skillArrForName);
    }

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
               if(phone!=''){ 
                phone = phone +','+ textarr[k];
             }
             else {

                phone = textarr[k];
                
               }

            }

    

if (/^\d{2,9}$/.test(textarr[k])) {
    if(longNumber==''&&textarr[k].slice(0,2)!='20'||longNumber!=''){
    longNumber = longNumber.concat(textarr[k]);
 }
}
if (longNumber.length >= 10 && !(/^\d{2,9}$/.test(textarr[k]))&&phone.indexOf(longNumber)==-1) {
    if (phone != '') {
        phone = phone + ',' + longNumber;
    } else {

        phone = longNumber;
         }
    longNumber = '';
} else if (!(/^\d{2,9}$/.test(textarr[k]))) {
    longNumber = '';
}



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



    var emailDotless = email.replace(/\./g, '');

    if (req.session.emailArr.indexOf(emailDotless) != -1 && email != '') {
        countFiles[req.session.userId]++;

        return;
    } else {
        req.session.emailArr.push(emailDotless);

    }


    var kIncNameNew = 0;
    /********************Name from text****************************/
    while (kIncNameNew < 50 && name == '' && kIncNameNew < textarr.length - 2) {
        if (ifSuitableName(kIncNameNew) && ifSuitableName(kIncNameNew + 1)) {
            name = textarr[kIncNameNew] + ' ' + textarr[kIncNameNew + 1];
        }
        kIncNameNew++;

    }

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
            countFiles[req.session.userId]++;
         
        } else {

            countFiles[req.session.userId]++;

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
            countForWordLength = 0;
            return false
        }

        if (addressIndexForName.length > 0) {
            if (addressIndexForName[0] <= cCounter && cCounter <= addressIndexForName[1]) {
                return false;
            }

        }


        for (var i = 0; i < largeArrayForNameFromText.length; i++) {
            var textTemp = textarr[cCounter].toLowerCase();
            if (textTemp.indexOf(largeArrayForNameFromText[i]) != -1) {

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
            countFiles[req.session.userId]++;
            
          } else {
            req.session.empty = -1;
            countFiles[req.session.userId]++;

           }

    });





}


function getDateTime(timeStamp,dateTimeLength) {
    var originalArr = [[],[]];
for(var i = 0;i<2;i++){
      for(var j =0;j<dateTimeLength+1;j++){
           originalArr[i].push(0);

    }

 }

for(var i=0;i<timeStamp.length;i++){

}

    /*****************Today date Calculation**************************/
      var nowDateTime = new Date();
 var nowDateTimeForEmptyStartEndDate = nowDateTime;
    var nowDateTimeArr = [];
    nowDateTimeArr[0] = nowDateTime.getDate();
    nowDateTimeArr[1] = nowDateTime.getMonth();
    nowDateTimeArr[2] = nowDateTime.getFullYear();
    nowDateTime = new Date(nowDateTimeArr[2], nowDateTimeArr[1], nowDateTimeArr[0]);
    nowDateTime = nowDateTime.getTime(); 
    var dateinDDMMYYFormat = nowDateTimeArr[0] + '/' + (nowDateTimeArr[1] + 1) +'/' + nowDateTimeArr[2];  




    /********************************Actual completetion********************************/

    var compInc = 0;
    var completeArr = setAllValuesInArray();
    var sumEff = 0;




 for (var inc = 0; inc < timeStamp.length; inc++) { 
       if (inc != timeStamp.length - 1) {
           while (timeStamp[inc].project == timeStamp[inc + 1].project) {
               if (isNaN(timeStamp[inc].percCompleted)||!timeStamp[inc].percCompleted) {
                   timeStamp[inc].percCompleted = 0;
         }




               if (isNaN(timeStamp[inc].effortInHrs)||!timeStamp[inc].effortInHrs) {
                timeStamp[inc].effortInHrs = 0;


               }



               completeArr[compInc] = completeArr[compInc] + (parseInt(timeStamp[inc].percCompleted) * parseInt(timeStamp[inc].effortInHrs));
               sumEff = sumEff + parseInt(timeStamp[inc].effortInHrs);

               inc++;
               if (inc == timeStamp.length - 1) {
                   break;
               }



           }

          

       }



       if (inc != timeStamp.length - 1) {
           sumEff = sumEff + timeStamp[inc].effortInHrs;

                 if (isNaN(timeStamp[inc].percCompleted)||!timeStamp[inc].percCompleted) {
                   timeStamp[inc].percCompleted = 0;
                }

         if(isNaN(timeStamp[inc].effortInHrs)||!timeStamp[inc].effortInHrs) {
                timeStamp[inc].effortInHrs = 0;


               }

           completeArr[compInc] = (completeArr[compInc] + parseInt(timeStamp[inc].percCompleted) * parseInt(timeStamp[inc].effortInHrs)) / sumEff;

           if (isNaN(completeArr[compInc])) {
               completeArr[compInc] = 0;
           }


           originalArr[1][parseInt(timeStamp[inc].project)] = completeArr[compInc];

           compInc++;
           sumEff = 0;
       } else {

        sumEff = sumEff + timeStamp[inc].effortInHrs;

                 if (isNaN(timeStamp[inc].percCompleted)||!timeStamp[inc].percCompleted) {
                   timeStamp[inc].percCompleted = 0;
                }

         if(isNaN(timeStamp[inc].effortInHrs)||!timeStamp[inc].effortInHrs) {
                timeStamp[inc].effortInHrs = 0;

               }

           completeArr[compInc] = (completeArr[compInc] + parseInt(timeStamp[inc].percCompleted) * parseInt(timeStamp[inc].effortInHrs)) / sumEff;


           if (isNaN(completeArr[compInc])) {
               completeArr[compInc] = 0;
           }



           originalArr[1][parseInt(timeStamp[inc].project)] = completeArr[compInc];


           inc++;


       }




   }

for(var inc=0;inc<completeArr.length;inc++){
        if(isNaN(completeArr[inc])){
            completeArr[inc] = 0;
        }
    }




    /******************Asli Estimated Calculation***************************/
        var sumEff = 0,sumEffTotal = 0 ;
   for (var inc = 0; inc < timeStamp.length; inc++) {

  if(inc!=timeStamp.length-1){
     while(timeStamp[inc].project==timeStamp[inc+1].project){

    sumEff =   sumEff +  getEffNumberOfDays(dateinDDMMYYFormat,timeStamp[inc].startDate);
sumEffTotal = sumEffTotal + getEffNumberOfDays(timeStamp[inc].endDate,timeStamp[inc].startDate);
    inc++;
   if(inc==timeStamp.length-1){break;}
                        }
                  }

if(inc==timeStamp.length-1){
   sumEff =   sumEff +  getEffNumberOfDays(dateinDDMMYYFormat,timeStamp[inc].startDate);
sumEffTotal = sumEffTotal + getEffNumberOfDays(timeStamp[inc].endDate,timeStamp[inc].startDate);

originalArr[0][parseInt(timeStamp[inc].project)] = (sumEff/sumEffTotal)*100 ;

  }

  else{

       sumEff =   sumEff +  getEffNumberOfDays(dateinDDMMYYFormat,timeStamp[inc].startDate);
   sumEffTotal = sumEffTotal + getEffNumberOfDays(timeStamp[inc].endDate,timeStamp[inc].startDate);


    originalArr[0][parseInt(timeStamp[inc].project)] = (sumEff/sumEffTotal)*100 ;
     sumEff = 0;
    sumEffTotal =0;

  }


}
             





for(var i =0;i<2;i++){
for(var j = 0;j<originalArr[i].length;j++){
  if(isNaN(originalArr[i][j])){
    
    originalArr[i][j]  = 0;
}


 if(originalArr[i][j]==Infinity||originalArr[i][j]>100){
    
    originalArr[i][j]  = 100;
}

originalArr[i][j] = Math.round(originalArr[i][j]);

}

}




   return originalArr;

}





function getEffNumberOfDays(EndDateTime,StartDateTime){
    if(!EndDateTime||!StartDateTimeInTime){
        return 0;
    }
var EndDateTimeValue =  EndDateTime.split('/');
var StartDateTimeValue = StartDateTime.split('/');
if(EndDateTimeValue.length<3||StartDateTimeValue.length<3){
    return 0;
} 
if(StartDateTimeValue[2].length==2){ StartDateTimeValue[2] = '20' + StartDateTimeValue[2];}
if(EndDateTimeValue[2].length==2){ EndDateTimeValue[2] = '20' + EndDateTimeValue[2];}


var endDateTimeInTime = new Date(parseInt(EndDateTimeValue[2]),parseInt(EndDateTimeValue[1]), parseInt(EndDateTimeValue[0]));
    endDateTimeInTime = endDateTimeInTime.getTime();

    var StartDateTimeInTime =   new Date(parseInt(StartDateTimeValue[2]),parseInt(StartDateTimeValue[1]), parseInt(StartDateTimeValue[0]));
       StartDateTimeInTime  = StartDateTimeInTime.getTime();


if((endDateTimeInTime-StartDateTimeInTime)<0){
return 0;
}
return (endDateTimeInTime - StartDateTimeInTime);



}





function setAllValuesInArray(){


  var arr = [];
for(var i = 0;i<200;i++){
  arr[i] = 0;
}
return arr;
}


   function addSum(projTreeArr){
   
   var sumArr =  setAllValuesInArray();
for(var i=0;i<projTreeArr.length;i++){
    var effInHrsHereIs = parseeIntForNan(projTreeArr[i].effortInHrs);
   sumArr[projTreeArr[i].project] =  sumArr[projTreeArr[i].project] + effInHrsHereIs;
}
   return sumArr;
       }












function getPercentage(wbs,totalEffort,projTreeArr){
       var proj = setAllValuesInArray();
for(var i = 0;i<projTreeArr.length;i++){
    try{
 proj[projTreeArr[i].project]  =  (wbs[projTreeArr[i].project]/totalEffort[projTreeArr[i].project])*100; 
   }

   catch(err){
               
        proj[projTreeArr[i].project]  =  0;
    }
 
}
return proj;

}



function MathRound(num){
  return  (Math.round(num)*100)/100;
}


function calculateActualCompletion(RawData){
  var bigArr = setAllValuesInArray();
  var sumArr =  setAllValuesInArray();
for(var i=0;i<RawData.length;i++){
    var effInHrsHereIs = parseeIntForNan(RawData[i].effortInHrs);
   sumArr[RawData[i].project] =  sumArr[RawData[i].project] + effInHrsHereIs;
}


for(var i=0;i<sumArr.length;i++){
  if(sumArr[i]==0){
    sumArr[i] = 100;
  }
}

for(var i = 0 ;i<RawData.length;i++){
  var percCompleted = parseeIntForNan(RawData[i].percCompleted);
  var effInHrsHereIs = parseeIntForNan(RawData[i].effortInHrs);
  var sumArrthis     = sumArr[RawData[i].project];

bigArr[RawData[i].project] = bigArr[RawData[i].project] + ((effInHrsHereIs*percCompleted)/sumArrthis);


}

for(var i = 0;i<bigArr.length;i++){
  bigArr[i] = MathRound(bigArr[i]);
}


return bigArr;

}



function parseeIntForNan(data){
if(isNaN(data)||data==null){
  return 0;
}

else return parseInt(data);

}

function calculateEffCompletion(RawData){

  var bigArr = setAllValuesInArray();
var nowDate = new Date();
var dd  =   nowDate.getDate();
var mm  =   nowDate.getMonth() + 1;
var yy  =    nowDate.getFullYear();
var nowDate  = dd+'/'+mm+'/'+yy;
for(var i =0;i<RawData.length;i++){
 
 var startDate  = RawData[i].newPlannedStartDate
  var endDate    = RawData[i].newPlannedEndDate
 startDate       = startDate.split('/');
 endDate         = endDate.split('/');
 if(startDate[2].length==2){
    startDate[2]  = '20' + startDate[2];
 }
 if(endDate[2].length==2){
endDate[2] = '20' + endDate[2]

 }
 startDate       = startDate[0] +'/'+startDate[1] +'/'+startDate[2];
 endDate         = endDate[0] + '/' +endDate[1] + '/' +endDate[2];
var numberOfDays  = calculateEffDays(endDate,startDate);
var numberOfDays2 = calculateEffDays(nowDate,startDate);

bigArr[RawData[i].id]  = MathRound((numberOfDays2*100)/numberOfDays);
}


return bigArr;

}

function calculateEffDays(sDateNew,sDateOld){
  var effDays = 1;
  sDateOld = sDateOld.split('/');
  sDateNew =  sDateNew.split('/');
   if(sDateOld.length==2){
     sDateOld[2] = '20' + sDateOld[2];
   }
   if(sDateNew.length==2){
    sDateNew[2] = '20' + sDateNew[2];
   }
   sDateNew[1] = (sDateNew[1] -1) + '';
   sDateOld[1]  = (sDateOld[1] - 1)+ '';


var sDateNew2 = new Date(sDateNew[2],sDateNew[1],sDateNew[0]);
var sDateOld2 = new Date(sDateOld[2],sDateOld[1],sDateOld[0]);

 var d = sDateOld[0];
var m = sDateOld[1];
var y = sDateOld[2];
    

  while(sDateNew2>sDateOld2){
   sDateOld2 = new Date(y,m,d++);
   if(calculateHoliday(sDateOld2)){
     effDays++;
   }
   
  }

  while(sDateNew2<sDateOld2){
  sDateOld2 = new Date(y,m,d--);
   if(calculateHoliday(sDateOld2)){
     effDays--;
   }
  } 

  return effDays;

}






function  calculateHoliday(date){

 var weekEnds;
 if(!saturdayOffFlag){
 weekEnds =[0];
}
else {
       weekEnds = [0,6];     
    
  }

 var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();
    var day = date.getDay();
    var dateTime = date.getTime();
  
  if(saturdayOffFlag==1){
        weekEnds = [0,6]    
    }
else if(saturdayOffFlag ==0){
       weekEnds = [0];
     }
 
if(holidayArrDateTimeArr.indexOf(dateTime)!=-1){
    return false;
}
else if(weekEnds.indexOf(day)!=-1){
              return false;
        }

    else {
        return true;
         }



}





function totalHoursBookedFromWbs(RawData){

var bigArr = setAllValuesInArray();


for(var i = 0;i<RawData.length;i++){

bigArr[RawData[i].projectId]  = RawData[i].effortInHrs;
}
 return bigArr;

}


function calculatePercentageCompletedOnHoursBooked(wbsHours,hoursFromTree){

var bigArr = setAllValuesInArray();
var effortHrs = setAllValuesInArray();

for(var i = 0 ;i<hoursFromTree;i++){
  effortHrs[hoursFromTree[i].project] = effortHrs[hoursFromTree[i].project] + hoursFromTree[i].effortInHrs; 
}

for(var i = 0;i<hoursFromTree;i++){

if(hoursFromTree[i].effortInHrs==0){
   bigArr[hoursFromTree[i].project]  = 0;
}

else{
          
        bigArr[hoursFromTree[i].project] = (wbsHours[hoursFromTree[i].project]*100)/effortHrs[hoursFromTree[i].project];

    }

}
return bigArr;

}



function calculateActualEndDate(RawData){
var bigArr = setAllValuesInArray();
for(var i =0;i<RawData.length;i++){
if(RawData[i].actEndDate==null||RawData[i].actEndDate==''){
  bigArr[RawData[i].project] = 'alpha';
}
else if(bigArr[RawData[i].project]!='alpha'){
  bigArr[RawData[i].project]  = maxOf(bigArr[RawData[i].project],RawData[i].actEndDate);

}
else{
}

}

for(var i = 0;i<bigArr.length;i++){
            if(bigArr[i]==0||bigArr[i]=='alpha'){
                bigArr[i] = '';
            }
 }
 return bigArr;

}


function maxOf(date1,date2){
if(date1==0||date1=='0'){
  return date2
}

var dateTime1 = conVertToDateTime(date1);
var dateTime2 = conVertToDateTime(date2);

if(dateTime1>dateTime2){
  return date1;
}
else{
         return date2;
 }

}

function conVertToDateTime(date1){
   var date1Arr =  date1.split('/');

if(date1Arr[2].length==2){
  date1Arr[2] = '20'+date1Arr[2];
}
  var DateTime = new Date(date1Arr[2],date1Arr[1],date1Arr[0]);
  return DateTime; 


}


function findDataFromUserFlag(RawData,userId){ 
   
   var DataArr = [];


   for(var i = 0;i<RawData.length;i++){
           if(RawData[i].resources==userId){
             DataArr.push(i);
               getChildrenForParents(DataArr,RawData[i].id,RawData,0);
           }
       }
     RawData =  changeTheOnesForWhichNodesHaveToBeSeen(RawData,DataArr);
     return RawData;
}



function getChildrenForParents(DataArr,parentId,RawData,level){ 
if(level>1)   return;
for(var i = 0;i<RawData.length;i++){
    if(RawData[i].parentId==parentId){
        DataArr.push(i);
     getChildrenForParents(DataArr,RawData[i].id,RawData,level+1); 
    }
 }

}

function changeTheOnesForWhichNodesHaveToBeSeen(RawData,DataArr){ 
var newRawData = [];
for(var i =0;i<RawData.length;i++){
    if(DataArr.indexOf(i)!=-1){
      var startDate = RawData[i].startDate;
      RawData[i].startDate = startDate + '$$$0$RobertJFi$cher$$';
    }
}
return RawData;
}


function createExcelHere(res,projectData,bigArr,mailFlag,receiverMail){
var projName = projectData[0];
var dateThis =  projectData[2];
var verThis =  projectData[1];
var nameStr  = projName +'_'+verThis+'.xlsx';
var styles = { 
  headerDark: {
  
    font: {
      color: {
        rgb: 'FF000000'
      },
      sz: 12,
      bold: true,
      underline: false
    }
  },
  cellPink: {
    fill: {
      fgColor: {
        rgb: 'FFFFCCFF'
      }
    }
  },
  cellGreen: {
    fill: {
      fgColor: {
        rgb: 'FF00FF00'
      }
    }
  },
 cellRed:{
   fill: {
      fgColor: {
        rgb: 'FFFF0000'
      }
    }
    

 },
 cellYellow:{
   fill: {
      fgColor: {
        rgb: 'FFFFFF99'
      }
    }
    

 }
};

var heading = [
  [{value: 'Project Name : '+projName, style: styles.headerDark},{value: 'version : '+verThis, style: styles.headerDark},{value: 'Date :'+dateThis, style: styles.headerDark}] // <-- It can be only values 
];

var specification = {
  snumber: { 
    displayName: 'SNo', 
    headerStyle: styles.headerDark, 
    cellStyle: function(value, row) { 
      if(row.depth==0){
         return styles.cellRed;
            }
            else if(row.depth==1){
                 return styles.cellGreen;
            }
            else{
              return styles.cellYellow;
            }
    },
    width: 50 
  },
  name: {
    displayName: 'Name',
    headerStyle: styles.headerDark,
   cellStyle: function(value, row) { 
      if(row.depth==0){
         return styles.cellRed;
            }
            else if(row.depth==1){
                 return styles.cellGreen;
            }
            else{
              return styles.cellYellow;
            }
    },
    width: 200 
  },
  plStartDate: {
    displayName: 'Pl. Start Date',
    headerStyle: styles.headerDark,
  cellStyle: function(value, row) { 
      if(row.depth==0){
         return styles.cellRed;
            }
            else if(row.depth==1){
                 return styles.cellGreen;
            }
            else{
              return styles.cellYellow;
            }
    },    width: 100  
 
  
},
 plEDate: {
    displayName: 'Pl. End Date',
    headerStyle: styles.headerDark,
  cellStyle: function(value, row) { 
      if(row.depth==0){
         return styles.cellRed;
            }
            else if(row.depth==1){
                 return styles.cellGreen;
            }
            else{
              return styles.cellYellow;
            }
    },    width: 100  
 
  
},
 plActSDate: {
    displayName: 'Act. Pl. Start Date',
    headerStyle: styles.headerDark,
  cellStyle: function(value, row) { 
      if(row.depth==0){
         return styles.cellRed;
            }
            else if(row.depth==1){
                 return styles.cellGreen;
            }
            else{
              return styles.cellYellow;
            }
    },    width: 150 
  
},
plActEDate: {
    displayName: 'Act. Pl. End Date',
    headerStyle: styles.headerDark,
  cellStyle: function(value, row) { 
      if(row.depth==0){
         return styles.cellRed;
            }
            else if(row.depth==1){
                 return styles.cellGreen;
            }
            else{
              return styles.cellYellow;
            }
    },    width: 150
  
},
actEDate: {
    displayName: 'Act. End Date',
    headerStyle: styles.headerDark,
      cellStyle: function(value, row) { 
      if(row.depth==0){
         return styles.cellRed;
            }
            else if(row.depth==1){
                 return styles.cellGreen;
            }
            else{
              return styles.cellYellow;
            }
    }, 
    width: 100 
  
},
effort: {
    displayName: 'Effort',
    headerStyle: styles.headerDark,
      cellStyle: function(value, row) { 
      if(row.depth==0){
         return styles.cellRed;
            }
            else if(row.depth==1){
                 return styles.cellGreen;
            }
            else{
              return styles.cellYellow;
            }
    }, 
    width: 100
},
percCompleted: {
    displayName: '% Completed',
    headerStyle: styles.headerDark,
      cellStyle: function(value, row) { 
      if(row.depth==0){
         return styles.cellRed;
            }
            else if(row.depth==1){
                 return styles.cellGreen;
            }
            else{
              return styles.cellYellow;
            }
    }, 
    width: 100
 

},
 dependancy: {
    displayName: 'Dependancy',
    headerStyle: styles.headerDark,
   cellStyle: function(value, row) { 
      if(row.depth==0){
         return styles.cellRed;
            }
            else if(row.depth==1){
                 return styles.cellGreen;
            }
            else{
              return styles.cellYellow;
            }
    },  
      width: 100 

},
resources: {
    displayName: 'Resources',
    headerStyle: styles.headerDark,
   cellStyle: function(value, row) { 
      if(row.depth==0){
         return styles.cellRed;
            }
            else if(row.depth==1){
                 return styles.cellGreen;
            }
            else{
              return styles.cellYellow;
            }
    },    width: 150 
  }
}

var dataset = bigArr;
 
var report = excel.buildExport(
  [ 
    {
      name: 'Sheet name', 
      heading: heading,
      specification: specification, 
      data: dataset 
    }
  ]
);


var filename  = nameStr;
fs.appendFile(filename, report);
var tempPath =  path.resolve(filename);
var targetPath = path.resolve('./public/attach/projectReports/'+filename);

         
fs.rename(tempPath, targetPath, function(err){
            if (err) 
                next(err)
            else{
     
                if(mailFlag==1){
                   sendAsMail(nameStr,targetPath,res,receiverMail);
                }

                else{res.json('done')};

            }

          });





}

function sendAsMail(nameStr,targetPath,res,receiverMail){
var attachData = [];
     attachData[0] = nameStr;
     attachData[1] = targetPath;


mailTemplates.projectAttachFile(receiverMail.join(),attachData,function(err,result1){
                         if(err){
                        
                         }
                         else{
                            res.json('smile');
                         }
              });


}





