(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/common/sidebar.js                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.subscribe('browsers');                                          // 1
                                                                       //
Template.sidebar.helpers({                                             // 3
	browsers: function () {                                               // 4
		return Browsers.find();                                              // 5
	},                                                                    //
	update: function () {                                                 // 7
		var updates = Browsers.findOne({ checked: false });                  // 8
		if (typeof updates != "undefined") {                                 // 9
			return true;                                                        // 10
		} else {                                                             //
			return false;                                                       // 12
		}                                                                    //
	}                                                                     //
});                                                                    //
                                                                       //
Template.sidebar.events({                                              // 17
	"click .browser": function () {                                       // 18
		Meteor.call('checkedItems', this._id);                               // 19
	}                                                                     //
});                                                                    //
                                                                       //
window.onload = function () {                                          // 23
	var myBrowsers = UMB.Browsers;                                        // 24
                                                                       //
	Meteor.call('checkBrowsers', myBrowsers);                             // 26
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);
