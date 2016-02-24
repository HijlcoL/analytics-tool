Meteor.publish("items", function () {
    return Items.find();
  });

Meteor.publish("browsers", function () {
    return Browsers.find();
  });