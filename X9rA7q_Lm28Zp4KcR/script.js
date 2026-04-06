const file = window.location.pathname.split("/").pop().replace(".html", "");

document.getElementById("Button").addEventListener("click", async () => {
    const input = document.getElementById("Input").value;
    const correctPassword = "HB-44";

    if (input === correctPassword) {
        const message = await hint(file);
        print(message);
    } else {
        document.body.innerHTML = "";
        document.body.style.backgroundColor = "black";
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

    document.body.innerHTML = `
        <h1>${prettyName}</h1>
        <em>'${message}'</em>
    `;
}