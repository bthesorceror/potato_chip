#!/usr/bin/env node
var PotatoChip = require('../index');

var url      = process.argv[1];
var doc_file = process.argv[2];
var name     = process.argv[3];

var chip = new PotatoChip(url);

chip.updateDesign(require(doc_file), name, function(err) {
  if (err) {
    console.log("Your potato failed", err);
    return;
  }
  console.log("All updated now!");
});

