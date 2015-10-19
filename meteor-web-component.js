if (Meteor.isClient) {
  Meteor.startup(function () {
    /**
     * This shows how simple it is to create a webcomponent
     */
    var MyAvatarPrototype = Object.create(HTMLElement.prototype);
    MyAvatarPrototype.createdCallback = function () {
        var username = this.getAttribute('username');
        console.log(username);
        var service = this.getAttribute('service');
        console.log(service);
        var url = 'http://avatars.io/' + service + '/' + username;
        var img = document.createElement('img');
        img.setAttribute('src', url);
        this.appendChild(img);
    };
    document.registerElement('my-avatar', {
        prototype: MyAvatarPrototype
    });

  });

  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('username', 'rchrd2');


  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    username: function () {
      return Session.get('username');
    }
  });

  Template.hello.events({
    'click #clicker': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    },
    'input #input': function (e, obj) {
      console.log(e.currentTarget.value);
      Session.set('username', e.currentTarget.value);
    },
    "input textarea": function (e, template) {
      console.log(e.currentTarget.value);
      Session.set('username', e.currentTarget.value);
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
