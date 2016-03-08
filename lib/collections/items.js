Items = new Mongo.Collection('items');


Items.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Item name",
		min: 4,
		max: 100
	},
	url: {
		type: String,
		label: "Item url",
		autoform: {
			afFieldInput: {
				type: "url"
			}
		}
	},
	server: {
		type: Boolean,
		optional: true,
		autoform: {
			afFieldInput: {
				type: "hidden"
			}
		}
	},
	wordpress: {
		type: String,
		label: "Wordpress version",
		autoValue: function() {
	      if (this.isInsert) {
	        return '-';
	      }
	    },
	    autoform: {
	    	afFieldInput: {
	    		type: "hidden"
	    	}
	    }
	},
	wp_update: {
		type: Boolean,
		optional: true,
		autoform: {
			afFieldInput: {
				type: "hidden"
			}
		}	
	},
	createdAt: {
	    type: Date,
		optional: true,
	    autoValue: function() {
	      if (this.isInsert) {
	        return new Date();
	      }  else {
	        this.unset();  // Prevent user from supplying their own value
	      }
	    },
	    autoform: {
	    	afFieldInput: {
	    		type: "hidden"
	    	}
	    }
	},
	lastChecked: {
		type: Date,
		optional: true
	},
	plugins: {
		type: Object,
		optional: true,
		blackbox: true
	}
}));

