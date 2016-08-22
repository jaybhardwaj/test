'use strict';

var nodemailer = require('nodemailer');
var config = require('../config/config').mailconfig;

var transporter = nodemailer.createTransport({
  service: config.service,
  auth: {
    user: config.user,
    pass: config.password
  }
});
//console.log(config);
module.exports = {

	sendEmail: function(sender, receiver, mailsubject, mailmessage, callback,attatchData) {
		

	
		if(!sender && !receiver) {
			var error = new Error('Sender and Receiver field can not left blank');
			return callback(error, null);
		}
		if(attatchData==null){
		var mailOptions = {
	    from: sender,
	    to: receiver,
	    subject: mailsubject,
	    html: mailmessage,
	  }
	}
	else{
	  var nameStr = attatchData[0] ;
     var targetPath  = attatchData[1];
     	var mailOptions = {
	    from: sender,
	    to: receiver,
	    subject: mailsubject,
	    html: mailmessage,
	    attachments :[{   // file on disk as an attachment
            filename: nameStr,
            path: targetPath // stream this file
        }]
	  }


	}

	
	  transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	      callback(error, null);
	    }else{
	      callback(null, 'success');
	    }
	  });

	}

}

