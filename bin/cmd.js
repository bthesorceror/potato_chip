#!/usr/bin/env node
var PotatoChip = require('../index');
var path = require('path');

var file = require(path.resolve(process.cwd(), process.argv[2]));

var chip = new PotatoChip(file.url);

chip.updateDesign(file.doc, file.name, function(err) {
  if (err) {
    console.log("Your potato failed", err);
    return;
  }
  console.log("All updated now!");
});

/*
*
* module.exports = {
*   name: 'test',
*   url: 'http://local:host@localhost:5984/hashrocket_stats',
*   doc: {
*
*   }
* }
