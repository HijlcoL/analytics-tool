SyncedCron.add({
  name: 'check status',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.cron('* * * * *');
  },
  job: function() {
  	var itemscol = Items.find();
	itemscol.forEach(function(item) {

	    HTTP.call("GET", item.url, function(error, result) {
	    	if (!error) {
            	Items.update({_id: item._id}, {$set: {server: true}});
            } else {
            	Items.update({_id: item._id}, {$set: {server: false}});
            }
	    });

	});
  }
});


SyncedCron.add({
  name: 'wordpress version',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.cron('* * * * *');
  },
  job: function() {
    // get items from database
    var itemscol = Items.find();
    itemscol.forEach(function(item) {
      // set variables
      var url = item.url + '/wp-admin/admin-ajax.php';
      var isUpdate = false;
        // do the http call and handle the data
        HTTP.call("POST", url, {params: { action: 'foove' }}, function(error, result) {
          // if server response 200
          if (!error) {
                // if data not null
                if(result.data != null){
                  // if wordpress update available set isUpdate to true
                  if(result.data.updates.response == 'upgrade'){
                    isUpdate = true;
                  }
                  // store current wordpress version and isUpdate in database
                  Items.update({_id: item._id}, {$set: {wordpress: result.data.current_version, wp_update: isUpdate}});
                  // console.log(result.data);
                } else {
                  // if no data set wordpress version to nothing
                  Items.update({_id: item._id}, {$set: {wordpress: '-', wp_update: true}});
                }
              } else {
                // if error log error to terminal
                console.log(error);
              }
        });

    });
  }
});



SyncedCron.start();

// HTTP.call("POST", 'http://demo.foove.nl/wp-admin/admin-ajax.php', {params: { action: 'foove' }}, function(error, result) {
//         if (!error) {
//               console.log(result.data.current_version);
//             } else {
//               console.log(error);
//             }
//       });