fetch("https://inspirobot.me/api?generate=true")
    .then((response) => response.text())
    .then((text) => {document.getElementById("image").src = text});