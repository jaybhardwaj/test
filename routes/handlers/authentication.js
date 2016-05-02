 'use strict';

 var userauth = require('../../model/userauthentication');
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
         userauth.login(req.body.userid, req.body.password, function(err, result) {
             if (err) {
                 next(err);
                 res.json('0');
             } else {
                 if (result[0].length > 0) {
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
                     req.session.hrRole=result[0][0].hrRole;
                     req.session.modules=result[1].map(function(v){
                        return v.id;
                     });
                     res.json('1');
                 } else {
                     res.json('0');
                 }
             }
         });
     }
 }