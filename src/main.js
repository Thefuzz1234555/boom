var YOUR_GH_HANDLE, GIT_BRANCH

// CUSTOMIZING: replace with your username and branch after forking
// Default branch is MASTER
YOUR_GH_HANDLE = "audibleblink";
GIT_BRANCH = null;

function rawGitUrl(ghHandle, branchName){
    branchName = branchName || "master"
    return "//rawgit.com/" + ghHandle + "/boom/" + branchName + "/lib/boom.js";
}

var js = document.createElement('script');
js.src = rawGitUrl(YOUR_GH_HANDLE, GIT_BRANCH);
document.head.appendChild(js);
