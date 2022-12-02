$(document).ready(function () {

    // LISTAGEM DE GRUPOS
    $.when($.ajax("https://worldcupjson.net/teams")).then(function (data) {
        let times = ``;
        let class_tr = ``;
        for (let index = 0; index < data.groups.length; index++) {
            const element = data.groups[index];

            times = ``;
            for (let index2 = 0; index2 < element.teams.length; index2++) {
                const element2 = element.teams[index2];

                class_tr = ``
                if (index2 == 0 || index2 == 1) {
                    class_tr = ``
                }

                times += ` 
                    <tr class="${class_tr}">
                        <td class="text-left"><img class="img img-country" style="cursor:pointer;" data-traduzido="${translateCountry[element2.country]}" data-bandeira="${element2.name.toLowerCase()}" data-sigla="${element2.country}" src="./assets/img/flags/${element2.name.toLowerCase()}.svg" alt="Bandeira do ${element2.name}" width="20px"> &nbsp; ${element2.country}</td>
                        <td>${element2.group_points}</td>
                        <td class="d-none">${element2.wins}</td>
                        <td class="d-none">${element2.draws}</td>
                        <td class="d-none">${element2.losses}</td>
                        <td>${element2.games_played}</td>
                        <td class="d-none">${element2.goals_for}</td>
                        <td class="d-none">${element2.goals_against}</td>
                        <td>${element2.goal_differential}</td>
                    </tr>
                    `
            }

            $("#container").append(`
                    <div class="col-md-12">

                        <div class="card mb-3">
                            <div class="table-responsive">
                                <table class="table" id="table-${index}">
                                    <thead>
                                        <tr>
                                            <th><span class="badge badge-secondary">Grupo ${element.letter}</span></th>
                                            <th>PT</th>
                                            <th class="d-none">V</th>
                                            <th class="d-none">E</th>
                                            <th class="d-none">D</th>
                                            <th>J</th>
                                            <th class="d-none">GP</th>
                                            <th class="d-none">GC</th>
                                            <th>SG</th>
                                        </tr>
                                    </thead>
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

    setTimeout(() => {
        $('#table-0').DataTable({ searching: false, paging: false, info: false, order: [[1, 'desc'], [8, 'desc']] });
        $('#table-1').DataTable({ searching: false, paging: false, info: false, order: [[1, 'desc'], [8, 'desc']] });
        $('#table-2').DataTable({ searching: false, paging: false, info: false, order: [[1, 'desc'], [8, 'desc']] });
        $('#table-3').DataTable({ searching: false, paging: false, info: false, order: [[1, 'desc'], [8, 'desc']] });
        $('#table-4').DataTable({ searching: false, paging: false, info: false, order: [[1, 'desc'], [8, 'desc']] });
        $('#table-5').DataTable({ searching: false, paging: false, info: false, order: [[1, 'desc'], [8, 'desc']] });
        $('#table-6').DataTable({ searching: false, paging: false, info: false, order: [[1, 'desc'], [8, 'desc']] });
        $('#table-7').DataTable({ searching: false, paging: false, info: false, order: [[1, 'desc'], [8, 'desc']] });
    }, 500);

});