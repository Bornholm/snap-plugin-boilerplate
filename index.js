
// SNAP Plugin boilerplate

// You can require all your own server modules here
// var _ = require('underscore');

// The "load" method will be called (if defined) by SNAP upon its initiation
exports.load = function(pluginOpts, next) {

  // "this" will target the SNAP parent application
  var app = this;

  app.logger.info('Loading plugin snap-plugin-boilerplate !');
  app.logger.info('Plugin options are:', pluginOpts);

  // Here you can create & expose your own methods via RPC, extend or alter SNAP behavior
  // See snap-lib/lib/api/* to see more advanced examples

  // A simple async echo method
  function echo(params, cb) {
    var str = params[0];
    return cb(null, str);
  }

  // Expose it via RPC
  app.rpc.expose('boilerplate', 'echo', echo);

  // Inject client-side code. See "client.js"
  app.plugins.injectClientSide(__dirname + '/client.js');

  app.logger.info('Plugin loaded !');

  // You shall call "process.nextTick(next)" when you're done initializing your plugin
  return process.nextTick(next);

};

// Like "load", but called on application exit (SIGINT)
exports.unload = function(next) {
  console.log('Unloading plugin boilerplate !')
  return process.nextTick(next);
};