var response = require('../../responses');

// Models
var User = require('../../models/User');
var Profile = require('../../models/Profile');
var Key = require('../../models/Key');

var password = require('../../utils/password');

module.exports = function(app) {

	app.post('/api/users/create', function(req, res) {

		User.findOne({email: req.body.email}, function(err, user) {
			if(err) return err;

			if(user) {
				res.send(response.userAlreadyExists);
			} else {

				// Create empty profile
				var newProfile = new Profile();
				newProfile.save();

				// Generate api key
				var newAPIKey = new Key({
					valid: true
				});
				newAPIKey.save();

				// Create the user
				var newUser = new User({
					email: req.body.email,
					password: password.hashPwd(req.body.password),
					profileId: newProfile._id,
					apiKey: newAPIKey._id
				});

				newUser.save(function(error) {
					if(error) return error;

					res.send(response.userCreationOk);
				});
			};
		});
	});

}