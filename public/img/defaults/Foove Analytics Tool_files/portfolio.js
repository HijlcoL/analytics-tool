(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/portfolio.js                                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Items = new Mongo.Collection('items');                                 // 1
                                                                       //
Items.attachSchema(new SimpleSchema({                                  // 3
	name: {                                                               // 4
		type: String,                                                        // 5
		label: "Item name",                                                  // 6
		min: 4,                                                              // 7
		max: 100                                                             // 8
	},                                                                    //
	url: {                                                                // 10
		type: String,                                                        // 11
		label: "Item link",                                                  // 12
		autoform: {                                                          // 13
			afFieldInput: {                                                     // 14
				type: "url"                                                        // 15
			}                                                                   //
		}                                                                    //
	},                                                                    //
	server: {                                                             // 19
		type: Boolean,                                                       // 20
		optional: true,                                                      // 21
		autoform: {                                                          // 22
			afFieldInput: {                                                     // 23
				type: "hidden"                                                     // 24
			}                                                                   //
		}                                                                    //
	},                                                                    //
	wordpress: {                                                          // 28
		type: String,                                                        // 29
		label: "Wordpress version",                                          // 30
		autoValue: function () {                                             // 31
			if (this.isInsert) {                                                // 32
				return '-';                                                        // 33
			}                                                                   //
		},                                                                   //
		autoform: {                                                          // 36
			afFieldInput: {                                                     // 37
				type: "hidden"                                                     // 38
			}                                                                   //
		}                                                                    //
	},                                                                    //
	wp_update: {                                                          // 42
		type: Boolean,                                                       // 43
		optional: true,                                                      // 44
		autoform: {                                                          // 45
			afFieldInput: {                                                     // 46
				type: "hidden"                                                     // 47
			}                                                                   //
		}                                                                    //
	},                                                                    //
	createdAt: {                                                          // 51
		type: Date,                                                          // 52
		optional: true,                                                      // 53
		autoValue: function () {                                             // 54
			if (this.isInsert) {                                                // 55
				return new Date();                                                 // 56
			} else {                                                            //
				this.unset(); // Prevent user from supplying their own value       // 58
			}                                                                   //
		},                                                                   //
		autoform: {                                                          // 61
			afFieldInput: {                                                     // 62
				type: "hidden"                                                     // 63
			}                                                                   //
		}                                                                    //
	}                                                                     //
}));                                                                   //
/////////////////////////////////////////////////////////////////////////

}).call(this);
