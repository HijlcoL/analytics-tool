Template.mainLayout.events({
	'click': function(event) {
		var target = event.target;
		if($(target).parents(".account-dropdown").length === 0 && target != $(".account-wrapper").eq(0)){
			$(".account-wrapper").removeClass("active");
		}
	}
});