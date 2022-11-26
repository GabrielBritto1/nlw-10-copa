$("#nav").html(`
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <a class="navbar-brand" href="./acontecendo.html"><img src="./assets/img/logo.png" alt="Logo Copa 2022" width="100px"></a>
        <button class=" navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="./partidas.html">Partidas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./grupos.html">Grupos</a>
                </li>
            </ul>
        </div>
    </nav>
`)

const translateFlag = {
    'Argentina': 'Argentina',
    'Australia': 'Austrália',
    'Belgium': 'Bélgica',
    'Brazil': 'Brasil',
    'Cameroon': 'Camarões',
    'Canada': 'Canadá',
    'Costa Rica': 'Costa Rica',
    'Croatia': 'Croácia',
    'Denmark': 'Dinamarca',
    'Ecuador': 'Equador',
    'England': 'Inglaterra',
    'France': 'França',
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
    'Serbia': 'Sérvia',
    'Spain': 'Espanha',
    'Switzerland': 'Suiça',
    'Tunisia': 'Tunisia',
    'Uruguay': 'Uruguai',
    'United States': 'Estados Unidos',
    'Wales': 'Gales',
}

const translateEvents = {
    'goal': 'Gol',
    'substitution': 'Substituição',
    'booking': 'Reserva',
}

// function montaPartida(status, time1, time2, gols1, gols2, dataFormatada) {
//     return `
//         <div class="col-md-6">
//             <div class="card text-center ${status} mb-4">
//                 <div class="card-header">
//                     <img class="logoQatar" src="./assets/img/flags/${time1.toLowerCase()}.svg" alt="Bandeira do ${time1}" width="30px" style="margin-right: 15px"> 
//                     ${translateFlag[time1].toUpperCase()} 
//                     <span class="badge badge-light" style="font-size:15px; margin-left:10px; margin-right:10px">${gols1}</span> 
//                     X
//                     <span class="badge badge-light" style="font-size:15px; margin-right:10px; margin-left:10px">${gols2}</span> 
//                     ${translateFlag[time2].toUpperCase()} 
//                     <img class="logoQatar" src="./assets/img/flags/${time2.toLowerCase()}.svg" alt="Bandeira do ${time2}" width="30px" style="margin-left: 15px">
//                 </div>
//                     <div class="card-footer" style="padding:0px">
//                         <ul class="list-group list-group-flush">
//                             ${dataFormatada}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `
// }

function montaData(date) {

    let myDate = date.split("T");
    let myYear = myDate[0].split("-")[0];
    let myMonth = myDate[0].split("-")[1];
    let myDay = myDate[0].split("-")[2];
    let myTime = myDate[1].split(":")[0];
    myTime = parseInt(myTime) - 3;
    return `${myDay}/${myMonth}/${myYear} às ${myTime}:00`
}