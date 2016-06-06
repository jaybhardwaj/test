'use strict';

module.exports = {
	mysqlconfig: {
 
		host: '192.168.1.56',  
		user: 'polestarportal',
		password : 'root',
		port : 3306,
		database:'portal'
	},
	mailconfig: {
		service: 'Gmail',
		user: 'support@polestarllp.com',
		password:'Polestar@123',
		port:257
	},

	flagUsed:{
		sqlError:-1,
		inserted:0,// When created successfully.
		updated :1,// When updated successsfully.
		alreadyExist:2,// When duplicate entry.
		mailFailed:3,// When mail sending failed.	
		notExist:4 // not exist entry
	}
	,
	url:
	{
		url:'http://192.168.1.54'
	},
	modules:
	{
		Bug:1,
		Time:2,
		Expense:3,		
		Asset:4,
		Project:5,
		Document:6,
		RMS:7
	}
}
