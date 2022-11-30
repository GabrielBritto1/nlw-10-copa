$(document).ready( function () {

    tempoReal()
    jogosDoDia()

    setInterval(() => {
        tempoReal()
    }, 3000);

    function tempoReal() {
        $.when($.ajax("https://worldcupjson.net/matches/current")).then(function (data) {

            $("#container").html("");

            if (data.length > 0) {

                let events = ``;
                let events2 = ``;
                for (let index = 0; index < data.length; index++) {
                    const element = data[index];

                    // zerando variáveis para próxima iteração
                    events = ``;
                    events2 = ``;

                    // buscando os acontecimentos do time 1 para exibir na tela
                    events = montaIcones(element.home_team_events);

                    // buscando os acontecimentos do time 2 para exibir na tela
                    events2 = montaIcones(element.away_team_events);

                    $("#container").append(`
                        <div class="col-md-12 mb-3">
                            <div class="card text-center">
                                <div class="card-header">
                                    ${translateFlag[element.home_team.name].toUpperCase()} 
                                    X
                                    ${translateFlag[element.away_team.name].toUpperCase()}
                                </div>
                                    
                                <div class="card-body">
                                    <p class="card-text">
                                        <img class="logoQatar" src="./assets/img/flags/${element.home_team.name.toLowerCase()}.svg" alt="Bandeira do ${element.home_team.name}" width="40px" style="margin-right: 15px">
                                        <span class="badge badge-light" style="font-size: 15px;">${element.home_team.goals}</span>
                                        x
                                        <span class="badge badge-light" style="font-size: 15px;">${element.away_team.goals}</span>
                                        <img class="logoQatar" src="./assets/img/flags/${element.away_team.name.toLowerCase()}.svg" alt="Bandeira do ${element.away_team.name}" width="40px" style="margin-left: 15px">
                                    </p>
                                </div>
        
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12">   
                                            <ul class="info list-group list-group-flush">
                                            ${events}
                                            </ul>
                                        </div>
                                        <div class="col-md-6 col-sm-12">   
                                            <ul class="info list-group list-group-flush">
                                                ${events2}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="card-footer text-muted">
                                    <div class="spinner-grow text-warning" role="status">
                                    <span class="sr-only">Progresso da partida</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    `)
                }


            } else {

                $("#container").append(`
                    <div class="col-md-12">
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            Putz, nenhuma partida ocorrendo no momento :(
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                `)
            }


        });
    }

    $("#date-game").on('change', function () {
        let dataRecebida = $("#date-game").val();
        jogosDoDia(dataRecebida);
    });

    function jogosDoDia(selectDate) {

        $.when($.ajax(`https://worldcupjson.net/matches?start_date=${selectDate}&details=true`)).then(function (data) {


            $("#container2").html("");

            // inicializando variáveis
            let status = ``;
            let events = ``;
            let events2 = ``;

            // iterando sob os dados retornados da API
            for (let index = 0; index < data.length; index++) {

                // armazenando dados em uma constante para ficar mais fácil de entender
                const element = data[index];

                // zerando variáveis para próxima iteração
                status = ``;
                events = ``;
                events2 = ``;

                // buscando os acontecimentos do time 1 para exibir na tela
                events = montaIcones(element.home_team_events);

                // buscando os acontecimentos do time 2 para exibir na tela
                events2 = montaIcones(element.away_team_events);
            

                // condicionais para mudar a cor do background caso o jogo esteja acontecendo agora
                if (element.status == "in_progress") {
                    status = `bg-warning`;
                }

                if (element.home_team.name != 'To Be Determined') {

                    let country1 = element.home_team.country;
                    let country2 = element.away_team.country;

                    let bandeiraPais1 = element.home_team.name.toLowerCase();
                    let bandeiraPais2 = element.away_team.name.toLowerCase();

                    let golsPais1 = element.home_team.goals == null ? 0 : element.home_team.goals;
                    let golsPais2 = element.away_team.goals == null ? 0 : element.away_team.goals;

                    let dataPartida = montaData(element.datetime);


                    let placar = `x`
                    if (element.status != 'future_scheduled') {
                        placar = `
                        <span class="badge badge-dark" style="font-size:15px; margin-left:10px; margin-right:10px">${golsPais1}</span> 
                        x
                        <span class="badge badge-dark" style="font-size:15px; margin-right:10px; margin-left:10px">${golsPais2}</span>
                    `
                    }

                    $("#container2").append(`
            
                    <div class="col-md-6 col-sm-12">
                        <div class="card text-center ${status} mb-4">
                            <div class="card-header">
                                <img class="img-country" data-sigla="${country1}" src="./assets/img/flags/${bandeiraPais1}.svg" width="30px" style="margin-right: 15px"> 
                                ${translateFlag[element.home_team.name].toUpperCase()}
                                ${placar}
                                ${translateFlag[element.away_team.name].toUpperCase()}
                                <img class="img-country" data-sigla="${country2}" src="./assets/img/flags/${bandeiraPais2}.svg" width="30px" style="margin-left: 15px">
                            </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12">   
                                            <ul class="info list-group list-group-flush">
                                            ${events}
                                            </ul>
                                        </div>
                                        <div class="col-md-6 col-sm-12">   
                                            <ul class="info list-group list-group-flush">
                                                ${events2}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                `);

                }
            }
        });
    }


    function montaIcones(data) {
        let events = ''
        // buscando os acontecimentos do time no jogo para exibir na tela
        for (let index2 = 0; index2 < data.length; index2++) {
            const element = data[index2];

            // verificando se o evento foi um gol para colocar o icone
            let iconEvent = element.type_of_event;
            if (element.type_of_event == 'goal') {
                iconEvent = '<i class="fa-regular fa-futbol"></i>';
            } else if (element.type_of_event == 'substitution') {
                iconEvent = '<i class="fa-solid fa-arrow-right-arrow-left"></i>';
            } else if (element.type_of_event == 'booking') {
                iconEvent = '<i class="fa-regular fa-square-full"></i>';
            }

            events += `<li class="list-group-item">${iconEvent} &nbsp; ${element.player} aos ${element.time}</li>`
        }

        return events
    }

    // pego o click na imagem do país
    $("#container2").on("click", ".img-country", function(){
        
        // pego o atributo que armazenei no elemento <img>
        let sigla = $(this).data('sigla');
        
        // salvo o storage do js a sigla do país para usar na outra pagina
        localStorage.setItem('country_sigla', sigla);
        
        // para pegar a url atual, uso o split e concateno com o caminho que quero
        let url = window.location.href.split('copa/')
        
        // monto a url e redireciono
        window.location.href = url[0]+"copa/times.html";
    })

});