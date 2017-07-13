#!/usr/bin/env node
var path = 'coffee-script/lib/coffee-script'
var i
if (~(i = process.argv.indexOf("--next"))) {
  process.argv.splice(i, 1)
  path = 'coffeescript/lib/coffeescript'
}

require(path + '/command').run();
