Package.describe({
  name: 'turf:timestamp-log',
  version: '1.0.0',
  summary: 'Server-side console logging with timestamps',
  git: 'https://github.com/ffxsam/meteor-timestamp-log.git',
});

Package.onUse(function(api) {
  api.addFiles('timestamp-log.js');
  api.export('TimestampLog');
});

//Package.onTest(function(api) {
//  api.use('tinytest');
//  api.use('turf:timestamp-log');
//  api.addFiles('timestamp-log-tests.js');
//});
