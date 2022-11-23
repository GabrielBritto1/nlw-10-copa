checkingGame()

setInterval(() => {
    checkingGame()
}, 3000);

function checkingGame() {

    $.when($.ajax("https://copa22.medeiro.tech/matches/current")).then(function (data) {
        const element = data;

        $("#container").html("");

        $("#container").append(`
            <div class="col-md-12">
                <div class="card text-center">
                    <div class="card-header">
                        ${translateFlag[element.homeTeam.name].toUpperCase()} 
                        X
                        ${translateFlag[element.awayTeam.name].toUpperCase()}
                        </div>
                        
                        <div class="card-body">
                            <p class="card-text">
                                <img class="logoQatar" src="./assets/img/flags/${element.homeTeam.name.toLowerCase()}.svg"
                                    alt="Bandeira do ${element.homeTeam.name}" width="40px" style="margin-right: 15px">
                                <span class="badge badge-light" style="font-size: 15px;">${element.homeTeam.goals}</span>
                                x
                                <span class="badge badge-light" style="font-size: 15px;">${element.awayTeam.goals}</span>
                                <img class="logoQatar" src="./assets/img/flags/${element.awayTeam.name.toLowerCase()}.svg"
                                    alt="Bandeira do ${element.awayTeam.name}" width="40px" style="margin-left: 15px">
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
    });

}

