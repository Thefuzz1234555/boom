var requestedBookmarklet = window.prompt('Boom: Enter your Bookmarklet\nType help to see all available options'),
    sources = {
        bookmarkletsConfig: "//rawgit.com/audibleblink/boom/ajax-configs/lib/bookmarkletsConfig.js",
        jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"
    },
    sourceKeys = Object.keys(sources);

function insertMissingScripts(word){
    var scriptList = document.getElementsByTagName('script'),
        results = [];

    for(var i = 0; i < scriptList.length; i++){
        if (scriptList[i].src.match(new RegExp(word))){
            results.push(true);
        } else {
            results.push(false);
        }
    }

    if (results.indexOf(true) === -1){
        appendScript(sources[word]);
    }
}

function appendScript(url){
    var js = document.createElement('script');
    js.src = url;
    document.head.appendChild(js);
}


for (var x = 0; x < sourceKeys.length; x++){
    insertMissingScripts(sourceKeys[x]);
}


setTimeout(function Boom() {
    var boomMarklets = CONFIG,
        availableBookmarklets = Object.keys(boomMarklets);

    if (requestedBookmarklet === "help") {
        alert("The available bookmarklets for this version are:\n" + "\n" + availableBookmarklets.join("\n"));
    } else if ($.inArray(requestedBookmarklet, availableBookmarklets) !== -1) {
        window.location = boomMarklets[requestedBookmarklet];
    } else {
        alert("Bookmarklet not found");
    }

    return Boom;

}, 200);
