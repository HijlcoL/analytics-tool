var requireLogin = function() {
      	if (!Meteor.userId()) {
      		this.layout('loginLayout')
        	this.render('login');
      	} else {
      		this.next();
      	}
};

Router.onBeforeAction(requireLogin, {except: ['login']});

Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

Router.route('dashboard', { 
	path: '/dashboard'
});

// user routes
Router.route('register', {
	path: '/register'
});

Router.route('login', {
	layoutTemplate: 'loginLayout'
});

// portfolio routes
Router.route('portfolioList', { 
	path: '/portfolio'
});

Router.route('portfolioCreate', { 
	path: '/portfolio/add'
});

Router.route('portfolioItem', { 
  path: '/portfolio/item/:_id',
  data: function() { return Items.findOne(this.params._id); }
});

Router.route('portfolioEdit', { 
	path: '/portfolio/edit/:_id',
	data: function() { return Items.findOne(this.params._id); }
});

// Default route
Router.route('', function () {
    Router.go('dashboard');
});