Meteor.methods({
	'updateUserEmail': function(currentId, emailVar, currentUser) {
		Accounts.addEmail(currentId, emailVar);
		Accounts.removeEmail(currentId, currentUser.emails[0].address);
	},
	'updateProfile': function(currentId, nameVar) {
		Meteor.users.update({_id: currentId}, {$set: {'profile.name': nameVar}});
	}
});