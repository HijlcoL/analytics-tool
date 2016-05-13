Meteor.startup(function(){
    Meteor.Mailgun.config({
      username: 'postmaster@mg.foove.nl',
      password: '56e3523f804700dfe3575d5a331c1ce4'
    });
  });

  // In your server code: define a method that the client can call
  Meteor.methods({
    sendEmail: function (mailFields) {
        console.log("about to send email...");
        check([mailFields.to, mailFields.from, mailFields.subject, mailFields.text, mailFields.html], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Meteor.Mailgun.send({
            to: mailFields.to,
            from: mailFields.from,
            subject: mailFields.subject,
            text: mailFields.text,
            html: mailFields.html
        });
        console.log("email sent!");
    }
  });