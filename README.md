# Server-Side Logs
#### (with timestamps)

One issue I've had when deploying Meteor apps via mup is that logged messages in the upstart log file have no timestamps on them. This is a problem when trying to determine when specific errors or incidents might've occurred. This package addresses that.

## Installation
Install via:

    $ meteor add ffxsam:timestamp-log

## Usage
Four functions are provided:

* TimestampLog.log()
* TimestampLog.info()
* TimestampLog.warn()
* TimestampLog.error()

These take the same arguments and function the same way as their `console` counterparts.

## Example
```javascript
if (Meteor.isServer) {
  Meteor.methods({
    myMethod: function (val) {
      // code here...
      TimestampLog.error('Bad value: %s', val);
    });
  });
}
```
Output:
> [Fri Jun 26 2015 20:17:53 GMT-0700 (PDT)] Bad value: some string

## Contributions

Please feel free to contribute to this package! Any improvements are welcome.