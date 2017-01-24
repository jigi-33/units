#!/usr/bin/env node

/**
 * This wrapper runs coverage analysis in valid environment.
 * Usage:
 * node node_modules/ws-unit-testing/cover path/to/your/test/runner.js
 */

var spawn = require('child_process').spawn,
   path = require('path'),
   pathTo = require('./lib/util').node.pathTo,
   args = [
      path.join(pathTo('istanbul'), 'lib', 'cli'),
      'cover',
      path.join(pathTo('mocha'), 'bin', '_mocha')
   ];

args.push.apply(args, process.argv.slice(2));

var proc = spawn(
   process.execPath,
   args,
   {stdio: 'inherit'}
);

proc.on('exit', function (code, signal) {
   if (signal) {
      process.kill(process.pid, signal);
   } else {
      process.exit(0);
   }
});

process.on('exit', function() {
   process.exitCode = 0;
});

// terminate children on force exit
process.on('SIGINT', function () {
   proc.kill('SIGINT');
   proc.kill('SIGTERM');
   process.kill(process.pid, 'SIGINT');
});
