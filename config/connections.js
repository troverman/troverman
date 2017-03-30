/**
 * Connections
 * (sails.config.connections)
 *
 */
 
module.exports.connections = {

  productionMongoHqDb: {
    adapter: 'sails-disk',
    //adapter: 'sails-mongo',
    //url: 'mongodb://heroku_xwbztwmv:j7i1brsvpfsph83212vvngi673@ds039431.mongolab.com:39431/heroku_xwbztwmv'
    //url: process.env.MONGOLAB_URI
  }

};

