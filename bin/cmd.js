#!/usr/bin/env node
var PotatoChip = require('../index');
var path = require('path');

var url      = process.argv[2];
var doc_file = path.resolve(process.cwd(), process.argv[3]);
var name     = process.argv[4];

var chip = new PotatoChip(url);

chip.updateDesign(require(doc_file), name, function(err) {
  if (err) {
    console.log("Your potato failed", err);
    return;
  }
  console.log("All updated now!");
});
