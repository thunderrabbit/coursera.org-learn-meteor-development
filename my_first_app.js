if (Meteor.isClient) {
  // new_date starts now
  Session.setDefault('new_date', new Date());

  Template.hello.helpers({
    time_at_which_button_was_clicked_most_recently: function () {
      return Session.get('new_date');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the new_date when button is clicked
      Session.set('new_date', new Date());
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
