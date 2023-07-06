function short() {
    console.log("short");   
    let result = document.getElementById("result");
    let button = document.getElementById("short");
    button.addEventListener("click", async () => {
        let response = await fetch("http://localhost:3000/short");
        result.innerHTML = await response.text();
    }, false);
}