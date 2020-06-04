window.onload = function () {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data =>
            // console.log(document.getElementById("dog").innerHTML = '<img src="' + data.message + '" alt="Random Photo of a Dog" />'),
            console.log(document.getElementById("dog").innerHTML = `<img src= "${data.message}" alt="Random Photo of a Dog" />`),

        )
        .catch(err => console.log(err));
}
