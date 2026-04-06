const file = window.location.pathname.split("/").pop().replace(".html", "");

document.getElementById("Button").addEventListener("click", () => {
    const input = document.getElementById("Input").value;
    const correctPassword = "HB-44";

    if (input === correctPassword) {
        print(hint(file))
    } else {
        document.body.innerHTML = "";
        document.body.style.backgroundColor = "black";
    }
});

function hint(file) {
    if (file === "notice-1") {
        return "Dort, wo das Langhalstier wohnt, wirst mit dem nächsten Hinweis du belohnt."
    }
    if (file === "notice-2") {
        return "Dort, wo die Liebesschlösser am nächsten hängen, soll deien Liebe zum nächsten Tipp auch beginnen."
    }
}

function print(message) {
    const prettyName = `Notice ${file.split("-")[1]}`

    document.body.innerHTML = `
        <h1>${prettyName}</h1>
        <em>'${message}'</em>
    `;
}