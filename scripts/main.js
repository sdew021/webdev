function setUI(data) {
    document.getElementById('n1').innerHTML = data[0].name
    document.getElementById('e1').innerHTML = data[0].email

    document.getElementById('n2').innerHTML = data[1].name
    document.getElementById('e2').innerHTML = data[1].email
}

function fetchUserData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUI(data))
}

fetchUserData()