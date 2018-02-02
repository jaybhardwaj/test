'use strict';
var mysql = require('../lib/mysql').executeQuery;
var mailconfig=require('../config/config').mailconfig;
<<<<<<< HEAD
console.log("mail",mailconfig);
=======

>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
var nodemailer = require('nodemailer');
 var crypto = require('crypto'),
    key = 'efghabcdijklmnop',
    iv = '0123456789654321',
    cipher = crypto.createCipheriv('aes-128-cbc', key, iv)
    , decipher = crypto.createDecipher('aes-128-cbc', key,iv);

var decrypt = function (input, password) {
<<<<<<< HEAD
    // Convert urlsafe base64 to normal base64
    var input = input.replace(/\-/g, '+').replace(/_/g, '/');
    // Convert from base64 to binary string
    var edata = new Buffer(input, 'base64').toString('binary')

    // Create key from password
=======
    var input = input.replace(/\-/g, '+').replace(/_/g, '/');
    var edata = new Buffer(input, 'base64').toString('binary')

>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    var m = crypto.createHash('md5');
    m.update(password)
    var key = m.digest('hex');

<<<<<<< HEAD
    // Create iv from password and key
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
    m = crypto.createHash('md5');
    m.update(password + key)
    var iv = m.digest('hex');

<<<<<<< HEAD
    // Decipher encrypted data
=======
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
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
<<<<<<< HEAD
            console.log("no attachment@@@@@@@##########");
=======
          
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            var mailOptions = {
            from: sender,
            to: receiver,
            subject: mailsubject,
            html: mailmessage,
          }
<<<<<<< HEAD
          console.log(mailOptions);
        }
        /*else if(attatchData.constuctor != Array)
            {
                console.log("inside array");
             var fname=attatchData.slice(16,attatchData.toString().length);
             var fpath=path.join(__dirname, '.'+attatchData);
             console.log("jaytest***********************",fname,"*****",fpath);
             var mailOptions = {
             from: sender,
             to: receiver,
             subject: mailsubject,
             html: mailmessage,
             attachments: [{   // file on disk as an attachment
             filename:fname,
             path: fpath // stream this file
               }]
               }
             console.log("testing*************************************8",mailOptions);
            }*/
        else {
            console.log("inside project EMAIL");
=======
        
        }
       
        else {
       
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
            var nameStr = attatchData[0] ;
            var targetPath  = attatchData[1];
                var mailOptions = {
            from: sender,
            to: receiver,
            subject: mailsubject,
            html: mailmessage,
<<<<<<< HEAD
            attachments :[{   // file on disk as an attachment
                filename: nameStr,
                path: targetPath // stream this file
=======
            attachments :[{   
                filename: nameStr,
                path: targetPath
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
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
<<<<<<< HEAD
        if(!flag) {console.log("with attachment sending mail");
        mysql(query, function(err, result) {
            if (err) {
                console.log(err);
=======
        if(!flag) {
        mysql(query, function(err, result) {
            if (err) {
              
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
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
<<<<<<< HEAD
        console.log("without attachment sending mail",mailconfig);
=======
     
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
             service = mailconfig.service;
                user = mailconfig.user;
                password = mailconfig.password;
                port = mailconfig.port;
<<<<<<< HEAD
                console.log("without attachment sending mail",user);
=======
              
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                var transporter = nodemailer.createTransport({
                    service: service,
                    auth: {
                        user: user,
                        pass: password
                    }
                });


                transporter.sendMail(mailOptions, function(error, info) {
                    if (error) {
<<<<<<< HEAD
                        console.log(error); 
=======
                   
>>>>>>> 75266d9ffa5f22c97d091d4bb41cc7961557b2fd
                        callback(error, null);
                    } else {
                        callback(null, 'success');
                    }
                });
     }

    }

}








	
		