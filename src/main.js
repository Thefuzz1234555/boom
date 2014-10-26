function rawGitUrl(ghHandle, branchName){
    return "//rawgit.com/" + ghHandle + "/boom/" + branchName + "/lib/boom.js";
}

var URL = rawGitUrl("audibleblink", "simplify");

var js = document.createElement('script');
js.src = URL;
document.head.appendChild(js);
