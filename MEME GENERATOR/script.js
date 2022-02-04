let memeCount = 0;

// register event handlers
function start() {
    var memeForm = document.getElementById("memeForm");
    memeForm.addEventListener("submit", addMeme, false);
}
window.addEventListener("load", start, false);

function addMeme() {
    event.preventDefault();
    if (memeCount >= 10) {
        alert(
            "You have reached the maximum amount of memes that can be generated."
        );
        return;
    }
    var memeUrl = document.getElementById("memeurl").value;
    var topTxt = document.getElementById("toptext-input").value;
    var btmTxt = document.getElementById("btmtext-input").value;
    ++memeCount;
    let newMeme = document.createElement("div");
    newMeme.innerHTML = document.getElementById("memeTmplt").innerHTML;
    newMeme.className = "meme-wrapper";
    document.getElementById("meme-flexbox").appendChild(newMeme);
    newMeme.firstElementChild.src = memeUrl;
    newMeme.children[1].innerText = topTxt;
    newMeme.children[2].innerText = btmTxt;
    newMeme.id = "meme" + memeCount;
    // clear form after submit
    memeForm.reset();
}

// remove meme upon click
function removeMeme() {
    event.target.parentNode.remove();
    memeCount--;
}