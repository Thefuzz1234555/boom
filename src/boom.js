sources = [
    "//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js",
    "//raw.githubusercontent.com/audibleblink/boom/ajax-configs/lib/bookmarkletsConfig.js"
];

Boom();

function insertJs(url){
    var js = document.createElement('script');
    js.src = url;
    document.head.appendChild(js);
}

for(var i = 0; i < sources.length; i++){
    insertJs(sources[i])
}

function Boom() {
    var requestedBookmarklet = window.prompt('Boom: Enter your Bookmarklet\nType help to see all available options');
    var boomMarklets = CONFIG['bookmarklets'];
    var availableBookmarklets = Object.keys(boomMarklets);
    console.log($.inArray(requestedBookmarklet, availableBookmarklets))


    if (requestedBookmarklet === "help") {
        alert("The available bookmarklets for this version are:\n" + "\n" + availableBookmarklets.join("\n"))
    } else if ($.inArray(requestedBookmarklet, availableBookmarklets) !== -1) {
        window.location = boomMarklets[requestedBookmarklet];
    } else {
        alert("Bookmarklet not found")
    }
};
