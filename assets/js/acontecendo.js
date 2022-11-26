checkingGame()
montaJogos()

setInterval(() => {
    checkingGame()
}, 3000);

function checkingGame() {
    $.when($.ajax("https://worldcupjson.net/matches/current")).then(function (data) {

        $("#container").html("");

        if (data.length > 0) {

            let events = ``;
            let events2 = ``;
            for (let index = 0; index < data.length; index++) {
                const element = data[index];

                events = ``;
                for (let index2 = 0; index2 < element.home_team_events.length; index2++) {
                    const evento1 = element.home_team_events[index2];

                    events += ` 
                            <li class="list-group-item">${translateEvents[evento1.type_of_event].toUpperCase()} : ${evento1.player} aos ${evento1.time}</li>
                            `
                }

                events2 = ``;
                for (let index3 = 0; index3 < element.away_team_events.length; index3++) {
                    const evento2 = element.away_team_events[index3];

                    events2 += ` 
                        <li class="list-group-item">${translateEvents[evento2.type_of_event].toUpperCase()}: ${evento2.player} aos ${evento2.time}</li>
                    `
                }
                
                $("#container").append(`
                    <div class="col-md-12">
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
    montaJogos(dataRecebida);
});

function montaJogos(selectDate) {

    $.when($.ajax(`https://worldcupjson.net/matches?start_date=${selectDate}&details=true`)).then(function (data) {


        $("#container2").html("");

        let status = ``;
        let events = ``;
        let events2 = ``;
        for (let index = 0; index < data.length; index++) {
            const element = data[index];

            events = ``;
            for (let index2 = 0; index2 < element.home_team_events.length; index2++) {
                const element2 = element.home_team_events[index2];

                if (element2.type_of_event == 'goal') {

                    let iconGol = '<i class="fa-regular fa-futbol"></i>';

                    events += ` 
                    <li class="list-group-item">${iconGol} : ${element2.player} aos ${element2.time}</li>
                    `
                }

                events2 = ``;
                for (let index3 = 0; index3 < element.away_team_events.length; index3++) {
                    const element3 = element.away_team_events[index3];
                    if (element3.type_of_event == 'goal') {

                        let iconGol = '<i class="fa-regular fa-futbol"></i>';

                        events2 += ` 
                            <li class="list-group-item">${iconGol} : ${element3.player} aos ${element3.time}</li>
                            `
                    }
                }
            }
            // condicionais para mudar a cor do background
            if (element.status == "in_progress") {
                status = `bg-warning`;
            }

            if (element.home_team.name != 'To Be Determined') {

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
                            <img class="logoQatar" src="./assets/img/flags/${bandeiraPais1}.svg" width="30px" style="margin-right: 15px"> 
                            ${translateFlag[element.home_team.name].toUpperCase()}
                            ${placar}
                            ${translateFlag[element.away_team.name].toUpperCase()}
                            <img class="logoQatar" src="./assets/img/flags/${bandeiraPais2}.svg" width="30px" style="margin-left: 15px">
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