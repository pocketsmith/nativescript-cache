var utils = require("utils/utils");

var cache = {};

var sharedPreferences = utils.ad.getApplicationContext().getSharedPreferences("cache.db", 0);

// Get the value of an item by key
cache.get = function(key) {
  return sharedPreferences.getString(key, undefined);
};

// Set an item in the storage
cache.set = function(key, value) {
  sharedPreferences.edit().putString(key, value).commit();
};

// Delete an item by key
cache.delete = function(key) {
  sharedPreferences.edit().remove(key).commit();
};

// Clear all items
cache.clear = function() {
  sharedPreferences.edit().clear().commit();
};

module.exports = cache;
