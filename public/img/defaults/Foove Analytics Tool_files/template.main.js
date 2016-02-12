(function(){
Template.__checkName("mainLayout");
Template["mainLayout"] = new Template("Template.mainLayout", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Wrapper-->\n    "), HTML.DIV({
    id: "wrapper"
  }, "\n\n        ", HTML.Raw("<!-- Navigation -->"), "\n        ", Spacebars.include(view.lookupTemplate("header")), "\n\n        ", HTML.Raw("<!-- Page wraper -->"), "\n        ", HTML.DIV({
    id: "page-wrapper"
  }, "\n\n            ", Spacebars.include(view.lookupTemplate("yield")), "\n\n        "), "\n        ", HTML.Raw("<!-- End page wrapper-->"), "\n    "), HTML.Raw("\n    <!-- End wrapper-->") ];
}));

}).call(this);
