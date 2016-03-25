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
        var emailVar    = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        var nameVar     = event.target.registerName.value;

        var serverVar   = event.target.server.checked;
        var wpCoreVar   = event.target.wpCore.checked;
        var wpPluginsVar = event.target.wpPlugins.checked;
        var browsersVar  = event.target.browsers.checked;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar,
            profile: {
                name: nameVar,
                notify: {
                    server:     serverVar,
                    wpCore:     wpCoreVar,
                    wpPlugins:  wpPluginsVar,
                    browsers:   browsersVar
                }
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
    'submit form': function(event, instance){
        event.preventDefault();
        var currentId = Session.get('current');
        var currentUser = Meteor.users.findOne(currentId);

        var emailVar = event.target.updateEmail.value;
        var oldPasswordVar = event.target.oldPassword.value;
        var newPasswordVar = event.target.newPassword.value;
        var nameVar = event.target.updateName.value;

        var serverVar   = event.target.server.checked;
        var wpCoreVar   = event.target.wpCore.checked;
        var wpPluginsVar = event.target.wpPlugins.checked;
        var browsersVar  = event.target.browsers.checked;

        if(oldPasswordVar != ''){
            var digest = Package.sha.SHA256(oldPasswordVar);
            Meteor.call('checkPassword', digest, function(err, result) {
                if (result) {
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

                    Meteor.call('updateNotifications', currentId, serverVar, wpCoreVar, wpPluginsVar, browsersVar);

                    Session.set('current', null);
                    Router.go('dashboard');
                } else {
                    $(event.target.oldPassword).addClass('invalid');
                    return instance.$('#formMessage').html("Wrong password");
                }
            });
        }
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

    'submit #new-password' : function(event, instance) {
        event.preventDefault();
        var pw = event.target.newPassword.value;
        Accounts.resetPassword(Session.get('resetPassword'), pw, function(error){
            if (error) {
                var message = "There was an error changing your password: <strong>" + error.reason + "</strong>";
                return instance.$('#formMessage').html(message);
            } else {
                Session.set('resetPassword', undefined);
                Router.go('dashboard');
            }
        });
    }
});