const file = window.location.pathname.split("/").pop().replace(".html", "");

(async () => {
    const message = await hint(file);
    document.getElementById("location").textContent = "You're at: " + message.location;
})();

document.getElementById("Button").addEventListener("click", async () => {
    const input = document.getElementById("Input").value;
    const filename = window.location.pathname.split("/").pop();
    console.log(filename);
    const correctPassword = "HB-44";
    const s_correctPassword = "HB-44-e";

    if (input === correctPassword) {
        const message = await hint(file);
        print(message);
    } else {
        if (input === s_correctPassword && filename === "notice-1.html") {
            const message = "Suche im Schlafzimmer!"
            print_e(message)
        } else {
            document.body.innerHTML = "";
            document.body.style.backgroundColor = "black";
        }
    }
});

document.getElementById("Input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("Button").click();
    }
});

async function hint(file) {
    const response = await fetch("../texts.json");
    const data = await response.json();
    return data[file];
}

function print(message) {
    const prettyName = `Notice ${file.split("-")[1]}`;
    console.log(message)
    console.log(prettyName)
    console.log(message.text)
    document.body.innerHTML = `
    <h1>${prettyName}</h1>
    <em>'${message.hint}'</em>
    `;
}

function print_e(message) {
    document.body.innerHTML = `
    <h1>Ende</h1>
    <p>message</p>
    `;
}