var nano = require('nano');

function PotatoChip(url) {
  this.db = nano(url);
}

PotatoChip.prototype.updateDesign = function(doc, name, cb) {
  var fullname = "_design/" + name;
  this.db.get(fullname, function(err, body) {
    if (err) return cb(err);
    if (body) {
      doc._id = body._id;
      doc._rev = body._rev;
    }
    this.db.insert(doc, fullname, cb);
  }.bind(this));
}

module.exports = PotatoChip;

