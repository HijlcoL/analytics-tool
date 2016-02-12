(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/pages/portfolio/portfolio.js                           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.subscribe("items");                                             // 1
                                                                       //
Template.portfolioList.helpers({                                       // 3
	items: function () {                                                  // 4
		return Items.find({});                                               // 5
	}                                                                     //
});                                                                    //
                                                                       //
Template.portfolioItem.helpers({                                       // 9
	equals: function (a, b) {                                             // 10
		return a === b;                                                      // 11
	}                                                                     //
});                                                                    //
                                                                       //
Template.portfolioList.events({                                        // 15
	"click .delete": function (event) {                                   // 16
		var currentItemId = this._id;                                        // 17
		Items.remove(currentItemId);                                         // 18
	},                                                                    //
	"click .small": function () {                                         // 20
		Meteor.call('insertPortfolioData');                                  // 21
	}                                                                     //
});                                                                    //
                                                                       //
Template.portfolioCreate.events({                                      // 25
	"submit form": function (event) {                                     // 26
		Router.go('dashboard');                                              // 27
	}                                                                     //
});                                                                    //
                                                                       //
Template.portfolioEdit.events({                                        // 31
	"submit form": function (event) {                                     // 32
		Router.go('dashboard');                                              // 33
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
