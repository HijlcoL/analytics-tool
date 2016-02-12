Template.header.onRendered(function () {

	this.$(".button-collapse").sideNav({closeOnClick: true});

	this.$('.collapsible').collapsible();

	this.$('.dropdown-button').dropdown({
	      inDuration: 200,
	      outDuration: 150,
	      constrain_width: false, // Does not change width of dropdown to that of the activator
	      hover: false, // Activate on hover
	      gutter: 0, // Spacing from edge
	      belowOrigin: true, // Displays dropdown below the button
	      alignment: 'right' // Displays dropdown with edge aligned to the left of button
	    }
	  );

});

Template.header.events({
    'click .sign-out': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});