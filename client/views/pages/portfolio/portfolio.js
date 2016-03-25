Meteor.subscribe("items");

Template.portfolioList.helpers({
	items: function () {
		return Items.find({}, {sort: [
				["server", "asc"],
				["wp_update", "desc"]
			]
		});
	}
});

Template.portfolioItem.helpers({
	equals: function (a, b) {
		return a === b;
	},
	unequals: function(a, b) {
		return a != b;
	},
	plugins: function() {
		var data = this.plugins
		var result = [];

		for(var index in data){
			if (data.hasOwnProperty(index)) {
				result.push(data[index]);
			}
		}
		return result;
	},
	formatDate: function(date) {
		return moment(date).format('LL');
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
		if(event.target.name.value == "" || event.target.url.value == ""){
			console.log('error');
		} else {
			Router.go('dashboard');
		}
		
	}
});

Template.portfolioEdit.events({
	"submit form": function (event) {
		Router.go('dashboard');
	},
	"click .delete": function (event) {
		event.preventDefault();
	    if (confirm("Are you sure?") == true) {
	        Items.remove(this._id);
			Router.go('dashboard');
	    } else {
	        console.log("You pressed Cancel!");
	    }
		
	}
});