Lets get start
<div class="highlight highlight-source-shell"><pre>
$ react-native init shopApp</pre></div>

<div class="highlight highlight-source-shell"><pre>
$ npm start or $ react-native start</pre></div>

<div class="highlight highlight-source-shell"><pre>
$ react-native run-android or $ react-native run-ios</pre></div>

<div class="highlight highlight-source-shell"><pre>
$ npm i react-native-material-ui --save</pre></div>

<div class="highlight highlight-source-shell"><pre>
$ npm i react-native-vector-icons --save</pre></div>

<div class="highlight highlight-source-shell"><pre>
$ react-native link react-native-vector-icons</pre></div>

<div class="highlight highlight-source-shell"><pre>
$ npm i axios --save</pre></div>


Got this issue on **windows**, but don't need to downgrade node, need to change some hashes on  your project:

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