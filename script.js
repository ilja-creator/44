document.getElementById("Button").addEventListener("click", () => {
    const input = document.getElementById("Input").value;
    const correctPassword = "HB-44";

    if (input === correctPassword) {
        document.body.innerHTML = "<h1>Notice - 1</h1><p>'text'</p>";
    } else {
        document.body.innerHTML = "";
        document.body.style.backgroundColor = "black";
    }
});