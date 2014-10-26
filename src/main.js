// CUSTOMIZING: replace with your username and branch after forking
// Default branch is MASTER
var URL = rawGitUrl("audibleblink", null);

function rawGitUrl(ghHandle, branchName){
    branchName = branchName || "master"
    return "//rawgit.com/" + ghHandle + "/boom/" + branchName + "/lib/boom.js";
}

var js = document.createElement('script');
js.src = URL;
document.head.appendChild(js);
