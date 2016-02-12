(function(){
Template.__checkName("loginLayout");
Template["loginLayout"] = new Template("Template.loginLayout", (function() {
  var view = this;
  return HTML.DIV({
    "class": "login-background valign-wrapper"
  }, HTML.Raw('\n\n        <div class="login-logo center-align"><img src="/img/logos/Logo-inverted-dark@1x.svg" alt="Foove Logo"></div>\n\n        <div class="login-slope-cover">\n            <div class="login-slope"></div>\n        </div>\n\n        <!-- Page wraper -->\n        '), HTML.DIV({
    "class": "container"
  }, "\n            ", HTML.DIV({
    "class": "row"
  }, "\n                ", HTML.DIV({
    "class": "col l6 offset-l3 m8 offset-m2 s12"
  }, "\n                    ", HTML.DIV({
    "class": "card login-card valing"
  }, "\n                        ", Spacebars.include(view.lookupTemplate("login")), "\n                    "), "\n                "), "\n            "), "\n        "), HTML.Raw("\n        <!-- End page wrapper-->\n\n    "));
}));

}).call(this);
