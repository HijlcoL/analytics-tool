
// Cron jobs
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
  name: 'wordpress data',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.cron('* * * * *');
    // return parser.cron('0,15,30,45 * * * *');
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
                  if(result.data.updates != null && result.data.updates.response === 'upgrade'){
                    isUpdate = true;
                  }

                  var pluginData = result.data.plugins;
                  var pluginUpdates = result.data.plugin_updates;
                  var dbPush = {};
                  
                  if(pluginData != []){

                    for (var key in pluginData){
                      var obj = pluginData[key];

                      var objKey = obj.Name;

                      // if object is not set in the database create a new entry
                      if(Object.keys(item.plugins).length === 0 || !item.plugins[objKey]){
                        dbPush[objKey] = {
                          'pluginName': objKey,
                          'currentPluginVersion': obj.Version,
                          'newPluginVersion': null,
                          'lastUpdated': new Date()
                        };

                        Items.update({_id: item._id}, {$set: {plugins: dbPush}});
                      }
                      // if object is updated in WordPress update the entry 
                      else if (obj.Version != item.plugins[objKey].currentPluginVersion){
                        dbPush[objKey] = {
                          'pluginName': objKey,
                          'currentPluginVersion': obj.Version,
                          'newPluginVersion': null,
                          'lastUpdated': new Date()
                        };

                        Items.update({_id: item._id}, {$set: {plugins: dbPush}});
                      }
                      // if nothing changed reset the entry to prefent the loss
                      else {
                        dbPush[objKey] = {
                          'pluginName': objKey,
                          'currentPluginVersion': obj.Version,
                          'newPluginVersion': item.plugins[objKey].newPluginVersion,
                          'lastUpdated': item.plugins[objKey].lastUpdated
                        };

                        Items.update({_id: item._id}, {$set: {plugins: dbPush}});
                      }

                      
                    }
                    
                  }

                  if(pluginUpdates != []){
                    
                    for (var key in pluginUpdates){
                      var obj = pluginUpdates[key];
                      var objKey = obj.Name;

                      // if there is an update available update the entry to set it.
                      if(objKey in dbPush || item.plugins[objKey]){
                        dbPush[objKey] = {
                          'pluginName': objKey,
                          'currentPluginVersion': obj.Version,
                          'newPluginVersion': obj.update.new_version,
                          'lastUpdated': item.plugins[objKey].lastUpdated
                        }
                      }

                      Items.update({_id: item._id}, {$set: {plugins: dbPush}});
                    }

                  }
                  // store current wordpress version and isUpdate in database;
                  Items.update({_id: item._id}, {$set: {wordpress: result.data.current_version, wp_update: isUpdate, lastChecked: new Date()}});
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