Template.passwordRecovery.helpers({
    resetPassword: function(target) {
        if (Accounts._resetPasswordToken) {
            Session.set('resetPassword', Accounts._resetPasswordToken);
        }
        return Session.get('resetPassword');
    }
});


Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        var nameVar = event.target.registerName.value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar,
            profile: {
                name: nameVar
            }
        }, function(error) {
            if (error) {
                var message = "There was an error logging in: <strong>" + error.reason + "</strong>";
                return instance.$('.formMessage').html(message);
            }
            return Router.go('dashboard');
        });
    }
});

Template.myAccount.events({
    'submit form': function(event){
        event.preventDefault();
        var currentId = Session.get('current');
        var currentUser = Meteor.users.findOne(currentId);

        console.log(currentUser);

        var emailVar = event.target.updateEmail.value;
        var oldPasswordVar = event.target.oldPassword.value;
        var newPasswordVar = event.target.newPassword.value;
        var nameVar = event.target.updateName.value;

        if(emailVar != currentUser.emails[0].address && emailVar != ''){
            Meteor.call('updateUserEmail', currentId, emailVar, currentUser);
        }
        if(newPasswordVar != ''){
            Accounts.changePassword(oldPasswordVar, newPasswordVar, function(error) {
                if (error) {
                    var message = "There was an error changing your password in: <strong>" + error.reason + "</strong>";
                    return instance.$('.formMessage').html(message);
                }
            });
        }
        if(nameVar != currentUser.profile.name && nameVar != ''){
            Meteor.call('updateProfile', currentId, nameVar);
        }
        Session.set('current', null);
        Router.go('dashboard');
    }
});

Template.login.events({
    'submit form': function(event, instance) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar, function(error){
            if (error) {
                var message = "There was an error logging in: <strong>" + error.reason + "</strong>";
                return instance.$('#formMessage').html(message);
            }
            if (Router.current().route.name === 'login') {
            // if we are on the login route, we want to redirect the user
            return Router.go('dashboard');
      }
        });
    }
});

Template.passwordRecovery.events({

    'submit #recovery-form' : function(event, instance) {
        event.preventDefault();
        var email = event.target.recoveryEmail.value;

        Accounts.forgotPassword({email: email}, function(error){
            if (error) {
                var message = "There was an error sending the email: <strong>" + error.reason + "</strong>";
                return instance.$('#formMessage').html(message);
            } else {
                Router.go('recoverThanks');
            }
        });
    },

    'submit #new-password' : function(e, t) {
        e.preventDefault();
        var pw = t.find('#new-password-password').value;
        Accounts.resetPassword(Session.get('resetPassword'), pw, function(err){
            if (err)
              console.log('Password Reset Error ' + err + ' Sorry');
            else {
              Session.set('resetPassword', undefined);
              Router.go('dashboard');
            }
        });
    }
});