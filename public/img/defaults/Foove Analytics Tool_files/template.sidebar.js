(function(){
Template.__checkName("sidebar");
Template["sidebar"] = new Template("Template.sidebar", (function() {
  var view = this;
  return HTML.DIV({
    "class": "card medium"
  }, "\n        ", HTML.DIV({
    "class": "card-image waves-effect waves-block waves-light"
  }, "\n            ", Blaze.If(function() {
    return Spacebars.call(view.lookup("update"));
  }, function() {
    return [ "\n                ", HTML.IMG({
      "class": "activator",
      src: "img/broken-medium.jpeg"
    }), "\n            " ];
  }, function() {
    return [ "\n                ", HTML.IMG({
      "class": "activator",
      src: "img/smartphone.jpg"
    }), "\n            " ];
  }), "\n            \n        "), "\n\n        ", HTML.DIV({
    "class": "card-content"
  }, "\n            ", Blaze.If(function() {
    return Spacebars.call(view.lookup("update"));
  }, function() {
    return [ "\n                ", HTML.SPAN({
      "class": "card-title activator grey-text text-darken-4"
    }, "Whoeps!"), "\n                ", HTML.P("\n                    You need to check some browsers\n                "), "\n            " ];
  }, function() {
    return [ "\n                ", HTML.SPAN({
      "class": "card-title activator grey-text text-darken-4"
    }, "YAY!"), "\n                ", HTML.P("\n                    All items are checked on the latest browsers\n                "), "\n            " ];
  }), "\n        "), "\n\n        ", HTML.DIV({
    "class": "card-reveal"
  }, "\n            ", HTML.Raw('<span class="card-title grey-text text-darken-4">Browsers<i class="material-icons right">close</i></span>'), "\n            ", HTML.TABLE("\n                ", HTML.TBODY("\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("browsers"));
  }, function() {
    return [ "\n                        ", HTML.TR({
      "class": "browser"
    }, "\n                            ", HTML.TD(HTML.IMG({
      "class": "browser-icon",
      src: function() {
        return [ "img/icons/", Spacebars.mustache(view.lookup("name")), ".svg" ];
      }
    })), "\n                            ", HTML.TD("\n                                ", HTML.P("\n                                    ", Blaze.View("lookup:fullName", function() {
      return Spacebars.mustache(view.lookup("fullName"));
    }), "\n                                    ", Blaze.If(function() {
      return Spacebars.call(view.lookup("checked"));
    }, function() {
      return "\n                                    ";
    }, function() {
      return [ "\n                                        ", HTML.SPAN(HTML.I({
        "class": "material-icons"
      }, "info")), "\n                                    " ];
    }), "\n                                "), "\n                            "), "\n                            ", HTML.TD(HTML.P(Blaze.View("lookup:version", function() {
      return Spacebars.mustache(view.lookup("version"));
    }))), "\n                        "), "\n                    " ];
  }), "\n                "), "\n            "), "\n        "), "\n    ");
}));

}).call(this);
