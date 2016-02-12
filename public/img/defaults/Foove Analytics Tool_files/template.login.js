(function(){
Template.__checkName("login");
Template["login"] = new Template("Template.login", (function() {
  var view = this;
  return HTML.Raw('<div class="row">\n		<div class="col hide-on-small-only m4 offset-m4 center-align">\n			<img src="/img/defaults/avatar_circle.png" class="login-avatar">\n		</div>\n	</div>\n\n	<div class="row">\n		<form class="col s12">\n		    <div class="row">\n		      	<div class="input-field col s12">\n		        	<input id="email" type="email" name="loginEmail" class="validate">\n		        	<label for="email" data-error="That\'s no email">Email</label>\n		      	</div>\n		    </div>\n		    <div class="row">\n		      	<div class="input-field col s12">\n		        	<input id="password" type="password" name="loginPassword" class="validate">\n		        	<label for="password">Password</label>\n		      	</div>\n		    </div>\n		    <div class="row">\n		    	<div class="col s12">\n		    		<button class="btn col s12 waves-effect waves-light" type="submit" name="action">sign in\n					    <i class="material-icons right">send</i>\n					</button>\n		    	</div>\n		    </div>\n		    <!-- <div class="row">\n		    	<div class="col s12">\n				    <p class="left-align">here comes remind me link</p>\n				    <p class="right-align"><a href="#">forgot password</a></p>\n				</div>\n		    </div> -->\n		    \n		</form>\n	</div>');
}));

}).call(this);
