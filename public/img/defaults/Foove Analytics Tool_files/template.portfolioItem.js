(function(){
Template.__checkName("portfolioItem");
Template["portfolioItem"] = new Template("Template.portfolioItem", (function() {
  var view = this;
  return HTML.DIV({
    "class": "row"
  }, "\n		", HTML.DIV({
    "class": "col m9 s12"
  }, "\n			", HTML.DIV({
    "class": "card-panel"
  }, "\n				", HTML.DIV({
    "class": "row"
  }, "\n					", HTML.Raw("<h5>Main site info</h5>"), "\n					", HTML.Raw('<div class="divider"></div>'), "\n					", HTML.DIV({
    "class": "section"
  }, "\n\n							", HTML.DIV({
    "class": "row"
  }, "\n								", HTML.Raw('<div class="col s3">\n									<p class="grey-text">Site name:</p>\n								</div>'), "\n								", HTML.DIV({
    "class": "col s9"
  }, "\n									", HTML.P(Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  })), "\n								"), "\n\n								", HTML.Raw('<div class="col s3">\n									<p class="grey-text">Site url:</p>\n								</div>'), "\n								", HTML.DIV({
    "class": "col s9"
  }, "\n									", HTML.P(Blaze.View("lookup:url", function() {
    return Spacebars.mustache(view.lookup("url"));
  })), "\n								"), "\n\n								", HTML.Raw('<div class="col s3">\n									<p class="grey-text">Server status:</p>\n								</div>'), "\n								", HTML.DIV({
    "class": "col s9"
  }, "\n									", HTML.P("\n										", Blaze.If(function() {
    return Spacebars.call(view.lookup("server"));
  }, function() {
    return [ "\n											", HTML.SPAN({
      "class": "light-green-text"
    }, "Online"), "\n										" ];
  }, function() {
    return [ "\n											", HTML.SPAN({
      "class": "red-text"
    }, "Offline"), "\n										" ];
  }), "\n									"), "\n								"), "\n							"), "\n\n					"), "\n					", HTML.Raw("<h5>Wordpress info</h5>"), "\n\n					", HTML.Raw('<div class="divider"></div>'), "\n					", HTML.DIV({
    "class": "section"
  }, "\n\n							", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("equals"), view.lookup("wordpress"), "-");
  }, function() {
    return [ "\n								", HTML.P("No data found, please check if plugin is installed and activated"), "\n							" ];
  }, function() {
    return [ "\n								", HTML.DIV({
      "class": "row"
    }, "\n									", HTML.DIV({
      "class": "col s3"
    }, "\n										", HTML.P({
      "class": "grey-text"
    }, "Wordpress status:"), "\n									"), "\n								\n									", HTML.DIV({
      "class": "col s9"
    }, "\n										", HTML.P("\n											", Blaze.If(function() {
      return Spacebars.call(view.lookup("wp_update"));
    }, function() {
      return [ "\n												", HTML.SPAN({
        "class": "red-text"
      }, "There's an update available for Wordpress"), "\n											" ];
    }, function() {
      return [ "\n												", HTML.SPAN({
        "class": "light-green-text"
      }, "Up to date"), "\n											" ];
    }), "\n										"), "\n									"), "\n									\n									", HTML.DIV({
      "class": "col s3"
    }, "\n										", HTML.P({
      "class": "grey-text"
    }, "Wordpress version:"), "\n									"), "\n									", HTML.DIV({
      "class": "col s9"
    }, "\n										", HTML.P(Blaze.View("lookup:wordpress", function() {
      return Spacebars.mustache(view.lookup("wordpress"));
    })), "\n									"), "\n								"), "\n							" ];
  }), "\n\n					"), "\n				"), "\n			"), "\n		"), "\n	");
}));

}).call(this);
