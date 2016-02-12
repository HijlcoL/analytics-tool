(function(){
Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return HTML.NAV({
    "class": "purple darken-4",
    role: "navigation"
  }, "\n\n    ", HTML.DIV({
    "class": "nav-wrapper"
  }, "\n\n      ", HTML.Raw('<ul>\n        <li>\n          <a href="#" data-activates="slide-out" class="button-collapse show-on-large"><i class="material-icons">menu</i></a>\n        </li>\n      </ul>'), "\n\n      \n      \n      ", Spacebars.include(view.lookupTemplate("slideMenu")), "\n      \n            \n      ", HTML.UL({
    "class": "right"
  }, "\n\n        ", HTML.Raw('<!-- <li><a href="#"><i class="material-icons">notifications</i></a></li> -->'), "\n\n        ", HTML.LI(HTML.Raw('<a href="#" data-activates="dropdown1" class="dropdown-button">\n          <i class="material-icons">account_circle</i></a>'), "\n          ", Spacebars.include(view.lookupTemplate("accountDropdown")), "\n        "), "\n        \n      "), "\n    "), "\n  ");
}));

Template.__checkName("slideMenu");
Template["slideMenu"] = new Template("Template.slideMenu", (function() {
  var view = this;
  return HTML.DIV({
    id: "slide-out",
    "class": "side-nav"
  }, "\n    \n    ", HTML.DIV({
    "class": "nav-head purple darken-4"
  }, "\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "dashboard");
    }
  }, HTML.Raw('<img class="logo-image" alt="" src="/img/logos/Logo-inverted-dark@1x.svg" width="210">')), "\n    "), "\n            \n    ", HTML.UL("\n      ", HTML.LI({
    "class": "no-padding"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "portfolioCreate");
    }
  }, "Add new portfolio item")), "\n    "), "\n  ");
}));

Template.__checkName("accountDropdown");
Template["accountDropdown"] = new Template("Template.accountDropdown", (function() {
  var view = this;
  return HTML.DIV({
    id: "dropdown1",
    "class": "dropdown-content z-depth-1"
  }, " \n\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n    ", HTML.BUTTON({
      "class": "btn waves-effect waves-light sign-out"
    }, "Sign out\n      ", HTML.I({
      "class": "material-icons right"
    }, "send"), "\n    "), "\n    " ];
  }), HTML.Raw('\n    <!-- <div class="account-wrapper z-depth-1"> \n    \n    <div class="account-content row valign-wrapper">\n      <div class="col s4 ">\n        <img src="/img/defaults/avatar_circle.png" class="valign">\n      </div>\n      <div class="col s8">\n        <div>\n          <h4>Foove</h4>\n          <p class="grey-text">masi@foove.nl</p>\n        </div>\n        <div>\n          <a href="{{pathFor \'register\'}}">My account</a>\n        </div>\n      </div>\n    </div>\n\n    <div class="divider"></div>\n\n    <div class="account-footer">\n      <a href="#!" class="btn right sign-out">Sign out</a>  \n    </div> -->\n    \n  '));
}));

}).call(this);
