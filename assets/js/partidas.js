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

            let myDate = element.date.split("T");
            let myYear = myDate[0].split("-")[0];
            let myMonth = myDate[0].split("-")[1];
            let myDay = myDate[0].split("-")[2];
            let myTime = myDate[1].split(":")[0];
            myTime = parseInt(myTime) - 3;

            let time1 = translateFlag[element.homeTeam.name];
            let time2 = translateFlag[element.awayTeam.name];

            $("#container").append(`
                <div class="col-md-4">

                    <div class="card mb-3 text-center ${status}">
                        <div class="card-header">
                        <img class="logoQatar" src="./assets/img/${element.homeTeam.name.toLowerCase()}.svg" alt="Bandeira do ${element.homeTeam.name}" width="20px">
                            ${time1}: <span class="badge badge-light">${element.homeTeam.goals}</span> 
                            x
                        <img class="logoQatar" src="./assets/img/${element.awayTeam.name.toLowerCase()}.svg" alt="Bandeira do ${element.awayTeam.name}" width="20px">
                            ${time2}: <span class="badge badge-light">${element.awayTeam.goals}</span>
                        </div>
                        <ul class="list-group list-group-flush">
                            ${myDay}/${myMonth}/${myYear} as ${myTime}:00
                        </ul>
                    </div>

                </div>
            `);
        }
    });
}

carregaPartidas();