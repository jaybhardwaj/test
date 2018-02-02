 'use strict';

 var userauth = require('../../model/userauthentication');
 var configEmail=require('../../config/config').mailconfig;
 var crypto = require('crypto'),
    key = 'efghabcdijklmnop',
    iv = '0123456789654321',
    cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
var idarr = [];
var loggedinarr = [];
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(3);
 module.exports = {
     checkauterization: function(req, res, next) {
         if (req.session.userId) {
             next();
         } else {
             req.page = 'index';
             req.session.url = req.url;
             next();
         }
     },
     login: function(req, res, next) {
        var pass=bcrypt.hashSync(req.body.password,salt);
        userauth.login(req.body.userid,pass,function(err, result) {
             if (err) {
<<<<<<< HEAD
                console.log(err);
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                 next(err);
                 res.json('0');
             } else {
                 if (result[0].length > 0) {

                            if( result[2].length>0){
                            configEmail.service= result[2][0].domailUserName;
                            configEmail.user=result[2][0].smtpMail,
                            configEmail.password= result[2][0].domailUserName,
                            configEmail.port= result[2][0].domailUserName;  
                           } 
                     req.session.allSupervisors=result[3];
                      req.session.asstroleid=result[0][0].assetRole;
                     req.session.mySupervisor=result[4][0].managerid;   
                     req.session.firstName = result[0][0].firstName;
                     req.session.userName = result[0][0].userEmail;
                     req.session.password = result[0][0].userPassword;
                     req.session.userId = result[0][0].id;
                     req.session.roleId = result[0][0].roleId;
                     req.session.retailerId = result[0][0].retailerId;
                     req.session.logo = result[0][0].logo;
                     req.session.defaultModule = result[0][0].defaultModuleId;
                     req.session.isApprover = result[0][0].isApproval;
                     req.session.isVerified = true;
                     req.session.croleId=result[0][0].crole_id;
                     req.session.isRetailer=result[0][0].isRetailer;
                     req.session.hrRole=result[5];
                     req.session.documentalert=0;
                     req.session.loginIdUser=result[0][0].lastinsert;
                     req.session.modules=result[1].map(function(v){
                        return v.id;
                     });
                     if(result[0][0].userEmail=='Admin@polestarllp.com'){
                        var  newFlag=[3,req.session.defaultModule]

                            res.json(newFlag);
                     }
                     else{
                     if(result[0][0].isRetailer==0 && result[0][0].passwordFlag==0 ){   
                         var  newFlag=[2,req.session.defaultModule]

                            res.json(newFlag);
                     }
                     else{
                     var newFlag=[1,req.session.defaultModule];
                     res.json(newFlag);
                 }}
                 } else {
                     var newFlag=[0,0];
                     res.json(newFlag);
                 }
             }
         });
     }
 }

