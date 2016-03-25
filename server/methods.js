Meteor.methods({
	'updateUserEmail': function(currentId, emailVar, currentUser) {
		Accounts.addEmail(currentId, emailVar);
		Accounts.removeEmail(currentId, currentUser.emails[0].address);
	},
	'updateProfile': function(currentId, nameVar) {
		Meteor.users.update({_id: currentId}, {$set: {'profile.name': nameVar}});
	},
	'updateNotifications': function(currentId, server, wpCore, wpPlugins, browsers) {
		Meteor.users.update({_id: currentId}, {$set: {
			'profile.notify.server': server,
			'profile.notify.wpCore': wpCore,
			'profile.notify.wpPlugins': wpPlugins,
			'profile.notify.browsers': browsers,
		}});
	},
	'checkPassword': function(digest) {
	    check(digest, String);

	    if (this.userId) {
	    	var user = Meteor.user();
	    	var password = {digest: digest, algorithm: 'sha-256'};
	    	var result = Accounts._checkPassword(user, password);
	    	return result.error == null;
	    } else {
	    	return false;
	    }
	}
});