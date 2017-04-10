"use strict";

var makeUuid = (function () {

  // From http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
  return function makeUuid() { // eslint-disable-line no-unused-vars
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };
})();
null;
