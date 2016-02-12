(function(){
Template.__checkName("dashboard");
Template["dashboard"] = new Template("Template.dashboard", (function() {
  var view = this;
  return HTML.DIV({
    "class": "row"
  }, "\n        ", HTML.DIV({
    "class": "col m9 s12"
  }, "\n            ", HTML.Raw("<!-- Main view  -->"), "\n            ", Spacebars.include(view.lookupTemplate("portfolioList")), "\n       	"), "\n\n        ", HTML.DIV({
    "class": "col m3 s12"
  }, "\n        	", Spacebars.include(view.lookupTemplate("sidebar")), "\n        "), " \n       \n    ");
}));

}).call(this);
