const url = "/api/v1.0/test";

function fetchData() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}