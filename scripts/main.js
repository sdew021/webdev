function setUI(data) {
    for (let i = 0; i < 10; i++) {
        document.getElementById('n' + i).innerHTML = data[i].name
        document.getElementById('e' + i).innerHTML = data[i].email
    }
}


function fetchUserData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUI(data))
}
fetchUserData()