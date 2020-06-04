window.onload = function () {
    this.pegarCartao(1);



    $('.carousel').carousel({
        interval: 2000
    })
}
function pegarCartao(page) {
    fetch('https://rickandmortyapi.com/api/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var principal = data;
            fetch(principal.characters + "?page=" + page)
                .then(response => response.json())
                .then(data => {//tratar aqui
                    console.log(data);
                    // const obj = JSON.parse(data.results);
                    this.document.getElementById("cartao").innerHTML = "";
                    data.results.forEach(element => {
                        this.document.getElementById("cartao").innerHTML += " <div class='card col-sm-3 bordas' style='width: 18rem;'> <img class='card-img-top' src='" + element.image + "' alt='Card image cap'> <div class='card-body'> <h5 class='card-title'>" + element.name + "</h5> </div><ul class='list-group list-group-flush'> <li class='list-group-item'>" + element.origin.name + "</li><li class='list-group-item'>" + element.species + "</li><li class='list-group-item'>" + element.status + "</li><li class='list-group-item'>" + element.location.name + "</li><li class='list-group-item'>" + element.created + "</li><li class='list-group-item'>" + element.type + "</li></ul> </div>"

                    });
                    if (page == 1) {
                        this.document.getElementById("cartao").innerHTML += "<nav aria-label='Navegação de página exemplo'><ul class='pagination justify-content-center'><li class='page-item'> <a class='page-link' href='#' onclick='pegarCartao(" + (page + 1) + ")'>Próximo</a></li></ul> </nav>";
                    } else {
                        this.document.getElementById("cartao").innerHTML += "<nav aria-label='Navegação de página exemplo'><ul class='pagination justify-content-center'><li class='page-item '> <a class='page-link' href='#' onclick='pegarCartao(" + (page - 1) + ")'>Anterior</a></li><li class='page-item'> <a class='page-link' href='#' onclick='pegarCartao(" + (page + 1) + ")'>Próximo</a></li></ul> </nav>";

                    } // this.document.getElementById("cartao").innerHTML = " <div class='card' style='width: 18rem;'> <img class='card-img-top' src='image' alt='Card image cap'> <div class='card-body'> <h5 class='card-title'>name</h5> </div><ul class='list-group list-group-flush'> <li class='list-group-item'>origin.name</li><li class='list-group-item'>species</li><li class='list-group-item'>status</li><li class='list-group-item'>location.name</li><li class='list-group-item'>created</li><li class='list-group-item'>type</li></ul> </div>"

                })
                .catch(err => console.log(err));


        })
        .catch(err => console.log(err));
}
