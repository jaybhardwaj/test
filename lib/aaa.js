'use strict';
var path = require('path');
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

	sendEmail: function(sender, receiver, mailsubject, mailmessage,attatchData,callback) {
		

	
		if(!sender && !receiver) {
			var error = new Error('Sender and Receiver field can not left blank');
			return callback(error, null);
		}
		if(attatchData==null)
		{
		   var mailOptions = {
	       from: sender,
	       to: receiver,
	       subject: mailsubject,
	       html: mailmessage,
	       }
	    }
	  else{
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
	}

	
	  transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	    	console.log(error);
	      callback(error, null);
	    }else{
	      callback(null, 'success');
	    }
	  });

	}

}

