(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/methods.js                                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
	checkedItems: function (id) {                                         // 2
		Browsers.update({ _id: id }, { $set: { checked: true } });           // 3
	},                                                                    //
	checkBrowsers: function (browserData) {                               // 5
                                                                       //
		var names = ['chrome', 'edge', 'firefox', 'ie', 'opera', 'safari'];  // 7
                                                                       //
		names.forEach(function (thisName) {                                  // 9
                                                                       //
			oldBrowser = Browsers.findOne({ name: thisName });                  // 11
                                                                       //
			if (browserData[thisName].current > oldBrowser) {                   // 13
				Browsers.update({ name: thisName }, { $set: { version: browserData[thisName].current, checked: false } });
			}                                                                   //
		});                                                                  //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
