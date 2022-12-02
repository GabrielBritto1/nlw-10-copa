$(document).ready( function () {

    // LISTAGEM DE PARTIDAS

    // consulta ajax ao endpoint
    $.when($.ajax("https://worldcupjson.net/matches")).then(function (data) {

        console.log(localStorage.getItem('country_sigla'));

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

            // <div data-anijs="if: mouseover, do: rubberBand animated" class="col-md-6 col-sm-12">
            $("#container").append(`
            
                <div class="col-md-6 col-sm-12">
                    <div class="card text-center ${status} mb-4">
                        <div class="card-header">
                        <img data-toggle="tooltip" class="img-country" data-sigla="${pais1}" data-placement="bottom" title="${traduzido1.toUpperCase()}" src="./assets/img/flags/${bandeiraPais1}.svg" width="30px" style="margin-right: 15px"> 
                        ${pais1} 
                        ${placar}
                        ${pais2} 
                        <img data-toggle="tooltip" class="img-country" data-sigla="${pais2}" data-placement="bottom" title="${traduzido2.toUpperCase()}" src="./assets/img/flags/${bandeiraPais2}.svg" width="30px" style="margin-left: 15px">
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


    // pego o click na imagem do país
    $("#container").on("click", ".img-country", function(){
        
        // pego o atributo que armazenei no elemento <img>
        let sigla = $(this).data('sigla');
        
        // salvo o storage do js a sigla do país para usar na outra pagina
        localStorage.setItem('country_sigla', sigla);
        
        // para pegar a url atual, uso o split e concateno com o caminho que quero
        let url = window.location.href.split('/partidas')
        
        // monto a url e redireciono
        window.location.href = url[0]+"/times.html";
    })

});