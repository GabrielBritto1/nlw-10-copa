montaTime();

$("#search-team").on('change', function () {

    let selectedTeam = $("#search-team").val();
    montaTime(selectedTeam);
});

function montaTime(selectedTeam) {

    let storedTeam = localStorage.getItem('country_sigla');

    if(selectedTeam == undefined) {
        selectedTeam = storedTeam
        $("#search-team").val(selectedTeam.toLowerCase())
        $("#search-team").change()
    }

    $.when($.ajax(`https://worldcupjson.net/teams/${selectedTeam}`)).then(function (data) {
        const element = data;
        $("#container").html('');

        let timeContra = element.last_match.home_team;
        if (element.country == timeContra) {
            timeContra = element.last_match.away_team;
        }


        $("#container").append(`
                <div class="col-md-12">
                    <div class="card text-center mb-4">
                        <div class="card-header">
                            <img class="logoQatar" data-toggle="tooltip" data-placement="bottom" title="${element.name.toUpperCase()}" src="./assets/img/flags/${element.name.toLowerCase()}.svg" width="30px" style="margin-right: 15px">
                            ${translateFlag[element.name].toUpperCase()}
                        </div>

                        <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6 col-sm-12">   
                                        <ul class="info list-group list-group">
                                            <li class="list-group-item">VITÓRIAS: ${element.wins}</li>
                                            <li class="list-group-item">EMPATES: ${element.draws}</li>
                                            <li class="list-group-item">DERROTAS: ${element.losses}</li>
                                            <li class="list-group-item">JOGOS: ${element.games_played}</li>
                                            <li class="list-group-item">PONTOS: ${element.group_points}</li>
                                        </ul>

                                    </div>
                                    <div class="col-md-6 col-sm-12">   
                                    <ul class="info list-group list-group">
                                            <h5 class="list-group-item" style="color: #9b072e">ULTIMA PARTIDA:</h5>
                                            <li class="list-group-item">CONTRA: ${translateCountry[timeContra].toUpperCase()}</li>
                                            <li class="list-group-item">GOLS ${translateFlag[element.name].toUpperCase()}: ${element.last_match.home_team_score}</li>
                                            <li class="list-group-item">PÊNALTIS ${translateFlag[element.name].toUpperCase()}: ${element.last_match.home_team_penalties}</li>
                                            <li class="list-group-item">GOLS ${translateCountry[element.last_match.away_team].toUpperCase()}: ${element.last_match.away_team_score}</li>
                                            <li class="list-group-item">PÊNALTIS ${translateCountry[element.last_match.away_team].toUpperCase()}: ${element.last_match.away_team_penalties}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            `);
    });
}