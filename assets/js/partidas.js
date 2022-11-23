// LISTAGEM DE PARTIDAS

//criando função
function carregaPartidas() {

    // consulta ajax no endpoint
    $.when($.ajax("https://copa22.medeiro.tech/matches")).then(function (data) {

        // iterando o resultado obtido através da api
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            let status = ``;

            // condicionais para mudar a cor do background
            if (element.status == "completed") {
                status = `bg-primary`;
            } else if (element.status == "in_progress") {
                status = `bg-warning`;
            }

            if(element.homeTeam){
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
        }
    });
}

carregaPartidas();