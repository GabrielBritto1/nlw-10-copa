// LISTAGEM DE PARTIDAS
$.when($.ajax("https://copa22.medeiro.tech/matches")).then(function (data) {
    let status = ``;
    let dia = ``;

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        status = ``;
        dia = ``;

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

        $("#container").append(`
                <div class="col-md-4">

                    <div class="card mb-3 text-center ${status}">
                        <div class="card-header">
                            ${element.homeTeam.name}: <span class="badge badge-light">${element.homeTeam.goals}</span> 
                            x 
                            ${element.awayTeam.name}: <span class="badge badge-light">${element.awayTeam.goals}</span>
                        </div>
                        <ul class="list-group list-group-flush">
                            ${myDay}/${myMonth}/${myYear} as ${myTime}:00
                        </ul>
                    </div>

                </div>
            `);
    }
});
