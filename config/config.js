'use strict';

module.exports = {
	mysqlconfig: {
		host: '139.162.47.185',
		user: 'polestarportal',
		password : 'portal@123',
		port : 3306,
		database:'portal'
	},
	mailconfig: {
		service: 'Gmail',
		user: 'support@polestarllp.com',
		password:'Polestar@123'
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
		url:'http://139.162.47.185'
	},
	modules:
	{
		Bug:1,
		Time:2,
		Expense:3,
		Project:4,
		Asset:5,
		Document:6,
		RMS:7
	}
}
