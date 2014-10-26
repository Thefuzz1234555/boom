CONFIG = {
    plex: "javascript:%20var%20s=document.createElement(%22script%22);s.type=%22text/javascript%22;s.src=%22https://my.plexapp.com/queue/bookmarklet_payload?uid=819f10b976818604%22;var%20h=document.getElementsByTagName(%22head%22)%5B0%5D;h.appendChild(s);void(0);",
    pocket: "javascript:(function()%7BISRIL_H='edaa';PKT_D='getpocket.com';ISRIL_SCRIPT=document.createElement('SCRIPT');ISRIL_SCRIPT.type='text/javascript';ISRIL_SCRIPT.src='http://'+PKT_D+'/b/r.js';document.getElementsByTagName('head')%5B0%5D.appendChild(ISRIL_SCRIPT)%7D)();",
    builtwith: "javascript:void(location.href='http://builtwith.com?'+location.href)",
    whois: "javascript:void(location.href='https://who.is/whois/'+location.host)",
    tdfw: "javascript:(function()%7Bjavascript:var%20s%3Ddocument.createElement(%27script%27)%3Bs.setAttribute(%27src%27,%27https://nthitz.github.io/turndownforwhatjs/tdfw.js%27)%3Bdocument.body.appendChild(s)%3B%7D)()%3B",
    speed: "javascript:(function()%7Bsq%3Dwindow.sq%3Dwindow.sq%7C%7C%7B%7D%3Bif(sq.script)%7Bsq.again()%3B%7Delse%7Bsq.bookmarkletVersion%3D%270.3.0%27%3Bsq.iframeQueryParams%3D%7Bhost:%27//squirt.io%27,userId:%27434436e8-7ebf-4e47-84ec-5a4d6591ff2c%27,%7D%3Bsq.script%3Ddocument.createElement(%27script%27)%3Bsq.script.src%3Dsq.iframeQueryParams.host%2B%27/bookmarklet/frame.outer.js%27%3Bdocument.body.appendChild(sq.script)%3B%7D%7D)()%3B"
}

function Boom() {
    var requestedBookmarklet = window.prompt('Boom: Enter your Bookmarklet\nType help to see all available options'),
        boomMarklets = CONFIG,
        availableBookmarklets = Object.keys(boomMarklets);

    if (requestedBookmarklet === "help") {
        alert("The available bookmarklets for this version are:\n" + "\n" + availableBookmarklets.join("\n"));
    } else if (availableBookmarklets.indexOf(requestedBookmarklet) !== -1) {
        window.location = boomMarklets[requestedBookmarklet];
    } else {
        alert("Bookmarklet not found");
    }
}

Boom();
