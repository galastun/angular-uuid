# angular-uuid
A simple service to get a UUID in AngularJS.

# Usage
It's really pretty simple.

    let app = angular.module('app', ['uuid'])
    app.controller('MyCtrl', ['uuid', function(uuid) {
      let newUUID = uuid.get();
    }]);
