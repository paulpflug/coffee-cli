#!/usr/bin/env node
var path = './node_modules/coffee-script/lib/coffee-script'
var i
if (~(i = process.argv.indexOf("--next"))) {
  process.argv.splice(i, 1)
  path = './node_modules/coffeescript/lib/coffeescript'
}

require(path + '/command').run();
