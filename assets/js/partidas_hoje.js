// consulta ajax ao endpoint
$.when($.ajax("https://worldcupjson.net/matches/today")).then(function (data) {
    console.log(data)

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let status = ``;

        // condicionais para mudar a cor do background
        if (element.status == "in_progress") {
            status = `bg-warning`;
        }

        if (element.home_team.name != 'To Be Determined') {

            let pais1 = element.home_team.name.toUpperCase();
            let pais2 = element.away_team.name.toUpperCase();

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

            $("#container").append(`
        
                <div class="col-md-6 col-sm-12">
                    <div class="card text-center ${status} mb-4">
                        <div class="card-header">
                            <img class="logoQatar" src="./assets/img/flags/${bandeiraPais1}.svg" width="30px" style="margin-right: 15px"> 
                            ${pais1}
                            ${placar}
                            ${pais2} 
                            <img class="logoQatar" src="./assets/img/flags/${bandeiraPais2}.svg" width="30px" style="margin-left: 15px">
                        </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6 col-sm-12">   
                                        <ul class="info list-group list-group-flush">
                                            <li class="list-group-item"></li>
                                            <li class="list-group-item"></li>
                                            <li class="list-group-item"></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6 col-sm-12">   
                                        <ul class="info list-group list-group-flush">
                                            <li class="list-group-item"></li>
                                            <li class="list-group-item"></li>
                                            <li class="list-group-item"></li>
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