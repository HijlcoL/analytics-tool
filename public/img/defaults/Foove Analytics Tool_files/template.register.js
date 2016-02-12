(function(){
Template.__checkName("register");
Template["register"] = new Template("Template.register", (function() {
  var view = this;
  return [ HTML.Raw('<div class="row">\n		<div class="col s12">\n			<h5>Add new user</h5>\n		</div>\n	</div>\n\n	'), HTML.DIV({
    "class": "card-panel"
  }, "\n\n		", Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call("Meteor.users"),
      id: Spacebars.call("userCreate")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("quickForm"));
  }), "\n		\n	") ];
}));

}).call(this);
