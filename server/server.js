Meteor.startup(function() {
  Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl('recover/#/reset-password/'+ token);
  }
});
