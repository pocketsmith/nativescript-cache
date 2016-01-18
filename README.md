# nativescript-cache

**nativescript-cache** is a persistent caching plugin for NativeScript. Use it to store arbitrary data locally for fast access.

Built atop [TMCache](https://github.com/tumblr/TMCache) on iOS, and [SharedPreferences](http://developer.android.com/reference/android/content/SharedPreferences.html) on Android.


## Installation

```bash
tns plugin add nativescript-cache
```

## Usage

The cache plugin supports the following methods:

* `get(key)`
* `set(key, value)`
* `delete(key)`
* `clear`

Note that the value of the cache entry **must be a string**. If you want to store complex data, use `JSON.stringify` before putting the data in the cache, and `JSON.parse` on the way out.

```js
var cache = require("nativescript-cache");

cache.set("key1", "val1");
cache.get("key1"); // "val1"

cache.delete("key1");
cache.get("key1"); // undefined

cache.set("key2", "val2");
cache.set("key3", "val3");
cache.clear();
cache.get("key3"); // undefined
```