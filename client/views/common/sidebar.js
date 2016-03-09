Meteor.subscribe('browsers');

Template.sidebar.helpers({
	browsers: function() {
		return Browsers.find({}, {sort: [
				["checked", "asc"],
				["name", "asc"]
			]
		});
	}
});

Template.sidebar.events({
	"click .browser": function() {
		Meteor.call('checkedItems', this._id);
	}
});

window.onload = function() {
	var myBrowsers = UMB.Browsers;

	Meteor.call('checkBrowsers', myBrowsers);

	
}