// replace with your username and branch to customize after forking
var URL = rawGitUrl("audibleblink", "simplify");


function rawGitUrl(ghHandle, branchName){
    return "//rawgit.com/" + ghHandle + "/boom/" + branchName + "/lib/boom.js";
}

var js = document.createElement('script');
js.src = URL;
document.head.appendChild(js);
