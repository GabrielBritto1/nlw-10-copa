$(document).ready(function () {

    $(".container").append(`
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="container-modal">
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                </div>
                </div>
            </div>
        </div>
    `)

    // pego o click na imagem do pa�s
    $("#container, #container2").on("click", ".img-country", function () {

        let sigla = $(this).data('sigla');

        let bandeira = $(this).data('bandeira');

        let traduzido = $(this).data('traduzido');

        $.when($.ajax(`https://worldcupjson.net/matches/country/${sigla}?details=true`)).then(function (data) {
            $("#container-modal").html("")
            resumoPais(data)
            $("#exampleModalLabel").html(`
                <img src="./assets/img/flags/${bandeira}.svg" width="30px" style="margin-right: 15px"> Resumo sobre ${traduzido}
            `)
            $("#exampleModal").modal('show');
        });

    })

    function resumoPais(data) {

        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            let status = ``;

            if (element.status == "in_progress") {
                status = `bg-warning`;
            }

            if(element.home_team.name == 'To Be Determined')
                continue

            let pais1 = element.home_team.country.toUpperCase();
            let pais2 = element.away_team.country.toUpperCase();

            let bandeiraPais1 = element.home_team.name.toLowerCase();
            let bandeiraPais2 = element.away_team.name.toLowerCase();

            let golsPais1 = element.home_team.goals == null ? 0 : element.home_team.goals;
            let golsPais2 = element.away_team.goals == null ? 0 : element.away_team.goals;

            let traduzido1 = translateFlag[element.home_team.name].toUpperCase();
            let traduzido2 = translateFlag[element.away_team.name].toUpperCase();

            let dataPartida = montaData(element.datetime);

            let placar = `x`
            if (element.status != 'future_scheduled') {
                placar = `
                    <span class="badge badge-dark" style="font-size:15px; margin-left:10px; margin-right:10px">${golsPais1}</span> 
                    x
                    <span class="badge badge-dark" style="font-size:15px; margin-right:10px; margin-left:10px">${golsPais2}</span>
                `
            }

            let estagios_common = {
                'First stage':'Fase de grupos',
                'Round of 16':'Oitavas de final',
                'Quarter-final':'Quartas de Final',
                'Semi-final':'Semifinal',
                'Play-off for third place':'Disputa do terceiro lugar',
                'Final':'Final'
            }

            $("#container-modal").append(`
            
                <div class="col-md-12">
                    <div class="card text-center ${status} mb-4">
                        <div class="card-header">
                        <img data-toggle="tooltip" class="img-country" data-traduzido="${traduzido1}" data-sigla="${pais1}" data-bandeira="${bandeiraPais1}" data-placement="bottom" title="${traduzido1.toUpperCase()}" src="./assets/img/flags/${bandeiraPais1}.svg" width="30px" style="margin-right: 15px"> 
                        ${pais1} 
                        ${placar}
                        ${pais2} 
                        <img data-toggle="tooltip" class="img-country" data-traduzido="${traduzido2}" data-sigla="${pais2}" data-bandeira="${bandeiraPais2}" data-placement="bottom" title="${traduzido2.toUpperCase()}" src="./assets/img/flags/${bandeiraPais2}.svg" width="30px" style="margin-left: 15px">
                        </div>

                        <div>
                            ${dataPartida}
                        </div>
                        <div>
                            ${estagios_common[element.stage_name]}
                        </div>

                    </div>
                </div>
            `);

        }

    }

});

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
                    <a class="nav-link" href="./partidas.html">Partidas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./grupos.html">Grupos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./times.html">Times</a>
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

    const translateCountry = {
        'QAT': 'Catar',
        'ECU': 'Equador',
        'ENG': 'Inglaterra',
        'IRN': 'Irã',
        'SEN': 'Senegal',
        'NED': 'Holanda',
        'USA': 'Estados Unidos',
        'WAL': 'Gales',
        'ARG': 'Argentina',
        'KSA': 'Arabia Saudita',
        'DEN': 'Dinamarca',
        'TUN': 'Tunisia',
        'MEX': 'México',
        'POL': 'Polonia',
        'FRA': 'França',
        'AUS': 'Austrália',
        'MAR': 'Marrocos',
        'CRO': 'Croácia',
        'GER': 'Alemanha',
        'JPN': 'Japão',
        'ESP': 'Espanha',
        'CRC': 'Costa Rica',
        'BEL': 'Bélgica',
        'CAN': 'Canadá',
        'SUI': 'Suiça',
        'CMR': 'Camarões',
        'URU': 'Uruguai',
        'KOR': 'Coreia do Sul',
        'POR': 'Portugal',
        'GHA': 'Gana',
        'BRA': 'Brasil',
        'SRB': 'Sérvia',
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

