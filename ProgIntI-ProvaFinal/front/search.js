function search() {
    console.log("ok")
    let searchResult = document.getElementById("search-result");
    let button = document.getElementById("search");
    button.addEventListener("click", async () => {
        let response = await fetch("http://localhost:3000/search");
        searchResult.innerHTML = await response.text();
    },false);
}