Package.describe({
  name: 'ffxsam:timestamp-log',
  version: '1.0.1',
  summary: 'Server-side console logging with timestamps',
  git: 'https://github.com/ffxsam/meteor-timestamp-log.git',
});

Package.onUse(function(api) {
  api.addFiles('timestamp-log.js', 'server');
  api.export('TimestampLog', 'server');
});

//Package.onTest(function(api) {
//  api.use('tinytest');
//  api.use('ffxsam:timestamp-log');
//  api.addFiles('timestamp-log-tests.js');
//});
