function showSecondIntro() {
    document.getElementById("intro1").style.display = "none";
    document.getElementById("intro2").style.display = "flex";
}

function enterSite() {
    document.getElementById("intro2").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}

function showMessage() {
    document.getElementById("message").innerText =
        "Web Development is an essential skill that focuses on creating modern, interactive, and responsive websites using HTML, CSS, and JavaScript.";
}