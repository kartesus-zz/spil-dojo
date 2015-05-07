define(function (require) {
  var registerSuite = require('intern!object');
  var assert = require('intern/chai!assert');

  registerSuite({
    'we can insert 4 numbers': function () {

      return this.remote
        .get(require.toUrl('src/index.html'))
        // .setFindTimeout(5000)
        .findAllByTagName('input')
        .then(function (inputs) {
          inputs.forEach(function(input){
            input.type('1');
          });
        });
    }
  });
});
