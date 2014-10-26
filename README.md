#boom

Once upon a time, there was a bookmarklet called Quix. You could run ~100 bookmarklet based on your input; all from one single bookmarklet.

It was abandoned. I'm slowly making something to replace it. The end.

###Customizing
The bookmarlet inserts a script tag into the page whence it was invked. You must modify that required script. It's called `boom.js` lives in this repository in the `lib` folder.

The bookmarklets available are in a `CONFIG` object at the top of the file. Modify this object with your scripts

```js
CONFIG = {
    plex: "javascript:%20var%20s=document.createElement(%22script%22);s.type=%22text/javascript%22;s.src=%22https://my.plexapp.com/queue/bookmarklet_payload?uid=819f10b976818604%22;var%20h=document.getElementsByTagName(%22head%22)%5B0%5D;h.appendChild(s);void(0);",
    pocket: "javascript:(function()%7BISRIL_H='edaa';PKT_D='getpocket.com';ISRIL_SCRIPT=document.createElement('SCRIPT');ISRIL_SCRIPT.type='text/javascript';ISRIL_SCRIPT.src='http://'+PKT_D+'/b/r.js';document.getElementsByTagName('head')%5B0%5D.appendChild(ISRIL_SCRIPT)%7D)();",
    builtwith: "javascript:void(location.href='http://builtwith.com?'+location.href)",
    whois: "javascript:void(location.href='https://who.is/whois/'+location.host)",
    tdfw: "javascript:(function()%7Bjavascript:var%20s%3Ddocument.createElement(%27script%27)%3Bs.setAttribute(%27src%27,%27https://nthitz.github.io/turndownforwhatjs/tdfw.js%27)%3Bdocument.body.appendChild(s)%3B%7D)()%3B"
}
```

###Developing
Have NPM installed. Then: 

`npm install`

The `package.json` file should install the npm module `bookmarklet`.  
Bookmarklets need to be URI-encoded and should be uglified. This should do it for you.  

In your shell, type 

```shell
bookmarklet main.js
```

from the `src/` directory to URL encode the javascript.

Either copy/paste STDOUT and create a bookmarklet in your browser.

Or pipe it out to a file:

```shell
bookmarklet main.js > bookmarklet.js
```

Or copy it your clipboard (Mac):

```shell
bookmarklet main.js | pbcopy
```

### Easy Install

Visit this page, highlight everything and drag it into your Bookmark Bar. Rename.

[Boom](https://raw.githubusercontent.com/audibleblink/boom/master/src/bookmarklet.js)


__Current commands:__

Install the bookmarklet, invoke it and type 'help'
