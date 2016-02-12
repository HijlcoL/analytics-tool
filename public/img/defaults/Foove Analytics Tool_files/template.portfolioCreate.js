(function(){
Template.__checkName("portfolioCreate");
Template["portfolioCreate"] = new Template("Template.portfolioCreate", (function() {
  var view = this;
  return [ HTML.Raw('<div class="row">\n		<div class="col s12">\n			<h5>Add new portfolio item</h5>\n		</div>\n	</div>\n\n	'), HTML.DIV({
    "class": "card-panel"
  }, "\n\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    "class": "col s12"
  }, "\n				", Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call("Items"),
      id: Spacebars.call("insertItemForm"),
      type: Spacebars.call("insert"),
      fields: Spacebars.call("name, url, wordpress")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("quickForm"));
  }), "\n			"), "\n		"), "\n		\n	") ];
}));

}).call(this);
