var configs = require('./config');

var protocol = '';
var domain = '';
var port = configs.port;

if(configs.use_ssl) {
	protocol = 'https://';
} else {
	protocol = 'http://';
}

if(port !== '80') {
	domain = configs.app_domain + ':' + port + '/';
} else {
	domain = configs.app_domain + '/'
}

module.exports = {
	imageUploadOk: function(filename) {
		return 'Upload was successful! Download link is: ' + protocol + domain + filename;
	},
	videoUploadOk: {
		code: '200',
		message: 'Video upload was successful!',
		link: function(filename) {
			return 'Upload was successful!\nDownload link is: ' + protocol + domain + filename;
		}
	},
	videoUploadOk: {
		code: '200',
		message: 'Video upload was successful'
	},
	userCreationOk: {
		code: '200',
		message: 'User has been created successfully'
	},
	userAlreadyExists: {
		code: '403',
		message: 'Email is already in use.'
	}
}