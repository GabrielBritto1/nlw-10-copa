// LISTAGEM DE GRUPOS

$.when($.ajax("https://copa22.medeiro.tech/groups")).then(function (
    data, textStatus, jqXHR) {
    let times = ``;
    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        times = ``;
        for (let index2 = 0; index2 < element.teams.length; index2++) {
            const element2 = element.teams[index2];
            times += ` 
            <table class="table table-hover table-condensed">
                <tbody>
                    <tr>
                        <td><img class="logoQatar" src="/assets/img/${element2.alternateName.toLowerCase()}.svg" alt="Bandeira do ${element2.alternateName}" width="20px"></td>
                        <td class="text-center">${element2.alternateName.toUpperCase()}</td>
                        <td class="text-right">${element2.points}</td>
                    </tr>
                </tbody>
            </table>`
        }


        $("#container").append(`
                <div class="col-md-3">

                    <div class="card mb-3">
                        <div class="card-header">
                            Grupo ${element.code}
                        </div>
                        ${times}
                    </div>

                </div>
            `)


    }


});