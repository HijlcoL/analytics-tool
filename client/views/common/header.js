Template.header.onRendered(function () {

	this.$(".button-collapse").sideNav({closeOnClick: true});

	this.$('.collapsible').collapsible();

});

Template.header.events({
	'click .account-dropdown': function(event) {
		event.preventDefault();
		$(".account-wrapper").toggleClass('active');
	},
    'click .sign-out': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});