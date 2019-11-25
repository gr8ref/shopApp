Lets get start
$ react-native init shopApp
$ npm start or $ react-native start
$ react-native run-android or $ react-native run-ios


Got this issue on **windows**, but don't need to downgrade node, just as discussed on [stackoverflow](https://stackoverflow.com/a/58199866) just need to change some hashes on  your project:

> **\node_modules\metro-config\src\defaults\blacklist.js**

```
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

change to:

```
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```