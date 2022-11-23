// LISTAGEM DE PARTIDAS
$.when($.ajax("https://copa22.medeiro.tech/matches/today")).then(function (data) {
    let status = ``;
    let dia = ``;

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        status = ``;
        dia = ``;

        if (element.status == "completed") {
            status = `bg-success`;
        } else if (element.status == "in_progress") {
            status = `bg-warning`;
        }

        $("#container").append(
            montaPartida(
                status,
                element.homeTeam.name,
                element.awayTeam.name,
                element.homeTeam.goals,
                element.awayTeam.goals,
                montaData(element.date)
            )
        );
    }
});