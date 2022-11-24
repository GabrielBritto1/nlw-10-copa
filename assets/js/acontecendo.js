checkingGame()

// setInterval(() => {
//     checkingGame()
// }, 3000);

function checkingGame() {

    $.when($.ajax("https://worldcupjson.net/matches/current")).then(function (data) {
        const element = data;

        if (element.length > 0) {
            $("#container").html("");

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
                                    <img class="logoQatar" src="./assets/img/flags/${element.home_team.name.toLowerCase()}.svg"
                                        alt="Bandeira do ${element.home_team.name}" width="40px" style="margin-right: 15px">
                                    <span class="badge badge-light" style="font-size: 15px;">${element.home_team.goals}</span>
                                    x
                                    <span class="badge badge-light" style="font-size: 15px;">${element.away_team.goals}</span>
                                    <img class="logoQatar" src="./assets/img/flags/${element.away_team.name.toLowerCase()}.svg"
                                        alt="Bandeira do ${element.away_team.name}" width="40px" style="margin-left: 15px">
                                </p>
                            </div>

                            <div class="card-footer text-muted">
                                <div class="spinner-grow text-warning" role="status">
                                <span class="sr-only">Progresso da partida</span>
                            </div>
                        </div>
                    </div>
                </div>
                `
            )
        } else {

        }
    });

}

