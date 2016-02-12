(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/router.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var requireLogin = function () {                                       // 1
  if (!Meteor.userId()) {                                              // 2
    this.layout('loginLayout');                                        // 3
    this.render('login');                                              // 4
  } else {                                                             //
    this.next();                                                       // 6
  }                                                                    //
};                                                                     //
                                                                       //
Router.onBeforeAction(requireLogin, { except: ['login'] });            // 10
                                                                       //
Router.configure({                                                     // 12
  layoutTemplate: 'mainLayout',                                        // 13
  notFoundTemplate: 'notFound'                                         // 14
                                                                       //
});                                                                    //
                                                                       //
Router.route('dashboard', {                                            // 18
  path: '/dashboard'                                                   // 19
});                                                                    //
                                                                       //
// user routes                                                         //
Router.route('register', {                                             // 23
  path: '/register'                                                    // 24
});                                                                    //
                                                                       //
Router.route('login', {                                                // 27
  layoutTemplate: 'loginLayout'                                        // 28
});                                                                    //
                                                                       //
// portfolio routes                                                    //
Router.route('portfolioList', {                                        // 32
  path: '/portfolio'                                                   // 33
});                                                                    //
                                                                       //
Router.route('portfolioCreate', {                                      // 36
  path: '/portfolio/add'                                               // 37
});                                                                    //
                                                                       //
Router.route('portfolioItem', {                                        // 40
  path: '/portfolio/item/:_id',                                        // 41
  data: function () {                                                  // 42
    return Items.findOne(this.params._id);                             // 42
  }                                                                    //
});                                                                    //
                                                                       //
Router.route('portfolioEdit', {                                        // 45
  path: '/portfolio/edit/:_id',                                        // 46
  data: function () {                                                  // 47
    return Items.findOne(this.params._id);                             // 47
  }                                                                    //
});                                                                    //
                                                                       //
// Default route                                                       //
Router.route('', function () {                                         // 51
  Router.go('dashboard');                                              // 52
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
