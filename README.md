#boom

Once upon a time, there was a bookmarklet called Quix. You could run ~100 bookmarklet based on your input; all from one single bookmarklet.

It was abandoned. I'm slowly making something to replace it. The end.

### What's a Bookmarklet?
A bookmarklet is a bookmark stored in a web browser that contains JavaScript commands to extend the browser's functionality. Bookmarklets are unobtrusive scripts stored as the URL of a bookmark in a web browser or as a hyperlink on a web page.

###Customizing

There are two parts to this bookmarklet. 

[src/main.js](src/main.js) is what injects the second part ([lib/boom.js](lib/boom.js))

- Fork this repository. 
- After forking, navigate [here](src/main.js) (the first part) and plugin your own username
- Add your personal bookmarklets [here](lib/boom.js) (the second part)
- uglify and encode your bookmarklet by running the `boomarklet` node package

The default bookmarklets available are in a `CONFIG` object at the top of the file. Modify this object with your own bookmarklets.

```js
CONFIG = {
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

[Boom](src/bookmarklet.js)


__Current commands:__

Install the bookmarklet, invoke it, and type 'help'
