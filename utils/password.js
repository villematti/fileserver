var crypto = require('crypto');
var config = require('../config.js');

var password = { hashPwd: function(text) {
	var hash = crypto.createHmac('sha256', config.secret)
        .update(text)
        .digest('hex');
    return hash
}};

module.exports = password;