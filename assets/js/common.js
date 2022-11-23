$("#nav").html(`
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <a class="navbar-brand" href="./index.html"><img src="./assets/img/logo.png" alt="Logo Copa 2022" width="100px"></a>
        <button class=" navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="./partidas_hoje.html">Partidas Hoje</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="./partidas.html">Partidas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./grupos.html">Grupos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./acontecendo.html">Acontecendo</a>
                </li>
            </ul>
        </div>
    </nav>
`)

const translateFlag = {
    'Argentina': 'Argentina',
    'Australia': 'Australia',
    'Belgium': 'Belgica',
    'Brazil': 'Brasil',
    'Cameroon': 'Camaroes',
    'Canada': 'Canada',
    'Costa Rica': 'Costa Rica',
    'Croatia': 'Croacia',
    'Denmark': 'Dinamarca',
    'Ecuador': 'Equador',
    'England': 'Inglaterra',
    'France': 'Franca',
    'Germany': 'Alemanha',
    'Ghana': 'Gana',
    'Iran': 'Irã',
    'Japan': 'Japão',
    'Korea Republic': 'Coreia do Sul',
    'Mexico': 'México',
    'Morocco': 'Marrocos',
    'Netherlands': 'Holanda',
    'Poland': 'Polonia',
    'Portugal': 'Portugal',
    'Qatar': 'Catar',
    'Saudi Arabia': 'Arabia Saudita',
    'Senegal': 'Senegal',
    'Serbia': 'Servia',
    'Spain': 'Espanha',
    'Switzerland': 'Suiça',
    'Tunisia': 'Tunisia',
    'Uruguay': 'Uruguai',
    'USA': 'EUA',
    'Wales': 'Gales',
}

function montaPartida(status, time1, time2, gols1, gols2, dataFormatada) {
    return `
        <div class="col-md-4">
            <div class="card mb-3 text-center ${status}">
                <div class="card-header">
                    <img class="logoQatar" src="./assets/img/flags/${time1.toLowerCase()}.svg" alt="Bandeira do ${time1}" width="20px"> 
                    ${translateFlag[time1]} 
                    <span class="badge badge-light">${gols1}</span> 
                    x
                    <span class="badge badge-light">${gols2}</span> 
                    ${translateFlag[time2]} 
                    <img class="logoQatar" src="./assets/img/flags/${time2.toLowerCase()}.svg" alt="Bandeira do ${time2}" width="20px">
                </div>
                <ul class="list-group list-group-flush">
                    ${dataFormatada}
                </ul>
            </div>
        </div>
        `
}

function montaData(date) {

    let myDate = date.split("T");
    let myYear = myDate[0].split("-")[0];
    let myMonth = myDate[0].split("-")[1];
    let myDay = myDate[0].split("-")[2];
    let myTime = myDate[1].split(":")[0];
    myTime = parseInt(myTime) - 3;
    return `${myDay}/${myMonth}/${myYear} as ${myTime}:00`
}