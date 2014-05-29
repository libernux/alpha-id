AlphaID
========

## What is AlphaID ?
AlphaID is a simple module do Create Alpha-numeric Indexes to Node.js.

#### Example

Let say you have a blog, and your typical post url is something like:

```Shell
http://myblog.com/posts/4815162342
```
If you use AlphaID you can convert to this:

```Shell
http://myblog.com/posts/iWroDM
```

Something like YouTube's links ;)

#### Install

To install globally use:

```Shell
npm install alpha-id -g
```

To install on a project use:

```Shell
cd my_project_folder
npm install alpha-id
```

#### Coding
On the same folder, create the file "index.js", and put this content:

```JavaScript
var AlphaID = require('alpha-id'); 
var s = AlphaID.do(4815162342 ,false);
var n = AlphaID.do(s,true);
console.log(s);
console.log(n);
```
To test the code, execute on the terminal:

```Shell
node index.js
```

#### Explaining

Inside AlphaID we have 2 main functions, 
* encode(n) - Convert a number into an alpha-numeric ID.
* decode(s) - Convert a alpha-numeric ID into a number.
* do(v,toNum) -Both cases, with '*toNum*' boolean flag. 

The default value to the flag '*toNum*' is false. 

When '*toNum*' is false the function returns encode(n) and when '*toNum*' is true the function returns decode(n).


##### Changing Index
If you want to create your own index, use this code below to override...

**Warnings:** 
* Always remember to put the same amount of characters on the original index. 
* Also remember to don't use invalid URL chars, like #,%,@,& ... that will make AlphaID untrustable.

```JavaScript
var AlphaID = require('alpha-id');
AlphaID.options.index = 'abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ0123456789';
var s = AlphaID.do(4815162342 ,false);
var n = AlphaID.do(s,true);
console.log(s);
console.log(n);
```

### Issues 

Found a bug? Have any suggestion? Please [open an issue!](https://github.com/marceloboeira/alpha-id/issues)

### Versions 

* [0.0.3](https://github.com/marceloboeira/alpha-id/releases/tag/v0.0.3) - Current Version - [Download Source Code](https://github.com/marceloboeira/alpha-id/archive/v0.0.3.tar.gz)



### RoadMap 

Nothing yet, but please suggest [here!](https://github.com/marceloboeira/alpha-id/issues)



