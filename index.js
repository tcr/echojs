var rem = require('rem');

module.exports = function (config) {
  return rem.connect('echonest.com', '4').configure(config);
};

// ~fin~