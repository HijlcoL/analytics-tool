var requireLogin = function() {
      	if (!Meteor.userId()) {
      		this.layout('loginLayout')
        	this.render('login');
      	} else {
          this.next();
      	}
};

Router.onBeforeAction(requireLogin, {except: ['login', 'passwordRecovery']});

Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound',
    defaultBreadcrumbLastLink: true,

});

Router.route('dashboard', { 
	path: '/dashboard',
  title: 'Dashboard'
});

// user routes
Router.route('register', {
	path: '/register'
});

Router.route('myAccount', {
  path: '/account/:_id',
  data: function() {return Meteor.users.findOne(this.params._id); },
  onBeforeAction: function() {
    Session.set('current', this.params._id);
    this.next();
  },
  title: 'My account',
  parent: 'dashboard'
});

Router.route('login', function() {
	Router.go('dashboard');
});

Router.route('passwordRecovery', {
  layoutTemplate: 'loginLayout',
  path: '/recover'
});

// portfolio routes
Router.route('portfolioList', { 
	path: '/portfolio',
  title: 'Portfolio',
  parent: 'dashboard'
});

Router.route('portfolioCreate', { 
	path: '/portfolio/add',
  title: 'Create new item',
  parent: 'dashboard'
});

Router.route('portfolioItem', { 
  path: '/portfolio/item/:_id',
  data: function() { return Items.findOne(this.params._id); },
  title: function() {
    var data = this.data();
    return data.name;
  },
  parent: 'dashboard'
});

Router.route('portfolioEdit', { 
	path: '/portfolio/edit/:_id',
	data: function() { return Items.findOne(this.params._id); },
  title: 'update',
  parent: 'portfolioItem'
});

// Default route
Router.route('', function () {
    Router.go('dashboard');
});