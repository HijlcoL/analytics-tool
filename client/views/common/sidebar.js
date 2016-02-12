Meteor.subscribe('browsers');

Template.sidebar.helpers({
	browsers: function() {
		return Browsers.find();
	},
	update: function() {
		var updates = Browsers.findOne({checked: false});
		if(typeof updates != "undefined"){
			return true;
		} else {
			return false;
		}
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