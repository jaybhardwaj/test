'use strict';

var mysql = require('../lib/mysql').executeQuery;
 var ip = require('ip');
module.exports = {
	login: function(userid, password, callback) {
		var query = {
			sql: 'call usp_validUser(?,?,?)',
			values: [userid, password,ip.address()]
		};
		mysql(query, function(err, result) {
			callback(err, result);
		});
	}
}