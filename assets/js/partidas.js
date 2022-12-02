$(document).ready(function () {

    $("#container").append('<div class="col-md-12 mb-3"><button id="exibir-fase-grupos" class="btn btn-secondary btn-block">Exibir Fase de Grupos</button></div>')

    // LISTAGEM DE PARTIDAS

    // consulta ajax ao endpoint
    $.when($.ajax("https://worldcupjson.net/matches")).then(function (data) {

        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            let status = ``;

            // simular partida em progresso
            // if (index == 12) {
            //     element.status = "in_progress"
            // }

            // condicionais para mudar a cor do background
            if (element.status == "in_progress") {
                status = `bg-warning`;
            }

            if(element.home_team.name == 'To Be Determined')
                continue

            let pais1 = element.home_team.country.toUpperCase();
            let pais2 = element.away_team.country.toUpperCase();

            let bandeiraPais1 = element.home_team.name.toLowerCase();
            let bandeiraPais2 = element.away_team.name.toLowerCase();

            let golsPais1 = element.home_team.goals == null ? 0 : element.home_team.goals;
            let golsPais2 = element.away_team.goals == null ? 0 : element.away_team.goals;

            let traduzido1 = translateFlag[element.home_team.name].toUpperCase();
            let traduzido2 = translateFlag[element.away_team.name].toUpperCase();

            let dataPartida = montaData(element.datetime);

            let placar = `x`
            if (element.status != 'future_scheduled') {
                placar = `
                    <span class="badge badge-dark" style="font-size:15px; margin-left:10px; margin-right:10px">${golsPais1}</span> 
                    x
                    <span class="badge badge-dark" style="font-size:15px; margin-right:10px; margin-left:10px">${golsPais2}</span>
                `
            }

            let estagios = {
                'First stage':'Fase de grupos',
                'Round of 16':'Oitavas de final',
                'Semi-final':'Semifinal',
                'Play-off for third place':'Disputa do terceiro lugar',
                'Final':'Final'
            }
            
            let estagios_class = {
                'First stage':'fase-grupos',
                'Round of 16':'oitavas-final',
                'Semi-final':'semifinal',
                'Play-off for third place':'terceiro-lugar',
                'Final':'final'
            }
            
            let estagios_style = {
                'First stage':'style="display:none"',
                // 'Round of 16':'oitavas-final',
                // 'Semi-final':'semifinal',
                // 'Play-off for third place':'terceiro-lugar',
                // 'Final':'final'
            }

            // <div data-anijs="if: mouseover, do: rubberBand animated" class="col-md-6 col-sm-12">
            $("#container").append(`
            
                <div class="col-md-6 col-sm-12 ${estagios_class[element.stage_name]}" ${estagios_style[element.stage_name]}>
                    <div class="card text-center ${status} mb-4">
                        <div class="card-header">
                        <img data-toggle="tooltip" class="img-country" data-traduzido="${translateCountry[pais1]}" data-sigla="${pais1}" data-bandeira="${bandeiraPais1}" data-placement="bottom" title="${traduzido1.toUpperCase()}" src="./assets/img/flags/${bandeiraPais1}.svg" width="30px" style="margin-right: 15px"> 
                        ${pais1} 
                        ${placar}
                        ${pais2} 
                        <img data-toggle="tooltip" class="img-country" data-traduzido="${translateCountry[pais2]}" data-sigla="${pais2}" data-bandeira="${bandeiraPais2}" data-placement="bottom" title="${traduzido2.toUpperCase()}" src="./assets/img/flags/${bandeiraPais2}.svg" width="30px" style="margin-left: 15px">
                        </div>

                        <div>
                            ${dataPartida}
                        </div>
                        <div>
                            ${estagios[element.stage_name]}
                        </div>

                    </div>
                </div>
            `);

            AniJS.run();

        }
    });


    // pego o click na imagem do pa�s
    $("#container").on("click", ".img-country", function () {

        let sigla = $(this).data('sigla');

        let bandeira = $(this).data('bandeira');

        let traduzido = $(this).data('traduzido');

        $.when($.ajax(`https://worldcupjson.net/matches/country/${sigla}?details=true`)).then(function (data) {
            $("#container-modal").html("")
            resumoPais(data)
            $("#exampleModalLabel").html(`
                <img src="./assets/img/flags/${bandeira}.svg" width="30px" style="margin-right: 15px"> Resumo sobre ${traduzido}
            `)
            $("#exampleModal").modal('show');
        });

    })

    // pego o click na imagem do pa�s
    $("#container").on("click", "#exibir-fase-grupos", function () {

        if ($(".fase-grupos").is(':visible')) {
            $("#exibir-fase-grupos").html("Exibir Fase de Grupos")
            $("#exibir-fase-grupos").removeClass("btn-success")
            $("#exibir-fase-grupos").addClass("btn-secondary")
        } else {
            $("#exibir-fase-grupos").html("Esconder Fase de Grupos")
            $("#exibir-fase-grupos").removeClass("btn-secondary")
            $("#exibir-fase-grupos").addClass("btn-success")
        }

        $(".fase-grupos").toggle()
    })

    function resumoPais(data) {

        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            let status = ``;

            if (element.status == "in_progress") {
                status = `bg-warning`;
            }

            if(element.home_team.name == 'To Be Determined')
                continue

            let pais1 = element.home_team.country.toUpperCase();
            let pais2 = element.away_team.country.toUpperCase();

            let bandeiraPais1 = element.home_team.name.toLowerCase();
            let bandeiraPais2 = element.away_team.name.toLowerCase();

            let golsPais1 = element.home_team.goals == null ? 0 : element.home_team.goals;
            let golsPais2 = element.away_team.goals == null ? 0 : element.away_team.goals;

            let traduzido1 = translateFlag[element.home_team.name].toUpperCase();
            let traduzido2 = translateFlag[element.away_team.name].toUpperCase();

            let dataPartida = montaData(element.datetime);

            let placar = `x`
            if (element.status != 'future_scheduled') {
                placar = `
                    <span class="badge badge-dark" style="font-size:15px; margin-left:10px; margin-right:10px">${golsPais1}</span> 
                    x
                    <span class="badge badge-dark" style="font-size:15px; margin-right:10px; margin-left:10px">${golsPais2}</span>
                `
            }

            let estagios = {
                'First stage':'Fase de grupos',
                'Round of 16':'Oitavas de final',
                'Semi-final':'Semifinal',
                'Play-off for third place':'Disputa do terceiro lugar',
                'Final':'Final'
            }

            $("#container-modal").append(`
            
                <div class="col-md-12">
                    <div class="card text-center ${status} mb-4">
                        <div class="card-header">
                        <img data-toggle="tooltip" class="img-country" data-traduzido="${traduzido1}" data-sigla="${pais1}" data-bandeira="${bandeiraPais1}" data-placement="bottom" title="${traduzido1.toUpperCase()}" src="./assets/img/flags/${bandeiraPais1}.svg" width="30px" style="margin-right: 15px"> 
                        ${pais1} 
                        ${placar}
                        ${pais2} 
                        <img data-toggle="tooltip" class="img-country" data-traduzido="${traduzido2}" data-sigla="${pais2}" data-bandeira="${bandeiraPais2}" data-placement="bottom" title="${traduzido2.toUpperCase()}" src="./assets/img/flags/${bandeiraPais2}.svg" width="30px" style="margin-left: 15px">
                        </div>

                        <div>
                            ${dataPartida}
                        </div>
                        <div>
                            ${estagios[element.stage_name]}
                        </div>

                    </div>
                </div>
            `);

            AniJS.run();

        }

    }


});