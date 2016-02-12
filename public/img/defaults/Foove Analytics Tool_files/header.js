(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/common/header.js                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.header.onRendered(function () {                               // 1
                                                                       //
				this.$(".button-collapse").sideNav({ closeOnClick: true });        // 3
                                                                       //
				this.$('.collapsible').collapsible();                              // 5
                                                                       //
				this.$('.dropdown-button').dropdown({                              // 7
								inDuration: 200,                                               // 8
								outDuration: 150,                                              // 9
								constrain_width: false, // Does not change width of dropdown to that of the activator
								hover: false, // Activate on hover                             // 11
								gutter: 0, // Spacing from edge                                // 12
								belowOrigin: true, // Displays dropdown below the button       // 13
								alignment: 'right' // Displays dropdown with edge aligned to the left of button
				});                                                                //
});                                                                    //
                                                                       //
Template.header.events({                                               // 20
				'click .sign-out': function (event) {                              // 21
								event.preventDefault();                                        // 22
								Meteor.logout();                                               // 23
				}                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
