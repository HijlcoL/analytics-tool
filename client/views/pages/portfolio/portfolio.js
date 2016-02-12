Meteor.subscribe("items");

Template.portfolioList.helpers({
	items: function () {
		return Items.find({}, {sort: [
			["server", "asc"],
			["wp_update", "desc"],
			["wordpress", "asc"]
			]
		});
	}
});

Template.portfolioItem.helpers({
	equals: function (a, b) {
		return a === b;
	}
});

Template.portfolioList.events({
	"click tr": function (event) {
		var currentItemId = this._id; 
		Router.go('portfolioItem', {_id: currentItemId});
	},
	"click .small": function () {
		Meteor.call('insertPortfolioData');
	}
});

Template.portfolioCreate.events({
	"submit form": function (event) {
		Router.go('dashboard');
	}
});

Template.portfolioEdit.events({
	"submit form": function (event) {
		Router.go('dashboard');
	}
});