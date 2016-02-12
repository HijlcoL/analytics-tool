(function(){
Template.__checkName("portfolioList");
Template["portfolioList"] = new Template("Template.portfolioList", (function() {
  var view = this;
  return HTML.DIV({
    "class": "card-panel"
  }, "\n            ", HTML.DIV({
    "class": "card-content"
  }, "\n\n            	", HTML.TABLE({
    "class": "bordered highlight"
  }, "\n			        ", HTML.THEAD("\n				        ", HTML.TR("\n				              ", HTML.TH({
    "data-field": "name"
  }, "Name"), "\n				              ", HTML.TH({
    "data-field": "server",
    "class": "center-align"
  }, "Server"), "\n				              ", HTML.TH({
    "data-field": "price",
    "class": "center-align"
  }, "Wordpress"), "\n				        "), "\n			        "), "\n\n					", HTML.TBODY("\n				        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("items"));
  }, function() {
    return [ "\n				        	", Spacebars.include(view.lookupTemplate("item")), "\n				        " ];
  }), "\n			        "), "\n			    "), "\n\n\n            "), "\n          ");
}));

Template.__checkName("item");
Template["item"] = new Template("Template.item", (function() {
  var view = this;
  return HTML.TR({
    "class": function() {
      return Blaze.If(function() {
        return Spacebars.call(view.lookup("wp_update"));
      }, function() {
        return "update";
      });
    }
  }, "\n	    ", HTML.TD({
    "class": "left-align"
  }, "\n	    	", HTML.P("\n	    		", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "portfolioItem");
    },
    "class": "wp_name"
  }, Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  })), HTML.Raw("<br>"), "\n	    		", HTML.SPAN({
    "class": "wp_url"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("url"));
    },
    target: "_blank",
    "class": "grey-text text-lighten-1"
  }, Blaze.View("lookup:url", function() {
    return Spacebars.mustache(view.lookup("url"));
  }))), "\n	    	"), "\n	    "), "\n	    ", HTML.TD({
    "class": "center-align"
  }, "\n	    	", Blaze.If(function() {
    return Spacebars.call(view.lookup("server"));
  }, function() {
    return [ "\n	    		", HTML.I({
      "class": "small material-icons light-green-text"
    }, "check_circle"), "\n	    	" ];
  }, function() {
    return [ "\n	    		", HTML.I({
      "class": "small material-icons red-text"
    }, "error"), "\n	    	" ];
  }), "\n	    "), "\n	    ", HTML.TD({
    "class": "center-align"
  }, "\n	    	", HTML.P({
    "class": "wp_version"
  }, Blaze.View("lookup:wordpress", function() {
    return Spacebars.mustache(view.lookup("wordpress"));
  })), "\n	    "), "\n	");
}));

}).call(this);
