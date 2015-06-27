TimestampLog = {};

TimestampLog._log = function () {
  var args = Array.prototype.slice.call(arguments);
  var args2;
  var logFunc = args.splice(0, 1);

  args2 = Array.prototype.slice.call(args[0]);
  args2[0] = '[' + (new Date()).toString() + '] ' + args2[0];
  logFunc[0].apply(null, args2);
};

TimestampLog.log = function () {
  this._log(console.log, arguments);
};

TimestampLog.info = function () {
  this._log(console.info, arguments);
};

TimestampLog.warn = function () {
  this._log(console.warn, arguments);
};

TimestampLog.error = function () {
  this._log(console.error, arguments);
};
