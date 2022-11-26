checkingGame()

setInterval(() => {
    checkingGame()
}, 3000);

function checkingGame() {
    $.when($.ajax("https://worldcupjson.net/matches/current")).then(function (data) {

        $("#container").html("");

        if(data.length > 0){

            let events = ``;
            let events2 = ``;
            for (let index = 0; index < data.length; index++) {
                const element = data[index];

                events = ``;
                for (let index2 = 0; index2 < element.home_team_events.length; index2++) {
                    const element2 = element.home_team_events[index2];

                    events += ` 
                            <li class="list-group-item">${translateEvents[element2.type_of_event].toUpperCase()} : ${element2.player} aos ${element2.time}</li>
                            `

                    events2 = ``;
                    for (let index3 = 0; index3 < element.away_team_events.length; index3++) {
                        const element3 = element.away_team_events[index3];

                        events2 += ` 
                            <li class="list-group-item">${translateEvents[element3.type_of_event].toUpperCase()}: ${element3.player} aos ${element3.time}</li>
                        `
                    }
                }
            }

            $("#container").append(`
                <div class="col-md-12">
                    <div class="card text-center">
                        <div class="card-header">
                            ${translateFlag[element[0].home_team.name].toUpperCase()} 
                            X
                            ${translateFlag[element[0].away_team.name].toUpperCase()}
                        </div>
                            
                        <div class="card-body">
                            <p class="card-text">
                                <img class="logoQatar" src="./assets/img/flags/${element[0].home_team.name.toLowerCase()}.svg" alt="Bandeira do ${element[0].home_team.name}" width="40px" style="margin-right: 15px">
                                <span class="badge badge-light" style="font-size: 15px;">${element[0].home_team.goals}</span>
                                x
                                <span class="badge badge-light" style="font-size: 15px;">${element[0].away_team.goals}</span>
                                <img class="logoQatar" src="./assets/img/flags/${element[0].away_team.name.toLowerCase()}.svg" alt="Bandeira do ${element[0].away_team.name}" width="40px" style="margin-left: 15px">
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