Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        });
    }
});

Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar, function(error){
        	if(error) {
        		return console.log(error);
        	}
        });
    }
});