'use strict';
var mysql = require('../lib/mysql').executeQuery;
var mailconfig=require('../config/config').mailconfig;

var nodemailer = require('nodemailer');
 var crypto = require('crypto'),
    key = 'efghabcdijklmnop',
    iv = '0123456789654321',
    cipher = crypto.createCipheriv('aes-128-cbc', key, iv)
    , decipher = crypto.createDecipher('aes-128-cbc', key,iv);

var decrypt = function (input, password) {
    var input = input.replace(/\-/g, '+').replace(/_/g, '/');
    var edata = new Buffer(input, 'base64').toString('binary')

    var m = crypto.createHash('md5');
    m.update(password)
    var key = m.digest('hex');

    m = crypto.createHash('md5');
    m.update(password + key)
    var iv = m.digest('hex');

    var decipher = crypto.createDecipheriv('aes-256-cbc', key, iv.slice(0,16));

    var nodev = process.version.match(/^v(\d+)\.(\d+)/);
    var decrypted, plaintext;

    if( nodev[1] === '0' && parseInt(nodev[2]) < 10) {  
        decrypted = decipher.update(edata, 'binary') + decipher.final('binary');    
        plaintext = new Buffer(decrypted, 'binary').toString('utf8');
    } else {
        plaintext = (decipher.update(edata, 'binary', 'utf8') + decipher.final('utf8'));
    }

    return plaintext;
};

module.exports = {

    sendEmail: function(sender, receiver, mailsubject, mailmessage, callback,attatchData,retailerId,flag) {
        if (!sender && !receiver) {
            var error = new Error('Sender and Receiver field can not left blank');
            return callback(error, null);
        }
        if(attatchData==null || attatchData==undefined){
          
            var mailOptions = {
            from: sender,
            to: receiver,
            subject: mailsubject,
            html: mailmessage,
          }
        
        }
       
        else {
       
            var nameStr = attatchData[0] ;
            var targetPath  = attatchData[1];
                var mailOptions = {
            from: sender,
            to: receiver,
            subject: mailsubject,
            html: mailmessage,
            attachments :[{   
                filename: nameStr,
                path: targetPath
            }]
          }
        }
        var service = "",
            user = "",
            password = "",
            port = "";

         var query = {
            sql: 'call usp_mailServerInfo(?)',
                values: [retailerId]
        };
        if(!flag) {
        mysql(query, function(err, result) {
            if (err) {
              
            } else {
                var enc_password=result[0][0].domainPassword;
                if(enc_password != "" && enc_password !=0 && enc_password != null)
                var dec_password=decrypt(enc_password,key);
                else 
                dec_password =0;    
                service = (result[0][0].domainName || mailconfig.service);
                user = (result[0][0].domainUserName || mailconfig.user);
                password = (dec_password || mailconfig.password);
                port = (result[0][0].port || mailconfig.port);
                
                var transporter = nodemailer.createTransport({
                    service: service,
                    auth: {
                        user: user,
                        pass: password
                    }
                });


                transporter.sendMail(mailOptions, function(error, info) {
                    if (error) {
                        callback(error, null);
                    } else {
                        callback(null, 'success');
                    }
                });


            }
        });
     } else {
     
             service = mailconfig.service;
                user = mailconfig.user;
                password = mailconfig.password;
                port = mailconfig.port;
              
                var transporter = nodemailer.createTransport({
                    service: service,
                    auth: {
                        user: user,
                        pass: password
                    }
                });


                transporter.sendMail(mailOptions, function(error, info) {
                    if (error) {
                   
                        callback(error, null);
                    } else {
                        callback(null, 'success');
                    }
                });
     }

    }

}








	
		