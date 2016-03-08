Meteor.methods({
	checkedItems: function(id) {
		Browsers.update({_id: id}, {$set: {checked: true}});
	},
	checkBrowsers: function(browserData) {

			var names = ['chrome', 'edge', 'firefox', 'ie', 'opera', 'safari'];

			names.forEach(function(thisName) {

				oldBrowser = Browsers.findOne({name: thisName});

				if(browserData[thisName].current > oldBrowser.version){
					Browsers.update({name: thisName}, {$set: {version: browserData[thisName].current, checked: false}});
				}
			});
	}
});

