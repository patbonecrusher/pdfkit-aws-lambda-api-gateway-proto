var handler = require('../index.js').handler;

var parameters = {
  "text":"val1",
  "object" :{},
  // other keys as necessary
};

handler(parameters, {}, function(err, result) {
  console.log(result);
  process.exit(0);
});