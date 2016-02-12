(function(){
Template.__checkName("portfolioEdit");
Template["portfolioEdit"] = new Template("Template.portfolioEdit", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "row"
  }, "\n		", HTML.DIV({
    "class": "col m12"
  }, "\n			", HTML.H5("Update ", Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  })), "\n		"), "\n	"), "\n\n	", HTML.DIV({
    "class": "card-panel"
  }, "\n\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    "class": "col s12"
  }, "\n				", Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call("Items"),
      id: Spacebars.call("updateItemForm"),
      type: Spacebars.call("update"),
      doc: Spacebars.call(view.lookup(".")),
      fields: Spacebars.call("name, url, wordpress")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("quickForm"));
  }), "\n			"), "\n		"), "\n		\n	") ];
}));

}).call(this);
