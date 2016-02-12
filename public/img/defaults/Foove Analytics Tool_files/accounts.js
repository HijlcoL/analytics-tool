(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/pages/account/accounts.js                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.register.events({                                             // 1
    'submit form': function (event) {                                  // 2
        event.preventDefault();                                        // 3
        var emailVar = event.target.registerEmail.value;               // 4
        var passwordVar = event.target.registerPassword.value;         // 5
        Accounts.createUser({                                          // 6
            email: emailVar,                                           // 7
            password: passwordVar                                      // 8
        });                                                            //
    }                                                                  //
});                                                                    //
                                                                       //
Template.login.events({                                                // 13
    'submit form': function (event) {                                  // 14
        event.preventDefault();                                        // 15
        var emailVar = event.target.loginEmail.value;                  // 16
        var passwordVar = event.target.loginPassword.value;            // 17
        Meteor.loginWithPassword(emailVar, passwordVar, function (error) {
            if (error) {                                               // 19
                return console.log(error);                             // 20
            }                                                          //
        });                                                            //
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
