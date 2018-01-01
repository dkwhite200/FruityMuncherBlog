'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://YuriCuto:fruitymuncher@ds239387.mlab.com:39387/fruitymuncher'
  },

  // Seed database on startup
  seedDB: true

};
