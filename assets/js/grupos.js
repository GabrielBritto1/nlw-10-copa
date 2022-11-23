// LISTAGEM DE GRUPOS

$.when($.ajax("https://copa22.medeiro.tech/groups")).then(function (data) {
    let times = ``;
    let class_tr = ``;
    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        times = ``;
        for (let index2 = 0; index2 < element.teams.length; index2++) {
            const element2 = element.teams[index2];

            class_tr = ``
            if(index2 == 0 || index2 == 1) {
                class_tr = `bg-success`
            }
            
            times += ` 
                <tr class="${class_tr}">
                    <td class="text-left"><img class="img" src="./assets/img/flags/${element2.alternateName.toLowerCase()}.svg" alt="Bandeira do ${element2.alternateName}" width="20px"></td>
                    <td class="text-left">${translateFlag[element2.alternateName]}</td>
                    <td class="text-right">${element2.points}</td>
                </tr>
                `
        }

        $("#container").append(`
                <div class="col-md-3">

                    <div class="card mb-3">
                        <div class="card-header">
                            Grupo ${element.code}
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover table-condensed table-striped">
                                <tbody>
                                    ${times}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            `)


    }


});